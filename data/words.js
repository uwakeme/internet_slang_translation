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
    "meaning": "快速开发",
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
    ]
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
    "id": 231,
    "word": "活人感",
    "meaning": "真实自然的状态",
    "example": "这个人很有活人感 → 这个人很真实自然",
    "categoryId": 5,
    "tags": [
      "真实",
      "自然",
      "网络流行语"
    ]
  },
  {
    "id": 232,
    "word": "情绪价值",
    "meaning": "提供情绪支持与陪伴",
    "example": "提供情绪价值 → 提供情绪支持与陪伴",
    "categoryId": 5,
    "tags": [
      "情绪",
      "价值",
      "支持",
      "网络流行语"
    ]
  },
  {
    "id": 233,
    "word": "赛博对账",
    "meaning": "在网上核对彼此生活细节和共同记忆",
    "example": "赛博对账 → 在网上核对彼此生活细节",
    "categoryId": 5,
    "tags": [
      "赛博",
      "对账",
      "网络流行语"
    ]
  },
  {
    "id": 234,
    "word": "敬自己一杯",
    "meaning": "对努力与平凡的接纳与自我和解",
    "example": "敬自己一杯 → 对自己说声辛苦了",
    "categoryId": 5,
    "tags": [
      "自我",
      "和解",
      "网络流行语"
    ]
  },
  {
    "id": 235,
    "word": "预制xx",
    "meaning": "像预制菜一样标准化的某物",
    "example": "预制朋友圈 → 标准化的朋友圈内容",
    "categoryId": 5,
    "tags": [
      "预制",
      "标准化",
      "网络流行语"
    ]
  },
  {
    "id": 236,
    "word": "谷子",
    "meaning": "二次元IP周边产品",
    "example": "买谷子 → 买二次元周边",
    "categoryId": 5,
    "tags": [
      "二次元",
      "周边",
      "IP"
    ]
  },
  {
    "id": 237,
    "word": "浪浪山小妖怪",
    "meaning": "平凡小人物的共鸣与自嘲",
    "example": "浪浪山小妖怪 → 普通打工人",
    "categoryId": 5,
    "tags": [
      "浪浪山",
      "小妖怪",
      "打工人"
    ]
  },
  {
    "id": 238,
    "word": "爱你老己",
    "meaning": "好好爱自己",
    "example": "爱你老己，明天见 → 好好爱自己，明天见",
    "categoryId": 5,
    "tags": [
      "爱自己",
      "悦己",
      "网络流行语"
    ]
  },
  {
    "id": 239,
    "word": "班味",
    "meaning": "被上班状态浸透后的疲惫气质",
    "example": "身上有班味 → 看起来很疲惫被工作折磨",
    "categoryId": 5,
    "tags": [
      "班味",
      "疲惫",
      "打工人"
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
    "id": 241,
    "word": "RAG",
    "meaning": "检索增强生成",
    "example": "RAG系统 → 检索增强生成系统",
    "categoryId": 6,
    "tags": [
      "RAG",
      "检索",
      "生成",
      "AI"
    ]
  },
  {
    "id": 242,
    "word": "Embedding",
    "meaning": "向量嵌入，将文本转为数值向量",
    "example": "Embedding模型 → 向量化表示模型",
    "categoryId": 6,
    "tags": [
      "Embedding",
      "向量",
      "嵌入",
      "AI"
    ]
  },
  {
    "id": 243,
    "word": "Token",
    "meaning": "语言模型的基本处理单元",
    "example": "Token数量限制 → 模型处理的字符单元限制",
    "categoryId": 6,
    "tags": [
      "Token",
      "词元",
      "AI"
    ]
  },
  {
    "id": 244,
    "word": "MCP",
    "meaning": "模型上下文协议，AI与外部工具的标准化对接",
    "example": "MCP协议 → 模型上下文协议",
    "categoryId": 6,
    "tags": [
      "MCP",
      "协议",
      "AI生态"
    ]
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
    "id": 252,
    "word": "丝瓜汤文学",
    "meaning": "一种释压自嘲的文字风格",
    "example": "丝瓜汤文学 → 躺平摆烂的自嘲文学",
    "categoryId": 5,
    "tags": [
      "丝瓜汤",
      "自嘲",
      "释压"
    ]
  },
  {
    "id": 254,
    "word": "Vibe Coding",
    "meaning": "AI辅助编程，用自然语言描述需求让AI生成代码",
    "example": "用Vibe Coding方式开发 → 用自然语言描述需求，AI生成代码",
    "categoryId": 6,
    "tags": [
      "Vibe Coding",
      "AI编程",
      "开发"
    ]
  },
  {
    "id": 255,
    "word": "具身智能",
    "meaning": "能感知物理世界并与之交互的AI系统",
    "example": "具身智能机器人 → 能感知并交互的AI机器人",
    "categoryId": 6,
    "tags": [
      "具身智能",
      "机器人",
      "AI"
    ]
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
    "id": 257,
    "word": "AI糟粕",
    "meaning": "低质量批量生成的AI内容",
    "example": "识别AI糟粕 → 识别低质量AI生成内容",
    "categoryId": 6,
    "tags": [
      "AI糟粕",
      "AI内容",
      "网络流行语"
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
    ]
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
    "id": 267,
    "word": "村咖",
    "meaning": "开在乡村里的特色咖啡馆",
    "example": "去村咖打卡 → 去乡村咖啡馆拍照",
    "categoryId": 5,
    "tags": [
      "村咖",
      "乡村",
      "生活方式"
    ]
  },
  {
    "id": 268,
    "word": "主理人",
    "meaning": "能将自身特质与品牌结合的负责人",
    "example": "品牌主理人 → 品牌负责人/决策者",
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    ]
  },
  {
    "id": 276,
    "word": "抽象力",
    "meaning": "用玩梗、解构、荒诞幽默消解压力的能力",
    "example": "抽象力拉满 → 很会玩梗解构",
    "categoryId": 5,
    "tags": [
      "抽象力",
      "玩梗",
      "2026热词"
    ]
  },
  {
    "id": 277,
    "word": "外耗",
    "meaning": "不过度消耗自己、不在意他人评价的生活态度",
    "example": "遇到不讲理的客户，不如直接外耗他 → 把规矩硬气说清楚",
    "categoryId": 5,
    "tags": [
      "外耗",
      "自我保护",
      "生活态度"
    ]
  },
  {
    "id": 278,
    "word": "绝摆",
    "meaning": "闽南语"很棒、厉害"的意思，2026年走红网络",
    "example": "这个东西绝摆 → 这个东西太厉害了",
    "categoryId": 5,
    "tags": [
      "绝摆",
      "闽南语",
      "网络流行语"
    ]
  },
  {
    "id": 279,
    "word": "硬控",
    "meaning": "被强烈吸引无法自拔，像被游戏技能控制一样",
    "example": "被这个视频硬控了 → 沉迷这个视频停不下来",
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "example": "显胯宽吗？不知道，我的身材很曼妙 → 自信又可爱的回答",
    "categoryId": 5,
    "tags": [
      "曼妙",
      "淘宝神回复",
      "自信"
    ]
  },
  {
    "id": 283,
    "word": "留友看",
    "meaning": "Threads热门用语，留着给朋友看的缩写",
    "example": "这个太绝了，留友看 → 好内容推荐给朋友",
    "categoryId": 5,
    "tags": [
      "留友看",
      "Threads",
      "社交"
    ]
  },
  {
    "id": 284,
    "word": "超顶",
    "meaning": "形容最高级、最棒、极致的品质",
    "example": "用料最顶 → 用料最好最顶级",
    "categoryId": 5,
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
    "categoryId": 5,
    "tags": [
      "佛系",
      "顺其自然",
      "生活态度"
    ]
  },
  {
    "id": 286,
    "word": "A2A",
    "meaning": "Agent to Agent协议，智能体之间通信的标准方式",
    "example": "A2A协议 → 智能体间的通信协议",
    "categoryId": 6,
    "tags": [
      "A2A",
      "Agent",
      "协议",
      "AI"
    ]
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
    ]
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
    "tags": [
      "后门有车",
      "乌龙",
      "网络梗"
    ]
  },
  {
    "id": 297,
    "word": "真冰涼",
    "meaning": "吃完热食后喝冰饮的爽快感",
    "example": "这个真冰涼 → 冰凉饮料配热食太爽了",
    "categoryId": 5,
    "tags": [
      "真冰涼",
      "台湾",
      "美食梗"
    ]
  },
  {
    "id": 298,
    "word": "少癲大癲",
    "meaning": "形容疯狂程度，少癲是轻微夸张，大癲是极度夸张",
    "example": "这件事少癲 → 这件事有点夸张",
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
    "tags": [
      "世一",
      "世界第一",
      "网络流行语"
    ]
  },
  {
    "id": 306,
    "word": "MM7",
    "meaning": "粤语速成输入法，正字的编码，也表示肯定和赞同",
    "example": "这首歌MM7！ → 这首歌太正了！",
    "categoryId": 5,
    "tags": [
      "MM7",
      "粤语",
      "肯定"
    ]
  },
  {
    "id": 307,
    "word": "LARPing",
    "meaning": ".live action role playing，扮演某种身份或生活方式",
    "example": "她在LARPing一种自律精緻女孩的人设 → 她在扮演一种自律精致女孩的形象",
    "categoryId": 5,
    "tags": [
      "LARPing",
      "扮演",
      "人设"
    ]
  },
  {
    "id": 308,
    "word": "Mogging",
    "meaning": "在外貌、气质或条件上形成压倒性优势，让对方相形见绌",
    "example": "他直接在Mogging全场 → 他直接碾压全场",
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
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
    "categoryId": 5,
    "tags": [
      "Lowkey genuinely",
      "真心",
      "低调"
    ]
  },
  {
    "id": 312,
    "word": "Context Engineering",
    "meaning": "上下文工程，AI Agent系统中管理信息和上下文的技术",
    "example": "Context Engineering优化 → 上下文工程优化",
    "categoryId": 6,
    "tags": [
      "Context Engineering",
      "上下文",
      "AI工程"
    ]
  }
]

module.exports = allWords