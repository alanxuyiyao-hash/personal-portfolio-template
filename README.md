# Personal Portfolio Template Skill

复用完整网页源码，生成与你所见模板相同样式和交互的个人作品集。提供自己的图片、项目资料和个人介绍，即可替换内容，无需重新设计。

## 保留的体验

- 暗色背景与细长图片长廊
- 滚动、指针波浪和拖动交互
- 图片预览、错位大标题、项目主题色切换
- 项目详情、转场和 About 覆层
- 本地视频播放、章节时间轴

使用原版 HTML / CSS / JavaScript，无需 npm 依赖或构建。替换素材与文案会改变画面的实际构图；布局和交互代码保持原样。

## 安装到 Codex

```bash
git clone https://github.com/alanxuyiyao-hash/personal-portfolio-template.git ~/.codex/skills/personal-portfolio-template
```

如果目标目录已存在，请先保留自己的修改，避免覆盖。安装后在新对话中调用：

```text
使用 $personal-portfolio-template，用我提供的图片、个人介绍和项目资料生成个人网页，保持原版样式和交互。
```

技能入口为 [SKILL.md](SKILL.md)。完整字段与模板边界见 [内容配置说明](references/content.md)。

## 直接生成网页

需要 Python 3，不依赖第三方 Python 包。

1. 复制 `assets/content.example.json` 为自己的 `content.json`，填写姓名、介绍、项目文案与链接。
2. 将自己的图片和视频放入素材目录，例如 `my-media/`。配置里的图片路径填写 `assets/文件名.jpg`。
3. 在仓库目录运行：

```bash
python3 scripts/create_site.py --content content.json --media-dir my-media --output my-portfolio
python3 -m http.server 8000 --directory my-portfolio
```

打开 <http://localhost:8000>。输出目录必须不存在，避免覆盖已有工作。

不需要替换素材时可省略 `--media-dir`。不传 `--content` 和 `--media-dir` 时，生成原版模板副本。

## 操作

滚轮或拖动浏览长廊，点击图片查看预览，点击 **EXPLORE** 进入项目；点击 **PROJECTS** 或按 **Esc** 返回。点击 **ABOUT** 查看介绍，按 **Esc** 关闭。

原版 About 覆层会挡住右上角 CLOSE 的鼠标点击，本技能为保留原样而未修改。详情中的 frames 使用同一封面的不同裁切，并非独立图片。仅填写 `youtubeId` 不会启用视频模式；本地视频使用 `videoSrc`。

## 示例素材

仓库附带原模板的示例内容，用来复现页面效果。电影名称、远程封面与预告视频属于各自权利人；公开此仓库不授予这些素材的额外使用权。正式展示自己的作品时，请换成自己的图片、视频和文案。详见 [素材说明](THIRD_PARTY.md)。

本仓库仅包含可复用技能与原模板，不包含作者的个人项目网页输出。技能生成的是静态网页，不会自动发布到互联网。
