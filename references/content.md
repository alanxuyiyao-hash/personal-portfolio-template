# 内容配置与原版边界

`assets/content.example.json` 是从原版提取的完整内容，不是虚构的新作品。它有 `site` 和 `projects` 两部分。`site` 可只提供要修改的字段；提供 `projects` 时必须是完整项目数组。不给 `projects` 就保留原版项目。

## site

| 字段 | 用途 |
| --- | --- |
| pageTitle / description | 浏览器标题、搜索摘要 |
| brand | 左上角名称，短名称更接近原版 |
| initials / year | About 大字缩写和年份；initials 同步更新 favicon |
| homeLines | 首页左下角文字行数组，原版两行 |
| social | 联系链接数组，每项为 label、url；原版三个 |
| aboutLabel | About 的无障碍说明，例如 About 张三 |
| aboutText | 个人介绍正文 |
| aboutFacts | 信息行数组，每项 label、value；原版三行 |

网页上的 ABOUT、COMPLETED、TYPE、ROLE、CLIENT、EXPLORE、PLAY、PROJECTS、VISIT SITE、SMART TIMELINE 等属于原版 UI，未抽到 JSON。

## projects

| 字段 | 用途 |
| --- | --- |
| title | 标题行字符串数组，原版两行，建议短标题 |
| short | 图片卡片名和无障碍标签 |
| kicker | 项目编号 / 分类 |
| date / type / role / client | 日期、类型、角色、客户 |
| description | 项目说明 |
| url | 外部项目链接；空字符串隐藏 VISIT SITE |
| image | 封面图片，例如 assets/project-01.jpg；缩略图、预览和详情共用 |
| theme / bg | 六位十六进制项目强调色、背景色 |
| visual | 三个六位十六进制颜色，沿用原版可保持原配色 |
| posterTitle | 标题排版数组，每项 text、x；例如 {"text":"MY WORK","x":"0vw"}，第二行可沿用 13vw。修改 title 时也要同步修改这里；省略则使用 title |
| frames | 非空数组，每项为 [标签, 说明]，原版四项 |
| videoSrc | 可选，本地视频路径，例如 assets/demo.mp4 |
| videoDuration | 可选，秒数，本地视频应填实际时长 |
| chapters | 可选，每项 start、end（秒）、title、summary、points（字符串数组）。只写真实分段，不编造分析 |
| youtubeId | 原版保留字段；当前 hasProjectVideo 只检测 videoSrc，单填 youtubeId 不会开启视频模式，不应承诺嵌入播放 |

原版 frames 不是独立图片：它们使用同一张封面的不同裁切位置和色调，并显示不同文字。若用户要求每个 frame 独立图片，这是新增功能，不能宣称模板已支持。

## 替换示例

1. 复制 `content.example.json` 为自己的内容文件。
2. 把姓名、介绍、链接改成自己的；每个项目更新 `title`、`posterTitle`、`short` 等文本。
3. 将封面放进素材目录，`image` 填 `assets/对应文件名.jpg`。
4. 无视频项目删除 `videoSrc`、`chapters`、`videoDuration`、`youtubeId`。有视频则替换为自己的真实视频与章节。
5. 不需要八个项目时删除多余条目，至少保留一个。默认八个最接近原版长廊密度。

内容值使用纯文本。配置为本地生成输入，不是可接收任意匿名用户上传内容的 CMS。生成器不下载远程资源，也不申请 API 密钥。

## 原版依赖与素材

模板为原项目 `index.html`、`styles.css`、`script.js` 和 `assets/` 的文件副本。无外部 JS/CSS 库；使用系统 Arial/Helvetica 字体。原八张项目封面来自 YouTube 远程缩略图。素材目录还包含八张原项目 JPEG 和一个约 19 MB 的电影预告示例视频；JPEG 并非当前八张封面的来源。无配置生成时保留所有原版文件，方便复现。

分发此 skill 不代表取得示例电影素材的额外授权；正式使用时换成用户自己的素材。下载包不包含原项目的 .claude、.playwright-cli、缓存或历史输出。

原版已知交互边界：About 的 z-index 高于导航，会拦截右上角 CLOSE 的鼠标点击；可按 Esc 关闭。为了原样复用，模板没有顺手修复此问题。若用户明确要求修复，再做最小层级调整并验证。
