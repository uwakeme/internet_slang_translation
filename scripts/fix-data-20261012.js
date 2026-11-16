// 一次性数据修复脚本（2026-10-12）：去重、标点/繁体清洗、分类纠正、
// extraJargon 并入词库、为长释义词条补 brief 短释义。
// 幂等：重复运行无副作用。运行后 node scripts/check.js 应全绿。
//
// 去重规则：同一词条的多个版本合并为一条。
//   - 记录 id 取组内最小 id（保持 id 稳定，BRIEFS 按 id 映射才不用重排）
//   - 释义/示例默认取信息量最大的一版，标签取并集
//   - 两版信息互补的词条走 CONTENT_MERGE 手工合并，任一版的信息都不丢
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const wordsPath = path.join(__dirname, '..', 'data', 'words.js')
const allWords = require('../data/words.js')

// ---------- 1. 逐条语义修正 ----------
const ENTRY_FIXES = {
  307: {
    word: 'LARPing',
    meaning: 'Live Action Role Playing（实况角色扮演），泛指扮演某种身份或生活方式',
    example: '她在LARPing一种自律精致女孩的人设 → 她在扮演一种自律精致女孩的形象'
  },
}
// 注：254 Vibe Coding、670 Agent Skills 的释义由 CONTENT_MERGE 接管，不再在这里维护，
// 否则重复运行时会被这里的旧文本覆盖。

// ---------- 1b. 重复词条的内容合并（两版各有独有信息，丢弃任一方都会丢信息） ----------
const CONTENT_MERGE = {
  'Vibe Coding': {
    meaning: '氛围编程（AI辅助编程），用自然语言描述需求让AI生成代码，2025柯林斯词典年度词汇',
    example: '用Vibe Coding方式开发 → 用自然语言描述需求，AI生成代码'
  },
  '智性沸腾': {
    meaning: '形容互联网上高质量智力讨论热烈沸腾的状态，如AI技术话题引发全网热烈讨论思考的氛围，2026年B站报告将其列为年轻群体的价值消费趋势',
    example: '这个话题让人智性沸腾 → 这个话题引发热烈讨论思考'
  },
  '痛文化': {
    meaning: '2026年小红书十大热词之一，用痛苦经历定义和展示自我认同的亚文化，以痛感为核心的情感代偿，从圈地自萌走向消费主场',
    example: '痛文化来了 → 二次元文化破圈成为消费主流'
  },
  '反精致': {
    meaning: '2026年小红书十大热词之一，对标准化审美的祛魅，拒绝过度包装和精致人设，如淘宝丑东西大赛等，代表年轻人对过度精致生活的反叛',
    example: '反精致风潮 → 抛弃精致偶像包袱，接受真实自我'
  },
  '偷感': {
    meaning: '做事低调、偷偷摸摸、拘谨怕被发现的心态，源自2024年流行至今，形容默默努力不张扬或因在意他人目光而蜷缩回避的状态',
    example: '我偷感很重 → 我喜欢低调做事，不想被人关注'
  },
  'Agent Skills': {
    meaning: 'AI Agent的可复用能力包，Anthropic 2025年10月发布Claude Skills后成为Agent系统标配，可将完成特定目标所需的全部知识和工作流封装打包，跨Agent可迁移加载',
    example: '加载Agent Skills → 加载封装好的AI工作流能力'
  }
}

// ---------- 2. 分类纠正：职场文化(c5) 中明显属于 网络热词(c15) 的词条 ----------
const MOVE_TO_15 = [576, 577, 578, 579, 582, 584, 588, 611, 612, 614, 618, 619, 621, 622, 636, 642, 644, 646, 647, 652, 653, 656, 661, 673, 674, 675, 676, 677, 683, 685, 687, 688, 689, 690, 692, 703, 713, 714]

// ---------- 3. extraJargon 并入词库（原 translator.js 硬编码词典） ----------
const EXTRA_JARGON = [
  ['降本增效', '减少成本提高效率', 2, '通过流程优化实现降本增效 → 通过流程优化减少成本提高效率', ['成本管理', '效率', '经营']],
  ['数字化转型', '用技术改造业务', 2, '推动企业数字化转型 → 推动企业用技术改造业务', ['数字化', '战略', '技术']],
  ['精细化运营', '细致管理运营', 8, '用户要精细化运营 → 用户要细致管理运营', ['运营', '用户管理']],
  ['全链路', '完整流程', 2, '打通营销全链路 → 打通营销完整流程', ['流程', '端到端']],
  ['一站式', '全套服务', 8, '提供一站式解决方案 → 提供全套服务解决方案', ['服务', '便捷']],
  ['生态化', '形成完整体系', 3, '业务生态化布局 → 业务形成完整体系布局', ['生态', '战略']],
  ['平台化', '建设统一平台', 3, '能力平台化输出 → 能力建设统一平台输出', ['平台', '能力输出']],
  ['中台', '共享服务平台', 2, '搭建数据中台 → 搭建数据共享服务平台', ['架构', '共享']],
  ['去中心化', '分散式管理', 7, '系统去中心化设计 → 系统分散式管理设计', ['架构', '分布式']],
  ['扁平化', '减少管理层级', 4, '组织架构扁平化 → 组织架构减少管理层级', ['组织架构', '管理']],
  ['精益创业', '低成本试错创业', 8, '用精益创业方式验证需求 → 用低成本试错创业方式验证需求', ['创业', '方法论']],
  ['增长飞轮', '持续增长模式', 8, '构建增长飞轮 → 构建持续增长模式', ['增长', '增长模型']],
  ['天花板', '发展上限', 3, '这个行业天花板很高 → 这个行业发展上限很高', ['行业', '上限']],
  ['风口', '发展机会', 3, '抓住新风口 → 抓住新发展机会', ['机会', '趋势']],
  ['赛道', '行业领域', 3, '换赛道发展 → 换行业领域发展', ['行业', '赛道选择']],
  ['独角兽', '高价值创业公司', 3, '估值超10亿美元的独角兽 → 估值超10亿美元的高价值创业公司', ['创业公司', '投融资']],
  ['KOL', '意见领袖', 8, '找KOL做推广 → 找意见领袖做推广', ['营销', '达人']],
  ['ROI', '投资回报率', 8, '评估投放ROI → 评估投放投资回报率', ['投放', '效果衡量']],
  ['GMV', '交易总额', 10, '双十一GMV创新高 → 双十一交易总额创新高', ['电商', '交易额']],
  ['DAU', '日活跃用户', 8, 'DAU突破千万 → 日活跃用户突破千万', ['数据指标', '活跃度']],
  ['MAU', '月活跃用户', 8, 'MAU稳步增长 → 月活跃用户稳步增长', ['数据指标', '活跃度']],
  ['LTV', '用户生命周期价值', 8, '提升用户LTV → 提升用户生命周期价值', ['数据指标', '用户价值']],
  ['MVP', '最小可行产品', 8, '先做一个MVP验证 → 先做一个最小可行产品验证', ['产品', '验证']],
  ['PMF', '产品市场匹配', 8, '找到了PMF → 找到了产品市场匹配', ['产品', '市场']],
  ['B端', '企业客户', 8, '我们做B端生意 → 我们做企业客户生意', ['客户类型', '企业服务']],
  ['C端', '个人用户', 8, 'C端体验优先 → 个人用户体验优先', ['客户类型', '用户体验']],
  ['SaaS', '软件即服务', 7, 'SaaS订阅模式 → 软件即服务订阅模式', ['云计算', '订阅服务']],
  ['PaaS', '平台即服务', 7, 'PaaS能力开放 → 平台即服务能力开放', ['云计算', '平台']],
  ['IaaS', '基础设施即服务', 7, 'IaaS层建设 → 基础设施即服务层建设', ['云计算', '基础设施']]
]
// 已存在词条的释义升级（extraJargon 版本更准确）
const MEANING_UPDATES = { '敏捷开发': '快速迭代开发' }

// ---------- 4. brief 短释义（第一义超过 15 字的词条，翻译句中替换时使用） ----------
const BRIEFS = {
  244: '模型上下文协议',
  254: '氛围编程',
  276: '玩梗解构能力',
  333: '有温度的真实感',
  411: '好好爱自己',
  477: '自我主导',
  478: '以柔克刚',
  479: '拒绝精致包装',
  480: '文化消费软实力',
  487: '多线程控场',
  497: '智能体工程学',
  524: '偷偷摸摸',
  528: '过时',
  585: '最佳表现状态',
  670: '可复用能力包',
  219: '数据可视化图表库',
  260: '会多步推理的AI模型',
  275: '精神操控与打压',
  286: '智能体互通协议',
  289: '一人顶一个团队',
  307: '现实版角色扮演',
  314: '热烈讨论思考',
  317: '从小用AI长大的一代',
  318: '找临时伙伴的消费模式',
  319: '快速解压的快乐内容',
  322: '用智能设备管理健康',
  324: 'AI一本正经地胡说',
  325: '公园待20分钟就减压',
  326: '数据驱动正循环',
  352: '用痛苦定义自我的亚文化',
  359: '求尊重礼貌的网络表达',
  372: 'AI发展要造福人类',
  376: '老年群体的社会影响力',
  379: '情绪向外发泄',
  380: '看似无用实则治愈的表达',
  387: '抗风险的发展能力',
  394: '长期重复练到精通',
  414: '要求对方证明真伪',
  417: '凡尔赛式反差句式',
  419: '夸张表达极度好奇',
  420: '闽南语「敢不敢说」',
  423: '智能体协作团队',
  432: '大模型胡说八道',
  453: '加噪去噪生成模型',
  454: '更少算力出更多智能',
  455: '阿里通义千问模型',
  456: '智谱Agent大模型',
  457: '数据要素驱动的新经济',
  458: 'AI驱动的新经济形态',
  459: '月之暗面的大模型',
  465: 'OpenClaw的昵称',
  470: '世界状态预测技术',
  482: 'AI耗电引发的不平等',
  525: '瘦子直播意外梗',
  526: '嘴哥美食评测梗',
  527: '死忠粉丝',
  529: '情绪彻底耗尽崩溃',
  534: 'Google Maps谐音',
  535: '好可爱的夸张说法',
  537: '「我罩着你」的霸气宣言',
  538: '提示词图编排技术',
  544: '智能体能力五级分级',
  546: 'dog doing空耳梗',
  547: '山东美术馆马文创',
  551: '芯片整合型巨型超算',
  552: '给Agent配的执行系统',
  553: '一人公司',
  556: '行业专用大模型',
  557: '围绕AI重新设计开发',
  558: '训练大模型的超算',
  562: '越智能越要权限的困境',
  570: 'AI毁灭人类的概率估计',
  575: '用已故名人AI营销',
  584: '抹除记忆痕迹的存在',
  586: '情绪能量被耗光',
  555: '多Agent协作系统',
  559: '企业AI安全中枢',
  588: '故意惹怒你博流量',
  590: '为AI而生的开发环境',
  591: '大模型专用超算平台',
  615: '无效培训式自我剥削',
  645: '一切以自我需求为准',
  650: '让AI文风更像真人',
  651: '好话夹着拒绝说',
  652: '靠AI陪伴调节情绪',
  657: '半工作半退休状态',
  658: '按需订阅的智能体服务',
  659: '调度多个AI协同工作',
  660: '写提示词的技术',
  666: '诱导AI越权的攻击',
  667: '人在回路中把关',
  669: 'DeepSeek的Agent平台',
  678: 'Nous的Agent框架',
  693: 'Gemini图像模型代号',
  694: 'Gemini 3 Pro图像模型',
  695: 'Gemini深度思考模式',
  696: 'DeepSeek 2026年8月版',
  697: 'DeepSeek新一代版本',
  698: '全员AI化的企业形态',
  699: '推理强度调节滑块',
  701: '每天完成30%就合格',
  702: '天生精力旺盛的人',
  705: '智能体通信协议',
  706: '浏览器级MCP协议',
  707: '智能体网络协议',
  // 释义以「2026年…热词」这类元信息开头的词条：首义本身不够长，检查规则抓不到，
  // 但句中替换会把「2026年小红书十大热词之一」整句塞进译文，必须单独配 brief。
  342: '拒绝沟通',
  361: '知道但不说',
  362: '随便想',
  460: '慢慢体会',
  461: '密集刷屏梗',
  466: 'AI味很重',
  467: '负鼠表情包',
  468: '嘲讽式炫耀',
  469: '部署AI智能体',
  483: '人人都能用的AI',
  484: '量子产业',
  486: '你怎么不早说',
  488: '你能拿我怎样',
  489: '朴实真诚的告白',
  490: '表现炸裂',
  491: '太离谱',
  492: '有情感支持的陪伴',
  493: '网上互暖解压的群体',
  494: '一起摸鱼的搭子',
  614: '高能破局',
  627: '分寸感',
  629: '有性格的AI助手',
  631: '沉浸感',
  636: '活力老年博主',
  673: '踩过坑才记住',
  675: '年轻有活力',
  676: '在城里办事',
  683: '我拼命也要养你',
  684: '开工猝不及防',
  685: '脑子停不下来',
  686: '白加班',
  687: '低沉魔性嗓音',
  688: '轮着吃快餐',
  689: '鬼才信',
  690: '有点像吴世勋',
  691: '接受一切变化',
  692: '不被路径定义',
  703: '爱庆祝的小家庭',
  708: '被压榨的打工人',
  714: '不敢离职的人'
}

// ---------- 5. 繁体→简体映射（词库中出现过的高频繁体） ----------
const TRAD_MAP = { 們: '们', 個: '个', 來: '来', 對: '对', 時: '时', 說: '说', 話: '话', 會: '会', 學: '学', 國: '国', 動: '动', 員: '员', 處: '处', 務: '务', 東: '东', 點: '点', 無: '无', 開: '开', 關: '关', 門: '门', 問: '问', 間: '间', 電: '电', 書: '书', 長: '长', 馬: '马', 鳥: '鸟', 齊: '齐', 龍: '龙', 豐: '丰', 廣: '广', 應: '应', 體: '体', 驗: '验', 視: '视', 覺: '觉', 讓: '让', 證: '证', 據: '据', 變: '变', 邊: '边', 還: '还', 這: '这', 種: '种', 樣: '样', 買: '买', 賣: '卖', 難: '难', 雲: '云', 頁: '页', 項: '项', 順: '顺', 須: '须', 領: '领', 題: '题', 顏: '颜', 願: '愿', 風: '风', 飛: '飞', 飯: '饭', 專: '专', 亂: '乱', 為: '为', 後: '后', 裡: '里', 歷: '历', 緻: '致', 潔: '洁', 過: '过', 選: '选', 錢: '钱', 關: '关', 鐘: '钟', 驚: '惊', 讚: '赞' }

function normalizeText(text) {
  let t = String(text)
  // 繁体→简体
  Object.keys(TRAD_MAP).forEach(tc => { t = t.split(tc).join(TRAD_MAP[tc]) })
  // 半角逗号/分号 → 全角（本库无英文枚举场景）
  t = t.replace(/,/g, '，').replace(/;/g, '；')
  // 冒号：两侧非 ASCII 时转全角（避免破坏 URL/时间）
  t = t.replace(/:/g, (m, off) => {
    const prev = t[off - 1] || ''
    const next = t[off + 1] || ''
    return /[A-Za-z0-9]/.test(prev) && /[A-Za-z0-9]/.test(next) ? m : '：'
  })
  // 成对 ASCII 单引号包裹中文 → 「」；英文撇号保留
  t = t.replace(/'([^']{1,30})'/g, (m, inner) => (/[\u4e00-\u9fff]/.test(inner) ? '「' + inner + '」' : m))
  return t.trim()
}

// ---------- 执行 ----------
const report = { fixed: 0, moved: 0, deleted: [], added: [], briefs: 0 }

let words = allWords.map(w => {
  const nw = { ...w }
  if (ENTRY_FIXES[w.id]) Object.assign(nw, ENTRY_FIXES[w.id])
  nw.word = String(nw.word).trim()
  const meaning = normalizeText(nw.meaning)
  const example = normalizeText(nw.example)
  if (meaning !== w.meaning || example !== w.example || nw.word !== w.word) report.fixed++
  nw.meaning = meaning
  nw.example = example
  if (MOVE_TO_15.includes(w.id) && w.categoryId === 5) { nw.categoryId = 15; report.moved++ }
  if (BRIEFS[w.id]) { nw.brief = BRIEFS[w.id]; report.briefs++ }
  return nw
})

// 释义升级（extraJargon 中更准确的版本）
words.forEach(w => { if (MEANING_UPDATES[w.word]) w.meaning = MEANING_UPDATES[w.word] })

// 去重：同一词条的多个版本合并为一条
// 记录 id 取组内最小 id（保持 id 稳定，BRIEFS 按 id 映射），释义/示例取信息量最大的一版，标签取并集
const groups = {}
words.forEach(w => {
  const k = w.word.trim().toLowerCase()
  ;(groups[k] = groups[k] || []).push(w)
})
const kept = []
Object.values(groups).forEach(g => {
  const base = g.reduce((a, b) => (a.id < b.id ? a : b))
  const src = g.reduce((a, b) => (b.meaning.length > a.meaning.length ? b : a))
  const merged = CONTENT_MERGE[base.word]
  // CONTENT_MERGE 无条件生效：重复组已去重（组内只剩一条）时也要套用合并文本，
  // 否则「在已处理过的数据上再跑一次」会把释义打回旧版本。
  const out = Object.assign({}, base, {
    meaning: merged ? merged.meaning : src.meaning,
    example: merged ? merged.example : src.example
  })
  if (g.length > 1) {
    const tagSet = new Set()
    g.forEach(w => (w.tags || []).forEach(t => tagSet.add(t)))
    out.tags = Array.from(tagSet)
  }
  kept.push(out)
  if (g.length > 1) g.forEach(w => { if (w.id !== base.id) report.deleted.push(w.id + ' ' + w.word) })
})
words = kept.sort((a, b) => a.id - b.id)

// extraJargon 并入
let nextId = Math.max(...words.map(w => w.id)) + 1
const existing = new Set(words.map(w => w.word.trim().toLowerCase()))
EXTRA_JARGON.forEach(([word, meaning, categoryId, example, tags]) => {
  if (existing.has(word.toLowerCase())) return
  words.push({ id: nextId, word, meaning, example, categoryId, tags })
  report.added.push(nextId + ' ' + word)
  nextId++
})
words.sort((a, b) => a.id - b.id)

// ---------- 校验 brief 覆盖 ----------
const first = s => String(s).split(/[、，,；;]/)[0].trim()
const missing = words.filter(w => (w.brief ? w.brief : first(w.meaning)).length > 15 && !w.brief)
if (missing.length) {
  console.error('以下词条第一义>15字但缺少 brief：')
  missing.forEach(w => console.error(' ', w.id, w.word, first(w.meaning)))
  process.exit(1)
}

// ---------- 写回 words.js（保持原格式） ----------
const out = '// 词汇数据\nconst allWords = [\n' +
  words.map(w => '  ' + JSON.stringify(w, null, 2).replace(/\n/g, '\n  ')).join(',\n') +
  '\n]\nmodule.exports = allWords\n'
fs.writeFileSync(wordsPath, out)

console.log('修复词条(标点/繁体/语义):', report.fixed)
console.log('分类纠正 c5→c15:', report.moved)
console.log('删除重复:', report.deleted.length, '条')
report.deleted.forEach(d => console.log('  -', d))
console.log('新增(extraJargon并入):', report.added.length, '条')
console.log('写入 brief:', report.briefs, '条')
console.log('最终词条数:', words.length)

const catCount = {}
words.forEach(w => { catCount[w.categoryId] = (catCount[w.categoryId] || 0) + 1 })
console.log('分类分布:', JSON.stringify(catCount))
