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

- 人工开发：从 `main` 切分支，不直接推 `main`
- 例外：每日自动化任务产出的词条数据提交按约定直推 `main`（词条类改动，无需评审）
- 提交信息用中文 + Conventional Commits：`feat:` `fix:` `data:` `docs:` `refactor:` `test:` `chore:`
- 例：`data: 补充 2026-11-23 网络热词`

## 发布流程

### 完整流水线（人工或定时任务都按这个顺序）

1. 更新词条 → `data/words.js`
2. 校验：`node scripts/check.js` 必须全绿；不绿则按 `scripts/fix-data-20261012.js` 的规则修正后重跑，仍不绿就 `git checkout` 撤销本次改动，绝不留脏数据
3. 同步网页版主页：`node scripts/build-homepage.js`
4. 提交并推送：`git add data/words.js docs/index.html && git commit -m "data: 补充 N 个网络热词（YYYY-MM-DD）" && git push origin main`
5. 上传开发版本：`node ~/.config/wxci/release.js`

### 上传脚本（仓库外 `~/.config/wxci/release.js`）

- miniprogram-ci 装在 `~/.config/wxci/node_modules`；上传包忽略 `secret/`、`scripts/`、`docs/`、`node_modules/`、`.git/`——**密钥不会进上传包**
- 上传密钥 `private.<appid>.key` 放仓库内 `secret/`（已 gitignore，权限 600）或 `~/.config/wxci/`，脚本按「项目 secret/ → `~/.config/wxci/`」顺序查找
- 版本号规则：`<versionPrefix>.<自 2026-01-01 起的日序号>`；前缀配在 `~/.config/wxci/credentials.json` 的 `versionPrefix`（默认 `2.0`）。**必须高于线上版本**（线上是 `2.0.0`），所以前缀不能留 `1.0`；同一天重试/补跑会自动 +1，保证严格递增（如 `2.0.329`）
- 参数：`--status` 看上次上传记录、`--preview` 只做预览上传（校验密钥与白名单，不产生版本）、`--version` 只打印下一个版本号、默认上传开发版本
- 上传记录与日志：`~/.config/wxci/state.json`、`~/.config/wxci/release.log`

### 运行时兼容（脚本已内置，别删）

- 脚本会自动带 `--no-experimental-webstorage --dns-result-order=ipv4first --no-network-family-autoselection` 重启子进程（fork 会继承 execArgv，编译子进程同样生效）：
  - `--no-experimental-webstorage`：规避 Node 22+ 内置 Web Storage 让 miniprogram-ci 编译器误判环境而崩溃（`TypeError: r.getItem is not a function`），父进程清 `global.localStorage` 不够，编译器在子进程里同样受影响
  - `--dns-result-order=ipv4first`：让 DNS 结果把 IPv4 排在前面，见下方「IP 白名单」
  - `--no-network-family-autoselection`：**必需**，不能只靠上面的 DNS 顺序。Node 20+ 默认开启 family 自动选择（Happy Eyeballs），IPv4 握手稍慢时会自动改走 IPv6 出口 → 微信拿到的来源 IP 是 IPv6 → `errCode -10008 invalid ip` 且报错里直接印出 IPv6 地址。关掉后只连第一个 DNS 结果（IPv4）。同时父进程调用 `net.setDefaultAutoSelectFamily(false)` 兜底

### IP 白名单（最容易卡住的一环）

- 微信公众平台「开发管理 - 开发设置 - IP 白名单」**只接受 IPv4 / CIDR**（`172.0.0.1`、`172.0.0.1/24`），加不了 IPv6
- 家用宽带是双栈，`servicewechat.com` 又优先解析出 IPv6（6 个 AAAA 排在 2 个 A 前面），Node 默认 `verbatim` 顺序会走 IPv6 出口 → 微信拿到的来源 IP 与白名单不符 → `errCode -10008 invalid ip`
- 脚本已强制 IPv4，所以白名单里填本机 IPv4 即可
- **家用宽带公网 IPv4 会变**：再遇 `invalid ip` 时用 `curl -s https://ipinfo.io/ip` 查当前 IPv4，更新白名单后重跑上传；嫌麻烦可直接在后台关闭白名单
- **先看报错里的 IP 形态再动手**（2026-11-25 踩坑）：
  - 报错印出 IPv6（如 `240e:345:92:d01:...`）→ **不是白名单变了**，是请求走了 IPv6 出口，属于脚本强制 IPv4 失效，检查 `--no-network-family-autoselection` 是否还在
  - 报错印出 IPv4 → 才是白名单里缺当前公网 IPv4，按上面流程更新即可

### 审核与发布（人工，无法自动化）

- 「提交审核 / 发布」属开放平台（第三方平台）代码管理接口，需要 `authorizer_access_token`；自有小程序用自身 access_token 会被拒（86000），官方小程序服务端 API 索引里也没有这两项 → **自动化止于上传开发版本**
- 上传成功后需人工到微信公众平台「版本管理」提交审核并发布
- 人工提交时常见错误码：`85009` 已有版本在审核中、`85085` 近 7 天提交审核次数过多、`85008` 类目填写错误、`86002` 昵称/头像/简介未设置

### git 推送

- 远端是 SSH（`git@github.com:uwakeme/internet_slang_translation.git`）；原本是 HTTPS，因 keychain 无凭证 push 直接失败（`could not read Username for 'https://github.com'`），已改为 SSH 才能无人值守推送
- 本机 `~/.ssh/id_ed25519` 已认证为 `uwakeme`

### 定时任务

- 已配置每天 09:00（Asia/Shanghai）的定时任务「每日补充网络热词」，在**任务专用对话**中持续执行上述流水线并汇报；任务只上传开发版本，不调用送审/发布接口

## 安全

- `secret/` 与 `*.key` 已在 `.gitignore`；禁止提交上传密钥
- 不要在代码、脚本或日志里打印 access_token、私钥内容
- `project.private.config.json` 属开发者本地覆盖配置，改动不要当作项目约定
