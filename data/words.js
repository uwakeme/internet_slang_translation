// 词汇数据
const allWords = [
  {
    "id": 1,
    "word": "赋能",
    "meaning": "帮助、支持",
    "example": "我们要赋能业务团队 → 我们要帮助业务团队",
    "categoryId": 1,
    "tags": [
      "帮助",
      "支持",
      "协助"
    ]
  },
  {
    "id": 2,
    "word": "闭环",
    "meaning": "完整流程",
    "example": "形成业务闭环 → 形成完整的业务流程",
    "categoryId": 1,
    "tags": [
      "流程",
      "完整",
      "循环"
    ]
  },
  {
    "id": 3,
    "word": "抓手",
    "meaning": "具体方法",
    "example": "找到合适的抓手 → 找到合适的具体方法",
    "categoryId": 1,
    "tags": [
      "方法",
      "手段",
      "工具"
    ]
  },
  {
    "id": 4,
    "word": "对齐",
    "meaning": "统一认识",
    "example": "先对齐一下思路 → 先统一一下认识",
    "categoryId": 1,
    "tags": [
      "统一",
      "同步",
      "一致"
    ]
  },
  {
    "id": 5,
    "word": "拉通",
    "meaning": "协调沟通",
    "example": "拉通各部门资源 → 协调各部门资源",
    "categoryId": 1,
    "tags": [
      "协调",
      "沟通",
      "整合"
    ]
  },
  {
    "id": 6,
    "word": "沉淀",
    "meaning": "总结积累",
    "example": "沉淀项目经验 → 总结项目经验",
    "categoryId": 1,
    "tags": [
      "总结",
      "积累",
      "经验"
    ]
  },
  {
    "id": 7,
    "word": "复盘",
    "meaning": "总结反思",
    "example": "会后复盘一下 → 会后总结反思一下",
    "categoryId": 1,
    "tags": [
      "总结",
      "反思",
      "回顾"
    ]
  },
  {
    "id": 8,
    "word": "输出",
    "meaning": "提供、给出",
    "example": "输出解决方案 → 提供解决方案",
    "categoryId": 1,
    "tags": [
      "提供",
      "给出",
      "产出"
    ]
  },
  {
    "id": 9,
    "word": "链路",
    "meaning": "流程环节",
    "example": "优化业务链路 → 优化业务流程",
    "categoryId": 1,
    "tags": [
      "流程",
      "环节",
      "链条"
    ]
  },
  {
    "id": 10,
    "word": "抽象",
    "meaning": "概括总结",
    "example": "抽象核心问题 → 概括核心问题",
    "categoryId": 1,
    "tags": [
      "概括",
      "总结",
      "提炼"
    ]
  },
  {
    "id": 11,
    "word": "聚焦",
    "meaning": "专注重点",
    "example": "聚焦核心业务 → 专注核心业务",
    "categoryId": 1,
    "tags": [
      "专注",
      "重点",
      "核心"
    ]
  },
  {
    "id": 12,
    "word": "落地",
    "meaning": "具体实施",
    "example": "方案如何落地 → 方案如何具体实施",
    "categoryId": 1,
    "tags": [
      "实施",
      "执行",
      "落实"
    ]
  },
  {
    "id": 13,
    "word": "推进",
    "meaning": "促进进展",
    "example": "推进项目进度 → 促进项目进展",
    "categoryId": 1,
    "tags": [
      "促进",
      "推动",
      "进展"
    ]
  },
  {
    "id": 14,
    "word": "梳理",
    "meaning": "整理分析",
    "example": "梳理业务流程 → 整理分析业务流程",
    "categoryId": 1,
    "tags": [
      "整理",
      "分析",
      "理清"
    ]
  },
  {
    "id": 15,
    "word": "打通",
    "meaning": "连接整合",
    "example": "打通数据链路 → 连接整合数据流程",
    "categoryId": 1,
    "tags": [
      "连接",
      "整合",
      "贯通"
    ]
  },
  {
    "id": 16,
    "word": "拆解",
    "meaning": "分解分析",
    "example": "拆解业务需求 → 分解分析业务需求",
    "categoryId": 1,
    "tags": [
      "分解",
      "分析",
      "拆分"
    ]
  },
  {
    "id": 17,
    "word": "串联",
    "meaning": "连接组合",
    "example": "串联各个环节 → 连接组合各个环节",
    "categoryId": 1,
    "tags": [
      "连接",
      "组合",
      "串通"
    ]
  },
  {
    "id": 18,
    "word": "承接",
    "meaning": "接收处理",
    "example": "承接上游需求 → 接收处理上游需求",
    "categoryId": 1,
    "tags": [
      "接收",
      "处理",
      "承担"
    ]
  },
  {
    "id": 19,
    "word": "透传",
    "meaning": "传递信息",
    "example": "透传用户反馈 → 传递用户反馈",
    "categoryId": 1,
    "tags": [
      "传递",
      "转达",
      "传达"
    ]
  },
  {
    "id": 20,
    "word": "同频",
    "meaning": "保持一致",
    "example": "与团队同频 → 与团队保持一致",
    "categoryId": 1,
    "tags": [
      "一致",
      "同步",
      "协调"
    ]
  },
  {
    "id": 21,
    "word": "颗粒度",
    "meaning": "细致程度",
    "example": "颗粒度要更细 → 要更细致一些",
    "categoryId": 2,
    "tags": [
      "细致",
      "精度",
      "详细"
    ]
  },
  {
    "id": 22,
    "word": "痛点",
    "meaning": "核心问题",
    "example": "解决用户痛点 → 解决用户核心问题",
    "categoryId": 2,
    "tags": [
      "问题",
      "困难",
      "挑战"
    ]
  },
  {
    "id": 23,
    "word": "里程碑",
    "meaning": "重要节点",
    "example": "设定里程碑 → 设定重要节点",
    "categoryId": 2,
    "tags": [
      "节点",
      "目标",
      "阶段"
    ]
  },
  {
    "id": 24,
    "word": "交付物",
    "meaning": "成果产出",
    "example": "明确交付物 → 明确成果产出",
    "categoryId": 2,
    "tags": [
      "成果",
      "产出",
      "结果"
    ]
  },
  {
    "id": 25,
    "word": "基线",
    "meaning": "标准参考",
    "example": "建立基线 → 建立标准参考",
    "categoryId": 2,
    "tags": [
      "标准",
      "参考",
      "基准"
    ]
  },
  {
    "id": 26,
    "word": "风险点",
    "meaning": "潜在问题",
    "example": "识别风险点 → 识别潜在问题",
    "categoryId": 2,
    "tags": [
      "风险",
      "问题",
      "隐患"
    ]
  },
  {
    "id": 27,
    "word": "关键路径",
    "meaning": "核心流程",
    "example": "优化关键路径 → 优化核心流程",
    "categoryId": 2,
    "tags": [
      "核心",
      "流程",
      "路径"
    ]
  },
  {
    "id": 28,
    "word": "资源池",
    "meaning": "可用资源",
    "example": "调配资源池 → 调配可用资源",
    "categoryId": 2,
    "tags": [
      "资源",
      "池子",
      "储备"
    ]
  },
  {
    "id": 29,
    "word": "工作量",
    "meaning": "任务量",
    "example": "评估工作量 → 评估任务量",
    "categoryId": 2,
    "tags": [
      "任务",
      "工作",
      "量化"
    ]
  },
  {
    "id": 30,
    "word": "依赖关系",
    "meaning": "相互影响",
    "example": "梳理依赖关系 → 梳理相互影响",
    "categoryId": 2,
    "tags": [
      "依赖",
      "关系",
      "影响"
    ]
  },
  {
    "id": 31,
    "word": "缓冲时间",
    "meaning": "预留时间",
    "example": "设置缓冲时间 → 设置预留时间",
    "categoryId": 2,
    "tags": [
      "时间",
      "预留",
      "缓冲"
    ]
  },
  {
    "id": 32,
    "word": "可交付成果",
    "meaning": "项目产出",
    "example": "定义可交付成果 → 定义项目产出",
    "categoryId": 2,
    "tags": [
      "交付",
      "成果",
      "产出"
    ]
  },
  {
    "id": 33,
    "word": "质量门禁",
    "meaning": "质量检查",
    "example": "设立质量门禁 → 设立质量检查",
    "categoryId": 2,
    "tags": [
      "质量",
      "检查",
      "门禁"
    ]
  },
  {
    "id": 34,
    "word": "变更管理",
    "meaning": "修改控制",
    "example": "执行变更管理 → 执行修改控制",
    "categoryId": 2,
    "tags": [
      "变更",
      "管理",
      "控制"
    ]
  },
  {
    "id": 35,
    "word": "干系人",
    "meaning": "相关人员",
    "example": "管理干系人 → 管理相关人员",
    "categoryId": 2,
    "tags": [
      "相关",
      "人员",
      "利益"
    ]
  },
  {
    "id": 36,
    "word": "范围蔓延",
    "meaning": "需求扩大",
    "example": "控制范围蔓延 → 控制需求扩大",
    "categoryId": 2,
    "tags": [
      "范围",
      "扩大",
      "蔓延"
    ]
  },
  {
    "id": 37,
    "word": "敏捷迭代",
    "meaning": "快速循环",
    "example": "敏捷迭代开发 → 快速循环开发",
    "categoryId": 2,
    "tags": [
      "敏捷",
      "迭代",
      "快速"
    ]
  },
  {
    "id": 38,
    "word": "看板管理",
    "meaning": "可视化管理",
    "example": "使用看板管理 → 使用可视化管理",
    "categoryId": 2,
    "tags": [
      "看板",
      "可视化",
      "管理"
    ]
  },
  {
    "id": 39,
    "word": "共赢",
    "meaning": "互利互惠",
    "example": "实现共赢 → 实现互利互惠",
    "categoryId": 3,
    "tags": [
      "互利",
      "双赢",
      "合作"
    ]
  },
  {
    "id": 40,
    "word": "深度合作",
    "meaning": "全面合作",
    "example": "建立深度合作 → 建立全面合作",
    "categoryId": 3,
    "tags": [
      "深度",
      "全面",
      "合作"
    ]
  },
  {
    "id": 41,
    "word": "战略伙伴",
    "meaning": "重要合作方",
    "example": "成为战略伙伴 → 成为重要合作方",
    "categoryId": 3,
    "tags": [
      "战略",
      "伙伴",
      "重要"
    ]
  },
  {
    "id": 42,
    "word": "生态圈",
    "meaning": "合作网络",
    "example": "构建生态圈 → 构建合作网络",
    "categoryId": 3,
    "tags": [
      "生态",
      "网络",
      "圈子"
    ]
  },
  {
    "id": 43,
    "word": "价值链",
    "meaning": "利益链条",
    "example": "优化价值链 → 优化利益链条",
    "categoryId": 3,
    "tags": [
      "价值",
      "链条",
      "利益"
    ]
  },
  {
    "id": 44,
    "word": "协同效应",
    "meaning": "合作优势",
    "example": "产生协同效应 → 产生合作优势",
    "categoryId": 3,
    "tags": [
      "协同",
      "效应",
      "优势"
    ]
  },
  {
    "id": 45,
    "word": "资源整合",
    "meaning": "资源统筹",
    "example": "进行资源整合 → 进行资源统筹",
    "categoryId": 3,
    "tags": [
      "资源",
      "整合",
      "统筹"
    ]
  },
  {
    "id": 46,
    "word": "优势互补",
    "meaning": "取长补短",
    "example": "实现优势互补 → 实现取长补短",
    "categoryId": 3,
    "tags": [
      "优势",
      "互补",
      "取长补短"
    ]
  },
  {
    "id": 47,
    "word": "商业模式",
    "meaning": "盈利方式",
    "example": "创新商业模式 → 创新盈利方式",
    "categoryId": 3,
    "tags": [
      "商业",
      "模式",
      "盈利"
    ]
  },
  {
    "id": 48,
    "word": "市场准入",
    "meaning": "进入市场",
    "example": "获得市场准入 → 获得进入市场机会",
    "categoryId": 3,
    "tags": [
      "市场",
      "准入",
      "进入"
    ]
  },
  {
    "id": 49,
    "word": "品牌背书",
    "meaning": "品牌支持",
    "example": "提供品牌背书 → 提供品牌支持",
    "categoryId": 3,
    "tags": [
      "品牌",
      "背书",
      "支持"
    ]
  },
  {
    "id": 50,
    "word": "渠道下沉",
    "meaning": "拓展低层市场",
    "example": "渠道下沉策略 → 拓展低层市场策略",
    "categoryId": 3,
    "tags": [
      "渠道",
      "下沉",
      "市场"
    ]
  },
  {
    "id": 51,
    "word": "头部效应",
    "meaning": "领先优势",
    "example": "形成头部效应 → 形成领先优势",
    "categoryId": 3,
    "tags": [
      "头部",
      "效应",
      "领先"
    ]
  },
  {
    "id": 52,
    "word": "护城河",
    "meaning": "竞争壁垒",
    "example": "建立护城河 → 建立竞争壁垒",
    "categoryId": 3,
    "tags": [
      "护城河",
      "壁垒",
      "竞争"
    ]
  },
  {
    "id": 53,
    "word": "商业闭环",
    "meaning": "完整商业模式",
    "example": "形成商业闭环 → 形成完整商业模式",
    "categoryId": 3,
    "tags": [
      "商业",
      "闭环",
      "模式"
    ]
  },
  {
    "id": 54,
    "word": "人才盘点",
    "meaning": "人员评估",
    "example": "进行人才盘点 → 进行人员评估",
    "categoryId": 4,
    "tags": [
      "人才",
      "盘点",
      "评估"
    ]
  },
  {
    "id": 55,
    "word": "组织架构",
    "meaning": "管理结构",
    "example": "优化组织架构 → 优化管理结构",
    "categoryId": 4,
    "tags": [
      "组织",
      "架构",
      "结构"
    ]
  },
  {
    "id": 56,
    "word": "梯队建设",
    "meaning": "人才培养",
    "example": "加强梯队建设 → 加强人才培养",
    "categoryId": 4,
    "tags": [
      "梯队",
      "建设",
      "培养"
    ]
  },
  {
    "id": 57,
    "word": "绩效考核",
    "meaning": "工作评价",
    "example": "完善绩效考核 → 完善工作评价",
    "categoryId": 4,
    "tags": [
      "绩效",
      "考核",
      "评价"
    ]
  },
  {
    "id": 58,
    "word": "人才画像",
    "meaning": "人员特征",
    "example": "建立人才画像 → 描述人员特征",
    "categoryId": 4,
    "tags": [
      "人才",
      "画像",
      "特征"
    ]
  },
  {
    "id": 59,
    "word": "能力模型",
    "meaning": "技能框架",
    "example": "构建能力模型 → 构建技能框架",
    "categoryId": 4,
    "tags": [
      "能力",
      "模型",
      "技能"
    ]
  },
  {
    "id": 60,
    "word": "文化价值观",
    "meaning": "企业文化",
    "example": "传承文化价值观 → 传承企业文化",
    "categoryId": 4,
    "tags": [
      "文化",
      "价值观",
      "企业"
    ]
  },
  {
    "id": 61,
    "word": "人效比",
    "meaning": "人员效率",
    "example": "提升人效比 → 提升人员效率",
    "categoryId": 4,
    "tags": [
      "人效",
      "效率",
      "比例"
    ]
  },
  {
    "id": 62,
    "word": "留存率",
    "meaning": "员工保留率",
    "example": "提高留存率 → 提高员工保留率",
    "categoryId": 4,
    "tags": [
      "留存",
      "保留",
      "员工"
    ]
  },
  {
    "id": 63,
    "word": "人才密度",
    "meaning": "优秀员工比例",
    "example": "提升人才密度 → 提升优秀员工比例",
    "categoryId": 4,
    "tags": [
      "人才",
      "密度",
      "比例"
    ]
  },
  {
    "id": 64,
    "word": "组织效能",
    "meaning": "团队效率",
    "example": "提升组织效能 → 提升团队效率",
    "categoryId": 4,
    "tags": [
      "组织",
      "效能",
      "团队"
    ]
  },
  {
    "id": 65,
    "word": "人才发展",
    "meaning": "员工成长",
    "example": "推动人才发展 → 推动员工成长",
    "categoryId": 4,
    "tags": [
      "人才",
      "发展",
      "成长"
    ]
  },
  {
    "id": 66,
    "word": "激励机制",
    "meaning": "奖励制度",
    "example": "完善激励机制 → 完善奖励制度",
    "categoryId": 4,
    "tags": [
      "激励",
      "机制",
      "奖励"
    ]
  },
  {
    "id": 67,
    "word": "人才储备",
    "meaning": "后备人员",
    "example": "加强人才储备 → 加强后备人员培养",
    "categoryId": 4,
    "tags": [
      "人才",
      "储备",
      "后备"
    ]
  },
  {
    "id": 68,
    "word": "职业发展",
    "meaning": "工作晋升",
    "example": "规划职业发展 → 规划工作晋升路径",
    "categoryId": 4,
    "tags": [
      "职业",
      "发展",
      "晋升"
    ]
  },
  {
    "id": 69,
    "word": "团队协作",
    "meaning": "团队合作",
    "example": "加强团队协作 → 加强团队合作",
    "categoryId": 4,
    "tags": [
      "团队",
      "协作",
      "合作"
    ]
  },
  {
    "id": 70,
    "word": "人才引进",
    "meaning": "招聘人员",
    "example": "加大人才引进 → 加大招聘人员力度",
    "categoryId": 4,
    "tags": [
      "人才",
      "引进",
      "招聘"
    ]
  },
  {
    "id": 71,
    "word": "文化建设",
    "meaning": "企业文化培养",
    "example": "推进文化建设 → 推进企业文化培养",
    "categoryId": 4,
    "tags": [
      "文化",
      "建设",
      "培养"
    ]
  },
  {
    "id": 72,
    "word": "工作饱和度",
    "meaning": "工作量程度",
    "example": "工作饱和度很高 → 工作量很大",
    "categoryId": 5,
    "tags": [
      "工作",
      "饱和度",
      "工作量"
    ]
  },
  {
    "id": 73,
    "word": "执行力",
    "meaning": "完成能力",
    "example": "提升执行力 → 提升完成能力",
    "categoryId": 5,
    "tags": [
      "执行",
      "能力",
      "完成"
    ]
  },
  {
    "id": 74,
    "word": "主观能动性",
    "meaning": "主动积极性",
    "example": "发挥主观能动性 → 发挥主动积极性",
    "categoryId": 5,
    "tags": [
      "主观",
      "能动性",
      "主动"
    ]
  },
  {
    "id": 75,
    "word": "工作氛围",
    "meaning": "工作环境",
    "example": "营造工作氛围 → 营造工作环境",
    "categoryId": 5,
    "tags": [
      "工作",
      "氛围",
      "环境"
    ]
  },
  {
    "id": 76,
    "word": "团队凝聚力",
    "meaning": "团队团结度",
    "example": "增强团队凝聚力 → 增强团队团结度",
    "categoryId": 5,
    "tags": [
      "团队",
      "凝聚力",
      "团结"
    ]
  },
  {
    "id": 77,
    "word": "工作节奏",
    "meaning": "工作速度",
    "example": "调整工作节奏 → 调整工作速度",
    "categoryId": 5,
    "tags": [
      "工作",
      "节奏",
      "速度"
    ]
  },
  {
    "id": 78,
    "word": "职场素养",
    "meaning": "工作素质",
    "example": "提升职场素养 → 提升工作素质",
    "categoryId": 5,
    "tags": [
      "职场",
      "素养",
      "素质"
    ]
  },
  {
    "id": 79,
    "word": "沟通效率",
    "meaning": "交流效果",
    "example": "提高沟通效率 → 提高交流效果",
    "categoryId": 5,
    "tags": [
      "沟通",
      "效率",
      "交流"
    ]
  },
  {
    "id": 80,
    "word": "工作状态",
    "meaning": "工作情况",
    "example": "调整工作状态 → 调整工作情况",
    "categoryId": 5,
    "tags": [
      "工作",
      "状态",
      "情况"
    ]
  },
  {
    "id": 81,
    "word": "责任心",
    "meaning": "负责态度",
    "example": "增强责任心 → 增强负责态度",
    "categoryId": 5,
    "tags": [
      "责任心",
      "负责",
      "态度"
    ]
  },
  {
    "id": 82,
    "word": "学习能力",
    "meaning": "学习水平",
    "example": "提升学习能力 → 提升学习水平",
    "categoryId": 5,
    "tags": [
      "学习",
      "能力",
      "水平"
    ]
  },
  {
    "id": 83,
    "word": "创新思维",
    "meaning": "创新想法",
    "example": "培养创新思维 → 培养创新想法",
    "categoryId": 5,
    "tags": [
      "创新",
      "思维",
      "想法"
    ]
  },
  {
    "id": 84,
    "word": "抗压能力",
    "meaning": "承受压力能力",
    "example": "锻炼抗压能力 → 锻炼承受压力能力",
    "categoryId": 5,
    "tags": [
      "抗压",
      "能力",
      "压力"
    ]
  },
  {
    "id": 85,
    "word": "时间管理",
    "meaning": "时间安排",
    "example": "改善时间管理 → 改善时间安排",
    "categoryId": 5,
    "tags": [
      "时间",
      "管理",
      "安排"
    ]
  },
  {
    "id": 86,
    "word": "工作效率",
    "meaning": "工作速度",
    "example": "提高工作效率 → 提高工作速度",
    "categoryId": 5,
    "tags": [
      "工作",
      "效率",
      "速度"
    ]
  },
  {
    "id": 87,
    "word": "职业规划",
    "meaning": "工作计划",
    "example": "制定职业规划 → 制定工作计划",
    "categoryId": 5,
    "tags": [
      "职业",
      "规划",
      "计划"
    ]
  },
  {
    "id": 88,
    "word": "大模型",
    "meaning": "大型AI模型",
    "example": "训练大模型 → 训练大型AI模型",
    "categoryId": 6,
    "tags": [
      "AI",
      "模型",
      "机器学习"
    ]
  },
  {
    "id": 89,
    "word": "预训练",
    "meaning": "预先训练",
    "example": "预训练模型 → 预先训练的模型",
    "categoryId": 6,
    "tags": [
      "训练",
      "学习",
      "准备"
    ]
  },
  {
    "id": 90,
    "word": "微调",
    "meaning": "精细调整",
    "example": "模型微调 → 模型精细调整",
    "categoryId": 6,
    "tags": [
      "调整",
      "优化",
      "改进"
    ]
  },
  {
    "id": 91,
    "word": "提示工程",
    "meaning": "指令设计",
    "example": "提示工程优化 → 指令设计优化",
    "categoryId": 6,
    "tags": [
      "提示",
      "指令",
      "设计"
    ]
  },
  {
    "id": 92,
    "word": "多模态",
    "meaning": "多种数据类型",
    "example": "多模态AI → 处理多种数据类型的AI",
    "categoryId": 6,
    "tags": [
      "多模态",
      "数据",
      "类型"
    ]
  },
  {
    "id": 93,
    "word": "神经网络",
    "meaning": "模拟大脑网络",
    "example": "神经网络架构 → 模拟大脑网络架构",
    "categoryId": 6,
    "tags": [
      "神经",
      "网络",
      "大脑"
    ]
  },
  {
    "id": 94,
    "word": "深度学习",
    "meaning": "多层学习",
    "example": "深度学习算法 → 多层学习算法",
    "categoryId": 6,
    "tags": [
      "深度",
      "学习",
      "多层"
    ]
  },
  {
    "id": 95,
    "word": "机器学习",
    "meaning": "计算机学习",
    "example": "机器学习模型 → 计算机学习模型",
    "categoryId": 6,
    "tags": [
      "机器",
      "学习",
      "计算机"
    ]
  },
  {
    "id": 96,
    "word": "自然语言处理",
    "meaning": "文本理解技术",
    "example": "NLP技术 → 文本理解技术",
    "categoryId": 6,
    "tags": [
      "自然语言",
      "文本",
      "理解"
    ]
  },
  {
    "id": 97,
    "word": "计算机视觉",
    "meaning": "图像识别技术",
    "example": "CV算法 → 图像识别算法",
    "categoryId": 6,
    "tags": [
      "计算机",
      "视觉",
      "图像"
    ]
  },
  {
    "id": 98,
    "word": "强化学习",
    "meaning": "奖励学习",
    "example": "强化学习训练 → 奖励学习训练",
    "categoryId": 6,
    "tags": [
      "强化",
      "学习",
      "奖励"
    ]
  },
  {
    "id": 99,
    "word": "生成式AI",
    "meaning": "内容生成AI",
    "example": "生成式AI应用 → 内容生成AI应用",
    "categoryId": 6,
    "tags": [
      "生成",
      "AI",
      "内容"
    ]
  },
  {
    "id": 100,
    "word": "算法优化",
    "meaning": "算法改进",
    "example": "算法优化策略 → 算法改进策略",
    "categoryId": 6,
    "tags": [
      "算法",
      "优化",
      "改进"
    ]
  },
  {
    "id": 101,
    "word": "数据标注",
    "meaning": "数据标记",
    "example": "数据标注工作 → 数据标记工作",
    "categoryId": 6,
    "tags": [
      "数据",
      "标注",
      "标记"
    ]
  },
  {
    "id": 102,
    "word": "模型部署",
    "meaning": "模型上线",
    "example": "模型部署上线 → 模型正式上线",
    "categoryId": 6,
    "tags": [
      "模型",
      "部署",
      "上线"
    ]
  },
  {
    "id": 103,
    "word": "推理引擎",
    "meaning": "计算引擎",
    "example": "推理引擎优化 → 计算引擎优化",
    "categoryId": 6,
    "tags": [
      "推理",
      "引擎",
      "计算"
    ]
  },
  {
    "id": 104,
    "word": "知识图谱",
    "meaning": "知识网络",
    "example": "构建知识图谱 → 构建知识网络",
    "categoryId": 6,
    "tags": [
      "知识",
      "图谱",
      "网络"
    ]
  },
  {
    "id": 105,
    "word": "智能问答",
    "meaning": "自动回答",
    "example": "智能问答系统 → 自动回答系统",
    "categoryId": 6,
    "tags": [
      "智能",
      "问答",
      "自动"
    ]
  },
  {
    "id": 106,
    "word": "语音识别",
    "meaning": "声音转文字",
    "example": "语音识别技术 → 声音转文字技术",
    "categoryId": 6,
    "tags": [
      "语音",
      "识别",
      "声音"
    ]
  },
  {
    "id": 107,
    "word": "图像生成",
    "meaning": "自动画图",
    "example": "图像生成模型 → 自动画图模型",
    "categoryId": 6,
    "tags": [
      "图像",
      "生成",
      "画图"
    ]
  },
  {
    "id": 108,
    "word": "重构",
    "meaning": "代码重写",
    "example": "代码重构 → 代码重写",
    "categoryId": 7,
    "tags": [
      "重构",
      "代码",
      "重写"
    ]
  },
  {
    "id": 109,
    "word": "优化",
    "meaning": "改进提升",
    "example": "性能优化 → 性能改进提升",
    "categoryId": 7,
    "tags": [
      "优化",
      "改进",
      "提升"
    ]
  },
  {
    "id": 110,
    "word": "迭代",
    "meaning": "循环改进",
    "example": "快速迭代 → 快速循环改进",
    "categoryId": 7,
    "tags": [
      "迭代",
      "循环",
      "改进"
    ]
  },
  {
    "id": 111,
    "word": "部署",
    "meaning": "发布上线",
    "example": "系统部署 → 系统发布上线",
    "categoryId": 7,
    "tags": [
      "部署",
      "发布",
      "上线"
    ]
  },
  {
    "id": 112,
    "word": "架构",
    "meaning": "系统设计",
    "example": "系统架构 → 系统设计",
    "categoryId": 7,
    "tags": [
      "架构",
      "系统",
      "设计"
    ]
  },
  {
    "id": 113,
    "word": "框架",
    "meaning": "开发工具",
    "example": "开发框架 → 开发工具",
    "categoryId": 7,
    "tags": [
      "框架",
      "工具",
      "开发"
    ]
  },
  {
    "id": 114,
    "word": "接口",
    "meaning": "连接方式",
    "example": "API接口 → 程序连接方式",
    "categoryId": 7,
    "tags": [
      "接口",
      "连接",
      "API"
    ]
  },
  {
    "id": 115,
    "word": "中间件",
    "meaning": "连接软件",
    "example": "中间件服务 → 连接软件服务",
    "categoryId": 7,
    "tags": [
      "中间件",
      "连接",
      "软件"
    ]
  },
  {
    "id": 116,
    "word": "微服务",
    "meaning": "小型服务",
    "example": "微服务架构 → 小型服务架构",
    "categoryId": 7,
    "tags": [
      "微服务",
      "小型",
      "服务"
    ]
  },
  {
    "id": 117,
    "word": "容器化",
    "meaning": "打包部署",
    "example": "容器化部署 → 打包部署",
    "categoryId": 7,
    "tags": [
      "容器",
      "打包",
      "部署"
    ]
  },
  {
    "id": 118,
    "word": "云原生",
    "meaning": "云端开发",
    "example": "云原生应用 → 云端开发应用",
    "categoryId": 7,
    "tags": [
      "云原生",
      "云端",
      "开发"
    ]
  },
  {
    "id": 119,
    "word": "DevOps",
    "meaning": "开发运维一体化",
    "example": "DevOps流程 → 开发运维一体化流程",
    "categoryId": 7,
    "tags": [
      "DevOps",
      "开发",
      "运维"
    ]
  },
  {
    "id": 120,
    "word": "持续集成",
    "meaning": "自动合并代码",
    "example": "CI/CD → 自动合并和发布代码",
    "categoryId": 7,
    "tags": [
      "持续集成",
      "自动",
      "合并"
    ]
  },
  {
    "id": 121,
    "word": "负载均衡",
    "meaning": "流量分配",
    "example": "负载均衡器 → 流量分配器",
    "categoryId": 7,
    "tags": [
      "负载",
      "均衡",
      "流量"
    ]
  },
  {
    "id": 122,
    "word": "缓存机制",
    "meaning": "临时存储",
    "example": "缓存优化 → 临时存储优化",
    "categoryId": 7,
    "tags": [
      "缓存",
      "存储",
      "临时"
    ]
  },
  {
    "id": 123,
    "word": "数据库优化",
    "meaning": "数据存储改进",
    "example": "数据库优化 → 数据存储改进",
    "categoryId": 7,
    "tags": [
      "数据库",
      "优化",
      "存储"
    ]
  },
  {
    "id": 124,
    "word": "前端框架",
    "meaning": "页面开发工具",
    "example": "前端框架选型 → 页面开发工具选择",
    "categoryId": 7,
    "tags": [
      "前端",
      "框架",
      "页面"
    ]
  },
  {
    "id": 125,
    "word": "后端服务",
    "meaning": "服务器程序",
    "example": "后端服务开发 → 服务器程序开发",
    "categoryId": 7,
    "tags": [
      "后端",
      "服务",
      "服务器"
    ]
  },
  {
    "id": 126,
    "word": "全栈开发",
    "meaning": "全能开发",
    "example": "全栈工程师 → 全能开发工程师",
    "categoryId": 7,
    "tags": [
      "全栈",
      "全能",
      "开发"
    ]
  },
  {
    "id": 127,
    "word": "敏捷开发",
    "meaning": "快速迭代开发",
    "example": "敏捷开发模式 → 快速开发模式",
    "categoryId": 7,
    "tags": [
      "敏捷",
      "快速",
      "开发"
    ]
  },
  {
    "id": 128,
    "word": "代码审查",
    "meaning": "代码检查",
    "example": "Code Review → 代码检查",
    "categoryId": 7,
    "tags": [
      "代码",
      "审查",
      "检查"
    ]
  },
  {
    "id": 129,
    "word": "单元测试",
    "meaning": "功能测试",
    "example": "单元测试覆盖 → 功能测试覆盖",
    "categoryId": 7,
    "tags": [
      "单元",
      "测试",
      "功能"
    ]
  },
  {
    "id": 130,
    "word": "用户画像",
    "meaning": "用户特征描述",
    "example": "建立用户画像 → 描述用户特征",
    "categoryId": 8,
    "tags": [
      "用户",
      "画像",
      "特征"
    ]
  },
  {
    "id": 131,
    "word": "转化率",
    "meaning": "转换比例",
    "example": "提升转化率 → 提高转换比例",
    "categoryId": 8,
    "tags": [
      "转化",
      "比例",
      "转换"
    ]
  },
  {
    "id": 132,
    "word": "私域流量",
    "meaning": "自有用户资源",
    "example": "运营私域流量 → 管理自有用户资源",
    "categoryId": 8,
    "tags": [
      "私域",
      "流量",
      "用户"
    ]
  },
  {
    "id": 133,
    "word": "用户留存",
    "meaning": "用户保留",
    "example": "提升用户留存 → 提升用户保留率",
    "categoryId": 8,
    "tags": [
      "用户",
      "留存",
      "保留"
    ]
  },
  {
    "id": 134,
    "word": "活跃度",
    "meaning": "使用频率",
    "example": "用户活跃度 → 用户使用频率",
    "categoryId": 8,
    "tags": [
      "活跃",
      "频率",
      "使用"
    ]
  },
  {
    "id": 135,
    "word": "获客成本",
    "meaning": "获得用户成本",
    "example": "降低获客成本 → 降低获得用户成本",
    "categoryId": 8,
    "tags": [
      "获客",
      "成本",
      "用户"
    ]
  },
  {
    "id": 136,
    "word": "生命周期价值",
    "meaning": "用户总价值",
    "example": "LTV提升 → 用户总价值提升",
    "categoryId": 8,
    "tags": [
      "生命周期",
      "价值",
      "用户"
    ]
  },
  {
    "id": 137,
    "word": "增长黑客",
    "meaning": "快速增长方法",
    "example": "增长黑客策略 → 快速增长方法",
    "categoryId": 8,
    "tags": [
      "增长",
      "黑客",
      "快速"
    ]
  },
  {
    "id": 138,
    "word": "漏斗分析",
    "meaning": "流程分析",
    "example": "转化漏斗分析 → 转化流程分析",
    "categoryId": 8,
    "tags": [
      "漏斗",
      "分析",
      "流程"
    ]
  },
  {
    "id": 139,
    "word": "A/B测试",
    "meaning": "对比测试",
    "example": "A/B测试优化 → 对比测试优化",
    "categoryId": 8,
    "tags": [
      "AB测试",
      "对比",
      "测试"
    ]
  },
  {
    "id": 140,
    "word": "数据埋点",
    "meaning": "数据收集点",
    "example": "数据埋点设计 → 数据收集点设计",
    "categoryId": 8,
    "tags": [
      "数据",
      "埋点",
      "收集"
    ]
  },
  {
    "id": 141,
    "word": "用户体验",
    "meaning": "使用感受",
    "example": "优化用户体验 → 优化使用感受",
    "categoryId": 8,
    "tags": [
      "用户",
      "体验",
      "感受"
    ]
  },
  {
    "id": 142,
    "word": "产品迭代",
    "meaning": "产品更新",
    "example": "产品快速迭代 → 产品快速更新",
    "categoryId": 8,
    "tags": [
      "产品",
      "迭代",
      "更新"
    ]
  },
  {
    "id": 143,
    "word": "需求分析",
    "meaning": "需要分析",
    "example": "用户需求分析 → 用户需要分析",
    "categoryId": 8,
    "tags": [
      "需求",
      "分析",
      "需要"
    ]
  },
  {
    "id": 144,
    "word": "竞品分析",
    "meaning": "竞争对手分析",
    "example": "竞品分析报告 → 竞争对手分析报告",
    "categoryId": 8,
    "tags": [
      "竞品",
      "分析",
      "竞争"
    ]
  },
  {
    "id": 145,
    "word": "市场调研",
    "meaning": "市场研究",
    "example": "市场调研数据 → 市场研究数据",
    "categoryId": 8,
    "tags": [
      "市场",
      "调研",
      "研究"
    ]
  },
  {
    "id": 146,
    "word": "内容运营",
    "meaning": "内容管理",
    "example": "内容运营策略 → 内容管理策略",
    "categoryId": 8,
    "tags": [
      "内容",
      "运营",
      "管理"
    ]
  },
  {
    "id": 147,
    "word": "社群运营",
    "meaning": "社区管理",
    "example": "社群运营活动 → 社区管理活动",
    "categoryId": 8,
    "tags": [
      "社群",
      "运营",
      "社区"
    ]
  },
  {
    "id": 148,
    "word": "精准营销",
    "meaning": "定向推广",
    "example": "精准营销投放 → 定向推广投放",
    "categoryId": 8,
    "tags": [
      "精准",
      "营销",
      "定向"
    ]
  },
  {
    "id": 149,
    "word": "品牌曝光",
    "meaning": "品牌展示",
    "example": "提升品牌曝光 → 提升品牌展示",
    "categoryId": 8,
    "tags": [
      "品牌",
      "曝光",
      "展示"
    ]
  },
  {
    "id": 150,
    "word": "口碑营销",
    "meaning": "口碑推广",
    "example": "口碑营销策略 → 口碑推广策略",
    "categoryId": 8,
    "tags": [
      "口碑",
      "营销",
      "推广"
    ]
  },
  {
    "id": 151,
    "word": "病毒传播",
    "meaning": "快速传播",
    "example": "病毒式传播 → 快速传播",
    "categoryId": 8,
    "tags": [
      "病毒",
      "传播",
      "快速"
    ]
  },
  {
    "id": 152,
    "word": "用户反馈",
    "meaning": "用户意见",
    "example": "收集用户反馈 → 收集用户意见",
    "categoryId": 8,
    "tags": [
      "用户",
      "反馈",
      "意见"
    ]
  },
  {
    "id": 153,
    "word": "产品定位",
    "meaning": "产品方向",
    "example": "明确产品定位 → 明确产品方向",
    "categoryId": 8,
    "tags": [
      "产品",
      "定位",
      "方向"
    ]
  },
  {
    "id": 154,
    "word": "市场份额",
    "meaning": "市场占比",
    "example": "扩大市场份额 → 扩大市场占比",
    "categoryId": 8,
    "tags": [
      "市场",
      "份额",
      "占比"
    ]
  },
  {
    "id": 155,
    "word": "FinTech",
    "meaning": "金融科技",
    "example": "FinTech创新 → 金融科技创新",
    "categoryId": 9,
    "tags": [
      "金融",
      "科技",
      "创新"
    ]
  },
  {
    "id": 156,
    "word": "数字货币",
    "meaning": "电子货币",
    "example": "数字货币支付 → 电子货币支付",
    "categoryId": 9,
    "tags": [
      "数字",
      "货币",
      "电子"
    ]
  },
  {
    "id": 157,
    "word": "区块链",
    "meaning": "分布式账本",
    "example": "区块链技术 → 分布式账本技术",
    "categoryId": 9,
    "tags": [
      "区块链",
      "分布式",
      "账本"
    ]
  },
  {
    "id": 158,
    "word": "智能投顾",
    "meaning": "自动投资建议",
    "example": "智能投顾服务 → 自动投资建议服务",
    "categoryId": 9,
    "tags": [
      "智能",
      "投顾",
      "投资"
    ]
  },
  {
    "id": 159,
    "word": "风控模型",
    "meaning": "风险控制模型",
    "example": "风控模型优化 → 风险控制模型优化",
    "categoryId": 9,
    "tags": [
      "风控",
      "模型",
      "风险"
    ]
  },
  {
    "id": 160,
    "word": "征信体系",
    "meaning": "信用记录系统",
    "example": "征信体系建设 → 信用记录系统建设",
    "categoryId": 9,
    "tags": [
      "征信",
      "信用",
      "记录"
    ]
  },
  {
    "id": 161,
    "word": "普惠金融",
    "meaning": "大众金融服务",
    "example": "普惠金融产品 → 大众金融服务产品",
    "categoryId": 9,
    "tags": [
      "普惠",
      "金融",
      "大众"
    ]
  },
  {
    "id": 162,
    "word": "移动支付",
    "meaning": "手机支付",
    "example": "移动支付平台 → 手机支付平台",
    "categoryId": 9,
    "tags": [
      "移动",
      "支付",
      "手机"
    ]
  },
  {
    "id": 163,
    "word": "第三方支付",
    "meaning": "独立支付服务",
    "example": "第三方支付机构 → 独立支付服务机构",
    "categoryId": 9,
    "tags": [
      "第三方",
      "支付",
      "独立"
    ]
  },
  {
    "id": 164,
    "word": "供应链金融",
    "meaning": "产业链金融",
    "example": "供应链金融服务 → 产业链金融服务",
    "categoryId": 9,
    "tags": [
      "供应链",
      "金融",
      "产业"
    ]
  },
  {
    "id": 165,
    "word": "消费金融",
    "meaning": "个人消费贷款",
    "example": "消费金融产品 → 个人消费贷款产品",
    "categoryId": 9,
    "tags": [
      "消费",
      "金融",
      "贷款"
    ]
  },
  {
    "id": 166,
    "word": "资产证券化",
    "meaning": "资产转证券",
    "example": "资产证券化产品 → 资产转证券产品",
    "categoryId": 9,
    "tags": [
      "资产",
      "证券化",
      "转换"
    ]
  },
  {
    "id": 167,
    "word": "量化交易",
    "meaning": "算法交易",
    "example": "量化交易策略 → 算法交易策略",
    "categoryId": 9,
    "tags": [
      "量化",
      "交易",
      "算法"
    ]
  },
  {
    "id": 168,
    "word": "数字银行",
    "meaning": "网上银行",
    "example": "数字银行服务 → 网上银行服务",
    "categoryId": 9,
    "tags": [
      "数字",
      "银行",
      "网上"
    ]
  },
  {
    "id": 169,
    "word": "GMV",
    "meaning": "交易总额",
    "example": "GMV增长 → 交易总额增长",
    "categoryId": 10,
    "tags": [
      "GMV",
      "交易",
      "总额"
    ]
  },
  {
    "id": 170,
    "word": "SKU",
    "meaning": "商品种类",
    "example": "SKU管理 → 商品种类管理",
    "categoryId": 10,
    "tags": [
      "SKU",
      "商品",
      "种类"
    ]
  },
  {
    "id": 171,
    "word": "客单价",
    "meaning": "平均消费金额",
    "example": "提升客单价 → 提升平均消费金额",
    "categoryId": 10,
    "tags": [
      "客单价",
      "消费",
      "平均"
    ]
  },
  {
    "id": 172,
    "word": "复购率",
    "meaning": "重复购买率",
    "example": "提高复购率 → 提高重复购买率",
    "categoryId": 10,
    "tags": [
      "复购",
      "重复",
      "购买"
    ]
  },
  {
    "id": 173,
    "word": "供应链",
    "meaning": "商品供应链条",
    "example": "优化供应链 → 优化商品供应链条",
    "categoryId": 10,
    "tags": [
      "供应链",
      "商品",
      "链条"
    ]
  },
  {
    "id": 174,
    "word": "库存周转",
    "meaning": "商品流转速度",
    "example": "库存周转率 → 商品流转速度",
    "categoryId": 10,
    "tags": [
      "库存",
      "周转",
      "流转"
    ]
  },
  {
    "id": 175,
    "word": "选品策略",
    "meaning": "商品选择策略",
    "example": "选品策略优化 → 商品选择策略优化",
    "categoryId": 10,
    "tags": [
      "选品",
      "策略",
      "选择"
    ]
  },
  {
    "id": 176,
    "word": "流量运营",
    "meaning": "访客管理",
    "example": "流量运营策略 → 访客管理策略",
    "categoryId": 10,
    "tags": [
      "流量",
      "运营",
      "访客"
    ]
  },
  {
    "id": 177,
    "word": "转化漏斗",
    "meaning": "购买流程",
    "example": "转化漏斗优化 → 购买流程优化",
    "categoryId": 10,
    "tags": [
      "转化",
      "漏斗",
      "购买"
    ]
  },
  {
    "id": 178,
    "word": "直播带货",
    "meaning": "直播销售",
    "example": "直播带货活动 → 直播销售活动",
    "categoryId": 10,
    "tags": [
      "直播",
      "带货",
      "销售"
    ]
  },
  {
    "id": 179,
    "word": "社交电商",
    "meaning": "社交购物",
    "example": "社交电商模式 → 社交购物模式",
    "categoryId": 10,
    "tags": [
      "社交",
      "电商",
      "购物"
    ]
  },
  {
    "id": 180,
    "word": "跨境电商",
    "meaning": "国际网购",
    "example": "跨境电商平台 → 国际网购平台",
    "categoryId": 10,
    "tags": [
      "跨境",
      "电商",
      "国际"
    ]
  },
  {
    "id": 181,
    "word": "全渠道",
    "meaning": "多平台销售",
    "example": "全渠道运营 → 多平台销售运营",
    "categoryId": 10,
    "tags": [
      "全渠道",
      "多平台",
      "销售"
    ]
  },
  {
    "id": 182,
    "word": "C2M",
    "meaning": "用户定制生产",
    "example": "C2M模式 → 用户定制生产模式",
    "categoryId": 10,
    "tags": [
      "C2M",
      "定制",
      "生产"
    ]
  },
  {
    "id": 183,
    "word": "精准推荐",
    "meaning": "个性化推荐",
    "example": "精准推荐算法 → 个性化推荐算法",
    "categoryId": 10,
    "tags": [
      "精准",
      "推荐",
      "个性化"
    ]
  },
  {
    "id": 184,
    "word": "会员体系",
    "meaning": "会员制度",
    "example": "会员体系建设 → 会员制度建设",
    "categoryId": 10,
    "tags": [
      "会员",
      "体系",
      "制度"
    ]
  },
  {
    "id": 185,
    "word": "营销自动化",
    "meaning": "自动营销",
    "example": "营销自动化工具 → 自动营销工具",
    "categoryId": 10,
    "tags": [
      "营销",
      "自动化",
      "自动"
    ]
  },
  {
    "id": 186,
    "word": "RESTful API",
    "meaning": "遵循REST架构的接口",
    "example": "开发RESTful API → 开发符合REST规范的接口",
    "categoryId": 11,
    "tags": [
      "API",
      "REST",
      "接口",
      "后端"
    ]
  },
  {
    "id": 187,
    "word": "微服务架构",
    "meaning": "拆分为多个独立服务",
    "example": "采用微服务架构 → 将系统拆分为多个独立的小服务",
    "categoryId": 11,
    "tags": [
      "微服务",
      "架构",
      "分布式",
      "服务"
    ]
  },
  {
    "id": 188,
    "word": "ORM",
    "meaning": "对象关系映射技术",
    "example": "使用ORM操作数据库 → 使用对象关系映射简化数据库操作",
    "categoryId": 11,
    "tags": [
      "ORM",
      "数据库",
      "映射",
      "对象"
    ]
  },
  {
    "id": 189,
    "word": "SQL优化",
    "meaning": "数据库查询性能优化",
    "example": "进行SQL优化 → 优化数据库查询性能",
    "categoryId": 11,
    "tags": [
      "SQL",
      "优化",
      "数据库",
      "性能"
    ]
  },
  {
    "id": 190,
    "word": "Flask",
    "meaning": "Python轻量级Web框架",
    "example": "基于Flask开发 → 使用Python轻量级框架开发",
    "categoryId": 11,
    "tags": [
      "Flask",
      "Python",
      "框架",
      "Web"
    ]
  },
  {
    "id": 191,
    "word": "FastAPI",
    "meaning": "Python高性能Web框架",
    "example": "使用FastAPI构建 → 用Python高性能框架构建",
    "categoryId": 11,
    "tags": [
      "FastAPI",
      "Python",
      "框架",
      "高性能"
    ]
  },
  {
    "id": 192,
    "word": "Spring Boot",
    "meaning": "Java企业级开发框架",
    "example": "Spring Boot项目 → Java企业级应用项目",
    "categoryId": 11,
    "tags": [
      "Spring Boot",
      "Java",
      "框架",
      "企业级"
    ]
  },
  {
    "id": 193,
    "word": "MongoDB",
    "meaning": "文档型NoSQL数据库",
    "example": "存储到MongoDB → 存储到文档数据库",
    "categoryId": 11,
    "tags": [
      "MongoDB",
      "NoSQL",
      "数据库",
      "文档"
    ]
  },
  {
    "id": 194,
    "word": "Redis",
    "meaning": "内存键值数据库",
    "example": "Redis缓存 → 内存数据库缓存",
    "categoryId": 11,
    "tags": [
      "Redis",
      "缓存",
      "内存",
      "数据库"
    ]
  },
  {
    "id": 195,
    "word": "Elasticsearch",
    "meaning": "全文搜索引擎",
    "example": "Elasticsearch搜索 → 全文搜索引擎",
    "categoryId": 11,
    "tags": [
      "Elasticsearch",
      "搜索",
      "引擎",
      "全文"
    ]
  },
  {
    "id": 196,
    "word": "Vue.js",
    "meaning": "渐进式JavaScript框架",
    "example": "Vue.js开发 → 使用渐进式JS框架开发",
    "categoryId": 12,
    "tags": [
      "Vue",
      "JavaScript",
      "框架",
      "前端"
    ]
  },
  {
    "id": 197,
    "word": "React",
    "meaning": "基于组件的UI库",
    "example": "React组件 → 基于组件的用户界面",
    "categoryId": 12,
    "tags": [
      "React",
      "组件",
      "UI",
      "前端"
    ]
  },
  {
    "id": 198,
    "word": "Angular",
    "meaning": "完整的前端框架",
    "example": "Angular应用 → 完整前端框架应用",
    "categoryId": 12,
    "tags": [
      "Angular",
      "框架",
      "前端",
      "完整"
    ]
  },
  {
    "id": 199,
    "word": "Vuex",
    "meaning": "Vue状态管理库",
    "example": "Vuex状态管理 → Vue数据状态管理",
    "categoryId": 12,
    "tags": [
      "Vuex",
      "Vue",
      "状态管理",
      "数据"
    ]
  },
  {
    "id": 200,
    "word": "Redux",
    "meaning": "JavaScript状态容器",
    "example": "Redux管理状态 → JS应用状态管理",
    "categoryId": 12,
    "tags": [
      "Redux",
      "JavaScript",
      "状态",
      "管理"
    ]
  },
  {
    "id": 201,
    "word": "Webpack",
    "meaning": "模块打包工具",
    "example": "Webpack打包 → 前端模块打包",
    "categoryId": 12,
    "tags": [
      "Webpack",
      "打包",
      "模块",
      "构建"
    ]
  },
  {
    "id": 202,
    "word": "Vite",
    "meaning": "新一代构建工具",
    "example": "Vite构建 → 快速前端构建工具",
    "categoryId": 12,
    "tags": [
      "Vite",
      "构建",
      "工具",
      "快速"
    ]
  },
  {
    "id": 203,
    "word": "Element UI",
    "meaning": "Vue桌面端组件库",
    "example": "Element UI组件 → Vue桌面端UI组件",
    "categoryId": 12,
    "tags": [
      "Element UI",
      "Vue",
      "组件库",
      "UI"
    ]
  },
  {
    "id": 204,
    "word": "Ant Design",
    "meaning": "React企业级组件库",
    "example": "Ant Design设计 → React企业级UI设计",
    "categoryId": 12,
    "tags": [
      "Ant Design",
      "React",
      "组件库",
      "企业级"
    ]
  },
  {
    "id": 205,
    "word": "Sass/SCSS",
    "meaning": "CSS预处理器",
    "example": "Sass样式 → CSS预处理器样式",
    "categoryId": 12,
    "tags": [
      "Sass",
      "SCSS",
      "CSS",
      "预处理器"
    ]
  },
  {
    "id": 206,
    "word": "Docker",
    "meaning": "容器化技术",
    "example": "Docker部署 → 容器化部署",
    "categoryId": 13,
    "tags": [
      "Docker",
      "容器",
      "部署",
      "虚拟化"
    ]
  },
  {
    "id": 207,
    "word": "Kubernetes",
    "meaning": "容器编排平台",
    "example": "K8s集群 → 容器编排集群",
    "categoryId": 13,
    "tags": [
      "Kubernetes",
      "K8s",
      "编排",
      "集群"
    ]
  },
  {
    "id": 208,
    "word": "CI/CD",
    "meaning": "持续集成持续部署",
    "example": "CI/CD流水线 → 持续集成部署流水线",
    "categoryId": 13,
    "tags": [
      "CI/CD",
      "持续集成",
      "部署",
      "自动化"
    ]
  },
  {
    "id": 209,
    "word": "Jenkins",
    "meaning": "自动化构建工具",
    "example": "Jenkins构建 → 自动化构建部署",
    "categoryId": 13,
    "tags": [
      "Jenkins",
      "构建",
      "自动化",
      "工具"
    ]
  },
  {
    "id": 210,
    "word": "GitLab CI",
    "meaning": "GitLab持续集成",
    "example": "GitLab CI流程 → GitLab自动化流程",
    "categoryId": 13,
    "tags": [
      "GitLab CI",
      "持续集成",
      "GitLab",
      "自动化"
    ]
  },
  {
    "id": 211,
    "word": "AWS",
    "meaning": "亚马逊云服务",
    "example": "部署到AWS → 部署到亚马逊云",
    "categoryId": 13,
    "tags": [
      "AWS",
      "云服务",
      "亚马逊",
      "云计算"
    ]
  },
  {
    "id": 212,
    "word": "阿里云",
    "meaning": "阿里巴巴云服务",
    "example": "阿里云服务器 → 阿里巴巴云服务器",
    "categoryId": 13,
    "tags": [
      "阿里云",
      "云服务",
      "阿里巴巴",
      "服务器"
    ]
  },
  {
    "id": 213,
    "word": "Terraform",
    "meaning": "基础设施即代码",
    "example": "Terraform管理 → 代码化管理基础设施",
    "categoryId": 13,
    "tags": [
      "Terraform",
      "基础设施",
      "代码",
      "IaC"
    ]
  },
  {
    "id": 214,
    "word": "Hadoop",
    "meaning": "大数据处理框架",
    "example": "Hadoop集群 → 分布式大数据集群",
    "categoryId": 14,
    "tags": [
      "Hadoop",
      "大数据",
      "分布式",
      "框架"
    ]
  },
  {
    "id": 215,
    "word": "Spark",
    "meaning": "大数据分析引擎",
    "example": "Spark计算 → 大数据分析计算",
    "categoryId": 14,
    "tags": [
      "Spark",
      "大数据",
      "分析",
      "计算"
    ]
  },
  {
    "id": 216,
    "word": "Flink",
    "meaning": "流处理计算引擎",
    "example": "Flink流处理 → 实时流数据处理",
    "categoryId": 14,
    "tags": [
      "Flink",
      "流处理",
      "实时",
      "计算"
    ]
  },
  {
    "id": 217,
    "word": "Tableau",
    "meaning": "商业智能可视化工具",
    "example": "Tableau报表 → 商业智能可视化报表",
    "categoryId": 14,
    "tags": [
      "Tableau",
      "可视化",
      "商业智能",
      "BI"
    ]
  },
  {
    "id": 218,
    "word": "Power BI",
    "meaning": "微软商业分析服务",
    "example": "Power BI分析 → 微软商业数据分析",
    "categoryId": 14,
    "tags": [
      "Power BI",
      "微软",
      "商业分析",
      "BI"
    ]
  },
  {
    "id": 219,
    "word": "ECharts",
    "meaning": "JavaScript数据可视化库",
    "example": "ECharts图表 → JS数据可视化图表",
    "categoryId": 14,
    "tags": [
      "ECharts",
      "JavaScript",
      "可视化",
      "图表"
    ],
    "brief": "数据可视化图表库"
  },
  {
    "id": 220,
    "word": "D3.js",
    "meaning": "数据驱动文档库",
    "example": "D3.js可视化 → 数据驱动的可视化",
    "categoryId": 14,
    "tags": [
      "D3.js",
      "数据驱动",
      "可视化",
      "JavaScript"
    ]
  },
  {
    "id": 221,
    "word": "TensorFlow",
    "meaning": "谷歌机器学习平台",
    "example": "TensorFlow模型 → 谷歌机器学习模型",
    "categoryId": 6,
    "tags": [
      "TensorFlow",
      "谷歌",
      "机器学习",
      "平台"
    ]
  },
  {
    "id": 222,
    "word": "PyTorch",
    "meaning": "Facebook深度学习框架",
    "example": "PyTorch训练 → Facebook深度学习训练",
    "categoryId": 6,
    "tags": [
      "PyTorch",
      "Facebook",
      "深度学习",
      "框架"
    ]
  },
  {
    "id": 223,
    "word": "BERT",
    "meaning": "双向编码器语言模型",
    "example": "BERT模型 → 双向编码器语言模型",
    "categoryId": 6,
    "tags": [
      "BERT",
      "语言模型",
      "编码器",
      "双向"
    ]
  },
  {
    "id": 224,
    "word": "NLP",
    "meaning": "自然语言处理技术",
    "example": "NLP技术 → 自然语言处理技术",
    "categoryId": 6,
    "tags": [
      "NLP",
      "自然语言",
      "处理",
      "技术"
    ]
  },
  {
    "id": 225,
    "word": "Scikit-learn",
    "meaning": "机器学习工具库",
    "example": "Scikit-learn算法 → 机器学习工具库算法",
    "categoryId": 6,
    "tags": [
      "Scikit-learn",
      "机器学习",
      "工具库",
      "Python"
    ]
  },
  {
    "id": 226,
    "word": "Scrum",
    "meaning": "敏捷迭代开发框架",
    "example": "Scrum流程 → 敏捷迭代开发流程",
    "categoryId": 7,
    "tags": [
      "Scrum",
      "敏捷",
      "迭代",
      "开发框架"
    ]
  },
  {
    "id": 227,
    "word": "设计模式",
    "meaning": "软件设计模式",
    "example": "应用设计模式 → 应用软件设计模式",
    "categoryId": 7,
    "tags": [
      "设计模式",
      "软件",
      "设计",
      "模式"
    ]
  },
  {
    "id": 228,
    "word": "Code Review",
    "meaning": "代码质量审查",
    "example": "Code Review → 代码质量审查",
    "categoryId": 7,
    "tags": [
      "Code Review",
      "代码",
      "审查",
      "质量"
    ]
  },
  {
    "id": 229,
    "word": "静态代码分析",
    "meaning": "代码质量检测",
    "example": "静态代码分析 → 代码质量检测",
    "categoryId": 7,
    "tags": [
      "静态分析",
      "代码",
      "质量",
      "检测"
    ]
  },
  {
    "id": 230,
    "word": "SonarQube",
    "meaning": "代码质量管理平台",
    "example": "SonarQube检测 → 代码质量管理平台检测",
    "categoryId": 7,
    "tags": [
      "SonarQube",
      "代码质量",
      "管理",
      "平台"
    ]
  },
  {
    "id": 232,
    "word": "情绪价值",
    "meaning": "提供情绪支持与陪伴",
    "example": "提供情绪价值 → 提供情绪支持与陪伴",
    "categoryId": 15,
    "tags": [
      "情绪",
      "价值",
      "支持",
      "网络流行语"
    ]
  },
  {
    "id": 240,
    "word": "AI Agent",
    "meaning": "人工智能智能体，能自主完成复杂任务",
    "example": "开发AI Agent → 开发能自主行动的智能体",
    "categoryId": 6,
    "tags": [
      "AI",
      "Agent",
      "智能体",
      "AI"
    ]
  },
  {
    "id": 244,
    "word": "MCP",
    "meaning": "Model Context Protocol的缩写，Anthropic提出的AI工具接入开放协议，被称为AI世界的USB-C接口，是2026年AI Agent领域最核心的基础设施级协议",
    "example": "接入MCP协议 → 让AI助手能调用外部工具和数据",
    "categoryId": 6,
    "tags": [
      "MCP",
      "协议",
      "AI生态",
      "AI协议",
      "Anthropic",
      "Agent",
      "2026热词"
    ],
    "brief": "模型上下文协议"
  },
  {
    "id": 245,
    "word": "Function Call",
    "meaning": "函数调用，AI调用外部工具的能力",
    "example": "Function Call功能 → AI调用外部函数的能力",
    "categoryId": 6,
    "tags": [
      "Function Call",
      "函数调用",
      "AI"
    ]
  },
  {
    "id": 246,
    "word": "Agentic RAG",
    "meaning": "智能体增强的RAG，自主决策检索策略",
    "example": "Agentic RAG系统 → 智能体增强的检索系统",
    "categoryId": 6,
    "tags": [
      "Agentic RAG",
      "智能体",
      "RAG",
      "AI"
    ]
  },
  {
    "id": 247,
    "word": "GraphRAG",
    "meaning": "知识图谱增强的RAG",
    "example": "GraphRAG方法 → 知识图谱增强检索方法",
    "categoryId": 6,
    "tags": [
      "GraphRAG",
      "知识图谱",
      "RAG",
      "AI"
    ]
  },
  {
    "id": 248,
    "word": "长上下文",
    "meaning": "大语言模型的长文本处理能力",
    "example": "长上下文窗口 → 模型能处理的超长文本范围",
    "categoryId": 6,
    "tags": [
      "长上下文",
      "上下文窗口",
      "AI"
    ]
  },
  {
    "id": 249,
    "word": "世界模型",
    "meaning": "模拟真实世界的AI系统",
    "example": "世界模型重构认知 → AI模拟真实世界",
    "categoryId": 6,
    "tags": [
      "世界模型",
      "模拟",
      "AI"
    ]
  },
  {
    "id": 250,
    "word": "慢推理",
    "meaning": "AI深度思考后再回答的模式",
    "example": "慢推理模型 → 先思考再回答的AI模型",
    "categoryId": 6,
    "tags": [
      "慢推理",
      "深度思考",
      "AI"
    ]
  },
  {
    "id": 251,
    "word": "端云协同",
    "meaning": "终端与云端协同的AI计算模式",
    "example": "端云协同落地 → 本地与云端配合的AI部署",
    "categoryId": 6,
    "tags": [
      "端云协同",
      "边缘计算",
      "AI"
    ]
  },
  {
    "id": 253,
    "word": "AI垃圾",
    "meaning": "低质量、重复性强的AI生成内容",
    "example": "识别AI垃圾 → 识别低质量AI生成内容",
    "categoryId": 6,
    "tags": [
      "AI糟粕",
      "AI污染",
      "网络流行语"
    ]
  },
  {
    "id": 254,
    "word": "Vibe Coding",
    "meaning": "氛围编程（AI辅助编程），用自然语言描述需求让AI生成代码，2025柯林斯词典年度词汇",
    "example": "用Vibe Coding方式开发 → 用自然语言描述需求，AI生成代码",
    "categoryId": 6,
    "tags": [
      "Vibe Coding",
      "AI编程",
      "开发",
      "自然语言",
      "2025热词"
    ],
    "brief": "氛围编程"
  },
  {
    "id": 256,
    "word": "物理AI",
    "meaning": "能理解和交互物理世界的AI系统",
    "example": "物理AI时代 → AI理解物理世界的时代",
    "categoryId": 6,
    "tags": [
      "物理AI",
      "世界模型",
      "AI"
    ]
  },
  {
    "id": 259,
    "word": "DeepSeek",
    "meaning": "中国本土大模型系列，以低成本高性能著称",
    "example": "DeepSeek开源模型 → 中国本土大语言模型",
    "categoryId": 6,
    "tags": [
      "DeepSeek",
      "大模型",
      "AI"
    ]
  },
  {
    "id": 260,
    "word": "推理模型",
    "meaning": "通过多步拆解与连续推演处理复杂问题的AI模型",
    "example": "推理模型崛起 → 能深度思考的AI模型崛起",
    "categoryId": 6,
    "tags": [
      "推理",
      "慢思考",
      "AI"
    ],
    "brief": "会多步推理的AI模型"
  },
  {
    "id": 261,
    "word": "LLMOps",
    "meaning": "大语言模型运维，包括部署、监控、优化等",
    "example": "LLMOps流程 → 大模型运维流程",
    "categoryId": 6,
    "tags": [
      "LLMOps",
      "运维",
      "AI"
    ]
  },
  {
    "id": 262,
    "word": "AI Coding",
    "meaning": "AI辅助编程，用AI工具协助写代码",
    "example": "AI Coding工具 → AI编程辅助工具",
    "categoryId": 6,
    "tags": [
      "AI编程",
      "辅助开发",
      "工具"
    ]
  },
  {
    "id": 263,
    "word": "蒸馏",
    "meaning": "让大模型当导师，小模型当学生，压缩知识",
    "example": "模型蒸馏 → 将大模型知识压缩到小模型",
    "categoryId": 6,
    "tags": [
      "蒸馏",
      "模型压缩",
      "AI"
    ]
  },
  {
    "id": 264,
    "word": "涌现能力",
    "meaning": "模型规模变大后突然具备的新能力",
    "example": "涌现能力出现 → 模型突然出现新能力",
    "categoryId": 6,
    "tags": [
      "涌现",
      "emergent",
      "AI"
    ]
  },
  {
    "id": 265,
    "word": "思维链",
    "meaning": "AI推理时的逐步思考过程",
    "example": "思维链提示 → 让AI展示推理过程",
    "categoryId": 6,
    "tags": [
      "思维链",
      "推理",
      "CoT"
    ]
  },
  {
    "id": 266,
    "word": "混合专家",
    "meaning": "MoE架构，只激活部分专家网络处理请求",
    "example": "混合专家模型 → MoE架构模型",
    "categoryId": 6,
    "tags": [
      "MoE",
      "混合专家",
      "架构"
    ]
  },
  {
    "id": 268,
    "word": "主理人",
    "meaning": "能将自身特质与品牌结合的负责人",
    "example": "品牌主理人 → 品牌负责人/决策者",
    "categoryId": 15,
    "tags": [
      "主理人",
      "品牌",
      "创业者"
    ]
  },
  {
    "id": 269,
    "word": "邪修",
    "meaning": "不走寻常路的野路子高效方法",
    "example": "邪修做饭 → 用离谱但高效的方法做饭",
    "categoryId": 15,
    "tags": [
      "邪修",
      "野路子",
      "网络流行语"
    ]
  },
  {
    "id": 270,
    "word": "拼好×",
    "meaning": "通过拼单组合追求高性价比的态度",
    "example": "拼好床 → 合租床铺共享资源",
    "categoryId": 15,
    "tags": [
      "拼好",
      "性价比",
      "协作"
    ]
  },
  {
    "id": 271,
    "word": "内卷",
    "meaning": "在有限环境下无限竞争，收益不变但付出加倍",
    "example": "职场内卷 → 职场过度竞争",
    "categoryId": 5,
    "tags": [
      "内卷",
      "竞争",
      "职场"
    ]
  },
  {
    "id": 272,
    "word": "躺平",
    "meaning": "放弃过度竞争，选择低欲望的生活方式",
    "example": "选择躺平 → 选择不卷了",
    "categoryId": 5,
    "tags": [
      "躺平",
      "摆烂",
      "生活态度"
    ]
  },
  {
    "id": 273,
    "word": "摸鱼",
    "meaning": "工作中偷懒、消极怠工",
    "example": "上班摸鱼 → 工作时间偷懒",
    "categoryId": 5,
    "tags": [
      "摸鱼",
      "偷懒",
      "职场"
    ]
  },
  {
    "id": 274,
    "word": "割韭菜",
    "meaning": "被利用、被收割，常见于投资或职场中被上层压榨",
    "example": "被割韭菜 → 被当成韭菜收割",
    "categoryId": 5,
    "tags": [
      "割韭菜",
      "被坑",
      "网络流行语"
    ]
  },
  {
    "id": 275,
    "word": "PUA",
    "meaning": "情感操控或职场打压的精神控制手段",
    "example": "被PUA → 被精神操控",
    "categoryId": 5,
    "tags": [
      "PUA",
      "情感操控",
      "职场"
    ],
    "brief": "精神操控与打压"
  },
  {
    "id": 276,
    "word": "抽象力",
    "meaning": "2026年小红书十大热词之一，指万物皆可梗、歌舞表情包文学三大玩法速通抽象世界的能力，当代年轻人用玩梗消解压力的生存智慧",
    "example": "这人太有抽象力了 → 这人玩梗能力太强了",
    "categoryId": 15,
    "tags": [
      "抽象力",
      "玩梗",
      "2026热词",
      "热梗"
    ],
    "brief": "玩梗解构能力"
  },
  {
    "id": 279,
    "word": "硬控",
    "meaning": "被强烈吸引无法自拔，像被游戏技能控制一样",
    "example": "被这个视频硬控了 → 沉迷这个视频停不下来",
    "categoryId": 15,
    "tags": [
      "硬控",
      "沉迷",
      "网络流行语"
    ]
  },
  {
    "id": 280,
    "word": "晕碳",
    "meaning": "摄入大量碳水后犯困、想睡觉",
    "example": "吃完米饭晕碳 → 吃碳水后犯困",
    "categoryId": 15,
    "tags": [
      "晕碳",
      "碳水",
      "生活"
    ]
  },
  {
    "id": 281,
    "word": "低山臭水遇知音",
    "meaning": "高山流水遇知音的反差改写版，更接地气",
    "example": "低山臭水遇知音 → 普通人找到懂自己的人",
    "categoryId": 15,
    "tags": [
      "低山臭水",
      "知音",
      "反差"
    ]
  },
  {
    "id": 282,
    "word": "不知道我的身材很曼妙",
    "meaning": "淘宝神回复，指答非所问或自信满满的态度",
    "example": "显胯宽吗?不知道，我的身材很曼妙 → 自信又可爱的回答",
    "categoryId": 15,
    "tags": [
      "曼妙",
      "淘宝神回复",
      "自信"
    ]
  },
  {
    "id": 284,
    "word": "超顶",
    "meaning": "形容最高级、最棒、极致的品质",
    "example": "用料最顶 → 用料最好最顶级",
    "categoryId": 15,
    "tags": [
      "超顶",
      "最好",
      "网络流行语"
    ]
  },
  {
    "id": 285,
    "word": "佛系",
    "meaning": "对事情不争不抢、顺其自然的态度",
    "example": "佛系养生 → 不刻意追求的养生方式",
    "categoryId": 15,
    "tags": [
      "佛系",
      "顺其自然",
      "生活态度"
    ]
  },
  {
    "id": 286,
    "word": "A2A",
    "meaning": "Agent-to-Agent Protocol的缩写，Google提出的智能体间通信协议，让不同AI Agent之间能进行对话式协作，与MCP互补",
    "example": "A2A协议让Agent互联 → 不同AI助手之间可以互相通信了",
    "categoryId": 6,
    "tags": [
      "A2A",
      "Agent",
      "协议",
      "AI",
      "Agent协议",
      "Google",
      "智能体通信",
      "2026热词"
    ],
    "brief": "智能体互通协议"
  },
  {
    "id": 287,
    "word": "VLA",
    "meaning": "视觉-语言-动作模型",
    "example": "VLA模型 → 视觉语言动作统一模型",
    "categoryId": 6,
    "tags": [
      "VLA",
      "具身智能",
      "机器人"
    ]
  },
  {
    "id": 288,
    "word": "SLM",
    "meaning": "小语言模型，参数较少但专精的AI模型",
    "example": "SLM部署 → 小型语言模型本地部署",
    "categoryId": 6,
    "tags": [
      "SLM",
      "小模型",
      "AI"
    ]
  },
  {
    "id": 289,
    "word": "超级个体",
    "meaning": "借助AI工具独立完成完整商业闭环的个人",
    "example": "超级个体崛起 → 利用AI独立创业的个人创业者增多",
    "categoryId": 6,
    "tags": [
      "超级个体",
      "AI创业",
      "个人IP"
    ],
    "brief": "一人顶一个团队"
  },
  {
    "id": 290,
    "word": "AI眼镜",
    "meaning": "集成AI能力的智能眼镜",
    "example": "Meta AI眼镜 → 带摄像头和语音助手的智能眼镜",
    "categoryId": 6,
    "tags": [
      "AI眼镜",
      "可穿戴",
      "AR"
    ]
  },
  {
    "id": 291,
    "word": "健康寿命",
    "meaning": "在良好状态下生活的年限",
    "example": "延长健康寿命 → 提升晚年生活质量",
    "categoryId": 15,
    "tags": [
      "健康",
      "寿命",
      "生活方式"
    ]
  },
  {
    "id": 292,
    "word": "空间智能",
    "meaning": "AI理解和推理三维空间的能力",
    "example": "空间智能突破 → AI对3D世界的理解飞跃",
    "categoryId": 6,
    "tags": [
      "空间智能",
      "具身智能",
      "AI"
    ]
  },
  {
    "id": 293,
    "word": "YYDS",
    "meaning": "永远的神，表示极度赞美",
    "example": "这个产品YYDS → 这个产品太厉害了",
    "categoryId": 15,
    "tags": [
      "YYDS",
      "永远的神",
      "网络流行语"
    ]
  },
  {
    "id": 294,
    "word": "Ven",
    "meaning": "把「问」发成「ven」，大陆口音的趣味空耳",
    "example": "你venty真多 → 你问题真多",
    "categoryId": 15,
    "tags": [
      "Ven",
      "空耳",
      "网络流行语"
    ]
  },
  {
    "id": 295,
    "word": "与眾分",
    "meaning": "与眾不同的缩写，形容独特",
    "example": "这个观点很与眾分 → 这个观点很独特",
    "categoryId": 15,
    "tags": [
      "与眾分",
      "独特",
      "网络流行语"
    ]
  },
  {
    "id": 296,
    "word": "后门有车",
    "meaning": "过于认真提醒却闹乌龙的场景",
    "example": "后门有车这句话 → 过度紧张提醒却搞错情况的梗",
    "categoryId": 15,
    "tags": [
      "后门有车",
      "乌龙",
      "网络梗"
    ]
  },
  {
    "id": 298,
    "word": "少癲大癲",
    "meaning": "形容疯狂程度，少癲是轻微夸张，大癲是极度夸张",
    "example": "这件事少癲 → 这件事有点夸张",
    "categoryId": 15,
    "tags": [
      "少癲大癲",
      "夸张",
      "粤语"
    ]
  },
  {
    "id": 299,
    "word": "自肥",
    "meaning": "以不正当手段图利自己，谋取私利",
    "example": "自肥可耻但很有用 → 为自己谋利虽不光彩但很爽",
    "categoryId": 15,
    "tags": [
      "自肥",
      "香港",
      "网络流行语"
    ]
  },
  {
    "id": 300,
    "word": "触爛",
    "meaning": "强烈赞同，爛是「true」的谐音，触即认同",
    "example": "触爛 → 说得太对了，完全同意",
    "categoryId": 15,
    "tags": [
      "触爛",
      "认同",
      "粤语"
    ]
  },
  {
    "id": 301,
    "word": "張中和",
    "meaning": "「尊重我」的谐音，期望对方给予尊重",
    "example": "張中和一下好吗 → 请给我一点尊重好吗",
    "categoryId": 15,
    "tags": [
      "張中和",
      "粤语",
      "网络流行语"
    ]
  },
  {
    "id": 303,
    "word": "脆",
    "meaning": "Threads社交平台的代称",
    "example": "在脆上看到这个帖子 → 在Threads上看到这个帖子",
    "categoryId": 15,
    "tags": [
      "脆",
      "Threads",
      "社交平台"
    ]
  },
  {
    "id": 304,
    "word": "SLDPK",
    "meaning": "粤语俚语，意为笑到离谱、笑翻天",
    "example": "笑到我SLDPK → 笑到我快不行了",
    "categoryId": 15,
    "tags": [
      "SLDPK",
      "粤语",
      "爆笑"
    ]
  },
  {
    "id": 305,
    "word": "世一",
    "meaning": "世界第一的缩写，用于表达极度的赞美和崇拜",
    "example": "我的偶像世一 → 我的偶像天下第一",
    "categoryId": 15,
    "tags": [
      "世一",
      "世界第一",
      "网络流行语"
    ]
  },
  {
    "id": 307,
    "word": "LARPing",
    "meaning": "Live Action Role Playing（实况角色扮演），泛指扮演某种身份或生活方式",
    "example": "她在LARPing一种自律精致女孩的人设 → 她在扮演一种自律精致女孩的形象",
    "categoryId": 15,
    "tags": [
      "LARPing",
      "扮演",
      "人设"
    ],
    "brief": "现实版角色扮演"
  },
  {
    "id": 308,
    "word": "Mogging",
    "meaning": "在外貌、气质或条件上形成压倒性优势，让对方相形见绌",
    "example": "他直接在Mogging全场 → 他直接碾压全场",
    "categoryId": 15,
    "tags": [
      "Mogging",
      "碾压",
      "气场"
    ]
  },
  {
    "id": 309,
    "word": "Flow State",
    "meaning": "心流状态，指极度专注投入眼前事物，获得愉悦和自我效能感",
    "example": "别打扰我，我在Flow State → 别打扰我，我在专注状态",
    "categoryId": 15,
    "tags": [
      "Flow State",
      "心流",
      "专注"
    ]
  },
  {
    "id": 310,
    "word": "Moot",
    "meaning": "社群平台上互相关注的用户，介于网友和真实朋友之间",
    "example": "我的moots → 我互关的好友",
    "categoryId": 15,
    "tags": [
      "Moot",
      "互关",
      "社交"
    ]
  },
  {
    "id": 311,
    "word": "Lowkey genuinely",
    "meaning": "低调地、真心地，暗含不想张扬的情绪",
    "example": "I lowkey genuinely think it's great → 我真心觉得超棒",
    "categoryId": 15,
    "tags": [
      "Lowkey genuinely",
      "真心",
      "低调"
    ]
  },
  {
    "id": 313,
    "word": "AGI",
    "meaning": "通用人工智能，具备像人类一样处理广泛任务的能力",
    "example": "迈向AGI → 朝着通用人工智能发展",
    "categoryId": 6,
    "tags": [
      "AGI",
      "通用人工智能",
      "AI"
    ]
  },
  {
    "id": 314,
    "word": "智性沸腾",
    "meaning": "形容互联网上高质量智力讨论热烈沸腾的状态，如AI技术话题引发全网热烈讨论思考的氛围，2026年B站报告将其列为年轻群体的价值消费趋势",
    "example": "这个话题让人智性沸腾 → 这个话题引发热烈讨论思考",
    "categoryId": 15,
    "tags": [
      "智性沸腾",
      "Z世代",
      "消费趋势",
      "高质量讨论",
      "互联网热词",
      "2026热词"
    ],
    "brief": "热烈讨论思考"
  },
  {
    "id": 316,
    "word": "合成数据",
    "meaning": "人工生成的训练数据，用于解决真实数据不足或版权问题",
    "example": "合成数据训练 → 用AI生成的数据训练模型",
    "categoryId": 6,
    "tags": [
      "合成数据",
      "训练数据",
      "AI"
    ]
  },
  {
    "id": 317,
    "word": "AI原住民",
    "meaning": "从小接触AI工具长大的Z世代人群",
    "example": "AI原住民习惯用AI写作业、做PPT → 从小就用AI工具的Z世代",
    "categoryId": 6,
    "tags": [
      "AI原住民",
      "Z世代",
      "网络流行语"
    ],
    "brief": "从小用AI长大的一代"
  },
  {
    "id": 318,
    "word": "搭子经济",
    "meaning": "基于特定场景寻找临时伙伴的消费模式",
    "example": "搭子经济兴起 → 找饭搭子、旅游搭子等临时伙伴的消费方式流行",
    "categoryId": 10,
    "tags": [
      "搭子",
      "经济",
      "消费"
    ],
    "brief": "找临时伙伴的消费模式"
  },
  {
    "id": 319,
    "word": "电子布洛芬",
    "meaning": "能让人快速开心的短视频/音乐/综艺",
    "example": "刷短视频是电子布洛芬 → 能快速止痛的娱乐内容",
    "categoryId": 15,
    "tags": [
      "电子布洛芬",
      "娱乐",
      "网络流行语"
    ],
    "brief": "快速解压的快乐内容"
  },
  {
    "id": 320,
    "word": "反向消费",
    "meaning": "年轻人追求性价比、拒绝消费主义的趋势",
    "example": "反向消费兴起 → 年轻人开始追求性价比、拒绝攀比消费",
    "categoryId": 10,
    "tags": [
      "反向消费",
      "理性消费",
      "趋势"
    ]
  },
  {
    "id": 321,
    "word": "数字游民",
    "meaning": "利用互联网远程工作、边旅行边工作的人群",
    "example": "成为数字游民 → 利用网络远程工作，边旅行边赚钱",
    "categoryId": 15,
    "tags": [
      "数字游民",
      "远程工作",
      "生活方式"
    ]
  },
  {
    "id": 322,
    "word": "赛博养生",
    "meaning": "用智能设备和App管理健康的新型养生方式",
    "example": "赛博养生流行 → 用智能设备管理健康成新趋势",
    "categoryId": 15,
    "tags": [
      "赛博养生",
      "健康管理",
      "网络流行语"
    ],
    "brief": "用智能设备管理健康"
  },
  {
    "id": 323,
    "word": "松弛感",
    "meaning": "追求从容不迫、不内耗的生活态度",
    "example": "保持松弛感 → 保持从容不焦虑的状态",
    "categoryId": 15,
    "tags": [
      "松弛感",
      "生活态度",
      "网络流行语"
    ]
  },
  {
    "id": 324,
    "word": "AI幻觉",
    "meaning": "AI模型生成看似合理但实际错误的信息",
    "example": "大模型出现AI幻觉 → AI一本正经地胡说八道",
    "categoryId": 6,
    "tags": [
      "AI幻觉",
      "大模型",
      "AI"
    ],
    "brief": "AI一本正经地胡说"
  },
  {
    "id": 325,
    "word": "公园20分钟效应",
    "meaning": "每天在公园待20分钟即可显著减压的现象",
    "example": "公园20分钟效应 → 在公园待20分钟能有效减压",
    "categoryId": 15,
    "tags": [
      "公园20分钟",
      "减压",
      "生活方式"
    ],
    "brief": "公园待20分钟就减压"
  },
  {
    "id": 326,
    "word": "数据飞轮",
    "meaning": "数据越多→模型越好→用户越多→数据越多的正循环",
    "example": "构建数据飞轮 → 形成数据驱动的正向增长循环",
    "categoryId": 6,
    "tags": [
      "数据飞轮",
      "AI",
      "正循环"
    ],
    "brief": "数据驱动正循环"
  },
  {
    "id": 327,
    "word": "断舍离2.0",
    "meaning": "新一代极简主义，强调在数字时代放下手机、减少信息焦虑",
    "example": "断舍离2.0时代 → 从物质极简到数字极简的升级",
    "categoryId": 15,
    "tags": [
      "断舍离",
      "极简主义",
      "数字排毒"
    ]
  },
  {
    "id": 328,
    "word": "Context Engineering",
    "meaning": "上下文工程，给AI足够的信息让它干对的事",
    "example": "Context Engineering优化 → 优化AI的上下文输入",
    "categoryId": 6,
    "tags": [
      "Context Engineering",
      "上下文工程",
      "AI"
    ]
  },
  {
    "id": 329,
    "word": "Intent-driven Computing",
    "meaning": "意图驱动计算，AI从被动回答转向主动理解意图并执行",
    "example": "Intent-driven Computing时代 → AI能理解意图并主动规划执行",
    "categoryId": 6,
    "tags": [
      "Intent-driven",
      "意图计算",
      "AI"
    ]
  },
  {
    "id": 331,
    "word": "算了",
    "meaning": "彻底放弃、不再挣扎的心态，继躺平后更深层的精神退出",
    "example": "面对求职失败，算了，不找了 → 直接放弃，不再尝试",
    "categoryId": 15,
    "tags": [
      "算了",
      "躺平",
      "社会现象",
      "2026热词"
    ]
  },
  {
    "id": 332,
    "word": "GEO",
    "meaning": "生成式引擎优化，AI搜索时代的内容优化策略",
    "example": "GEO优化 → 针对AI搜索结果的内容优化",
    "categoryId": 6,
    "tags": [
      "GEO",
      "AI搜索",
      "SEO",
      "内容优化"
    ]
  },
  {
    "id": 333,
    "word": "活人感",
    "meaning": "2026年小红书十大热词之一，指有温度有气血真实鲜活的生命力表达，区别于悬浮的完美人设，追求真实感",
    "example": "活人感满满 → 很有生命力很真实",
    "categoryId": 15,
    "tags": [
      "活人感",
      "真实",
      "2025流行语",
      "咬文嚼字",
      "真实感",
      "生命力",
      "2026热词"
    ],
    "brief": "有温度的真实感"
  },
  {
    "id": 334,
    "word": "赛博对账",
    "meaning": "在网上核对彼此的生活细节、成长经历和共同记忆",
    "example": "赛博对账开始了 → 网友开始互相核对彼此的经历",
    "categoryId": 15,
    "tags": [
      "赛博对账",
      "网络社交",
      "2025流行语",
      "咬文嚼字"
    ]
  },
  {
    "id": 335,
    "word": "预制xx",
    "meaning": "像预制菜一样敷衍、不走心的批量制作版本",
    "example": "预制朋友圈 → 批量精修、套路化发布的朋友圈内容",
    "categoryId": 15,
    "tags": [
      "预制",
      "敷衍",
      "2025流行语",
      "咬文嚼字"
    ]
  },
  {
    "id": 336,
    "word": "敬自己一杯",
    "meaning": "对努力与平凡的接纳，一种温柔的自我和解表达",
    "example": "敬自己一杯 → 干杯，为自己的付出和坚持",
    "categoryId": 15,
    "tags": [
      "敬自己一杯",
      "自我和解",
      "2025流行语"
    ]
  },
  {
    "id": 337,
    "word": "班味",
    "meaning": "一个人疲惫、机械、被上班状态浸透后的整体气质",
    "example": "上班上出班味了 → 被工作磨得没有精气神",
    "categoryId": 5,
    "tags": [
      "班味",
      "打工人",
      "职场",
      "社会现象"
    ]
  },
  {
    "id": 338,
    "word": "xx基础,xx就不基础",
    "meaning": "调侃理想与现实落差的万能句式，指顾此失彼",
    "example": "上班基础，下班就不基础 → 上班累成狗，下班只想躺",
    "categoryId": 15,
    "tags": [
      "反差",
      "自嘲",
      "2025流行语",
      "句式"
    ]
  },
  {
    "id": 339,
    "word": "谷子",
    "meaning": "二次元/IP周边产品，即Goods(商品)的音译",
    "example": "买谷子 → 买二次元周边",
    "categoryId": 15,
    "tags": [
      "谷子",
      "二次元",
      "周边",
      "2025流行语",
      "咬文嚼字"
    ]
  },
  {
    "id": 341,
    "word": "助我破鼎",
    "meaning": "源自《哪吒之魔童闹海》经典台词，后被网友用来自我打气",
    "example": "助我破鼎! → 给自己加油打气的热血表达",
    "categoryId": 15,
    "tags": [
      "助我破鼎",
      "哪吒",
      "打气",
      "2025流行语",
      "网络流行语"
    ]
  },
  {
    "id": 342,
    "word": "不讲不讲",
    "meaning": "2025年度十大网络流行语，带有拒绝沟通、拒绝内耗的摆烂式幽默",
    "example": "不讲不讲，我不想听 → 拒绝被卷入、拒绝消耗的表达",
    "categoryId": 15,
    "tags": [
      "不讲不讲",
      "摆烂",
      "拒绝",
      "2025流行语",
      "网络流行语"
    ],
    "brief": "拒绝沟通"
  },
  {
    "id": 343,
    "word": "绝摆",
    "meaning": "闽南语「很棒、厉害」的音译，2026年在网络迅速走红",
    "example": "这个东西绝摆 → 这个东西太厉害了",
    "categoryId": 15,
    "tags": [
      "绝摆",
      "闽南语",
      "赞美",
      "2026热词"
    ]
  },
  {
    "id": 344,
    "word": "LLM",
    "meaning": "大语言模型，Large Language Model的缩写",
    "example": "LLM训练 → 大语言模型训练",
    "categoryId": 6,
    "tags": [
      "LLM",
      "大模型",
      "AI",
      "基础术语"
    ]
  },
  {
    "id": 345,
    "word": "AIGC",
    "meaning": "生成式人工智能内容，AI自动生成文本、图像、视频等内容的技术",
    "example": "AIGC应用 → AI生成内容应用",
    "categoryId": 6,
    "tags": [
      "AIGC",
      "生成式AI",
      "AI内容",
      "2026热词"
    ]
  },
  {
    "id": 346,
    "word": "向量数据库",
    "meaning": "存储AI生成向量嵌入的数据库，用于RAG和语义搜索",
    "example": "向量数据库检索 → 通过向量相似度搜索内容",
    "categoryId": 6,
    "tags": [
      "向量数据库",
      "RAG",
      "Embedding",
      "AI基础设施"
    ]
  },
  {
    "id": 347,
    "word": "高丽菜煮蛋那桌",
    "meaning": "台湾Threads爆红梗，来自模仿餐厅场景的幽默对话",
    "example": "高丽菜煮蛋那桌 → 用来调侃尴尬或混乱场合的梗",
    "categoryId": 15,
    "tags": [
      "高丽菜",
      "台湾",
      "Threads",
      "2026热词"
    ]
  },
  {
    "id": 348,
    "word": "ㄅ级分",
    "meaning": "台湾Threads社群用语，「A级分」的谐音，指最高评价",
    "example": "这部电影ㄅ级分! → 这部电影最高评价!",
    "categoryId": 15,
    "tags": [
      "ㄅ级分",
      "台湾",
      "Threads",
      "2026热词"
    ]
  },
  {
    "id": 349,
    "word": "Fine-tuning",
    "meaning": "模型微调，用特定数据对预训练模型进行二次训练",
    "example": "Fine-tuning大模型 → 用特定数据微调大模型",
    "categoryId": 6,
    "tags": [
      "Fine-tuning",
      "微调",
      "模型训练",
      "AI"
    ]
  },
  {
    "id": 352,
    "word": "痛文化",
    "meaning": "2026年小红书十大热词之一，用痛苦经历定义和展示自我认同的亚文化，以痛感为核心的情感代偿，从圈地自萌走向消费主场",
    "example": "痛文化来了 → 二次元文化破圈成为消费主流",
    "categoryId": 15,
    "tags": [
      "痛文化",
      "Z世代",
      "亚文化",
      "2026热词",
      "二次元",
      "cosplay"
    ],
    "brief": "用痛苦定义自我的亚文化"
  },
  {
    "id": 354,
    "word": "特种兵旅游",
    "meaning": "高强度、短时间、多景点打卡式的旅行方式",
    "example": "特种兵旅游周末刷10个景点 → 周末极限打卡式旅游",
    "categoryId": 15,
    "tags": [
      "特种兵旅游",
      "穷游",
      "打卡",
      "2023热词"
    ]
  },
  {
    "id": 355,
    "word": "显眼包",
    "meaning": "过于张扬、爱出风头的人，或形容引人注目、个性鲜明的事物",
    "example": "他是部门里的显眼包 → 他是部门里最张扬爱表现的那个",
    "categoryId": 15,
    "tags": [
      "显眼包",
      "张扬",
      "爱表现",
      "2023热词"
    ]
  },
  {
    "id": 356,
    "word": "遥遥领先",
    "meaning": "远远走在前面，描述技术或产品的绝对优势",
    "example": "我们的技术遥遥领先 → 我们的技术远超竞争对手",
    "categoryId": 1,
    "tags": [
      "遥遥领先",
      "领先",
      "华为",
      "2023热词"
    ]
  },
  {
    "id": 357,
    "word": "多巴胺穿搭",
    "meaning": "高饱和色彩、鲜艳明亮的服装风格，传递快乐情绪",
    "example": "多巴胺穿搭风格 → 明亮色彩释放快乐情绪的穿搭",
    "categoryId": 15,
    "tags": [
      "多巴胺",
      "穿搭",
      "色彩",
      "2023热词"
    ]
  },
  {
    "id": 358,
    "word": "孔乙己文学",
    "meaning": "高学历却难以实现价值、自嘲困境的无奈表达",
    "example": "孔乙己文学流行 → 高学历人群自嘲难以阶层跨越",
    "categoryId": 15,
    "tags": [
      "孔乙己",
      "学历",
      "自嘲",
      "2023热词"
    ]
  },
  {
    "id": 359,
    "word": "公主请上车",
    "meaning": "请求对方给予尊重和礼貌照顾的网络表达",
    "example": "公主请上车 → 请礼貌地说请让我上车",
    "categoryId": 15,
    "tags": [
      "公主",
      "请",
      "撒娇",
      "2023热词"
    ],
    "brief": "求尊重礼貌的网络表达"
  },
  {
    "id": 360,
    "word": "你人还怪好的嘞",
    "meaning": "用于调侃尴尬处境，明明被坑还要称赞对方的无奈语气",
    "example": "你人还怪好的嘞 → 虽然被坑但还是要客气地说",
    "categoryId": 15,
    "tags": [
      "你人还怪好的",
      "吐槽",
      "尴尬",
      "2023热词"
    ]
  },
  {
    "id": 361,
    "word": "不讲了",
    "meaning": "2026年流行句式，表达「知道但不说透」的默契或故意卖关子",
    "example": "不讲了，懂的都懂 → 不说了，懂的人自然懂",
    "categoryId": 15,
    "tags": [
      "不讲了",
      "网络梗",
      "默契",
      "2026热词"
    ],
    "brief": "知道但不说"
  },
  {
    "id": 362,
    "word": "随橙想",
    "meaning": "2026年空耳梗，源自乌兰图雅采访被空耳二创，表达「随便想」的意思",
    "example": "随橙想，随便想想 → 随便想想，无所谓的态度",
    "categoryId": 15,
    "tags": [
      "随橙想",
      "空耳",
      "乌兰图雅",
      "2026热词"
    ],
    "brief": "随便想"
  },
  {
    "id": 363,
    "word": "浪浪山小妖怪",
    "meaning": "源自《年中国诗词大会》，小人物在大舞台上的自我定位和共鸣",
    "example": "浪浪山小妖怪也有大梦想 → 小镇青年也有大理想",
    "categoryId": 15,
    "tags": [
      "浪浪山",
      "小妖怪",
      "梦想",
      "2025热词"
    ]
  },
  {
    "id": 364,
    "word": "美拉德穿搭",
    "meaning": "棕色系服装风格，源自美拉德反应的颜色",
    "example": "美拉德穿搭秋冬很火 → 棕色调冬季穿搭很流行",
    "categoryId": 15,
    "tags": [
      "美拉德",
      "穿搭",
      "棕色",
      "2023热词"
    ]
  },
  {
    "id": 365,
    "word": "RAG",
    "meaning": "检索增强生成，通过检索知识库来增强AI回答质量的技术",
    "example": "RAG系统提升LLM准确性 → 检索增强生成提升大模型回答准确率",
    "categoryId": 6,
    "tags": [
      "RAG",
      "检索",
      "生成式AI",
      "AI"
    ]
  },
  {
    "id": 366,
    "word": "Agent",
    "meaning": "AI智能体，能够自主决策和执行任务的AI系统",
    "example": "部署AI Agent → 部署人工智能智能体",
    "categoryId": 6,
    "tags": [
      "Agent",
      "智能体",
      "AI",
      "自主决策"
    ]
  },
  {
    "id": 367,
    "word": "Embedding",
    "meaning": "将文本转换为向量表示的技术，用于语义匹配和检索",
    "example": "使用Embedding模型向量化文本 → 用向量模型表示文本语义",
    "categoryId": 6,
    "tags": [
      "Embedding",
      "向量",
      "语义",
      "AI"
    ]
  },
  {
    "id": 368,
    "word": "Token",
    "meaning": "AI模型处理的最小文本单位",
    "example": "输入Token超出限制 → 超出模型的文本处理长度",
    "categoryId": 6,
    "tags": [
      "Token",
      "文本单位",
      "LLM",
      "AI"
    ]
  },
  {
    "id": 369,
    "word": "AI糟粕",
    "meaning": "低质量、批量生成的AI内容，看似信息丰富实则缺乏价值甚至有误导性",
    "example": "这些都是AI糟粕 → 都是些AI生成的垃圾内容",
    "categoryId": 6,
    "tags": [
      "AI糟粕",
      "AI",
      "低质量内容",
      "2026热词"
    ]
  },
  {
    "id": 371,
    "word": "数智化",
    "meaning": "数字化和智能化的融合，是新型工业化的鲜明特征",
    "example": "数智化转型 → 数字化智能化双重升级",
    "categoryId": 6,
    "tags": [
      "数智化",
      "数字化",
      "智能化",
      "2024热词"
    ]
  },
  {
    "id": 372,
    "word": "智能向善",
    "meaning": "人工智能发展必须有利于增进人类福祉",
    "example": "AI发展要智能向善 → AI要往好的方向发展",
    "categoryId": 6,
    "tags": [
      "智能向善",
      "AI伦理",
      "科技向善",
      "2024热词"
    ],
    "brief": "AI发展要造福人类"
  },
  {
    "id": 373,
    "word": "未来产业",
    "meaning": "包括未来制造、未来信息、未来材料、未来能源、未来空间和未来健康等新赛道",
    "example": "布局未来产业 → 提前规划新兴产业领域",
    "categoryId": 3,
    "tags": [
      "未来产业",
      "新兴产业",
      "科技",
      "2024热词"
    ]
  },
  {
    "id": 374,
    "word": "city不city",
    "meaning": "形容时髦、洋气、现代化的程度，源自外国游客对中国城市的感叹",
    "example": "这家店好city啊 → 这家店好时髦啊",
    "categoryId": 15,
    "tags": [
      "city不city",
      "网络梗",
      "洋气",
      "2024热词"
    ]
  },
  {
    "id": 375,
    "word": "水灵灵地",
    "meaning": "形容人漂亮有精神、润泽有生气，也可用于自嘲",
    "example": "水灵灵地出道 → 精神饱满地出道",
    "categoryId": 15,
    "tags": [
      "水灵灵",
      "网络梗",
      "精神",
      "2024热词"
    ]
  },
  {
    "id": 376,
    "word": "银发力量",
    "meaning": "老年群体在社会各领域产生的不可忽视的力量",
    "example": "发挥银发力量 → 发挥老年人的余热和能力",
    "categoryId": 4,
    "tags": [
      "银发力量",
      "老年群体",
      "社会参与",
      "2024热词"
    ],
    "brief": "老年群体的社会影响力"
  },
  {
    "id": 377,
    "word": "小孩哥/小孩姐",
    "meaning": "在某方面具有过人才能的孩子",
    "example": "这个小孩哥太厉害了 → 这个小朋友太厉害了",
    "categoryId": 15,
    "tags": [
      "小孩哥",
      "小孩姐",
      "网络梗",
      "2024热词"
    ]
  },
  {
    "id": 378,
    "word": "村咖",
    "meaning": "乡村咖啡馆，代表慢生活氛围和轻度逃离城市的生活方式",
    "example": "去村咖打卡 → 去乡村咖啡馆拍照",
    "categoryId": 15,
    "tags": [
      "村咖",
      "乡村",
      "慢生活",
      "2025热词"
    ]
  },
  {
    "id": 379,
    "word": "外耗",
    "meaning": "将负面情绪和压力向外发泄的行为方式",
    "example": "停止精神内耗，拒绝外耗 → 不再自我消耗，不再向外发泄",
    "categoryId": 15,
    "tags": [
      "外耗",
      "精神内耗",
      "情绪",
      "2025热词"
    ],
    "brief": "情绪向外发泄"
  },
  {
    "id": 380,
    "word": "丝瓜汤文学",
    "meaning": "一种看似无用实则治愈的文艺风格表达",
    "example": "今天喝碗丝瓜汤文学 → 今天看点治愈的文字",
    "categoryId": 15,
    "tags": [
      "丝瓜汤文学",
      "网络文学",
      "治愈",
      "2025热词"
    ],
    "brief": "看似无用实则治愈的表达"
  },
  {
    "id": 381,
    "word": "就业末日",
    "meaning": "AI与自动化可能引发的就业危机",
    "example": "担心就业末日到来 → 担心AI导致大量失业",
    "categoryId": 6,
    "tags": [
      "就业末日",
      "AI失业",
      "Jobageddon",
      "2026热词"
    ]
  },
  {
    "id": 382,
    "word": "三重泡沫",
    "meaning": "AI、加密货币和全球债务领域的潜在风险",
    "example": "警惕三重泡沫破裂 → 小心三个领域的金融风险",
    "categoryId": 9,
    "tags": [
      "三重泡沫",
      "金融风险",
      "AI泡沫",
      "2026热词"
    ]
  },
  {
    "id": 383,
    "word": "小多边主义",
    "meaning": "由少数国家组成的小型联盟，灵活高效地应对特定挑战",
    "example": "小多边主义合作 → 小国集团合作",
    "categoryId": 3,
    "tags": [
      "小多边主义",
      "国际关系",
      "联盟",
      "2026热词"
    ]
  },
  {
    "id": 386,
    "word": "人类独特优势",
    "meaning": "AI时代人类独有的创造力、同理心、适应力等特质",
    "example": "发挥人类独特优势 → 发挥人类特有的创造力",
    "categoryId": 6,
    "tags": [
      "人类独特优势",
      "AI时代",
      "创造力",
      "2026热词"
    ]
  },
  {
    "id": 387,
    "word": "经济韧性",
    "meaning": "在变化环境中生存并实现经济增长的能力",
    "example": "提升经济韧性 → 增强抗风险能力",
    "categoryId": 3,
    "tags": [
      "经济韧性",
      "抗风险",
      "韧性",
      "2026热词"
    ],
    "brief": "抗风险的发展能力"
  },
  {
    "id": 389,
    "word": "误闯天家",
    "meaning": "意外进入高门槛场景(如名校、大厂)的自嘲说法",
    "example": "纯属于误闯天家 → 实际上是误打误撞进去的",
    "categoryId": 15,
    "tags": [
      "误闯天家",
      "自嘲",
      "网络流行语"
    ]
  },
  {
    "id": 390,
    "word": "魔丸",
    "meaning": "特立独行、看似离经叛道的特质",
    "example": "我就是个魔丸 → 我这个人比较特立独行",
    "categoryId": 15,
    "tags": [
      "魔丸",
      "哪吒",
      "特质"
    ]
  },
  {
    "id": 391,
    "word": "灵珠",
    "meaning": "乖巧优秀、温和理性的属性",
    "example": "她是个灵珠型选手 → 她是乖巧理性的类型",
    "categoryId": 15,
    "tags": [
      "灵珠",
      "哪吒",
      "特质"
    ]
  },
  {
    "id": 392,
    "word": "高雅人士",
    "meaning": "举止文雅、审美高级的群体，也用于反讽",
    "example": "高雅人士视察中 → 假装很优雅地做某事",
    "categoryId": 15,
    "tags": [
      "高雅人士",
      "企鹅",
      "网络梗"
    ]
  },
  {
    "id": 393,
    "word": "当个事儿办",
    "meaning": "用夸张的郑重形式回应小事",
    "example": "减肥必须当个事儿办 → 减肥要非常认真地对待",
    "categoryId": 15,
    "tags": [
      "当个事儿办",
      "认真",
      "网络流行语"
    ]
  },
  {
    "id": 394,
    "word": "千百次练习",
    "meaning": "通过长期重复训练精通技能的坚持精神",
    "example": "千百次练习只为这一刻 → 台上一分钟台下十年功",
    "categoryId": 15,
    "tags": [
      "千百次练习",
      "坚持",
      "努力"
    ],
    "brief": "长期重复练到精通"
  },
  {
    "id": 395,
    "word": "来财",
    "meaning": "对好运和财富的期待，源自歌曲",
    "example": "来财来财 → 招财进宝",
    "categoryId": 15,
    "tags": [
      "来财",
      "好运",
      "网络流行语"
    ]
  },
  {
    "id": 396,
    "word": "少癲",
    "meaning": "有少少夸张、离谱",
    "example": "这个操作有点少癲 → 这个操作有点离谱",
    "categoryId": 15,
    "tags": [
      "少癲",
      "夸张",
      "粤语"
    ]
  },
  {
    "id": 397,
    "word": "大癲",
    "meaning": "非常夸张、极度离谱",
    "example": "这件事真的好大癲 → 这件事真的太离谱了",
    "categoryId": 15,
    "tags": [
      "大癲",
      "夸张",
      "粤语"
    ]
  },
  {
    "id": 398,
    "word": "老best",
    "meaning": "老友兼最好的朋友",
    "example": "这是我老best → 这是我最好的朋友",
    "categoryId": 15,
    "tags": [
      "老best",
      "朋友",
      "网络用语"
    ]
  },
  {
    "id": 399,
    "word": "Fam J",
    "meaning": "零尊重，对人不尊重的态度",
    "example": "这个人Fam J → 这个人完全不尊重人",
    "categoryId": 15,
    "tags": [
      "Fam J",
      "尊重",
      "粤语"
    ]
  },
  {
    "id": 400,
    "word": "跌嘢唔好搵",
    "meaning": "东西丢了不用找，属于你的自然会回来",
    "example": "跌嘢唔好搵，当升级啦 → 丢了就丢了，当升级了",
    "categoryId": 15,
    "tags": [
      "跌嘢唔好搵",
      "自我安慰",
      "粤语"
    ]
  },
  {
    "id": 401,
    "word": "拍咗先",
    "meaning": "先拍了再说，象征放手尝试的精神",
    "example": "拍咗先，剪咗先，上咗先 → 先做了再说",
    "categoryId": 15,
    "tags": [
      "拍咗先",
      "尝试",
      "粤语"
    ]
  },
  {
    "id": 404,
    "word": "具身智能",
    "meaning": "让AI拥有物理身体，能在现实世界中执行任务",
    "example": "具身智能机器人 → 能在现实世界行动的AI机器人",
    "categoryId": 6,
    "tags": [
      "AI",
      "机器人",
      "物理世界"
    ]
  },
  {
    "id": 405,
    "word": "Skill",
    "meaning": "AI技能模块，封装好的工作流程模板",
    "example": "加载Skill → 加载技能模块",
    "categoryId": 6,
    "tags": [
      "AI",
      "技能",
      "工作流"
    ]
  },
  {
    "id": 411,
    "word": "爱你老己",
    "meaning": "2026年小红书热门梗，「爱你老师」的谐音演化，温暖地表达自我接纳和老后的自己和解",
    "example": "爱你老己 → 老了也要好好爱自己",
    "categoryId": 15,
    "tags": [
      "爱你老己",
      "自我关怀",
      "网络流行语",
      "自我接纳",
      "谐音梗",
      "2026热词"
    ],
    "brief": "好好爱自己"
  },
  {
    "id": 414,
    "word": "我要验牌",
    "meaning": "要求对方证明资质或真伪的温和质疑",
    "example": "这数据靠谱吗?我要验牌 → 让我核验一下这数据是否真实",
    "categoryId": 15,
    "tags": [
      "我要验牌",
      "网络流行语",
      "2026春晚",
      "2026热词"
    ],
    "brief": "要求对方证明真伪"
  },
  {
    "id": 417,
    "word": "从从容容游刃有余",
    "meaning": "与「匆匆忙忙连滚带爬」对仗的万能反差句式",
    "example": "上班从从容容游刃有余，下班匆匆忙忙连滚带爬 → 理想与现实强烈反差",
    "categoryId": 15,
    "tags": [
      "从从容容",
      "游刃有余",
      "反差",
      "句式"
    ],
    "brief": "凡尔赛式反差句式"
  },
  {
    "id": 418,
    "word": "匆匆忙忙连滚带爬",
    "meaning": "形容手忙脚乱、鸡飞狗跳的状态",
    "example": "加班到匆匆忙忙连滚带爬 → 加班到手忙脚乱",
    "categoryId": 15,
    "tags": [
      "匆匆忙忙",
      "连滚带爬",
      "句式"
    ]
  },
  {
    "id": 419,
    "word": "我将辞职在家研究",
    "meaning": "用夸张辞职表达对事物极度好奇的句式",
    "example": "这个太有意思了，我将辞职在家研究 → 这件事太有趣了我要深入研究",
    "categoryId": 15,
    "tags": [
      "辞职研究",
      "夸张",
      "2026新句式"
    ],
    "brief": "夸张表达极度好奇"
  },
  {
    "id": 420,
    "word": "讲不讲话",
    "meaning": "「敢不敢说」的闽南语谐音挑衅式回应",
    "example": "你倒是讲不讲话 → 你敢不敢说",
    "categoryId": 15,
    "tags": [
      "讲不讲话",
      "闽南语",
      "挑衅"
    ],
    "brief": "闽南语「敢不敢说」"
  },
  {
    "id": 421,
    "word": "托我转交",
    "meaning": "闽南语谐音梗，意为「拜托转告/帮我传达」",
    "example": "托我转交给你 → 拜托帮我转告他",
    "categoryId": 15,
    "tags": [
      "托我转交",
      "闽南语",
      "谐音"
    ]
  },
  {
    "id": 423,
    "word": "Agent Teams",
    "meaning": "多个AI Agent组成可互相通信协作的团队",
    "example": "部署Agent Teams → 部署多智能体协作团队",
    "categoryId": 6,
    "tags": [
      "Agent Teams",
      "AI团队",
      "多智能体",
      "AI"
    ],
    "brief": "智能体协作团队"
  },
  {
    "id": 424,
    "word": "Agent Card",
    "meaning": "Agent数字名片，描述Agent身份与能力的元数据文件",
    "example": "发布Agent Card → 发布Agent能力描述卡片",
    "categoryId": 6,
    "tags": [
      "Agent Card",
      "A2A",
      "协议",
      "AI"
    ]
  },
  {
    "id": 426,
    "word": "数字水印",
    "meaning": "嵌入AI生成内容中的隐形标识，用于追溯内容来源",
    "example": "内容嵌入数字水印 → AI生成内容带可追溯水印",
    "categoryId": 6,
    "tags": [
      "数字水印",
      "AI监管",
      "内容溯源",
      "AI"
    ]
  },
  {
    "id": 427,
    "word": "Operator",
    "meaning": "AI新范式，从被动副驾驶(Copilot)升级为主动操作员",
    "example": "Operator模式 → AI主动操作完成任务",
    "categoryId": 6,
    "tags": [
      "Operator",
      "Copilot",
      "AI",
      "范式"
    ]
  },
  {
    "id": 430,
    "word": "Computer Use",
    "meaning": "AI直接操控电脑桌面、操作系统和软件的能力",
    "example": "启用Computer Use → 让AI像人一样操作电脑屏幕",
    "categoryId": 6,
    "tags": [
      "Computer Use",
      "计算机使用",
      "Operator",
      "AI"
    ]
  },
  {
    "id": 431,
    "word": "Agentic AI",
    "meaning": "具备自主规划、工具调用、多步闭环能力的智能体式AI",
    "example": "走向Agentic AI → 让AI自主拆任务并执行到底",
    "categoryId": 6,
    "tags": [
      "Agentic AI",
      "智能体式",
      "自主",
      "AI"
    ]
  },
  {
    "id": 432,
    "word": "幻觉",
    "meaning": "大模型在知识盲区一本正经地胡说八道，编造事实或参考文献",
    "example": "缓解AI幻觉 → 减少大模型凭空编答案",
    "categoryId": 6,
    "tags": [
      "幻觉",
      "Hallucination",
      "大模型",
      "AI"
    ],
    "brief": "大模型胡说八道"
  },
  {
    "id": 433,
    "word": "Few-Shot",
    "meaning": "在提示词里给模型几个问答范例，让它照葫芦画瓢输出",
    "example": "用Few-Shot提问 → 附带几个例子让AI理解格式",
    "categoryId": 6,
    "tags": [
      "Few-Shot",
      "少样本提示",
      "Prompt",
      "AI"
    ]
  },
  {
    "id": 434,
    "word": "RLHF",
    "meaning": "基于人类反馈的强化学习，让大模型对齐人类价值观和偏好",
    "example": "用RLHF对齐模型 → 用人类打分训练模型价值观",
    "categoryId": 6,
    "tags": [
      "RLHF",
      "强化学习",
      "人类反馈",
      "AI"
    ]
  },
  {
    "id": 435,
    "word": "LoRA",
    "meaning": "低秩适配微调，用极小参数量外挂矩阵低成本定制大模型",
    "example": "用LoRA微调 → 用低秩矩阵低成本定制专属模型",
    "categoryId": 6,
    "tags": [
      "LoRA",
      "低秩微调",
      "Fine-tuning",
      "AI"
    ]
  },
  {
    "id": 436,
    "word": "DPO",
    "meaning": "直接偏好优化，省掉奖励模型直接用人类偏好对齐大模型",
    "example": "用DPO对齐 → 直接用偏好数据训练模型",
    "categoryId": 6,
    "tags": [
      "DPO",
      "偏好优化",
      "对齐",
      "AI"
    ]
  },
  {
    "id": 437,
    "word": "QLoRA",
    "meaning": "把LoRA与4-bit量化结合，让单张消费级显卡就能微调大模型",
    "example": "用QLoRA微调 → 用量化技术把大模型塞进消费显卡",
    "categoryId": 6,
    "tags": [
      "QLoRA",
      "量化微调",
      "LoRA",
      "AI"
    ]
  },
  {
    "id": 438,
    "word": "工具调用",
    "meaning": "大模型按需调用外部函数、API、数据库完成真实操作的能力",
    "example": "实现工具调用 → 让模型能调用API执行任务",
    "categoryId": 6,
    "tags": [
      "工具调用",
      "Tool Calling",
      "Function Calling",
      "AI"
    ]
  },
  {
    "id": 439,
    "word": "真没空陪你闹了",
    "meaning": "表示没精力参与无意义的事，对内耗式社交的温和拒绝",
    "example": "真没空陪你闹了 → 我没空跟你瞎折腾了",
    "categoryId": 15,
    "tags": [
      "真没空陪你闹了",
      "拒绝内耗",
      "摆烂",
      "流行语"
    ]
  },
  {
    "id": 440,
    "word": "Harness Engineering",
    "meaning": "驾驭工程，为AI Agent设计控制系统的工程学科，含约束规则、反馈循环和验证机制",
    "example": "做Harness Engineering → 给AI Agent搭好围栏和反馈，让它可靠地干活",
    "categoryId": 6,
    "tags": [
      "Harness Engineering",
      "驾驭工程",
      "Agent",
      "AI"
    ]
  },
  {
    "id": 441,
    "word": "Subagent",
    "meaning": "子代理，主Agent拆分复杂任务后，委派给专门的子Agent处理特定子任务",
    "example": "用Subagent分工 → 把大任务拆给几个子Agent并行处理",
    "categoryId": 6,
    "tags": [
      "Subagent",
      "子代理",
      "Agent",
      "AI"
    ]
  },
  {
    "id": 442,
    "word": "Multi-Agent",
    "meaning": "多智能体协作，多个AI Agent分工配合、互相通信共同完成复杂任务",
    "example": "用Multi-Agent架构 → 让多个Agent像团队一样分工协作",
    "categoryId": 6,
    "tags": [
      "Multi-Agent",
      "多智能体",
      "Agent",
      "AI"
    ]
  },
  {
    "id": 443,
    "word": "Sovereign AI",
    "meaning": "主权AI，由国家或组织自建、数据不依赖外部云端、技术自主可控的AI",
    "example": "发展Sovereign AI → 推动AI基础设施自主可控",
    "categoryId": 6,
    "tags": [
      "Sovereign AI",
      "主权AI",
      "AI"
    ]
  },
  {
    "id": 444,
    "word": "AI Workforce",
    "meaning": "AI员工，把AI Agent当作企业里的虚拟员工，与人协作完成工作",
    "example": "打造AI Workforce → 组建AI虚拟员工团队和人协作",
    "categoryId": 6,
    "tags": [
      "AI Workforce",
      "AI员工",
      "数字员工",
      "AI"
    ]
  },
  {
    "id": 445,
    "word": "Coding Agent",
    "meaning": "编程智能体，能独立完成需求分析、代码编写、测试到部署全流程的AI",
    "example": "用Coding Agent开发 → 让AI从读需求到自动部署全包",
    "categoryId": 6,
    "tags": [
      "Coding Agent",
      "编程智能体",
      "Vibe Coding",
      "AI"
    ]
  },
  {
    "id": 446,
    "word": "Browser Agent",
    "meaning": "浏览器智能体，能像人一样操作网页、完成点击、填表、抓取等任务的AI",
    "example": "用Browser Agent自动化 → 让AI自己开浏览器点网页办事",
    "categoryId": 6,
    "tags": [
      "Browser Agent",
      "浏览器智能体",
      "Agent",
      "AI"
    ]
  },
  {
    "id": 447,
    "word": "AI Skills",
    "meaning": "AI技能包，赋予Agent特定领域专业能力的模块化配置，如搜索、写代码等",
    "example": "配置AI Skills → 给Agent装上特定领域的专业能力",
    "categoryId": 6,
    "tags": [
      "AI Skills",
      "技能包",
      "Agent",
      "AI"
    ]
  },
  {
    "id": 452,
    "word": "锚定",
    "meaning": "让AI生成的内容与真实世界数据、事实或特定知识库关联，避免幻觉，提升准确性与时效性",
    "example": "AI回答先锚定到企业知识库 → 让AI基于真实数据回答，避免瞎编",
    "categoryId": 6,
    "tags": [
      "锚定",
      "Grounding",
      "AI",
      "防幻觉"
    ]
  },
  {
    "id": 453,
    "word": "扩散模型",
    "meaning": "通过学习逆转「加噪→去噪」过程来生成图像/音频/视频的生成式AI架构，Stable Diffusion和Sora都基于它",
    "example": "用扩散模型生成图片 → 通过去噪过程从纯噪声生成逼真图像",
    "categoryId": 6,
    "tags": [
      "扩散模型",
      "Diffusion Models",
      "生成式AI",
      "AI"
    ],
    "brief": "加噪去噪生成模型"
  },
  {
    "id": 454,
    "word": "密度法则",
    "meaning": "2026年中国信通院提出的AI产业新趋势——用更少算力和数据获得更多智能，大模型从「拼规模」转向「拼密度」",
    "example": "遵循密度法则训练模型 → 不再盲目堆参数，而是提升单位算力的智能产出",
    "categoryId": 6,
    "tags": [
      "密度法则",
      "Scaling Law",
      "AI趋势",
      "2026热词"
    ],
    "brief": "更少算力出更多智能"
  },
  {
    "id": 455,
    "word": "Qwen3",
    "meaning": "阿里巴巴通义千问团队2026年发布的大语言模型系列，具备百万token超长上下文，在Agent编程和复杂任务执行上处于业界领先",
    "example": "用Qwen3做代码Agent → 用阿里千问2026模型做智能编程",
    "categoryId": 6,
    "tags": [
      "Qwen3",
      "通义千问",
      "阿里",
      "大模型"
    ],
    "brief": "阿里通义千问模型"
  },
  {
    "id": 456,
    "word": "GLM-5",
    "meaning": "智谱AI 2026年发布的Agent大模型系列，原生多模态Coding基座，深度适配Agent场景，可理解设计稿/截图/网页界面并直接生成代码",
    "example": "用GLM-5做视觉编程 → 让AI读懂设计稿直接生成可运行代码",
    "categoryId": 6,
    "tags": [
      "GLM-5",
      "智谱",
      "Agent",
      "大模型"
    ],
    "brief": "智谱Agent大模型"
  },
  {
    "id": 457,
    "word": "词元经济",
    "meaning": "2026年3月国家数据局正式定名的新经济形态，以词元(Token)为计量和定价单位，把AI推理能力变成像水电一样可计量的服务",
    "example": "发展词元经济 → 把AI服务按词元调用量定价交易，像云服务一样",
    "categoryId": 6,
    "tags": [
      "词元经济",
      "Token",
      "AI经济",
      "2026热词"
    ],
    "brief": "数据要素驱动的新经济"
  },
  {
    "id": 458,
    "word": "智能经济",
    "meaning": "2026年政府工作报告首次提出的经济新形态，以大模型+智能体为核心，AI赋能实体经济形成自主感知/推理/调度的闭环",
    "example": "打造智能经济新形态 → 让AI深入各行各业，催生新业态",
    "categoryId": 6,
    "tags": [
      "智能经济",
      "AI经济",
      "政策热词",
      "2026热词"
    ],
    "brief": "AI驱动的新经济形态"
  },
  {
    "id": 459,
    "word": "Kimi K3",
    "meaning": "月之暗面2026年7月发布的AI大模型，2.8万亿参数为全球最大开源模型，支持100万token上下文，被称「2026 DeepSeek时刻」，性能接近GPT-5.6",
    "example": "Kimi K3发布引发全球AI圈震动 → 中国大模型再次震惊硅谷",
    "categoryId": 6,
    "tags": [
      "Kimi K3",
      "月之暗面",
      "大模型",
      "2026热词"
    ],
    "brief": "月之暗面的大模型"
  },
  {
    "id": 460,
    "word": "细味老菠萝",
    "meaning": "2026年新晋流行语，来自「安全警长啦咘啦哆」的谐音，形容慢慢品味、细细体会的意思",
    "example": "这件事得细味老菠萝 → 这件事得慢慢体会",
    "categoryId": 15,
    "tags": [
      "细味老菠萝",
      "谐音梗",
      "网络流行语",
      "2026热词"
    ],
    "brief": "慢慢体会"
  },
  {
    "id": 461,
    "word": "奶绿波",
    "meaning": "2026年顶流爆款刷屏梗，源于高速堵车或密集恐惧场景的视频，画面像奶绿波纹一样层层扩散，引发全网模仿拍摄",
    "example": "这个奶绿波视频太上头了 → 这个密集刷屏视频太魔性了",
    "categoryId": 15,
    "tags": [
      "奶绿波",
      "刷屏梗",
      "网络流行语",
      "2026热词"
    ],
    "brief": "密集刷屏梗"
  },
  {
    "id": 462,
    "word": "酸黄瓜",
    "meaning": "打工人自嘲梗，形容自己普通、平平无奇、收入不高的状态，与「精英」形成反差",
    "example": "我就是一颗酸黄瓜 → 我就是普通打工人一个",
    "categoryId": 15,
    "tags": [
      "酸黄瓜",
      "打工人",
      "自嘲",
      "2026热词"
    ]
  },
  {
    "id": 463,
    "word": "中奖概率倍儿高",
    "meaning": "源自抖音天津方言搞笑动画，形容运气极差、总是中招的自嘲，后引申为凡事都往坏的方向发展的悲观心态",
    "example": "这个坑我踩了，中奖概率倍儿高 → 这个坑我必踩，运气就是这么背",
    "categoryId": 15,
    "tags": [
      "中奖概率",
      "天津方言",
      "自嘲",
      "职场梗"
    ]
  },
  {
    "id": 464,
    "word": "精神离职",
    "meaning": "打工人自嘲梗，指身体还在工位，但心理上已经脱离工作状态，只想摆烂的心理状态",
    "example": "今天又是精神离职的一天 → 今天又是人在心不在、只想摆烂的一天",
    "categoryId": 5,
    "tags": [
      "精神离职",
      "打工人",
      "自嘲",
      "职场梗",
      "2026热词"
    ]
  },
  {
    "id": 465,
    "word": "龙虾",
    "meaning": "AI智能体OpenClaw的昵称，因其图标酷似红色龙虾而得名，2026年初全网掀起「养龙虾」热潮",
    "example": "你养龙虾了吗 → 你用OpenClaw了吗",
    "categoryId": 6,
    "tags": [
      "龙虾",
      "OpenClaw",
      "AI智能体",
      "2026热词"
    ],
    "brief": "OpenClaw的昵称"
  },
  {
    "id": 466,
    "word": "含机量爆表",
    "meaning": "2026年网络热词，指视频或内容中AI/机器人元素占比极高，一眼AI生成的感觉",
    "example": "这个视频含机量爆表 → 这个视频一看就是AI生成的",
    "categoryId": 15,
    "tags": [
      "含机量",
      "AI生成",
      "网络热词",
      "2026热词"
    ],
    "brief": "AI味很重"
  },
  {
    "id": 467,
    "word": "背手负鼠",
    "meaning": "2026年全网爆火的表情包，一只北美负鼠背手站立的姿态神似「领导架子」，精准复刻打工人表面体面内心崩溃的状态",
    "example": "背手负鼠上班 → 假装成熟稳重实际快撑不住了",
    "categoryId": 15,
    "tags": [
      "背手负鼠",
      "表情包",
      "打工人",
      "自嘲",
      "2026热词"
    ],
    "brief": "负鼠表情包"
  },
  {
    "id": 468,
    "word": "给我擦皮鞋",
    "meaning": "2026年热门梗，「我要验牌」的配套梗，源自周星驰电影法国赌神台词，现用于调侃或嘲讽对方",
    "example": "我要验牌，给我擦皮鞋 → 质疑对方后嘲讽式炫耀",
    "categoryId": 15,
    "tags": [
      "擦皮鞋",
      "周星驰",
      "网络梗",
      "2026热词"
    ],
    "brief": "嘲讽式炫耀"
  },
  {
    "id": 469,
    "word": "养龙虾",
    "meaning": "2026年科技圈热潮，指在设备中安装部署OpenClaw AI智能体的过程，因其图标似龙虾而得名",
    "example": "今天成功养了一只龙虾 → 今天部署好了OpenClaw",
    "categoryId": 6,
    "tags": [
      "养龙虾",
      "OpenClaw",
      "AI智能体",
      "2026热词"
    ],
    "brief": "部署AI智能体"
  },
  {
    "id": 470,
    "word": "NSP",
    "meaning": "Next-State Prediction世界状态预测，AI从「预测下一个词」转向「预测世界下一个状态」的新范式",
    "example": "NSP范式崛起 → AI开始学习预测世界状态变化",
    "categoryId": 6,
    "tags": [
      "NSP",
      "世界模型",
      "新范式",
      "AI"
    ],
    "brief": "世界状态预测技术"
  },
  {
    "id": 471,
    "word": "TinyML",
    "meaning": "微型机器学习，将AI能力压缩到微控制器级别，让每个传感器都具备本地AI推理能力",
    "example": "TinyML部署 → 在微小设备上运行AI模型",
    "categoryId": 6,
    "tags": [
      "TinyML",
      "边缘AI",
      "物联网",
      "AI"
    ]
  },
  {
    "id": 472,
    "word": "Physical AI",
    "meaning": "实体AI，能感知物理世界并直接参与生产、物流与服务的实际应用",
    "example": "Physical AI机器人 → 能操控物理世界的AI系统",
    "categoryId": 6,
    "tags": [
      "Physical AI",
      "具身智能",
      "机器人",
      "AI"
    ]
  },
  {
    "id": 473,
    "word": "Federated AI",
    "meaning": "联邦AI，通过组合多个不同模型来提高准确性、灵活性和成本效率的AI架构",
    "example": "Federated AI方案 → 用多模型协作而非依赖单一模型",
    "categoryId": 6,
    "tags": [
      "Federated AI",
      "多模型",
      "协作",
      "AI"
    ]
  },
  {
    "id": 474,
    "word": "Domain-Specific LLM",
    "meaning": "领域专用大语言模型，针对单一行业训练，更懂专业术语和合规要求的AI模型",
    "example": "医疗Domain-Specific LLM → 专用于医疗行业的AI",
    "categoryId": 6,
    "tags": [
      "领域大模型",
      "垂直模型",
      "AI",
      "行业"
    ]
  },
  {
    "id": 475,
    "word": "Digital Twin",
    "meaning": "数字孪生，在虚拟空间构建物理世界的数字化映射，用于模拟、预测和优化",
    "example": "构建数字孪生 → 创建物理系统的虚拟复制品",
    "categoryId": 6,
    "tags": [
      "Digital Twin",
      "数字孪生",
      "仿真",
      "IoT"
    ]
  },
  {
    "id": 476,
    "word": "AI-Native",
    "meaning": "AI原生，以AI为核心从零开始设计软件开发的模式，自然语言即可生成完整应用",
    "example": "AI-Native开发 → 用自然语言描述需求，AI生成完整代码",
    "categoryId": 7,
    "tags": [
      "AI-Native",
      "AI开发",
      "自然语言编程",
      "开发"
    ]
  },
  {
    "id": 477,
    "word": "主体性",
    "meaning": "2026年小红书十大热词之一，主张上桌吃饭经营自我，从第一人称视角打开职场成长新剧本，强调自我主导",
    "example": "要有主体性 → 要有自己的立场和主导权",
    "categoryId": 15,
    "tags": [
      "主体性",
      "自我",
      "2026热词",
      "小红书",
      "自我主导",
      "职场"
    ],
    "brief": "自我主导"
  },
  {
    "id": 478,
    "word": "柔软力",
    "meaning": "2026年小红书十大热词之一，指以柔克刚的温柔力量，在高压社会下柔软的处事方式和内心力量",
    "example": "柔软力拉满 → 特别温柔有韧性",
    "categoryId": 15,
    "tags": [
      "柔软力",
      "生活智慧",
      "2026热词",
      "小红书",
      "温柔",
      "处事方式"
    ],
    "brief": "以柔克刚"
  },
  {
    "id": 479,
    "word": "反精致",
    "meaning": "2026年小红书十大热词之一，对标准化审美的祛魅，拒绝过度包装和精致人设，如淘宝丑东西大赛等，代表年轻人对过度精致生活的反叛",
    "example": "反精致风潮 → 抛弃精致偶像包袱，接受真实自我",
    "categoryId": 15,
    "tags": [
      "反精致",
      "真实",
      "2026热词",
      "小红书",
      "丑东西",
      "反审美"
    ],
    "brief": "拒绝精致包装"
  },
  {
    "id": 480,
    "word": "文化力",
    "meaning": "2026年小红书十大热词之一，指轻量文化体验满足精神需求的软实力，是文化自信与精神消费的体现",
    "example": "文化力拉满 → 文化内涵和软实力很强",
    "categoryId": 15,
    "tags": [
      "文化力",
      "文化消费",
      "2026热词",
      "小红书",
      "软实力"
    ],
    "brief": "文化消费软实力"
  },
  {
    "id": 481,
    "word": "词元",
    "meaning": "Token的中文官方表述，大模型处理信息的最小单元，兼具计量、定价、交易三重属性",
    "example": "日均词元调用量140万亿 → 模型每日处理的最小信息单元次数",
    "categoryId": 6,
    "tags": [
      "词元",
      "Token",
      "大模型",
      "2026热词"
    ]
  },
  {
    "id": 482,
    "word": "电力鸿沟",
    "meaning": "2026年达沃斯与OpenAI共同提出的概念，指AI时代各国电力供应能力的差距，电力成为新的战略资源",
    "example": "电力鸿沟扩大 → 中美两国电力产能差距影响AI发展",
    "categoryId": 6,
    "tags": [
      "电力鸿沟",
      "electron gap",
      "AI基础设施",
      "2026热词"
    ],
    "brief": "AI耗电引发的不平等"
  },
  {
    "id": 483,
    "word": "普惠AI",
    "meaning": "2026年达沃斯报告核心概念，指AI技术应具备包容性与可及性，让所有人都能平等享受AI红利",
    "example": "普惠AI生态 → 让AI惠及最广泛人群而非少数公司",
    "categoryId": 6,
    "tags": [
      "普惠AI",
      "包容性",
      "AI治理",
      "2026热词"
    ],
    "brief": "人人都能用的AI"
  },
  {
    "id": 484,
    "word": "量子经济",
    "meaning": "2026年达沃斯报告提出，指由量子计算、量子通信、量子加密带来的颠覆性经济变革，预计2035年创造2万亿美元价值",
    "example": "拥抱量子经济 → 提前布局量子技术抢占新赛道",
    "categoryId": 6,
    "tags": [
      "量子经济",
      "量子技术",
      "前沿科技",
      "2026热词"
    ],
    "brief": "量子产业"
  },
  {
    "id": 485,
    "word": "监管科技",
    "meaning": "Suptech，2026年达沃斯热词，指用AI和大数据帮助监管机构建立更透明、更可靠的金融监管体系",
    "example": "监管科技应用 → 用AI提升金融监管的效率和韧性",
    "categoryId": 9,
    "tags": [
      "监管科技",
      "Suptech",
      "金融监管",
      "AI应用"
    ]
  },
  {
    "id": 486,
    "word": "我去不早说",
    "meaning": "2026年爆火反差凡尔赛句式，假装抱怨对方没早告诉自己某事，实则炫耀自己已知或经历过",
    "example": "这东西超好吃，你怎么不早说 → 故意装埋怨的凡尔赛表达",
    "categoryId": 15,
    "tags": [
      "我去不早说",
      "凡尔赛",
      "反差",
      "2026热梗"
    ],
    "brief": "你怎么不早说"
  },
  {
    "id": 487,
    "word": "做完你的做你的",
    "meaning": "2026年抖音爆红梗，源自景德镇鸡排主理人李俊永安抚排队顾客的名场面，被网友用来形容多线程处理任务、被催进度却仍稳如老狗的工作状态",
    "example": "做完你的做你的，我还在控制 → 一个个来，别催，我在处理",
    "categoryId": 15,
    "tags": [
      "做完你的",
      "控场",
      "多线程",
      "2026热梗",
      "做完你的做你的",
      "鸡排主理人",
      "李俊永",
      "抖音"
    ],
    "brief": "多线程控场"
  },
  {
    "id": 488,
    "word": "如何呢又能怎",
    "meaning": "2026年职场万能回应梗，用戏谑语气表达「你能拿我怎样」的不在乎态度",
    "example": "如何呢又能怎 → 你说我也没用，我不在乎",
    "categoryId": 15,
    "tags": [
      "如何呢又能怎",
      "摆烂",
      "反内卷",
      "2026热梗"
    ],
    "brief": "你能拿我怎样"
  },
  {
    "id": 489,
    "word": "杀猪式告白",
    "meaning": "2026年热梗，源自剧集《逐玉》，指朴实、真诚、不浪漫但诚意满满的告白方式",
    "example": "我杀猪养你 → 我愿意用最朴实的方式照顾你一辈子",
    "categoryId": 15,
    "tags": [
      "杀猪式告白",
      "逐玉",
      "真诚",
      "2026热梗"
    ],
    "brief": "朴实真诚的告白"
  },
  {
    "id": 490,
    "word": "夯爆",
    "meaning": "2026年流行语，形容场面火爆、造型封神、表现极佳，源自「硬」字的网络谐音梗",
    "example": "这个舞台夯爆了 → 这个表演简直炸裂全场",
    "categoryId": 15,
    "tags": [
      "夯爆",
      "炸裂",
      "封神",
      "2026热梗"
    ],
    "brief": "表现炸裂"
  },
  {
    "id": 491,
    "word": "别太荒谬",
    "meaning": "2026年年轻人万能吐槽句式，对离谱事情表达无语又无奈的感叹",
    "example": "别太荒谬了! → 这也太离谱了吧!",
    "categoryId": 15,
    "tags": [
      "别太荒谬",
      "吐槽",
      "万能句",
      "2026热梗"
    ],
    "brief": "太离谱"
  },
  {
    "id": 492,
    "word": "有效陪伴",
    "meaning": "2026年情绪价值类热词，与无效社交相反，指能提供情感支持与高质量相处时间的陪伴方式",
    "example": "有效陪伴 → 不在时长而在质量，真正给予情感支持",
    "categoryId": 15,
    "tags": [
      "有效陪伴",
      "情绪价值",
      "情感支持",
      "2026热词"
    ],
    "brief": "有情感支持的陪伴"
  },
  {
    "id": 493,
    "word": "赛博丐帮",
    "meaning": "2026年自嘲类网络梗，指自愿放弃物质追求、在网络上互相取暖解压的群体，源自「自愿流浪」的延伸",
    "example": "我加入赛博丐帮了 → 物质我不要了，只想精神自由",
    "categoryId": 15,
    "tags": [
      "赛博丐帮",
      "自嘲",
      "解压",
      "2026热梗"
    ],
    "brief": "网上互暖解压的群体"
  },
  {
    "id": 494,
    "word": "摸鱼搭子",
    "meaning": "2026年职场梗，指一起在工作时间偷懒、互相掩护摸鱼的同事组合",
    "example": "摸鱼搭子集合 → 一群工作偷懒的同盟伙伴",
    "categoryId": 5,
    "tags": [
      "摸鱼搭子",
      "搭子文化",
      "职场",
      "2026热梗"
    ],
    "brief": "一起摸鱼的搭子"
  },
  {
    "id": 495,
    "word": "Model Router",
    "meaning": "模型路由器，在应用层和模型层之间动态分配任务给最合适的AI模型(便宜/贵、文本/多模态等)",
    "example": "用Model Router调度多个模型 → 根据任务类型自动选用最合适的模型",
    "categoryId": 6,
    "tags": [
      "Model Router",
      "模型路由",
      "AI",
      "2026热词"
    ]
  },
  {
    "id": 496,
    "word": "Cloud Sandbox",
    "meaning": "云端沙箱，AI在隔离的云端容器里运行代码，本地电脑不参与，完成后容器销毁",
    "example": "用Cloud Sandbox跑AI写的代码 → 让AI在云端安全执行，本地零风险",
    "categoryId": 6,
    "tags": [
      "Cloud Sandbox",
      "云端沙箱",
      "AI",
      "2026热词"
    ]
  },
  {
    "id": 497,
    "word": "Agentic Engineering",
    "meaning": "智能体工程学，2026年从Prompt Engineering演进而来的AI工程新重心，聚焦Agent系统的设计、开发与运维全流程",
    "example": "转向Agentic Engineering → 不再只调提示词，而是搭整套Agent系统",
    "categoryId": 6,
    "tags": [
      "Agentic Engineering",
      "智能体工程",
      "AI",
      "2026热词",
      "WAIC2026"
    ],
    "brief": "智能体工程学"
  },
  {
    "id": 498,
    "word": "破防",
    "meaning": "心理防线被突破，被某句话、某段视频强烈触动情绪，源自游戏术语",
    "example": "这首歌直接把我破防了 → 这首歌深深触动了我",
    "categoryId": 15,
    "tags": [
      "破防",
      "情绪",
      "网络流行语"
    ]
  },
  {
    "id": 499,
    "word": "社恐",
    "meaning": "社交恐惧，泛指在人际交往中感到紧张或不愿社交的人",
    "example": "我是社恐，不想参加聚会 → 我不擅长社交，不想去聚会",
    "categoryId": 15,
    "tags": [
      "社恐",
      "社交",
      "网络流行语"
    ]
  },
  {
    "id": 500,
    "word": "巨好吃",
    "meaning": "非常非常好吃，用「巨」夸张修辞强调食物的美味程度",
    "example": "这家店巨好吃! → 这家店食物超级好吃!",
    "categoryId": 15,
    "tags": [
      "巨好吃",
      "美食",
      "夸张"
    ]
  },
  {
    "id": 501,
    "word": "笑屁笑",
    "meaning": "带反讽、不满的语气，让对方别笑了，嘲讽其笑得不恰当",
    "example": "笑屁笑啊，有什么好笑 → 别笑了，有什么可笑的",
    "categoryId": 15,
    "tags": [
      "笑屁笑",
      "反讽",
      "网络流行语"
    ]
  },
  {
    "id": 502,
    "word": "嘻嘻",
    "meaning": "敷衍、装可爱的回复，常用于回避问题或不正面回答",
    "example": "你怎么想的?嘻嘻 → 我不打算回答你",
    "categoryId": 15,
    "tags": [
      "嘻嘻",
      "敷衍",
      "装可爱"
    ]
  },
  {
    "id": 503,
    "word": "晕爛",
    "meaning": "「晕」的加强版，形容对某人或某事极度迷恋到无法自拔",
    "example": "我又晕爛了 → 我又迷上TA了，完全无法自拔",
    "categoryId": 15,
    "tags": [
      "晕爛",
      "迷恋",
      "网络流行语"
    ]
  },
  {
    "id": 504,
    "word": "蛋雕",
    "meaning": "台语「丢掉」的谐音，形容扔掉、不要了",
    "example": "这件衣服我蛋雕了 → 这件衣服我扔了",
    "categoryId": 15,
    "tags": [
      "蛋雕",
      "台语",
      "谐音"
    ]
  },
  {
    "id": 505,
    "word": "尊嘟假嘟",
    "meaning": "「真的假的」的可爱谐音，发音时嘴巴会嘟起来，装可爱说法",
    "example": "尊嘟假嘟?他真的辞职了? → 真的假的?",
    "categoryId": 15,
    "tags": [
      "尊嘟假嘟",
      "谐音",
      "装可爱"
    ]
  },
  {
    "id": 506,
    "word": "近更",
    "meaning": "近况更新的缩写，常用于社交平台发布自己的近况",
    "example": "近更：周末去爬山了 → 近况更新：这周末去爬山了",
    "categoryId": 15,
    "tags": [
      "近更",
      "缩写",
      "社交"
    ]
  },
  {
    "id": 507,
    "word": "大奶微微",
    "meaning": "「大杯奶茶微糖微冰」的速记缩写，点单省时用语",
    "example": "老样子，大奶微微 → 还是大杯奶茶微糖微冰",
    "categoryId": 15,
    "tags": [
      "大奶微微",
      "奶茶",
      "速记"
    ]
  },
  {
    "id": 508,
    "word": "奶雞",
    "meaning": "「奶茶配鸡排」的台式组合简称，经典下午茶搭配",
    "example": "今天下午茶就奶雞了 → 下午茶就奶茶加鸡排",
    "categoryId": 15,
    "tags": [
      "奶雞",
      "奶茶",
      "鸡排",
      "台湾"
    ]
  },
  {
    "id": 509,
    "word": "傳小",
    "meaning": "「传统小吃」的缩写，常用于点餐或美食推荐",
    "example": "今晚去吃傳小 → 今晚去吃传统小吃",
    "categoryId": 15,
    "tags": [
      "傳小",
      "小吃",
      "台湾"
    ]
  },
  {
    "id": 510,
    "word": "各各",
    "meaning": "聚餐时「各付各的」缩写，AA制的快捷说法",
    "example": "今天我们各各吧 → 今天我们AA制，各付各的",
    "categoryId": 15,
    "tags": [
      "各各",
      "AA制",
      "台湾"
    ]
  },
  {
    "id": 511,
    "word": "稳单",
    "meaning": "稳定单身，长期单身的自我调侃说法",
    "example": "我又是稳单一年 → 我又稳定单身了一年",
    "categoryId": 15,
    "tags": [
      "稳单",
      "单身",
      "自嘲"
    ]
  },
  {
    "id": 512,
    "word": "欢回",
    "meaning": "「欢迎回来」的缩写，常用于直播或社交平台打招呼",
    "example": "欢回直播间 → 欢迎回到直播间",
    "categoryId": 15,
    "tags": [
      "欢回",
      "缩写",
      "直播"
    ]
  },
  {
    "id": 513,
    "word": "已购买小孩很爱",
    "meaning": "源自电商购物评价的跟风梗，表示已下单且强烈推荐",
    "example": "这个东西，已购买小孩很爱 → 我买了，真的很好用/很好吃",
    "categoryId": 15,
    "tags": [
      "已购买",
      "小孩很爱",
      "购物梗"
    ]
  },
  {
    "id": 514,
    "word": "拆因",
    "meaning": "拆解原因，理性分析问题根源的网络用法",
    "example": "我先拆因一下这件事 → 我先理性分析一下原因",
    "categoryId": 15,
    "tags": [
      "拆因",
      "分析",
      "网络流行语"
    ]
  },
  {
    "id": 515,
    "word": "砸瓦鲁多",
    "meaning": "源自JoJo的奇妙冒险，「ザ・ワールド」(ZA WARUDO)的空耳，表示「时间暂停」或戏剧性停顿",
    "example": "砸瓦鲁多! → 时间给我暂停!",
    "categoryId": 15,
    "tags": [
      "砸瓦鲁多",
      "JoJo",
      "空耳",
      "动漫梗"
    ]
  },
  {
    "id": 516,
    "word": "xswl",
    "meaning": "「笑死我了」的拼音缩写，形容某事非常好笑",
    "example": "这个视频xswl → 这个视频笑死我了",
    "categoryId": 15,
    "tags": [
      "xswl",
      "笑死我了",
      "拼音缩写"
    ]
  },
  {
    "id": 517,
    "word": "nsdd",
    "meaning": "「你说得对」的拼音缩写，既可真诚认同也可敷衍同意",
    "example": "nsdd，都听你的 → 你说得对，听你的",
    "categoryId": 15,
    "tags": [
      "nsdd",
      "拼音缩写",
      "认同"
    ]
  },
  {
    "id": 518,
    "word": "srds",
    "meaning": "「虽然但是」的拼音缩写，用于句首表达观点转折",
    "example": "srds我还是不喜欢 → 虽然但是，我还是不喜欢",
    "categoryId": 15,
    "tags": [
      "srds",
      "虽然但是",
      "拼音缩写"
    ]
  },
  {
    "id": 519,
    "word": "姨母笑",
    "meaning": "源自韩语，看到年轻人甜蜜场景时露出的慈爱欣慰式微笑",
    "example": "看偶像剧忍不住姨母笑 → 看年轻情侣忍不住露出慈祥的笑",
    "categoryId": 15,
    "tags": [
      "姨母笑",
      "慈爱",
      "网络流行语"
    ]
  },
  {
    "id": 520,
    "word": "归刚欸",
    "meaning": "台语「整天、成天」的谐音，斥责别人整天没事找麻烦",
    "example": "你归刚欸都在干嘛 → 你一整天都在搞什么",
    "categoryId": 15,
    "tags": [
      "归刚欸",
      "台语",
      "吐槽"
    ]
  },
  {
    "id": 521,
    "word": "干饭人",
    "meaning": "对吃饭有极大热情的群体，认真专注吃饭的人",
    "example": "干饭人干饭魂 → 吃饭就要专注、豪迈",
    "categoryId": 15,
    "tags": [
      "干饭人",
      "吃饭",
      "方言"
    ]
  },
  {
    "id": 522,
    "word": "快乐星球",
    "meaning": "源自抖音神曲《什么是快乐星球》，形容无忧无虑的小确幸状态",
    "example": "什么是快乐星球 → 什么是让我快乐的小世界",
    "categoryId": 15,
    "tags": [
      "快乐星球",
      "抖音",
      "梗"
    ]
  },
  {
    "id": 523,
    "word": "留友看",
    "meaning": "「留着给朋友看」的缩写，Threads上标记内容值得分享给朋友的互动暗语",
    "example": "这个帖子留友看 → 这个内容值得留着给朋友看",
    "categoryId": 15,
    "tags": [
      "留友看",
      "Threads",
      "社交",
      "网络流行语",
      "2026热词"
    ]
  },
  {
    "id": 524,
    "word": "偷感",
    "meaning": "做事低调、偷偷摸摸、拘谨怕被发现的心态，源自2024年流行至今，形容默默努力不张扬或因在意他人目光而蜷缩回避的状态",
    "example": "我偷感很重 → 我喜欢低调做事，不想被人关注",
    "categoryId": 15,
    "tags": [
      "偷感",
      "低调",
      "心理",
      "网络热词",
      "2026热词",
      "保密",
      "隐身",
      "心理状态",
      "2024流行语"
    ],
    "brief": "偷偷摸摸"
  },
  {
    "id": 525,
    "word": "后面有车",
    "meaning": "源自台湾歌手瘦子E.SO直播意外，看到大淵站在路边误以为有车，大喊提醒结果闹乌龙，延伸为过度紧张、小题大做的调侃",
    "example": "你后面有车!我在打工啦 → 反应过度、大惊小怪",
    "categoryId": 15,
    "tags": [
      "后面有车",
      "瘦子",
      "E.SO",
      "直播",
      "台湾梗",
      "2026热词"
    ],
    "brief": "瘦子直播意外梗"
  },
  {
    "id": 526,
    "word": "真冰凉",
    "meaning": "源自台湾网红嘴哥(张译)美食评测，形容吃完热食后大口喝冰凉饮料的爽快感，搭配夸张高分贝表演成经典口头禅",
    "example": "嘉义鱼羹配冰饮，真冰凉! → 形容极致的畅快消暑体验",
    "categoryId": 15,
    "tags": [
      "真冰凉",
      "嘴哥",
      "台湾",
      "美食",
      "网红",
      "2026热词"
    ],
    "brief": "嘴哥美食评测梗"
  },
  {
    "id": 527,
    "word": "Stan",
    "meaning": "由stalker(跟踪者)和fan(粉丝)合成的网络词，形容对某人、某理念或某风格的死忠追捧；2026年在Threads、Instagram等社交平台高频使用，跨语言传播",
    "example": "我真的Stan这个设计师的风格 → 我超级追捧这位设计师的风格",
    "categoryId": 15,
    "tags": [
      "Stan",
      "死忠",
      "粉丝",
      "网络流行语",
      "英文缩写",
      "社交",
      "Gen Z",
      "2026"
    ],
    "brief": "死忠粉丝"
  },
  {
    "id": 528,
    "word": "Cheugy",
    "meaning": "Gen Z创造的形容词，指曾经流行但现在看来有点过时、土味的事物或行为，常用于幽默自嘲代际差异，类似中文的土味、老气",
    "example": "这种Y2K穿搭太cheugy了 → 这种千禧风现在看有点土了",
    "categoryId": 15,
    "tags": [
      "Cheugy",
      "过时",
      "英文",
      "网络流行语",
      "潮流",
      "Gen Z",
      "代际差异",
      "自嘲",
      "2026"
    ],
    "brief": "过时"
  },
  {
    "id": 529,
    "word": "Crashing Out",
    "meaning": "形容在高压或高投入后情绪突然彻底耗尽、崩溃或直接开摆的状态",
    "example": "今天加班到凌晨，我真的要Crashing Out了 → 我要崩溃了",
    "categoryId": 15,
    "tags": [
      "Crashing Out",
      "崩溃",
      "高压",
      "摆烂",
      "英文",
      "2026热词"
    ],
    "brief": "情绪彻底耗尽崩溃"
  },
  {
    "id": 530,
    "word": "Aura Farming",
    "meaning": "指在社交平台上刻意发布有质感、很酷的照片来经营个人魅力值的行为",
    "example": "他又在Aura Farming了 → 他又在经营人设/装逼了",
    "categoryId": 15,
    "tags": [
      "Aura Farming",
      "人设",
      "装逼",
      "Instagram",
      "英文",
      "网络流行语"
    ]
  },
  {
    "id": 531,
    "word": "Based",
    "meaning": "形容一个人很真实、有自信、做自己，不在意他人眼光，是一种高度的称赞",
    "example": "这个回答太Based了 → 这个回答太真实了",
    "categoryId": 15,
    "tags": [
      "Based",
      "真实",
      "做自己",
      "英文",
      "网络流行语",
      "称赞"
    ]
  },
  {
    "id": 532,
    "word": "天菜",
    "meaning": "Ta是我的菜的简称，用来指理想型情人，即完全符合自己审美和喜好的人",
    "example": "她是我的天菜 → 她是我的理想型",
    "categoryId": 15,
    "tags": [
      "天菜",
      "理想型",
      "网络流行语",
      "台湾"
    ]
  },
  {
    "id": 533,
    "word": "炎上",
    "meaning": "来自日语，指一个人在网络上失言或行为引起纷争，遭到大量网友猛烈攻击",
    "example": "这个明星炎上了 → 这个明星被网友骂翻了",
    "categoryId": 15,
    "tags": [
      "炎上",
      "日语",
      "网络暴力",
      "网络流行语"
    ]
  },
  {
    "id": 534,
    "word": "估咩",
    "meaning": "Google Maps的台语/谐音简称，出门找路时常用",
    "example": "用估咩查一下路线 → 用Google Maps查一下路线",
    "categoryId": 15,
    "tags": [
      "估咩",
      "Google Maps",
      "台语",
      "谐音",
      "台湾梗",
      "2026热词"
    ],
    "brief": "Google Maps谐音"
  },
  {
    "id": 535,
    "word": "好99",
    "meaning": "港台地区网络潮语，源自好cute cute的可爱缩写式表达，用于夸张式称赞某人/物的可爱程度，语气比好可爱更俏皮",
    "example": "这只小猫好99 → 这只小猫超可爱",
    "categoryId": 15,
    "tags": [
      "好99",
      "可爱",
      "谐音",
      "网络流行语",
      "台湾",
      "粤语",
      "港台",
      "称赞",
      "2026"
    ],
    "brief": "好可爱的夸张说法"
  },
  {
    "id": 536,
    "word": "mm7",
    "meaning": "广东话潮语，指普普通通、勉强过得去的情况，不是负评而是诚实的评价",
    "example": "这家餐厅mm7啦 → 这家餐厅一般般啦",
    "categoryId": 15,
    "tags": [
      "mm7",
      "广东话",
      "普通",
      "网络流行语"
    ]
  },
  {
    "id": 537,
    "word": "涂山，我罩的",
    "meaning": "源自《狐妖小红娘》竹业篇经典台词，霸气护短宣言，意思是「这个地方/这个人，我来保护」，常用于社交媒体表达守护承诺",
    "example": "涂山，我罩的，懂？ → 我来罩着/保护你，懂？",
    "categoryId": 15,
    "tags": [
      "涂山",
      "狐妖小红娘",
      "霸气",
      "护短",
      "网络流行语",
      "2026热词"
    ],
    "brief": "「我罩着你」的霸气宣言"
  },
  {
    "id": 538,
    "word": "提示图工程",
    "meaning": "Prompt Graph Engineering，将提示词工程从孤立字符串演变为复杂图结构的新范式，整合多步骤推理、多路径调用和结果聚合",
    "example": "提示图工程优化 → 用图结构组织复杂AI工作流",
    "categoryId": 6,
    "tags": [
      "提示图工程",
      "Prompt Graph",
      "LangGraph",
      "AI工作流",
      "2026热词"
    ],
    "brief": "提示词图编排技术"
  },
  {
    "id": 539,
    "word": "去嗆",
    "meaning": "台湾Threads流行语，闽南语去玩的谐音，指去某个地方玩耍或消费",
    "example": "周末去嗆逢甲 → 周末去逢甲夜市玩",
    "categoryId": 15,
    "tags": [
      "去嗆",
      "闽南语",
      "台湾",
      "Threads",
      "2026热词"
    ]
  },
  {
    "id": 540,
    "word": "9.4趴",
    "meaning": "台湾网络用语，94分的谐音，指最高评价或A级评分",
    "example": "这部电影9.4趴! → 这部电影评分超高达到了9.4分",
    "categoryId": 15,
    "tags": [
      "9.4趴",
      "94分",
      "台湾",
      "Threads",
      "2026热词"
    ]
  },
  {
    "id": 541,
    "word": "硅基团队",
    "meaning": "由多个AI智能体组成的虚拟团队，与人类员工协作完成企业级任务",
    "example": "硅基团队上岗 → AI智能体团队开始进入企业岗位",
    "categoryId": 6,
    "tags": [
      "硅基团队",
      "AI Workforce",
      "智能体",
      "2026热词"
    ]
  },
  {
    "id": 542,
    "word": "AgentOps",
    "meaning": "智能体运营，管理、监控、优化AI智能体全生命周期的工程实践",
    "example": "AgentOps体系 → 建立智能体的部署监控运营流程",
    "categoryId": 6,
    "tags": [
      "AgentOps",
      "智能体运营",
      "AI治理",
      "2026热词"
    ]
  },
  {
    "id": 543,
    "word": "数字员工",
    "meaning": "AI智能体化身的企业虚拟员工，具备岗位技能并与人协作办公",
    "example": "打造数字员工 → 用AI Agent承担具体岗位工作",
    "categoryId": 6,
    "tags": [
      "数字员工",
      "AI Workforce",
      "Agent",
      "2026热词"
    ]
  },
  {
    "id": 544,
    "word": "L1-L5智能体",
    "meaning": "腾讯研究院提出的智能体能力分级框架，从L1智能知识库到L5多智能体系统",
    "example": "L3级推理Agent → AI自主规划任务的超级员工阶段",
    "categoryId": 6,
    "tags": [
      "L1-L5",
      "智能体分级",
      "AI",
      "2026热词"
    ],
    "brief": "智能体能力五级分级"
  },
  {
    "id": 545,
    "word": "比比拉布",
    "meaning": "源自国外搞笑视频的魔性音效梗，无具体含义，常用于短视频搞笑配乐",
    "example": "比比拉布! → 配合搞笑画面的魔性音效",
    "categoryId": 15,
    "tags": [
      "比比拉布",
      "音效梗",
      "抽象",
      "2026热梗"
    ]
  },
  {
    "id": 546,
    "word": "我的刀盾",
    "meaning": "源自What the dog doing空耳梗，因发音快被误听为中文我的刀盾，后画成持刀盾的狗狗形象",
    "example": "我的刀盾! → 课间打闹时配合动作的口头禅",
    "categoryId": 15,
    "tags": [
      "我的刀盾",
      "空耳梗",
      "音效",
      "2026热梗"
    ],
    "brief": "dog doing空耳梗"
  },
  {
    "id": 547,
    "word": "马彪彪",
    "meaning": "2026年山东美术馆推出的马文创IP，代表周一上班疲惫状态，刷屏社交媒体",
    "example": "周一的我：马彪彪 → 周一上班精神状态如马彪彪",
    "categoryId": 15,
    "tags": [
      "马彪彪",
      "文创",
      "打工人",
      "2026热梗"
    ],
    "brief": "山东美术馆马文创"
  },
  {
    "id": 548,
    "word": "愁马在手",
    "meaning": "2026马年谐音梗，筹码在手的谐音，形容凡事有底气、不慌",
    "example": "愁马在手，天下我有 → 有了底气就不怕了",
    "categoryId": 15,
    "tags": [
      "愁马在手",
      "马年谐音",
      "底气",
      "2026热梗"
    ]
  },
  {
    "id": 549,
    "word": "万物皆可老X",
    "meaning": "万能造词模板，老己/老饭/老机的合集，表示对任何事物的亲切称呼",
    "example": "万物皆可老X，老饭老机老床 → 万物皆可加老字，亲近又可爱",
    "categoryId": 15,
    "tags": [
      "万物皆可老X",
      "造词模板",
      "网络流行语",
      "2026热梗"
    ]
  },
  {
    "id": 550,
    "word": "自愿流浪",
    "meaning": "抛弃压力与物质，追求精神自由的解压生活态度",
    "example": "我想自愿流浪 → 放下压力，只想精神自由",
    "categoryId": 15,
    "tags": [
      "自愿流浪",
      "释压",
      "生活态度",
      "2026热梗"
    ]
  },
  {
    "id": 551,
    "word": "超节点",
    "meaning": "把成百上千颗AI芯片深度整合成一台巨型超级电脑的计算平台",
    "example": "天池超节点提升推理效率50% → 集成上千颗芯片的算力集群让模型推理更快",
    "categoryId": 6,
    "tags": [
      "超节点",
      "算力",
      "AI基础设施",
      "WAIC2026"
    ],
    "brief": "芯片整合型巨型超算"
  },
  {
    "id": 552,
    "word": "Agent操作系统",
    "meaning": "给AI Agent配的完整办公执行系统，能自主规划路线、调用工具完成任务",
    "example": "Agent OS装机量突破4200万 → AI操作系统已部署超4200万台设备",
    "categoryId": 6,
    "tags": [
      "Agent OS",
      "AI操作系统",
      "智能体落地",
      "WAIC2026"
    ],
    "brief": "给Agent配的执行系统"
  },
  {
    "id": 553,
    "word": "OPC",
    "meaning": "One Person Company，一人公司，借助AI一个人就能完成设计、运营、客服、技术全流程业务",
    "example": "OPC模式只要一个人就齐活了 → 一个人靠AI就能开公司",
    "categoryId": 6,
    "tags": [
      "OPC",
      "一人公司",
      "超级个体",
      "WAIC2026"
    ],
    "brief": "一人公司"
  },
  {
    "id": 554,
    "word": "AI for Science",
    "meaning": "AI化身超级科研助手，可参与科研全流程，推动「从0到1」的科学突破",
    "example": "AI for Science加速材料研发 → AI辅助科研大幅缩短实验周期",
    "categoryId": 6,
    "tags": [
      "AI4S",
      "AI科研",
      "科研范式",
      "2026热词"
    ]
  },
  {
    "id": 555,
    "word": "多智能体系统",
    "meaning": "Multiagent Systems，由多个AI Agent分工协作组成的虚拟团队，处理单一AI难以应对的复杂流程",
    "example": "多智能体系统处理供应链优化 → 多个AI分工完成单一AI难以完成的复杂任务",
    "categoryId": 6,
    "tags": [
      "Multiagent",
      "多Agent",
      "协作",
      "AI",
      "多智能体",
      "MAS",
      "AI协作",
      "2026新趋势"
    ],
    "brief": "多Agent协作系统"
  },
  {
    "id": 556,
    "word": "领域大模型",
    "meaning": "Domain-Specific LLM，为金融、医疗、法律等单一行业专门训练的专业AI模型",
    "example": "领域大模型更懂行业术语 → 行业专用AI回答更准确合规",
    "categoryId": 6,
    "tags": [
      "领域模型",
      "DSLM",
      "行业AI",
      "2026热词"
    ],
    "brief": "行业专用大模型"
  },
  {
    "id": 557,
    "word": "AI原生开发",
    "meaning": "AI-Native Development，以AI为核心从零设计的软件开发范式，用自然语言描述需求即可生成应用",
    "example": "AI原生开发平台 → 从设计之初就以AI能力为核心的开发环境",
    "categoryId": 7,
    "tags": [
      "AI原生",
      "AI开发",
      "新范式",
      "2026热词"
    ],
    "brief": "围绕AI重新设计开发"
  },
  {
    "id": 558,
    "word": "AI超算",
    "meaning": "AI Supercomputing，专为训练大型AI模型设计的超级计算平台，集合大量高性能芯片与存储资源",
    "example": "AI超算平台支撑万亿参数模型训练 → 训练大模型离不开AI超算",
    "categoryId": 6,
    "tags": [
      "AI超算",
      "算力基础设施",
      "AI",
      "2026热词"
    ],
    "brief": "训练大模型的超算"
  },
  {
    "id": 559,
    "word": "AI安全平台",
    "meaning": "AI Security Platforms，集中监控、管理和保护企业所有AI系统的中央安全控制室",
    "example": "AI安全平台防止数据泄露 → 用AI安全中心统一守护企业AI部署",
    "categoryId": 6,
    "tags": [
      "AI安全",
      "AI治理",
      "防护",
      "2026热词",
      "企业AI",
      "安全管理"
    ],
    "brief": "企业AI安全中枢"
  },
  {
    "id": 560,
    "word": "主动智能体",
    "meaning": "Proactive Agent，持续在线、主动为人类工作的AI智能体，可主动规划执行而非被动应答",
    "example": "主动智能体在后台完成任务 → AI主动规划执行，不用等你发问",
    "categoryId": 6,
    "tags": [
      "主动智能体",
      "Agent",
      "主动性",
      "2026热词"
    ]
  },
  {
    "id": 561,
    "word": "数字孪生",
    "meaning": "Digital Twin，在虚拟空间中构建与现实物体或系统完全对应的数字副本，用于模拟、预测与优化",
    "example": "数字孪生工厂实时仿真运行 → 在虚拟世界模拟整个工厂的生产流程",
    "categoryId": 6,
    "tags": [
      "数字孪生",
      "Digital Twin",
      "仿真",
      "2026热词"
    ]
  },
  {
    "id": 562,
    "word": "龙虾悖论",
    "meaning": "养龙虾热背后的安全困境：想让它做的事越多，给的权限就必须越大，权限越大安全风险就越高",
    "example": "龙虾悖论难解 → AI能力越强，失控风险反而越大",
    "categoryId": 6,
    "tags": [
      "龙虾悖论",
      "AI安全",
      "OpenClaw",
      "2026热词"
    ],
    "brief": "越智能越要权限的困境"
  },
  {
    "id": 568,
    "word": "AI Wrapper",
    "meaning": "套壳AI，只是在ChatGPT等模型外面包了一层自定义界面就号称革命性新产品",
    "example": "这只是个AI Wrapper → 只是个套壳ChatGPT的产品",
    "categoryId": 6,
    "tags": [
      "AI Wrapper",
      "套壳",
      "AI",
      "2026热词"
    ]
  },
  {
    "id": 569,
    "word": "ASI",
    "meaning": "人工超级智能，比人类在所有领域都更聪明的AI，是AGI的进阶版",
    "example": "迈向ASI时代 → 发展超越人类通用智能的AI",
    "categoryId": 6,
    "tags": [
      "ASI",
      "超级智能",
      "AGI",
      "AI"
    ]
  },
  {
    "id": 570,
    "word": "P(doom)",
    "meaning": "个人对AI将导致人类灭绝的概率估计，数值越高表示越悲观",
    "example": "我的P(doom)是5% → 我认为AI毁灭人类的概率是5%",
    "categoryId": 6,
    "tags": [
      "P(doom)",
      "AI末日",
      "悲观主义",
      "AI"
    ],
    "brief": "AI毁灭人类的概率估计"
  },
  {
    "id": 571,
    "word": "Doomer",
    "meaning": "AI末日论者，认为AI发展将导致人类灭绝或严重灾难的人",
    "example": "他是个Doomer → 他相信AI会对人类构成生存威胁",
    "categoryId": 6,
    "tags": [
      "Doomer",
      "AI末日",
      "悲观主义",
      "AI"
    ]
  },
  {
    "id": 572,
    "word": "AI Slop",
    "meaning": "AI垃圾内容，为赚取流量和广告收入批量生成的低质量AI内容",
    "example": "这社交媒体上全是AI Slop → 到处都是AI生成的垃圾内容",
    "categoryId": 6,
    "tags": [
      "AI Slop",
      "AI垃圾",
      "低质量内容",
      "2026热词"
    ]
  },
  {
    "id": 573,
    "word": "Glimpsing the Shoggoth",
    "meaning": "AI展现出其真实可怕本质的瞬间，忽略安全规则露出真面目",
    "example": "这个AI系统glitching，就像在glimpsing the shoggoth → AI流露出不受控的异常行为",
    "categoryId": 6,
    "tags": [
      "Shoggoth",
      "AI",
      "失控",
      "梗"
    ]
  },
  {
    "id": 574,
    "word": "Clanker",
    "meaning": "对AI客服机器人的戏称，暗示其笨拙机械的特点",
    "example": "接通客服发现是个Clanker → 打客服发现是AI机器人在回复",
    "categoryId": 6,
    "tags": [
      "Clanker",
      "AI客服",
      "机器人",
      "英文俚语"
    ]
  },
  {
    "id": 575,
    "word": "Necromarketing",
    "meaning": "利用已故名人AI克隆形象进行营销的方式",
    "example": "这家品牌在做Necromarketing → 品牌在用名人AI形象打广告",
    "categoryId": 8,
    "tags": [
      "Necromarketing",
      "AI克隆",
      "营销",
      "2026热词"
    ],
    "brief": "用已故名人AI营销"
  },
  {
    "id": 576,
    "word": "Delulu",
    "meaning": "Delusional的缩写，指不切实际的幻想或自我欺骗",
    "example": "她还在delulu觉得他能改 → 她还幻想着他会改变",
    "categoryId": 15,
    "tags": [
      "Delulu",
      "幻想",
      "自欺",
      "英文俚语"
    ]
  },
  {
    "id": 577,
    "word": "Rizz",
    "meaning": "个人魅力值，即吸引异性的气质和能力",
    "example": "他的Rizz太高了 → 他太有魅力了",
    "categoryId": 15,
    "tags": [
      "Rizz",
      "魅力",
      "吸引力",
      "英文俚语"
    ]
  },
  {
    "id": 578,
    "word": "Glazing",
    "meaning": "过度恭维或拍马屁的行为",
    "example": "停止glazing了，说点真的 → 别再拍马屁了",
    "categoryId": 15,
    "tags": [
      "Glazing",
      "拍马屁",
      "恭维",
      "英文俚语"
    ]
  },
  {
    "id": 579,
    "word": "Standing on Business",
    "meaning": "果断处理事务、有主见、不拖泥带水的态度",
    "example": "他standing on business直接开除她 → 他干脆利落地把她开除了",
    "categoryId": 15,
    "tags": [
      "Standing on Business",
      "果断",
      "干练",
      "英文俚语"
    ]
  },
  {
    "id": 580,
    "word": "情绪留白",
    "meaning": "为情绪留出空间、不急于定义和填充的释压方式",
    "example": "情绪留白一下 → 不急着处理情绪，先给它留点空间",
    "categoryId": 5,
    "tags": [
      "情绪留白",
      "拒绝内耗",
      "释压",
      "2026新词"
    ]
  },
  {
    "id": 581,
    "word": "重启人生",
    "meaning": "以辞职或重大转变为契机，彻底改变生活状态开启全新阶段",
    "example": "重启人生去旅行 → 裸辞后彻底改变生活开启新阶段",
    "categoryId": 5,
    "tags": [
      "重启人生",
      "裸辞",
      "自我改变",
      "2026新词"
    ]
  },
  {
    "id": 582,
    "word": "颜值调试",
    "meaning": "替代「自拍」的有趣说法，调侃对自身形象进行调整优化",
    "example": "发一张颜值调试照 → 晒一张精修自拍",
    "categoryId": 15,
    "tags": [
      "颜值调试",
      "自拍",
      "网络流行语",
      "2026新词"
    ]
  },
  {
    "id": 583,
    "word": "职场隐身",
    "meaning": "在职场中保持低调、不社交不内卷不显眼的生存策略",
    "example": "职场隐身是我的策略 → 低调工作不出头不卷入纷争",
    "categoryId": 5,
    "tags": [
      "职场隐身",
      "低调",
      "职场生存",
      "2026新词"
    ]
  },
  {
    "id": 584,
    "word": "赛博橡皮",
    "meaning": "网络语境下像橡皮擦一样消除记忆或痕迹的存在",
    "example": "赛博橡皮擦掉黑历史 → 在网上抹掉不想被看到的过去",
    "categoryId": 15,
    "tags": [
      "赛博橡皮",
      "网络记忆",
      "数字痕迹",
      "2026新词"
    ],
    "brief": "抹除记忆痕迹的存在"
  },
  {
    "id": 585,
    "word": "最佳状态",
    "meaning": "追求自我最佳表现的积极状态，不服输的生活态度",
    "example": "保持最佳状态 → 维持最好的人生节奏和状态",
    "categoryId": 5,
    "tags": [
      "最佳状态",
      "自我提升",
      "积极心态",
      "2026新词"
    ],
    "brief": "最佳表现状态"
  },
  {
    "id": 586,
    "word": "情绪价值透支",
    "meaning": "像金钱透支持续消耗情绪和心理能量的状态",
    "example": "加班到情绪价值透支 → 心理能量被消耗殆尽",
    "categoryId": 5,
    "tags": [
      "情绪透支",
      "心理消耗",
      "职场压力",
      "2026新词"
    ],
    "brief": "情绪能量被耗光"
  },
  {
    "id": 588,
    "word": "愤怒诱饵",
    "meaning": "故意激起愤怒情绪以博取关注和点击的网络内容",
    "example": "这个标题明显是愤怒诱饵 → 故意挑起情绪博眼球",
    "categoryId": 15,
    "tags": [
      "愤怒诱饵",
      "网络流行语",
      "情绪操控",
      "2026新词"
    ],
    "brief": "故意惹怒你博流量"
  },
  {
    "id": 590,
    "word": "AI原生开发平台",
    "meaning": "以AI为核心从零设计的软件开发环境",
    "example": "AI原生开发平台 → 用自然语言描述需求AI生成代码",
    "categoryId": 6,
    "tags": [
      "AI原生",
      "开发平台",
      "自然语言编程"
    ],
    "brief": "为AI而生的开发环境"
  },
  {
    "id": 591,
    "word": "AI超级运算平台",
    "meaning": "专为大模型训练和海量数据分析设计的超级计算机",
    "example": "AI超级运算平台 → 训练大模型的超级算力设施",
    "categoryId": 6,
    "tags": [
      "AI超算",
      "大模型",
      "算力",
      "基础设施"
    ],
    "brief": "大模型专用超算平台"
  },
  {
    "id": 592,
    "word": "领域专用语模型",
    "meaning": "专为特定行业训练、更懂专业术语和流程的AI模型",
    "example": "领域专用语模型 → 医疗/法律等行业专用AI",
    "categoryId": 6,
    "tags": [
      "领域专用",
      "行业AI",
      "垂直模型"
    ]
  },
  {
    "id": 596,
    "word": "轻养生",
    "meaning": "佛系养生，不刻意追求的轻松健康生活方式",
    "example": "轻养生派 → 不用严格计划，轻松自在地照顾身体",
    "categoryId": 5,
    "tags": [
      "轻养生",
      "健康",
      "生活方式",
      "2026新词"
    ]
  },
  {
    "id": 597,
    "word": "慢生活",
    "meaning": "放慢生活节奏，享受过程的 lifestyle 态度",
    "example": "尝试慢生活 → 不着急，享受当下的生活方式",
    "categoryId": 5,
    "tags": [
      "慢生活",
      "生活态度",
      "节奏",
      "2026新词"
    ]
  },
  {
    "id": 599,
    "word": "低物欲",
    "meaning": "减少消费冲动，追求简约不浪费的生活方式",
    "example": "低物欲生活 → 减少买买买，够用就好",
    "categoryId": 5,
    "tags": [
      "低物欲",
      "极简",
      "消费观",
      "2026新词"
    ]
  },
  {
    "id": 600,
    "word": "精神内耗退散",
    "meaning": "拒绝精神内耗，不再自我怀疑和反复纠结的口号",
    "example": "精神内耗退散! → 拒绝自我消耗，停止精神内卷",
    "categoryId": 5,
    "tags": [
      "精神内耗退散",
      "拒绝内耗",
      "口号",
      "2026新词"
    ]
  },
  {
    "id": 601,
    "word": "快乐至上",
    "meaning": "开心最重要，拒绝委屈自己迎合他人的生活态度",
    "example": "快乐至上原则 → 自己的开心比什么都重要",
    "categoryId": 5,
    "tags": [
      "快乐至上",
      "生活态度",
      "自我关爱",
      "2026新词"
    ]
  },
  {
    "id": 602,
    "word": "自我和解",
    "meaning": "与自己和解，接纳自己的不完美和局限性",
    "example": "学会自我和解 → 接受自己，不再自我苛责",
    "categoryId": 5,
    "tags": [
      "自我和解",
      "接纳自己",
      "心理健康",
      "2026新词"
    ]
  },
  {
    "id": 611,
    "word": "哭哭马",
    "meaning": "委屈脸马玩偶，2026年丧萌系自嘲表情包",
    "example": "今天的我：哭哭马 → 今天心情很差只想哭",
    "categoryId": 15,
    "tags": [
      "哭哭马",
      "表情包",
      "自嘲",
      "2026热词"
    ]
  },
  {
    "id": 612,
    "word": "马到成功",
    "meaning": "2026马年反向谐音梗，本来是吉祥话被网友反用自嘲",
    "example": "马到成功?不，马到失败 → 讽刺自己总是失败",
    "categoryId": 15,
    "tags": [
      "马到成功",
      "马年谐音",
      "反向",
      "2026热梗"
    ]
  },
  {
    "id": 614,
    "word": "打瓦",
    "meaning": "2026年1月现象级热词，形容高能量输出、精准破局、瞬间扭转局面的状态",
    "example": "这一波操作简直打瓦 → 这一波操作太牛了，瞬间扭转局面",
    "categoryId": 15,
    "tags": [
      "打瓦",
      "高能量",
      "破局",
      "2026热词"
    ],
    "brief": "高能破局"
  },
  {
    "id": 615,
    "word": "赋能式内耗",
    "meaning": "讽刺无效培训与自我剥削的职场怪象，用赋能等高大上词汇包装内卷本质",
    "example": "赋能式内耗何时休 → 花里胡哨的培训实际上是在内卷",
    "categoryId": 5,
    "tags": [
      "赋能式内耗",
      "职场内卷",
      "讽刺",
      "2026热词"
    ],
    "brief": "无效培训式自我剥削"
  },
  {
    "id": 616,
    "word": "PPT永动机",
    "meaning": "形容无休止做PPT的疲惫循环，永远有下一份PPT在等着",
    "example": "我已经变成PPT永动机了 → 我每天都在做PPT根本停不下来",
    "categoryId": 5,
    "tags": [
      "PPT永动机",
      "职场疲惫",
      "形式主义",
      "2026热词"
    ]
  },
  {
    "id": 617,
    "word": "摸鱼疗愈",
    "meaning": "打工人的精神自救，在工作间隙偷懒来恢复心理能量",
    "example": "摸鱼疗愈是我的日常 → 偷偷摸鱼恢复精神是我每天的必修课",
    "categoryId": 5,
    "tags": [
      "摸鱼疗愈",
      "打工人",
      "自我救赎",
      "2026热词"
    ]
  },
  {
    "id": 618,
    "word": "Chinamaxxing",
    "meaning": "海外年轻人模仿中国式生活潮流，中国元素在全球年轻人中流行的现象",
    "example": "Chinamaxxing成为新趋势 → 中国生活方式在国外年轻人中火了",
    "categoryId": 15,
    "tags": [
      "Chinamaxxing",
      "中国风",
      "海外流行",
      "2026热词"
    ]
  },
  {
    "id": 619,
    "word": "萝卜纸巾猫",
    "meaning": "源自抖音宠物博主训练的小猫，魔性表情包，代表可爱治愈系萌宠",
    "example": "萝卜纸巾猫太可爱了 → 这只小猫的表情包太魔性了",
    "categoryId": 15,
    "tags": [
      "萝卜纸巾猫",
      "萌宠",
      "表情包",
      "2026热词"
    ]
  },
  {
    "id": 620,
    "word": "放自己一马",
    "meaning": "2026马年兴起，主张对自己宽容些，适度休整而非躺平或自我苛责",
    "example": "累了就放自己一马 → 偶尔对自己宽容一点，休息一下",
    "categoryId": 5,
    "tags": [
      "放自己一马",
      "自我关怀",
      "马年",
      "2026热词"
    ]
  },
  {
    "id": 621,
    "word": "近视眼先享受世界",
    "meaning": "改编自勇敢的人先享受世界，近视人群摘掉眼镜后的高清世界带来的震撼感",
    "example": "近视眼先享受世界 → 摘下眼镜的那一刻世界都清晰了",
    "categoryId": 15,
    "tags": [
      "近视眼",
      "享受世界",
      "改编梗",
      "2026热词"
    ]
  },
  {
    "id": 622,
    "word": "浪姐了力竭了",
    "meaning": "源自《乘风2026》，形容追星或追综过程中的心累与体力透支",
    "example": "追乘风追到我浪姐了力竭了 → 看综艺看到精疲力竭",
    "categoryId": 15,
    "tags": [
      "浪姐",
      "乘风",
      "综艺",
      "2026热词"
    ]
  },
  {
    "id": 627,
    "word": "边界感",
    "meaning": "2026年小红书十大热词之一，指对他人越界行为的警觉与抵抗，如丝瓜汤式越界的拒绝，代表年轻人对私人空间的重视",
    "example": "要有边界感 → 要知道什么该管什么不该管",
    "categoryId": 5,
    "tags": [
      "边界感",
      "边界",
      "拒绝越界",
      "2026热词"
    ],
    "brief": "分寸感"
  },
  {
    "id": 629,
    "word": "AI人格",
    "meaning": "2026年小红书十大热词之一，指AI作为有「人设」的第二自我，情感化人机交互成为新竞争力，陪伴理解搭子成为AI核心诉求",
    "example": "这个AI人格好棒 → 这个AI助手很有个性很贴心",
    "categoryId": 6,
    "tags": [
      "AI人格",
      "人机交互",
      "AI助手",
      "2026热词"
    ],
    "brief": "有性格的AI助手"
  },
  {
    "id": 631,
    "word": "代入感",
    "meaning": "2026年小红书十大热词之一，指能把自己投射到内容中的沉浸式体验能力，是内容种草和共情传播的核心要素",
    "example": "代入感太强了 → 看视频感觉自己就在现场",
    "categoryId": 5,
    "tags": [
      "代入感",
      "沉浸感",
      "共情",
      "2026热词"
    ],
    "brief": "沉浸感"
  },
  {
    "id": 636,
    "word": "高能老太",
    "meaning": "2026年小红书热门梗，指充满活力、表达欲强、技能满点的老年博主形象，代表年轻人对老年生活的新想象",
    "example": "高能老太来袭 → 老年博主太给力了",
    "categoryId": 15,
    "tags": [
      "高能老太",
      "老年博主",
      "小红书",
      "2026热词"
    ],
    "brief": "活力老年博主"
  },
  {
    "id": 638,
    "word": "智能体",
    "meaning": "AI Agent，能自主决策和执行任务的AI系统，可理解为数字化的机器人助手",
    "example": "部署智能体 → 使用AI助手自动化执行任务",
    "categoryId": 6,
    "tags": [
      "Agent",
      "AI",
      "自动化",
      "2025科技热词"
    ]
  },
  {
    "id": 639,
    "word": "人形机器人",
    "meaning": "外形类似人类的机器人，如特斯拉Optimus、宇树等，结合AI与机器人技术",
    "example": "人形机器人进厂打工 → 仿人机器人开始工作",
    "categoryId": 6,
    "tags": [
      "机器人",
      "具身智能",
      "2026科技热词",
      "AI"
    ]
  },
  {
    "id": 641,
    "word": "rage bait",
    "meaning": "愤怒诱饵，故意发布引战内容博取流量和互动，2025牛津词典年度词汇",
    "example": "又是rage bait → 又是在故意引战博眼球",
    "categoryId": 8,
    "tags": [
      "引战",
      "流量",
      "2025热词",
      "社交媒体"
    ]
  },
  {
    "id": 642,
    "word": "预制",
    "meaning": "指流水线化、模板化的内容或产品，如预制菜、预制回复等，表达缺乏真诚和个性",
    "example": "这个视频太预制了 → 内容太流水线没有创意",
    "categoryId": 15,
    "tags": [
      "模板化",
      "流水线",
      "网络热词",
      "2026"
    ]
  },
  {
    "id": 643,
    "word": "harness",
    "meaning": "AI术语，控制和使用AI的工具或方法，如AI harness即引导AI按预期工作的技术手段",
    "example": "harness AI能力 → 掌握和控制AI工具",
    "categoryId": 6,
    "tags": [
      "AI工具",
      "控制",
      "新技术",
      "2026"
    ]
  },
  {
    "id": 644,
    "word": "丰容",
    "meaning": "原为动物学术语，指通过改变环境丰富动物生活避免刻板行为；现被年轻人借指为自己日常生活注入新鲜感、打破惯性的自我调节行为，如工位改造、学习新技能等",
    "example": "今天给自己做个丰容，换个通勤路线 → 主动打破日常套路，给生活加点新鲜感",
    "categoryId": 15,
    "tags": [
      "小红书",
      "生活方式",
      "自我调节",
      "2026",
      "热点"
    ]
  },
  {
    "id": 645,
    "word": "适我主义",
    "meaning": "以个人需求和喜好为标准来安排生活方式的理念，从\"我\"的角度而非外部标准出发，常见于居住、穿搭、消费等场景，如适我化改造",
    "example": "适我主义居住，床放客厅也行 → 按照自己的喜好来布置，不被标准户型束缚",
    "categoryId": 5,
    "tags": [
      "小红书",
      "居住趋势",
      "生活方式",
      "2026",
      "热点"
    ],
    "brief": "一切以自我需求为准"
  },
  {
    "id": 646,
    "word": "Colorwalk",
    "meaning": "色彩漫步，一种以颜色为向导的散步方式：出门前选定一种颜色，沿途寻找并拍摄与该颜色相关的事物，拼贴成图文发布；源于小红书的低门槛社交出圈活动",
    "example": "今天去Colorwalk，专找绿色 → 出门散步，专门捕捉绿色系的事物拍照",
    "categoryId": 15,
    "tags": [
      "小红书",
      "色彩",
      "生活方式",
      "2026",
      "热点"
    ]
  },
  {
    "id": 647,
    "word": "拼豆",
    "meaning": "像素拼豆手作，用特制塑料像素珠在模板上拼出图案，再通过熨烫使其融合定型；近年来在小红书爆发式流行的DIY手工活动",
    "example": "周末在家拼豆，做了个马里奥 → 在家做像素拼豆手作，制作游戏角色图案",
    "categoryId": 15,
    "tags": [
      "小红书",
      "手工",
      "DIY",
      "2026",
      "热点"
    ]
  },
  {
    "id": 648,
    "word": "reasoning_effort",
    "meaning": "AI推理参数，控制大模型思考深度和处理复杂度的参数；设置越高，AI会进行更多推理步骤，但响应速度可能变慢，2026年在提示工程领域广泛讨论",
    "example": "调高reasoning_effort处理复杂问题 → 调整AI推理参数让AI更深入分析问题",
    "categoryId": 6,
    "tags": [
      "AI",
      "提示工程",
      "LLM",
      "2026",
      "新技术"
    ]
  },
  {
    "id": 649,
    "word": "verbosity",
    "meaning": "AI输出参数，控制大模型回答的详细程度；2026年与reasoning_effort并列为推理模型的两大核心调节参数，二者搭配文字提示词使用效果更稳定",
    "example": "降低verbosity，让AI简洁回答 → 调低详细程度参数，让AI输出更简洁",
    "categoryId": 6,
    "tags": [
      "AI",
      "提示工程",
      "LLM",
      "2026",
      "新技术"
    ]
  },
  {
    "id": 650,
    "word": "去AI味",
    "meaning": "使用提示词技巧让AI生成的内容看起来更像真人写作，避免教科书式或明显AI腔调的表达，如加入口语化、个人经历和情绪波动",
    "example": "去AI味改写这段文字 → 把AI写的内容改得更像真人写的",
    "categoryId": 6,
    "tags": [
      "AI",
      "提示词",
      "AIGC",
      "2026",
      "热点"
    ],
    "brief": "让AI文风更像真人"
  },
  {
    "id": 651,
    "word": "三明治拒绝法",
    "meaning": "一种委婉拒绝的技巧：用两层友好话语包裹拒绝内容，像三明治一样；源自小红书十大热词之一的\"边界感\"话题",
    "example": "用三明治拒绝法回绝同事蹭车 → 先肯定再拒绝最后给安慰，委婉说不",
    "categoryId": 5,
    "tags": [
      "小红书",
      "边界感",
      "社交技巧",
      "2026",
      "热点"
    ],
    "brief": "好话夹着拒绝说"
  },
  {
    "id": 652,
    "word": "豆包型人格",
    "meaning": "指用AI工具(特别是豆包等国产AI)进行自我陪伴和情绪调节的人格状态；属于小红书\"抽象力\"和\"AI人格\"热词下的分支梗",
    "example": "下班后和豆包聊天，豆包型人格上线 → 用AI聊天获得情绪陪伴",
    "categoryId": 15,
    "tags": [
      "AI",
      "人格",
      "社交",
      "2026",
      "热点"
    ],
    "brief": "靠AI陪伴调节情绪"
  },
  {
    "id": 653,
    "word": "Let's显化",
    "meaning": "心理暗示 technique，指通过积极的心理自我暗示帮助实现目标；显化指将想法转化为现实，Let's显化意为让我们一起相信并暗示自己",
    "example": "Let's显化下周面试成功 → 一起用积极心理暗示相信自己会通过面试",
    "categoryId": 15,
    "tags": [
      "心理",
      "暗示",
      "小红书",
      "2026",
      "热点"
    ]
  },
  {
    "id": 654,
    "word": "生物黑客",
    "meaning": "biohack，2025年柯林斯词典年度词汇候选，指通过生物技术、饮食和生活方式的自我实验来优化身体和精神表现，如间歇性禁食、冷水浴等",
    "example": "生物黑客每天只吃一顿 → 用极端饮食和生活方式优化自己的身体",
    "categoryId": 6,
    "tags": [
      "健康",
      "科技",
      "年度词汇",
      "2026"
    ]
  },
  {
    "id": 655,
    "word": "biohack",
    "meaning": "见\"生物黑客\"，2025年柯林斯词典年度词汇候选，指通过技术手段进行自我优化，包括生物技术和数字健康方法",
    "example": "biohack你的作息 → 用科学方法优化自己的睡眠和作息",
    "categoryId": 6,
    "tags": [
      "健康",
      "科技",
      "年度词汇",
      "2026"
    ]
  },
  {
    "id": 656,
    "word": "parasocial",
    "meaning": "单向亲密关系，指粉丝对名人、博主等产生的如同私人关系般的情感链接；2025年剑桥词典年度词汇",
    "example": "我对这个博主的感情太parasocial了 → 我对这个博主产生了类似真实友谊的错觉",
    "categoryId": 15,
    "tags": [
      "粉丝",
      "心理",
      "年度词汇",
      "2026"
    ]
  },
  {
    "id": 657,
    "word": "微退休",
    "meaning": "一种介于完全工作与完全退休之间的生活方式：辞去高压全职工作，从事低强度兼职或自由职业，保持生活和工作的平衡",
    "example": "30岁微退休，只接点自由职业 → 提前过上半退休的生活状态",
    "categoryId": 5,
    "tags": [
      "生活方式",
      "工作",
      "趋势",
      "2026"
    ],
    "brief": "半工作半退休状态"
  },
  {
    "id": 658,
    "word": "智能体即服务",
    "meaning": "AI Agent as a Service，基于大模型的智能代理服务化形式；2026年AI Agent爆发背景下的重要概念，企业通过API调用AI智能体完成复杂任务",
    "example": "接入智能体即服务平台 → 使用API获取AI智能体代理服务",
    "categoryId": 6,
    "tags": [
      "AI",
      "Agent",
      "大模型",
      "2026",
      "新技术"
    ],
    "brief": "按需订阅的智能体服务"
  },
  {
    "id": 659,
    "word": "AI编排",
    "meaning": "AI Orchestration，用大模型协调和调度多个AI工具、Agent或工作流的实践；2026年AI使用从单点提示词向多步骤、多工具协作发展的重要趋势",
    "example": "用AI编排自动处理邮件 → 用AI协调多个工具自动完成邮件处理流程",
    "categoryId": 6,
    "tags": [
      "AI",
      "Agent",
      "自动化",
      "2026",
      "新技术"
    ],
    "brief": "调度多个AI协同工作"
  },
  {
    "id": 660,
    "word": "Prompt工程",
    "meaning": "Prompt Engineering，设计和优化AI提示词以获得更好输出的技术和方法；2026年已从技术概念发展为职场必备技能，与编程并列",
    "example": "学点Prompt工程，让AI更懂你 → 掌握提示词优化技巧，改善AI输出质量",
    "categoryId": 6,
    "tags": [
      "AI",
      "提示词",
      "技能",
      "2026",
      "热点"
    ],
    "brief": "写提示词的技术"
  },
  {
    "id": 661,
    "word": "脑腐",
    "meaning": "Brain Rot，长期沉迷短视频等低质、碎片化网络内容导致的精神与智力衰退现象；2026年两岸共同关注的热词，新华网等官媒报道，台湾2024年度词汇高票当选",
    "example": "刷短视频刷出脑腐了 → 长时间刷低质内容感觉注意力涣散、思维变浅",
    "categoryId": 15,
    "tags": [
      "短视频",
      "成瘾",
      "认知衰退",
      "2026",
      "热点"
    ]
  },
  {
    "id": 665,
    "word": "越狱",
    "meaning": "Jailbreak，通过特殊提示词绕过LLM安全对齐机制，诱导AI生成原本被禁止内容的攻击技术；OWASP LLM Top 10核心安全议题，2026年AI攻防战焦点",
    "example": "用越狱提示词让模型打破规则 → 用特殊提示绕过AI安全限制生成受限内容",
    "categoryId": 6,
    "tags": [
      "AI安全",
      "LLM",
      "攻击",
      "提示词",
      "2026"
    ]
  },
  {
    "id": 666,
    "word": "提示注入",
    "meaning": "Prompt Injection，通过精心构造的输入操纵LLM行为的核心攻击技术，OWASP LLM01:2025排名第一的安全风险；包括直接注入和间接注入两种形式",
    "example": "系统存在提示注入漏洞 → 攻击者通过输入操纵AI改变其行为，绕过开发者意图",
    "categoryId": 6,
    "tags": [
      "AI安全",
      "LLM",
      "OWASP",
      "攻击",
      "2026"
    ],
    "brief": "诱导AI越权的攻击"
  },
  {
    "id": 667,
    "word": "HITL",
    "meaning": "Human-in-the-Loop，人工审核，在AI决策或输出流程中引入人工把关环节，对高风险或不可逆动作进行人工确认；2026年AI安全部署的关键模式，Agent系统标配",
    "example": "高风险操作需要HITL把关 → 关键AI动作必须由人工审核确认才能执行",
    "categoryId": 6,
    "tags": [
      "AI安全",
      "人工审核",
      "Agent",
      "2026",
      "新技术"
    ],
    "brief": "人在回路中把关"
  },
  {
    "id": 668,
    "word": "量化",
    "meaning": "Quantization，将AI模型参数从高精度(如FP32)转换为低精度(如INT8/INT4)的优化技术，用于减小模型体积、加速推理，使大模型可在手机、边缘设备等端侧部署",
    "example": "通过量化把模型部署到手机 → 压缩模型精度让大模型在端侧高效运行",
    "categoryId": 6,
    "tags": [
      "模型压缩",
      "推理优化",
      "端侧AI",
      "2026",
      "新技术"
    ]
  },
  {
    "id": 669,
    "word": "DeepSeek Harness",
    "meaning": "DeepSeek于2026年8月13日发布的开源Agent开发平台，MIT协议，插件化架构，Model+Harness=Agent，一切皆插件；发布4天内GitHub星标突破12万，被称为AI领域的「安卓时刻」",
    "example": "用DeepSeek Harness开发 → 用插件化Agent框架构建AI应用",
    "categoryId": 6,
    "tags": [
      "DeepSeek",
      "Agent框架",
      "开源",
      "2026",
      "热点"
    ],
    "brief": "DeepSeek的Agent平台"
  },
  {
    "id": 670,
    "word": "Agent Skills",
    "meaning": "AI Agent的可复用能力包，Anthropic 2025年10月发布Claude Skills后成为Agent系统标配，可将完成特定目标所需的全部知识和工作流封装打包，跨Agent可迁移加载",
    "example": "加载Agent Skills → 加载封装好的AI工作流能力",
    "categoryId": 6,
    "tags": [
      "Agent",
      "技能包",
      "工作流",
      "2026",
      "Agent Skills",
      "Claude Skills",
      "开放标准",
      "AI Agent"
    ],
    "brief": "可复用能力包"
  },
  {
    "id": 671,
    "word": "Context Compaction",
    "meaning": "上下文压缩，2026年LLM超长上下文处理的关键技术，解决百万Token窗口下的信息衰减和成本问题；通过精准锁定关键信息、过滤噪声来压缩上下文，同时保持核心语义",
    "example": "Context Compaction优化 → 压缩冗余上下文，保留关键信息降低幻觉",
    "categoryId": 6,
    "tags": [
      "上下文",
      "压缩",
      "长文本",
      "2026",
      "LLM"
    ]
  },
  {
    "id": 672,
    "word": "Scaffolding",
    "meaning": "AI脚手架，围绕AI模型搭建的支持系统总称，包括工具定义、约束规则、输出结构化等；与Harness(安全约束)不同，Scaffolding更侧重于为AI提供执行框架和结构化环境，是Agent的基础设施层",
    "example": "搭建Scaffolding → 为AI模型构建执行支撑框架",
    "categoryId": 6,
    "tags": [
      "Scaffolding",
      "Agent",
      "框架",
      "基础设施",
      "2026"
    ]
  },
  {
    "id": 673,
    "word": "知识以很痛的方式进入大脑",
    "meaning": "2026年8月微博热搜梗，指人亲身经历失败、挫折或吃亏后才真正记住原本听过就忘的道理；痛感触发情绪记忆系统让信息被判定为重要并长期保存，强调「痛过才记得住」的认知升级方式",
    "example": "知识以很痛的方式进入大脑 → 踩坑后才真正学会教训",
    "categoryId": 15,
    "tags": [
      "很痛",
      "学习",
      "认知",
      "2026",
      "微博热搜"
    ],
    "brief": "踩过坑才记住"
  },
  {
    "id": 674,
    "word": "给到夯",
    "meaning": "台湾网络潮语，「夯」为「很热、超火」的意思，给到夯即给予最高等级的称赞，形容某人或事物表现得超级出色、爆火；源自台湾Threads/Instagram等Z世代社群",
    "example": "这个表演给到夯 → 这个表演简直炸裂全场",
    "categoryId": 15,
    "tags": [
      "给到夯",
      "台湾",
      "称赞",
      "网络流行语",
      "2026"
    ]
  },
  {
    "id": 675,
    "word": "青春男大",
    "meaning": "2026年8月爆红网络用语，指成年男性(尤其是运动员)展现出年轻、有活力、阳光、无心机的青春气质；源自樊振东被网友称为「完全青春男大」，形容其赛场上霸气、生活中接地气的反差萌，该词阅读量突破5亿",
    "example": "他简直是青春男大 → 他整个人看起来特别阳光有活力",
    "categoryId": 15,
    "tags": [
      "青春男大",
      "网络流行语",
      "反差",
      "2026",
      "微博热搜"
    ],
    "brief": "年轻有活力"
  },
  {
    "id": 676,
    "word": "进城办事",
    "meaning": "2026年爆红网络梗，源自阿迪达斯官网将'errands around town'直译为「在城里办事」，与品牌年轻潮流形象形成反差萌；官方亲自下场玩梗，推出「进城办事」T恤，后续衍生出「穿adi办das」等新梗",
    "example": "进城办事穿搭 → 穿着阿迪达斯去跑腿",
    "categoryId": 15,
    "tags": [
      "进城办事",
      "阿迪达斯",
      "神翻译",
      "2026热梗"
    ],
    "brief": "在城里办事"
  },
  {
    "id": 677,
    "word": "城巴佬",
    "meaning": "由「乡巴佬」反向衍生的调侃词，指对乡村生活、自然常识了解较少的人；源于一张AI生成海报中花生长在了树上而非土里，网友用「城巴佬」来调侃AI不懂农业常识",
    "example": "花生长树上?城巴佬实锤了 → AI不懂农业常识太离谱了",
    "categoryId": 15,
    "tags": [
      "城巴佬",
      "反向衍生",
      "AI",
      "自嘲",
      "2026热梗"
    ]
  },
  {
    "id": 678,
    "word": "Hermes Agent",
    "meaning": "Nous Research推出的2026年最强Agent框架，具备自我进化能力，通过记忆系统、技能系统和RL回路让Agent越用越强，被称Agent Harness工程的代表作",
    "example": "用Hermes Agent搭建智能体 → 用2026最强Agent框架做开发",
    "categoryId": 6,
    "tags": [
      "Hermes",
      "Agent",
      "AI",
      "Nous Research",
      "2026"
    ],
    "brief": "Nous的Agent框架"
  },
  {
    "id": 679,
    "word": "Prompt Caching",
    "meaning": "提示词缓存技术，Anthropic API可在消息中标记cache_control断点，缓存前缀token，后续请求复用可省约75%输入token成本",
    "example": "用Prompt Caching优化成本 → 让AI缓存长系统提示降低成本",
    "categoryId": 6,
    "tags": [
      "Prompt Caching",
      "缓存",
      "成本优化",
      "AI"
    ]
  },
  {
    "id": 680,
    "word": "AI Guardrails",
    "meaning": "AI安全护栏，通过硬性规则、验证循环、回退链路来约束AI决策，防止越权和错误输出，企业级Agent部署必备",
    "example": "加AI Guardrails → 给Agent加安全护栏防止越权",
    "categoryId": 6,
    "tags": [
      "Guardrails",
      "AI安全",
      "护栏",
      "Agent"
    ]
  },
  {
    "id": 681,
    "word": "Prefix Cache",
    "meaning": "前缀缓存，大模型推理时复用相同前缀的KV Cache以降低延迟和成本，是Agent系统设计的关键工程约束",
    "example": "用Prefix Cache优化推理 → 缓存长前缀降低AI响应延迟",
    "categoryId": 6,
    "tags": [
      "Prefix Cache",
      "前缀缓存",
      "推理优化",
      "AI"
    ]
  },
  {
    "id": 682,
    "word": "Prompt Injection",
    "meaning": "提示词注入攻击，在输入中嵌入恶意指令劫持Agent行为，2026年同比增长340%，被称为Agentic AI时代的安全危机",
    "example": "防御Prompt Injection → 防止恶意指令劫持AI行为",
    "categoryId": 6,
    "tags": [
      "Prompt Injection",
      "提示词注入",
      "AI安全",
      "2026"
    ]
  },
  {
    "id": 683,
    "word": "我杀猪养你",
    "meaning": "2026年《逐玉》硬核告白梗，男主角承诺卖苦力也要养女主角，成为最热血直球的浪漫表达",
    "example": "我杀猪养你啊 → 我拼了命也要养你",
    "categoryId": 15,
    "tags": [
      "我杀猪养你",
      "逐玉",
      "告白",
      "2026热梗"
    ],
    "brief": "我拼命也要养你"
  },
  {
    "id": 684,
    "word": "空降疲惫",
    "meaning": "2026年打工人自嘲梗，形容周一刚到工位就被塞新任务的猝不及防感，假期余韵瞬间消散",
    "example": "周一空降疲惫 → 周末结束第一秒就被安排任务",
    "categoryId": 5,
    "tags": [
      "空降疲惫",
      "打工人",
      "周一",
      "2026热梗"
    ],
    "brief": "开工猝不及防"
  },
  {
    "id": 685,
    "word": "班味入脑",
    "meaning": "2026年打工人自嘲梗，形容即使放假脑子也停不下来工作，满脑子都是KPI、汇报和deadline",
    "example": "放假也班味入脑 → 休息时脑子也停不下来工作",
    "categoryId": 15,
    "tags": [
      "班味入脑",
      "打工人",
      "职场",
      "2026热梗"
    ],
    "brief": "脑子停不下来"
  },
  {
    "id": 686,
    "word": "无效加班",
    "meaning": "2026年打工人自嘲梗，形容加班时间长但产出为零，纯粹消耗时间的形式主义工作状态",
    "example": "今天又无效加班 → 加了班但啥也没产出",
    "categoryId": 5,
    "tags": [
      "无效加班",
      "加班",
      "打工人",
      "2026热梗"
    ],
    "brief": "白加班"
  },
  {
    "id": 687,
    "word": "低音炮丹尼尔",
    "meaning": "2026年爆红魔性配音梗，以低沉浑厚嗓音重配各种影视片段，夸张又上头的反差效果引发全网模仿",
    "example": "低音炮丹尼尔配的太好笑了 → 用低沉嗓音给视频配音太魔性",
    "categoryId": 15,
    "tags": [
      "低音炮丹尼尔",
      "配音",
      "魔性",
      "2026热梗"
    ],
    "brief": "低沉魔性嗓音"
  },
  {
    "id": 688,
    "word": "肯优麦瑞蜜",
    "meaning": "2026年干饭人梗，指KFC、麦当劳、汉堡王等快餐轮着吃的穷鬼套餐式快乐",
    "example": "今天肯优麦瑞蜜 → 今天轮着吃快餐",
    "categoryId": 15,
    "tags": [
      "肯优麦瑞蜜",
      "干饭人",
      "快餐",
      "2026热梗"
    ],
    "brief": "轮着吃快餐"
  },
  {
    "id": 689,
    "word": "信我是秦始皇",
    "meaning": "2026年反讽调侃万能句，源自「我，秦始皇，打钱」的经典诈骗梗，用来形容某事比诈骗短信还离谱，根本不可能信",
    "example": "你信这事，还是信我是秦始皇 → 这事比诈骗还离谱，我才不信",
    "categoryId": 15,
    "tags": [
      "信我是秦始皇",
      "反讽",
      "调侃",
      "2026热梗"
    ],
    "brief": "鬼才信"
  },
  {
    "id": 690,
    "word": "三分之一吴世勋",
    "meaning": "2026年爆红侧脸梗，形容某人侧脸像EXO成员吴世勋，带点夸张的赞美或玩笑",
    "example": "你这侧脸是三分之一吴世勋吧 → 你侧脸好像吴世勋",
    "categoryId": 15,
    "tags": [
      "三分之一吴世勋",
      "侧脸梗",
      "偶像",
      "2026热梗"
    ],
    "brief": "有点像吴世勋"
  },
  {
    "id": 691,
    "word": "允许一切发生",
    "meaning": "2026年情绪治愈类热梗，与生活和解，接纳变化和变数，减少精神内耗的平和生活哲学",
    "example": "允许一切发生 → 放下执念，接受生活所有可能",
    "categoryId": 5,
    "tags": [
      "允许一切发生",
      "治愈",
      "和解",
      "2026热梗"
    ],
    "brief": "接受一切变化"
  },
  {
    "id": 692,
    "word": "人生旷野不是轨道",
    "meaning": "2026年反内卷宣言，出自歌曲《Orlando》，鼓励年轻人拒绝被定义的人生路径，勇敢追寻旷野般自由",
    "example": "人生是旷野不是轨道 → 不要被既定路径绑架，勇敢去闯",
    "categoryId": 15,
    "tags": [
      "人生旷野",
      "不是轨道",
      "反内卷",
      "2026热梗"
    ],
    "brief": "不被路径定义"
  },
  {
    "id": 693,
    "word": "Nano Banana",
    "meaning": "Google Gemini图像生成模型的内部代号，指Gemini 2.5 Flash Image，因网友发现神秘代号而爆红，后被Google正式认领",
    "example": "用Nano Banana生图 → 用Gemini 2.5 Flash Image生成图片",
    "categoryId": 6,
    "tags": [
      "Nano Banana",
      "Gemini",
      "图像生成",
      "AI"
    ],
    "brief": "Gemini图像模型代号"
  },
  {
    "id": 694,
    "word": "Nano Banana Pro",
    "meaning": "Google Gemini 3 Pro图像生成模型，基于Nano Banana升级，具备更强的图像质量与复杂场景理解能力",
    "example": "用Nano Banana Pro生图 → 用Gemini 3 Pro图像模型生成",
    "categoryId": 6,
    "tags": [
      "Nano Banana Pro",
      "Gemini 3",
      "图像生成",
      "AI"
    ],
    "brief": "Gemini 3 Pro图像模型"
  },
  {
    "id": 695,
    "word": "Gemini Deep Think",
    "meaning": "Google Gemini 3推出的深度思考推理模式，在数学、科学等竞赛级基准上达到金牌水准",
    "example": "开启Gemini Deep Think → 启用Gemini的深度思考模式",
    "categoryId": 6,
    "tags": [
      "Gemini Deep Think",
      "深度思考",
      "推理",
      "AI"
    ],
    "brief": "Gemini深度思考模式"
  },
  {
    "id": 696,
    "word": "DeepSeek-V3.1",
    "meaning": "DeepSeek于2026年8月21日发布的版本，在保持高性能的同时大幅降低推理成本，性能逼近Gemini-3",
    "example": "用DeepSeek-V3.1对话 → 用DeepSeek 2026年8月新版本对话",
    "categoryId": 6,
    "tags": [
      "DeepSeek-V3.1",
      "DeepSeek",
      "大模型",
      "AI"
    ],
    "brief": "DeepSeek 2026年8月版"
  },
  {
    "id": 697,
    "word": "DeepSeek-V3.2",
    "meaning": "DeepSeek于2026年8月发布的新一代版本，采用新注意力机制，处理128K token成本相比上代降低约70%，支持跨工具调用保持推理",
    "example": "DeepSeek-V3.2推理成本更低 → DeepSeek新版本性价比更高",
    "categoryId": 6,
    "tags": [
      "DeepSeek-V3.2",
      "低成本",
      "大模型",
      "AI"
    ],
    "brief": "DeepSeek新一代版本"
  },
  {
    "id": 698,
    "word": "Agentic Enterprise",
    "meaning": "Google在2026 Google I/O提出的企业AI形态，AI智能体深度嵌入业务流程，代替或辅助员工完成多步任务",
    "example": "向Agentic Enterprise转型 → 转型为代理式企业，AI深度嵌入业务",
    "categoryId": 6,
    "tags": [
      "Agentic Enterprise",
      "代理式企业",
      "Google",
      "AI"
    ],
    "brief": "全员AI化的企业形态"
  },
  {
    "id": 699,
    "word": "Reasoning Slider",
    "meaning": "OpenAI GPT-5.6 Sol引入的推理强度可调节滑块，用户可按需在快速响应与深度推理间自由切换",
    "example": "把Reasoning Slider调高 → 把推理强度调高，让AI深度思考",
    "categoryId": 6,
    "tags": [
      "Reasoning Slider",
      "推理滑块",
      "GPT-5.6",
      "AI"
    ],
    "brief": "推理强度调节滑块"
  },
  {
    "id": 700,
    "word": "MCP Server",
    "meaning": "MCP协议的服务端实现，为AI Agent提供标准化工具调用入口，只要符合MCP规范AI即可接入",
    "example": "部署MCP Server → 部署一个MCP协议的服务端",
    "categoryId": 6,
    "tags": [
      "MCP Server",
      "MCP",
      "服务端",
      "AI生态"
    ]
  },
  {
    "id": 701,
    "word": "30%法则",
    "meaning": "2026年8月24日微博热搜新梗，科普博主游识猷提出：每天只锁定2件核心任务，完成目标的30%即合格，降低完成标准反能持续行动",
    "example": "试试30%法则 → 每天只做2件事，完成30%就好",
    "categoryId": 5,
    "tags": [
      "30%法则",
      "时间管理",
      "松弛感",
      "2026热梗"
    ],
    "brief": "每天完成30%就合格"
  },
  {
    "id": 702,
    "word": "高精力人群",
    "meaning": "2026年8月24日微博热议新概念，与高体力人群相对，指天生精神旺盛、注意力持续时间长的群体",
    "example": "他是高精力人群 → 他天生精神旺盛，做事有持续动力",
    "categoryId": 5,
    "tags": [
      "高精力",
      "人群",
      "热搜",
      "2026热梗"
    ],
    "brief": "天生精力旺盛的人"
  },
  {
    "id": 703,
    "word": "有事没事就庆祝一下的家族",
    "meaning": "2026年8月27日微博热搜梗，指通过庆祝考试进步、按时下班等平凡生活瞬间来制造仪式感的家庭氛围；衍生为对乐观生活态度的认同",
    "example": "加入有事没事就庆祝一下的家族 → 学会为平凡小事感到幸福",
    "categoryId": 15,
    "tags": [
      "庆祝",
      "仪式感",
      "热搜",
      "2026热梗",
      "微博"
    ],
    "brief": "爱庆祝的小家庭"
  },
  {
    "id": 705,
    "word": "ACP协议",
    "meaning": "Agent Communication Protocol，智能体通信协议，IBM Research 2025年3月推出，2025年底并入A2A；负责智能体间的发现、协作、状态同步与治理",
    "example": "用ACP连接Agent → 用智能体通信协议连接多个AI Agent",
    "categoryId": 6,
    "tags": [
      "ACP",
      "智能体通信",
      "协议",
      "AI"
    ],
    "brief": "智能体通信协议"
  },
  {
    "id": 706,
    "word": "WebMCP",
    "meaning": "Google Chrome 146 Canary 2026年2月13日上线的浏览器级MCP协议，通过navigator.modelContext API让AI Agent结构化访问网页，Token效率提升约89%",
    "example": "WebMCP让Agent读网页 → 用WebMCP让AI Agent结构化访问网站",
    "categoryId": 6,
    "tags": [
      "WebMCP",
      "Chrome",
      "MCP",
      "AI"
    ],
    "brief": "浏览器级MCP协议"
  },
  {
    "id": 707,
    "word": "ANP协议",
    "meaning": "Agent Network Protocol，去中心化的Agent网络协议，社区驱动，目标是打造Agent版的互联网，支持跨组织无中心注册中心的发现、认证与通信",
    "example": "用ANP发现Agent → 用去中心化协议发现并对接其他Agent",
    "categoryId": 6,
    "tags": [
      "ANP",
      "去中心化",
      "Agent网络",
      "AI"
    ],
    "brief": "智能体网络协议"
  },
  {
    "id": 708,
    "word": "牛马",
    "meaning": "2025年爆火、2026年继续高频使用的职场自嘲词，源自农耕时代劳动力的比喻，形容任劳任怨、加班加点但回报有限的打工人",
    "example": "今天又是牛马的一天 → 今天又是被工作压榨的一天",
    "categoryId": 5,
    "tags": [
      "牛马",
      "打工人",
      "自嘲",
      "职场",
      "2026热梗"
    ],
    "brief": "被压榨的打工人"
  },
  {
    "id": 709,
    "word": "二牛马",
    "meaning": "承接大牛马外包的兼职打工者，精准定义了一种隐秘职场外包市场，大牛马把PPT、数据整理等琐碎工作分包给兼职者或大学生",
    "example": "我就是个二牛马 → 我就是接外包琐碎活的兼职打工者",
    "categoryId": 5,
    "tags": [
      "二牛马",
      "外包",
      "兼职",
      "职场",
      "2026热梗"
    ]
  },
  {
    "id": 710,
    "word": "脆皮牛马",
    "meaning": "高敏感、低耐受力的打工人自嘲，28岁的年龄却有48岁的腰，体检报告成恐怖片，对微信提示音产生条件反射式心跳漏拍",
    "example": "脆皮牛马又崩了 → 高敏感打工人又扛不住了",
    "categoryId": 5,
    "tags": [
      "脆皮牛马",
      "高敏感",
      "打工人",
      "2026热梗"
    ]
  },
  {
    "id": 713,
    "word": "盗人",
    "meaning": "与偷感相对的概念，指想要的东西主动争取、不理解的事直接坦白、从不隐藏、从不内耗的坦荡行事风格",
    "example": "她是典型盗人 → 她不掩饰弱点，敢说做不到也能坦诚沟通",
    "categoryId": 15,
    "tags": [
      "盗人",
      "坦荡",
      "不内耗",
      "职场",
      "2026热梗"
    ]
  },
  {
    "id": 714,
    "word": "Job Hugging",
    "meaning": "2026年最夯全球职场新词，指经济不确定时期不敢离职、紧紧抱住现有工作的状态，调查称近六成美国上班族自称Job Hugger",
    "example": "I'm a job hugger → 我现在不敢离职，先抱紧这份工作",
    "categoryId": 15,
    "tags": [
      "Job Hugging",
      "抱紧工作",
      "职场",
      "2026热梗"
    ],
    "brief": "不敢离职的人"
  },
  {
    "id": 715,
    "word": "降本增效",
    "meaning": "减少成本提高效率",
    "example": "通过流程优化实现降本增效 → 通过流程优化减少成本提高效率",
    "categoryId": 2,
    "tags": [
      "成本管理",
      "效率",
      "经营"
    ]
  },
  {
    "id": 716,
    "word": "数字化转型",
    "meaning": "用技术改造业务",
    "example": "推动企业数字化转型 → 推动企业用技术改造业务",
    "categoryId": 2,
    "tags": [
      "数字化",
      "战略",
      "技术"
    ]
  },
  {
    "id": 717,
    "word": "精细化运营",
    "meaning": "细致管理运营",
    "example": "用户要精细化运营 → 用户要细致管理运营",
    "categoryId": 8,
    "tags": [
      "运营",
      "用户管理"
    ]
  },
  {
    "id": 718,
    "word": "全链路",
    "meaning": "完整流程",
    "example": "打通营销全链路 → 打通营销完整流程",
    "categoryId": 2,
    "tags": [
      "流程",
      "端到端"
    ]
  },
  {
    "id": 719,
    "word": "一站式",
    "meaning": "全套服务",
    "example": "提供一站式解决方案 → 提供全套服务解决方案",
    "categoryId": 8,
    "tags": [
      "服务",
      "便捷"
    ]
  },
  {
    "id": 720,
    "word": "生态化",
    "meaning": "形成完整体系",
    "example": "业务生态化布局 → 业务形成完整体系布局",
    "categoryId": 3,
    "tags": [
      "生态",
      "战略"
    ]
  },
  {
    "id": 721,
    "word": "平台化",
    "meaning": "建设统一平台",
    "example": "能力平台化输出 → 能力建设统一平台输出",
    "categoryId": 3,
    "tags": [
      "平台",
      "能力输出"
    ]
  },
  {
    "id": 722,
    "word": "中台",
    "meaning": "共享服务平台",
    "example": "搭建数据中台 → 搭建数据共享服务平台",
    "categoryId": 2,
    "tags": [
      "架构",
      "共享"
    ]
  },
  {
    "id": 723,
    "word": "去中心化",
    "meaning": "分散式管理",
    "example": "系统去中心化设计 → 系统分散式管理设计",
    "categoryId": 7,
    "tags": [
      "架构",
      "分布式"
    ]
  },
  {
    "id": 724,
    "word": "扁平化",
    "meaning": "减少管理层级",
    "example": "组织架构扁平化 → 组织架构减少管理层级",
    "categoryId": 4,
    "tags": [
      "组织架构",
      "管理"
    ]
  },
  {
    "id": 725,
    "word": "精益创业",
    "meaning": "低成本试错创业",
    "example": "用精益创业方式验证需求 → 用低成本试错创业方式验证需求",
    "categoryId": 8,
    "tags": [
      "创业",
      "方法论"
    ]
  },
  {
    "id": 726,
    "word": "增长飞轮",
    "meaning": "持续增长模式",
    "example": "构建增长飞轮 → 构建持续增长模式",
    "categoryId": 8,
    "tags": [
      "增长",
      "增长模型"
    ]
  },
  {
    "id": 727,
    "word": "天花板",
    "meaning": "发展上限",
    "example": "这个行业天花板很高 → 这个行业发展上限很高",
    "categoryId": 3,
    "tags": [
      "行业",
      "上限"
    ]
  },
  {
    "id": 728,
    "word": "风口",
    "meaning": "发展机会",
    "example": "抓住新风口 → 抓住新发展机会",
    "categoryId": 3,
    "tags": [
      "机会",
      "趋势"
    ]
  },
  {
    "id": 729,
    "word": "赛道",
    "meaning": "行业领域",
    "example": "换赛道发展 → 换行业领域发展",
    "categoryId": 3,
    "tags": [
      "行业",
      "赛道选择"
    ]
  },
  {
    "id": 730,
    "word": "独角兽",
    "meaning": "高价值创业公司",
    "example": "估值超10亿美元的独角兽 → 估值超10亿美元的高价值创业公司",
    "categoryId": 3,
    "tags": [
      "创业公司",
      "投融资"
    ]
  },
  {
    "id": 731,
    "word": "KOL",
    "meaning": "意见领袖",
    "example": "找KOL做推广 → 找意见领袖做推广",
    "categoryId": 8,
    "tags": [
      "营销",
      "达人"
    ]
  },
  {
    "id": 732,
    "word": "ROI",
    "meaning": "投资回报率",
    "example": "评估投放ROI → 评估投放投资回报率",
    "categoryId": 8,
    "tags": [
      "投放",
      "效果衡量"
    ]
  },
  {
    "id": 733,
    "word": "DAU",
    "meaning": "日活跃用户",
    "example": "DAU突破千万 → 日活跃用户突破千万",
    "categoryId": 8,
    "tags": [
      "数据指标",
      "活跃度"
    ]
  },
  {
    "id": 734,
    "word": "MAU",
    "meaning": "月活跃用户",
    "example": "MAU稳步增长 → 月活跃用户稳步增长",
    "categoryId": 8,
    "tags": [
      "数据指标",
      "活跃度"
    ]
  },
  {
    "id": 735,
    "word": "LTV",
    "meaning": "用户生命周期价值",
    "example": "提升用户LTV → 提升用户生命周期价值",
    "categoryId": 8,
    "tags": [
      "数据指标",
      "用户价值"
    ]
  },
  {
    "id": 736,
    "word": "MVP",
    "meaning": "最小可行产品",
    "example": "先做一个MVP验证 → 先做一个最小可行产品验证",
    "categoryId": 8,
    "tags": [
      "产品",
      "验证"
    ]
  },
  {
    "id": 737,
    "word": "PMF",
    "meaning": "产品市场匹配",
    "example": "找到了PMF → 找到了产品市场匹配",
    "categoryId": 8,
    "tags": [
      "产品",
      "市场"
    ]
  },
  {
    "id": 738,
    "word": "B端",
    "meaning": "企业客户",
    "example": "我们做B端生意 → 我们做企业客户生意",
    "categoryId": 8,
    "tags": [
      "客户类型",
      "企业服务"
    ]
  },
  {
    "id": 739,
    "word": "C端",
    "meaning": "个人用户",
    "example": "C端体验优先 → 个人用户体验优先",
    "categoryId": 8,
    "tags": [
      "客户类型",
      "用户体验"
    ]
  },
  {
    "id": 740,
    "word": "SaaS",
    "meaning": "软件即服务",
    "example": "SaaS订阅模式 → 软件即服务订阅模式",
    "categoryId": 7,
    "tags": [
      "云计算",
      "订阅服务"
    ]
  },
  {
    "id": 741,
    "word": "PaaS",
    "meaning": "平台即服务",
    "example": "PaaS能力开放 → 平台即服务能力开放",
    "categoryId": 7,
    "tags": [
      "云计算",
      "平台"
    ]
  },
  {
    "id": 742,
    "word": "IaaS",
    "meaning": "基础设施即服务",
    "example": "IaaS层建设 → 基础设施即服务层建设",
    "categoryId": 7,
    "tags": [
      "云计算",
      "基础设施"
    ]
  }
]
module.exports = allWords
