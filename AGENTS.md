# AGENTS.md

互联网黑话翻译器 · 微信小程序：黑话↔人话双向翻译，内置 652 条词条、15 个分类，配套搜索、收藏、分享、词条详情与网页版主页。

## 环境与命令

本仓库**没有 package.json**，小程序无需安装依赖；唯一的 npm 依赖（miniprogram-ci）装在仓库外。

- 开发：用微信开发者工具导入本目录，appid `wx52b8efe35d34c55d`，基础库 3.8.10（`project.private.config.json` 可覆盖为更高版本）
- 测试：`node scripts/check.js` — 45 项冒烟测试（数据完整性 + 引擎回归 + 页面逻辑模拟），退出码非 0 即失败
- 重建网页版主页：`node scripts/build-homepage.js` — 把 `data/words.js` 注入 `docs/index.html`，与小程序同源
- 上传开发版本：`node ~/.config/wxci/release.js` — 仓库外脚本，见「发布流程」
- Node：v22+ 即可（测试无第三方依赖）

## 项目结构

- `pages/` — 6 个页面：`index`（首页/今日热词）、`category`（分类）、`translate`（翻译）、`search`（搜索）、`wordList`（词表/收藏夹）、`wordDetail`（详情）
- `data/` — `categories.js`（15 个分类）、`words.js`（652 条词条，运行时唯一数据源）
- `utils/` — `data.js`（数据访问/搜索/今日热词轮换）、`translator.js`（翻译引擎）
- `scripts/` — `check.js`（冒烟测试）、`build-homepage.js`（主页生成）、`clean-data.js` 与 `fix-data-20261012.js`（一次性数据修复脚本）
- `docs/` — 网页版主页 `index.html`（数据同源，勿手改 PAYLOAD 段）
- `images/` — tabBar 图标 + `categories/`（小程序用 PNG，网页版用同目录 SVG）
- `secret/` — 小程序上传密钥（已 gitignore，禁止提交）

## 数据维护规则

- 新词条写 `data/words.js`，`id` 取当前最大值 +1；新分类写 `data/categories.js`，`id` 同理递增
- 词条字段：`id` / `word` / `meaning` / `brief`（可选）/ `example` / `categoryId` / `tags`
- 首义超过 15 字的词条**必须**提供 `brief` 短释义（供句中替换，冒烟测试会校验）
- 文本使用全角标点（，；：），不得残留半角 `,` `;`
- 词条名不得重复（忽略大小写）；`categoryId` 必须存在于 `categories.js`
- 翻译词典全部由 `data/words.js` 派生：**不要**在 `utils/translator.js` 里新增硬编码词条

## 代码约定

- 页面与 `utils/` 用 ES5 风格：`var` + `function`；`data/`、`scripts/` 用 `const`/`let` + 标准分号
- 缩进 2 空格；页面/`utils` 代码结尾不加多余分号
- 页面一律通过 `utils/data.js` 取数据，不要在页面里直接 `require('../../data/words.js')`
- 翻译引擎在模块加载时构建词典、单趟正则替换：保持「最长优先 + 不连锁替换」，禁止改成逐词扫描
- 改 `utils/translator.js` 的 `humanPhrases` 手工短语表时，**必须**同步 `scripts/build-homepage.js` 的 `hard` 表，否则网页版与小程序翻译结果不一致
- WXSS 沿用 `app.wxss` 的深色渐变主题（主色 `#f5a623`，底色 `#0c0e14`）

## 测试

- 冒烟测试：`node scripts/check.js`；提交前必须全绿（数据类校验会一次列出全部脏数据，不会首败即停）
- 改动页面逻辑时，同步在 `scripts/check.js` 补对应的页面模拟用例
- 仓库无 CI 配置、无 E2E；测试靠本地 Node 运行，无需装依赖

## 提交与分支

- 从 `main` 切分支，不直接推 `main`
- 提交信息用中文 + Conventional Commits：`feat:` `fix:` `data:` `docs:` `refactor:` `test:` `chore:`
- 例：`data: 补充 2026-11-23 网络热词`

## 发布流程

- 上传开发版本：`node ~/.config/wxci/release.js`（miniprogram-ci 在 `~/.config/wxci/node_modules`，忽略 `secret/`、`scripts/`、`docs/`）
- 上传密钥 `private.<appid>.key` 放在仓库外 `secret/`（已 gitignore）或 `~/.config/wxci/`
- 脚本会自动带 `--no-experimental-webstorage --dns-result-order=ipv4first` 重启子进程：前者规避 Node 22+ 内置 Web Storage 导致 miniprogram-ci 崩溃，后者强制走 IPv4（微信后台 IP 白名单只接受 IPv4/CIDR）
- 「提交审核 / 发布」接口不向自有小程序开放（需开放平台 `authorizer_access_token`）：上传成功后需人工到微信公众平台「版本管理」提交审核并发布
- 上传记录与日志：`~/.config/wxci/state.json`、`~/.config/wxci/release.log`

## 安全

- `secret/` 与 `*.key` 已在 `.gitignore`；禁止提交上传密钥
- 不要在代码、脚本或日志里打印 access_token、私钥内容
- `project.private.config.json` 属开发者本地覆盖配置，改动不要当作项目约定
