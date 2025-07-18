const categories = [
  // 互联网黑话 - 日常沟通用语
  { id: 1, name: '会议用语', desc: '开会时常用的黑话', count: 20, type: 'jargon' },
  { id: 2, name: '项目管理', desc: '项目相关的管理黑话', count: 18, type: 'jargon' },
  { id: 3, name: '商务合作', desc: '商务谈判常用黑话', count: 15, type: 'jargon' },
  { id: 4, name: '人力资源', desc: 'HR领域的管理黑话', count: 18, type: 'jargon' },
  { id: 5, name: '职场文化', desc: '职场环境相关黑话', count: 16, type: 'jargon' },
  
  // 专业名词 - 技术术语
  { id: 6, name: 'AI人工智能', desc: 'AI领域的专业术语', count: 20, type: 'professional' },
  { id: 7, name: '技术开发', desc: '程序员的专业术语', count: 22, type: 'professional' },
  { id: 8, name: '产品运营', desc: '产品和运营的专业术语', count: 25, type: 'professional' },
  { id: 9, name: '互联网金融', desc: '金融科技专业术语', count: 14, type: 'professional' },
  { id: 10, name: '电商运营', desc: '电商行业专业术语', count: 17, type: 'professional' }
]

const wordsData = {
  // 互联网黑话
  1: [
    { word: '赋能', meaning: '帮助、支持', example: '我们要赋能业务团队 → 我们要帮助业务团队' },
    { word: '闭环', meaning: '完整流程', example: '形成业务闭环 → 形成完整的业务流程' },
    { word: '抓手', meaning: '具体方法', example: '找到合适的抓手 → 找到合适的具体方法' },
    { word: '对齐', meaning: '统一认识', example: '先对齐一下思路 → 先统一一下认识' },
    { word: '拉通', meaning: '协调沟通', example: '拉通各部门资源 → 协调各部门资源' },
    { word: '沉淀', meaning: '总结积累', example: '沉淀项目经验 → 总结项目经验' },
    { word: '复盘', meaning: '总结反思', example: '会后复盘一下 → 会后总结反思一下' },
    { word: '输出', meaning: '提供、给出', example: '输出解决方案 → 提供解决方案' },
    { word: '链路', meaning: '流程环节', example: '优化业务链路 → 优化业务流程' },
    { word: '抽象', meaning: '概括总结', example: '抽象核心问题 → 概括核心问题' },
    { word: '聚焦', meaning: '专注重点', example: '聚焦核心业务 → 专注核心业务' },
    { word: '落地', meaning: '具体实施', example: '方案如何落地 → 方案如何具体实施' },
    { word: '推进', meaning: '促进进展', example: '推进项目进度 → 促进项目进展' },
    { word: '梳理', meaning: '整理分析', example: '梳理业务流程 → 整理分析业务流程' },
    { word: '打通', meaning: '连接整合', example: '打通数据链路 → 连接整合数据流程' },
    { word: '拆解', meaning: '分解分析', example: '拆解业务需求 → 分解分析业务需求' },
    { word: '串联', meaning: '连接组合', example: '串联各个环节 → 连接组合各个环节' },
    { word: '承接', meaning: '接收处理', example: '承接上游需求 → 接收处理上游需求' },
    { word: '透传', meaning: '传递信息', example: '透传用户反馈 → 传递用户反馈' },
    { word: '同频', meaning: '保持一致', example: '与团队同频 → 与团队保持一致' }
  ],
  
  5: [
    { word: '996', meaning: '加班文化', example: '996工作制 → 早9晚9每周6天工作制' },
    { word: '内卷', meaning: '过度竞争', example: '行业内卷 → 行业过度竞争' },
    { word: '躺平', meaning: '消极应对', example: '选择躺平 → 选择消极应对' },
    { word: '摸鱼', meaning: '偷懒划水', example: '上班摸鱼 → 上班时偷懒划水' },
    { word: '35岁危机', meaning: '中年职场困境', example: '面临35岁危机 → 面临中年职场困境' },
    { word: '大厂', meaning: '知名大公司', example: '进入大厂 → 进入知名大公司' },
    { word: '小厂', meaning: '小公司', example: '小厂经历 → 小公司工作经历' },
    { word: '跳槽', meaning: '换工作', example: '准备跳槽 → 准备换工作' },
    { word: '背调', meaning: '背景调查', example: '入职背调 → 入职背景调查' },
    { word: '试用期', meaning: '考察期', example: '试用期转正 → 考察期转为正式员工' },
    { word: '期权', meaning: '股票选择权', example: '员工期权 → 员工股票选择权' },
    { word: '年终奖', meaning: '年底奖金', example: '年终奖发放 → 年底奖金发放' },
    { word: 'PUA', meaning: '精神控制', example: '职场PUA → 职场精神控制' },
    { word: '画饼', meaning: '空头承诺', example: '老板画饼 → 老板空头承诺' },
    { word: '打工人', meaning: '上班族', example: '打工人日常 → 上班族日常' },
    { word: '社畜', meaning: '公司奴隶', example: '社畜生活 → 像公司奴隶的生活' }
  ],

  // 专业名词
  6: [
    { word: '大模型', meaning: '大型AI模型', example: '训练大模型 → 训练大型AI模型' },
    { word: '预训练', meaning: '预先训练', example: '预训练模型 → 预先训练的模型' },
    { word: '微调', meaning: '精细调整', example: '模型微调 → 模型精细调整' },
    { word: '提示工程', meaning: '优化输入指令', example: '提示工程优化 → 优化输入指令' },
    { word: '幻觉', meaning: '错误输出', example: 'AI出现幻觉 → AI产生错误输出' },
    { word: '涌现', meaning: '突然出现的能力', example: '智能涌现 → 突然出现的智能能力' },
    { word: '对齐', meaning: '符合人类价值观', example: 'AI对齐 → AI符合人类价值观' },
    { word: '推理', meaning: '逻辑分析', example: 'AI推理能力 → AI逻辑分析能力' },
    { word: '多模态', meaning: '多种数据类型', example: '多模态模型 → 处理多种数据类型的模型' },
    { word: '上下文', meaning: '相关背景信息', example: '上下文理解 → 相关背景信息理解' },
    { word: 'Token', meaning: '文本单元', example: 'Token限制 → 文本单元限制' },
    { word: '参数量', meaning: '模型复杂度', example: '千亿参数量 → 千亿复杂度指标' },
    { word: '算力', meaning: '计算能力', example: '算力需求 → 计算能力需求' },
    { word: '训练集', meaning: '学习数据', example: '训练集质量 → 学习数据质量' },
    { word: '泛化', meaning: '通用适应', example: '模型泛化 → 模型通用适应能力' },
    { word: '过拟合', meaning: '过度学习', example: '避免过拟合 → 避免过度学习' },
    { word: '梯度', meaning: '优化方向', example: '梯度下降 → 优化方向调整' },
    { word: '损失函数', meaning: '误差计算', example: '优化损失函数 → 优化误差计算' },
    { word: '注意力机制', meaning: '重点关注机制', example: '注意力机制 → 重点关注机制' },
    { word: 'Transformer', meaning: '变换器架构', example: 'Transformer模型 → 变换器架构模型' }
  ]
}

// 获取分类的辅助函数
function getCategoriesByType(type) {
  return categories.filter(cat => cat.type === type)
}

function getJargonCategories() {
  return getCategoriesByType('jargon')
}

function getProfessionalCategories() {
  return getCategoriesByType('professional')
}

function getCategories() {
  return categories
}

function getWordsByCategory(categoryId) {
  return wordsData[categoryId] || []
}

function getAllWords() {
  const allWords = []
  Object.values(wordsData).forEach(categoryWords => {
    allWords.push(...categoryWords)
  })
  return allWords
}

module.exports = {
  getCategories,
  getCategoriesByType,
  getJargonCategories,
  getProfessionalCategories,
  getWordsByCategory,
  getAllWords
}





