#!/usr/bin/env python3
"""Copy the original portfolio, optionally replacing content without changing its engine."""
import argparse
import html
import json
from pathlib import Path
import re
import shutil
from urllib.parse import quote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
TEMPLATE = ROOT / 'assets' / 'template'
MARKER = '\nconst app ='


def esc(value):
    return html.escape(str(value), quote=True)


def replace_once(source, pattern, value):
    result, count = re.subn(pattern, lambda _: value, source, count=1, flags=re.S)
    if count != 1:
        raise ValueError(f'Template anchor missing: {pattern}')
    return result


def check_url(value, media=False):
    if not isinstance(value, str):
        raise ValueError('URLs must be strings')
    scheme = urlsplit(value).scheme.lower()
    if scheme not in ('', 'http', 'https', 'mailto') or (media and scheme == 'mailto'):
        raise ValueError(f'Unsupported URL scheme: {scheme}')
    if media and any(c in value for c in '\"\n\r'):
        raise ValueError('Use media paths without quotes or newlines')
    if not scheme and (value.startswith(('/', '\\')) or '..' in Path(value).parts):
        raise ValueError('Local URLs must stay inside the generated website')


def validate(data):
    if not isinstance(data, dict) or not isinstance(data.get('site', {}), dict):
        raise ValueError('Content must contain a site object and/or projects array')
    if 'projects' not in data:
        return
    if not isinstance(data['projects'], list) or not data['projects']:
        raise ValueError('At least one project is required')
    for project in data['projects']:
        for key in ('short', 'kicker', 'date', 'type', 'role', 'description', 'image'):
            if not isinstance(project.get(key), str):
                raise ValueError(f'Project {key} must be a string')
        for key in ('theme', 'bg'):
            if not re.fullmatch(r'#[0-9a-fA-F]{6}', project.get(key, '')):
                raise ValueError(f'{key} must be a six-digit hex color')
        colors = project.get('visual', [])
        if len(colors) != 3 or not all(re.fullmatch(r'#[0-9a-fA-F]{6}', c) for c in colors):
            raise ValueError('visual requires three six-digit hex colors')
        if not project.get('title') or not all(isinstance(t, str) for t in project['title']):
            raise ValueError('title requires a nonempty string array')
        if not project.get('frames') or not all(isinstance(f, list) and len(f) == 2 and all(isinstance(t, str) for t in f) for f in project['frames']):
            raise ValueError('frames requires at least one [label, description] pair')
        check_url(project['image'], media=True)
        check_url(project.get('url', ''))
        if project.get('videoSrc'):
            check_url(project['videoSrc'], media=True)
        if 'videoDuration' in project and (not isinstance(project['videoDuration'], (int, float)) or project['videoDuration'] <= 0):
            raise ValueError('videoDuration must be positive seconds')


def apply_site(source, site):
    if 'pageTitle' in site:
        source = replace_once(source, r'<title>.*?</title>', f'<title>{esc(site["pageTitle"])}</title>')
    if 'description' in site:
        source = replace_once(source, r'(<meta\s+name="description"\s+content=").*?("\s*>)', f'<meta name="description" content="{esc(site["description"])}">')
    if 'brand' in site:
        source = replace_once(source, r'(<a class="brand"[^>]*>).*?</a>', '<a class="brand" href="#" data-action="home" aria-label="Back to projects">' + esc(site['brand']) + '</a>')
    if 'initials' in site:
        svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#101111"/><text x="8" y="44" font-family="Arial" font-size="24" font-weight="700" fill="#c8d2c4">' + esc(site['initials']) + '</text></svg>'
        source = replace_once(source, r'<link rel="icon"[^>]*>', '<link rel="icon" href="data:image/svg+xml,' + quote(svg, safe='') + '">')
    if 'homeLines' in site:
        source = replace_once(source, r'<div class="home-meta">.*?</div>', '<div class="home-meta"><p>' + '<br>'.join(map(esc, site['homeLines'])) + '</p></div>')
    if 'social' in site:
        links = []
        for link in site['social']:
            check_url(link['url'])
            links.append(f'<a href="{esc(link["url"])}" target="_blank" rel="noreferrer">{esc(link["label"])}</a>')
        source = replace_once(source, r'<div class="home-social">.*?</div>', '<div class="home-social">' + '\n'.join(links) + '</div>')
    if 'aboutLabel' in site:
        source = replace_once(source, r'<aside id="about"[^>]*>', '<aside id="about" class="about-view" aria-hidden="true" aria-label="' + esc(site['aboutLabel']) + '">')
    if 'initials' in site or 'year' in site:
        source = replace_once(source, r'<div class="about-mark">.*?</div>', '<div class="about-mark">' + esc(site.get('initials', 'AX')) + '<br>' + esc(site.get('year', '2026')) + '</div>')
    if 'aboutText' in site:
        mark = re.search(r'<div class="about-mark">.*?</div>', source, re.S).group(0)
        source = replace_once(source, r'<div class="about-mark">.*?</div>\s*<p>.*?</p>', mark + '\n<p>' + esc(site['aboutText']) + '</p>')
    if 'aboutFacts' in site:
        facts = ''.join('<li><span>' + esc(f['label']) + '</span><b>' + esc(f['value']) + '</b></li>' for f in site['aboutFacts'])
        source = replace_once(source, r'<ul>.*?</ul>\s*</aside>', '<ul>' + facts + '</ul></aside>')
    return source


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, required=True, help='New website folder; must not exist')
    parser.add_argument('--content', type=Path, help='JSON based on assets/content.example.json')
    parser.add_argument('--media-dir', type=Path, help='Files copied into output/assets, preserving subfolders')
    args = parser.parse_args()
    output = args.output.resolve()
    if output.exists():
        parser.error('Output already exists; choose a new folder to avoid overwriting work')
    data = json.loads(args.content.read_text(encoding='utf-8')) if args.content else {}
    validate(data)
    page = apply_site((TEMPLATE / 'index.html').read_text(), data.get('site', {}))
    script = (TEMPLATE / 'script.js').read_text()
    if 'projects' in data:
        script = 'const projects = ' + json.dumps(data['projects'], ensure_ascii=False, indent=2, allow_nan=False) + ';\n' + MARKER + script.split(MARKER, 1)[1]
    if args.media_dir and not args.media_dir.is_dir():
        parser.error('--media-dir must be an existing folder')
    shutil.copytree(TEMPLATE, output)
    (output / 'index.html').write_text(page, encoding='utf-8')
    (output / 'script.js').write_text(script, encoding='utf-8')
    if args.media_dir:
        shutil.copytree(args.media_dir, output / 'assets', dirs_exist_ok=True)
    print(f'Created: {output}')
    print(f'Preview: python3 -m http.server 8000 --directory "{output}"')


if __name__ == '__main__':
    main()
