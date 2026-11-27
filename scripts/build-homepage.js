/* eslint-disable no-console */
const assert = require('node:assert/strict')
const crypto = require('node:crypto')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')

const root = path.join(__dirname, '..')
const docsDir = path.join(root, 'docs')
const assetsDir = path.join(docsDir, 'assets')
const iconsDir = path.join(assetsDir, 'categories')
const words = require('../data/words.js')
const categories = require('../data/categories.js')
const dataModule = require('../utils/data.js')
const miniTranslator = require('../utils/translator.js')
const coreSource = fs.readFileSync(path.join(root, 'utils', 'translator-core.js'), 'utf8')
const checkOnly = process.argv.includes('--check')

function sha256(content) {
  return crypto.createHash('sha256').update(content).digest('hex')
}

function version(content) {
  return sha256(content).slice(0, 16)
}

function serializeForScript(value) {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

function replaceMarker(html, name, content) {
  const pattern = new RegExp('<!-- STAT:' + name + ' -->[\\s\\S]*?<!-- \\/STAT:' + name + ' -->', 'g')
  assert(pattern.test(html), '缺少统计标记：' + name)
  return html.replace(pattern, () => '<!-- STAT:' + name + ' -->' + content + '<!-- /STAT:' + name + ' -->')
}

function replaceBlock(html, name, content) {
  const pattern = new RegExp('<!-- ' + name + ':START -->[\\s\\S]*?<!-- ' + name + ':END -->')
  assert(pattern.test(html), '缺少生成块：' + name)
  return html.replace(pattern, () => '<!-- ' + name + ':START -->\n' + content + '\n<!-- ' + name + ':END -->')
}

function atomicWrite(filePath, content) {
  if (fs.existsSync(filePath) && fs.readFileSync(filePath, 'utf8') === content) return false
  const temporary = filePath + '.tmp'
  fs.writeFileSync(temporary, content, 'utf8')
  fs.renameSync(temporary, filePath)
  return true
}

function validateData() {
  assert(Array.isArray(words) && words.length > 0, '词库不能为空')
  assert(Array.isArray(categories) && categories.length > 0, '分类不能为空')
  const categoryIds = new Set()
  categories.forEach(category => {
    assert(Number.isInteger(category.id) && !categoryIds.has(category.id), '分类 ID 无效或重复')
    categoryIds.add(category.id)
    assert(category.name && category.desc, '分类缺少名称或描述')
    assert(['jargon', 'professional'].includes(category.type), '分类类型无效')
    assert(['image', 'emoji'].includes(category.iconType), '分类图标类型无效')
  })
  const wordIds = new Set()
  const names = new Set()
  words.forEach(word => {
    assert(Number.isInteger(word.id) && !wordIds.has(word.id), '词条 ID 无效或重复：' + word.id)
    assert(word.word && !names.has(word.word), '词条为空或重复：' + word.word)
    assert(categoryIds.has(word.categoryId), '词条分类不存在：' + word.word)
    assert(typeof word.meaning === 'string' && word.meaning, '词条缺少释义：' + word.word)
    assert(typeof word.example === 'string', '词条示例格式无效：' + word.word)
    assert(Array.isArray(word.tags) && word.tags.every(tag => typeof tag === 'string'), '词条标签格式无效：' + word.word)
    wordIds.add(word.id)
    names.add(word.word)
  })
}

function buildPayload() {
  validateData()
  const counts = new Map()
  words.forEach(word => counts.set(word.categoryId, (counts.get(word.categoryId) || 0) + 1))
  const normalizedCategories = categories.map(category => Object.assign({}, category, {
    count: counts.get(category.id) || 0
  }))
  return {
    words: words.map(word => ({
      id: word.id,
      word: word.word,
      meaning: word.meaning,
      brief: word.brief || '',
      example: word.example || '',
      categoryId: word.categoryId,
      tags: (word.tags || []).slice()
    })),
    categories: normalizedCategories,
    hotTags: dataModule.getPopularTags().slice(0, 12),
    stats: {
      wordCount: words.length,
      categoryCount: categories.length,
      briefCount: words.filter(word => word.brief).length
    }
  }
}

function buildCategoryTable(payload) {
  const categoryMap = new Map(payload.categories.map(category => [category.id, category]))
  const jargon = payload.categories.filter(category => category.type === 'jargon')
  const professional = payload.categories.filter(category => category.type === 'professional')
  const lines = payload.categories.map(category => {
    const type = category.type === 'jargon' ? '互联网黑话' : '专业术语'
    return '| ' + category.name + ' | ' + type + ' | ' + category.count + '个 |'
  })
  const all = ['| 分类 | 类型 | 词汇数量 |', '|------|------|----------|'].concat(lines)
  all.push('| **总计** | | **' + payload.words.length + '个** |')
  assert(categoryMap.size === payload.categories.length)
  return all.join('\n') + '\n\n其中' + payload.stats.briefCount + '个长释义词条配有 `brief` 短释义，供翻译句中替换使用。'
}

function buildReadme(payload) {
  const readmePath = path.join(root, 'README.md')
  let readme = fs.readFileSync(readmePath, 'utf8')
  readme = replaceMarker(readme, 'WORD_COUNT', String(payload.stats.wordCount))
  readme = replaceMarker(readme, 'CATEGORY_COUNT', String(payload.stats.categoryCount))
  readme = replaceBlock(readme, 'CATEGORY_STATS', buildCategoryTable(payload))
  readme = replaceMarker(readme, 'MAX_WORD_ID', String(Math.max.apply(null, words.map(word => word.id))))
  return readme
}

function buildHtml(payload, dataSource) {
  const htmlPath = path.join(docsDir, 'index.html')
  let html = fs.readFileSync(htmlPath, 'utf8')
  const description = '开源微信小程序：内置 ' + words.length + ' 个互联网黑话与专业术语，覆盖 ' + categories.length + ' 个分类，支持黑话↔人话双向翻译、搜索、收藏与分享。'
  const shortDescription = words.length + ' 个词条，' + categories.length + ' 个分类，黑话与人话双向翻译。一个开源的微信小程序。'
  const descriptionPattern = /(<meta name="description" content=")[^"]*(")/
  const socialPattern = /((?:name|property)="(?:og:description|twitter:description)" content=")[^"]*(")/g
  const jsonLdPattern = /("description": ")[^"]*(",\r?\n  "applicationCategory")/
  assert(descriptionPattern.test(html), '缺少主页描述元信息')
  assert(socialPattern.test(html), '缺少社交分享描述元信息')
  assert(jsonLdPattern.test(html), '缺少结构化数据描述')
  html = html.replace(descriptionPattern, (match, prefix, suffix) => prefix + description + suffix)
  html = html.replace(socialPattern, (match, prefix, suffix) => prefix + shortDescription + suffix)
  html = html.replace(jsonLdPattern, (match, prefix, suffix) => prefix + description + suffix)
  html = replaceMarker(html, 'WORD_COUNT', String(words.length))
  html = replaceMarker(html, 'CATEGORY_COUNT', String(categories.length))
  const scripts = '<script src="assets/data.js?v=' + version(dataSource) + '"></script>\n' +
    '<script src="assets/translator-core.js?v=' + version(coreSource) + '"></script>'
  html = replaceBlock(html, 'BUILD:SCRIPTS', scripts)
  assert(!html.includes('var PAYLOAD'), '主页仍残留旧 PAYLOAD')
  assert(!html.includes('fonts.googleapis.com'), '主页仍加载外部字体')
  return html
}

function verifyGeneratedAssets(payload, dataSource) {
  const safetyValue = '</script>\u2028\u2029$&};|^~%'
  const sandbox = {}
  vm.runInNewContext(coreSource, sandbox)
  vm.runInNewContext(dataSource, sandbox)
  assert.equal(typeof sandbox.SlangTranslator.createTranslator, 'function', '浏览器翻译核心不可用')
  assert.deepEqual(JSON.parse(JSON.stringify(sandbox.SLANG_DATA)), payload, '主页数据回读不一致')
  const browserTranslator = sandbox.SlangTranslator.createTranslator({ words: sandbox.SLANG_DATA.words })
  const cases = words.map(word => ({ text: word.word, mode: 'toHuman' }))
    .concat(words.map(word => ({ text: word.meaning, mode: 'toJargon' })))
    .concat([
      { text: 'dragon storage xrag ragx 脆弱 干脆', mode: 'toHuman' },
      { text: 'rag RAG AI Agent', mode: 'auto' },
      { text: safetyValue, mode: 'auto' },
      { text: '完整的流程', mode: 'toJargon' }
    ])
  cases.forEach(testCase => {
    const expected = testCase.mode === 'auto'
      ? miniTranslator.translateText(testCase.text)
      : testCase.mode === 'toHuman'
        ? miniTranslator.translateToHuman(testCase.text)
        : miniTranslator.translateToJargon(testCase.text)
    const actual = testCase.mode === 'auto'
      ? browserTranslator.translateText(testCase.text)
      : testCase.mode === 'toHuman'
        ? browserTranslator.translateToHuman(testCase.text)
        : browserTranslator.translateToJargon(testCase.text)
    assert.deepEqual(JSON.parse(JSON.stringify(actual)), JSON.parse(JSON.stringify(expected)), '双端翻译结果不一致：' + testCase.text)
  })
  const htmlPath = path.join(docsDir, 'index.html')
  const html = fs.readFileSync(htmlPath, 'utf8')
  const dataTag = html.match(/<script src="assets\/data\.js\?v=([a-f0-9]{16})"><\/script>/)
  const coreTag = html.match(/<script src="assets\/translator-core\.js\?v=([a-f0-9]{16})"><\/script>/)
  assert(dataTag && dataTag[1] === version(dataSource), '主页数据版本哈希不正确')
  assert(coreTag && coreTag[1] === version(coreSource), '主页核心版本哈希不正确')
}

function syncIcons() {
  const expected = new Map()
  categories.forEach(category => {
    if (category.iconType !== 'image') return
    const name = path.basename(category.icon).replace(/\.png$/, '.svg')
    const source = path.join(root, 'images', 'categories', name)
    assert(fs.existsSync(source), '缺少分类图标：' + name)
    expected.set(name, fs.readFileSync(source))
  })
  const actualNames = fs.existsSync(iconsDir)
    ? fs.readdirSync(iconsDir).filter(name => name.endsWith('.svg'))
    : []
  if (!checkOnly) {
    fs.mkdirSync(iconsDir, { recursive: true })
    actualNames.filter(name => !expected.has(name)).forEach(name => fs.unlinkSync(path.join(iconsDir, name)))
  }
  const remainingNames = fs.existsSync(iconsDir)
    ? fs.readdirSync(iconsDir).filter(name => name.endsWith('.svg'))
    : []
  assert.deepEqual(remainingNames.filter(name => !expected.has(name)), [], '主页存在过期分类图标')
  expected.forEach((content, name) => {
    const target = path.join(iconsDir, name)
    assert(fs.existsSync(target), '缺少生成图标：' + name)
    assert(fs.readFileSync(target).equals(content), '生成图标与源文件不一致：' + name)
  })
}

const payload = buildPayload()
const dataSource = 'var SLANG_DATA = ' + serializeForScript(payload) + ';\n'
const dataPath = path.join(assetsDir, 'data.js')
const corePath = path.join(assetsDir, 'translator-core.js')
const readme = buildReadme(payload)
const html = buildHtml(payload, dataSource)
const outputs = [
  [dataPath, dataSource],
  [corePath, coreSource],
  [path.join(docsDir, 'index.html'), html],
  [path.join(root, 'README.md'), readme]
]

if (checkOnly) {
  outputs.forEach(([filePath, expected]) => {
    assert(fs.existsSync(filePath), '生成文件不存在：' + path.relative(root, filePath))
    assert.equal(fs.readFileSync(filePath, 'utf8'), expected, '生成文件已过期：' + path.relative(root, filePath))
  })
  verifyGeneratedAssets(payload, dataSource)
  syncIcons()
  console.log('主页构建校验通过：数据、双端核心、版本哈希和图标一致')
} else {
  fs.mkdirSync(assetsDir, { recursive: true })
  const changed = outputs.filter(([filePath, content]) => atomicWrite(filePath, content)).length
  verifyGeneratedAssets(payload, dataSource)
  syncIcons()
  console.log('主页生成完成：' + words.length + ' 个词条，' + categories.length + ' 个分类，更新 ' + changed + ' 个文件')
}
