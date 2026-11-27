var dataModule = require('./data.js')

var FAVORITE_KEY = 'favorite_words'
var HISTORY_KEYS = {
  translate_history: 20,
  search_history: 10
}

function readArray(key, clean, limit) {
  try {
    var value = wx.getStorageSync(key)
    if (!Array.isArray(value)) return []
    return value.map(clean).filter(function(item) {
      return item !== null && item !== undefined && item !== ''
    }).slice(0, limit || value.length)
  } catch (error) {
    console.error('读取本地数据失败：' + key, error)
    return []
  }
}

function writeArray(key, value) {
  try {
    wx.setStorageSync(key, value)
    return true
  } catch (error) {
    console.error('保存本地数据失败：' + key, error)
    return false
  }
}

function removeKey(key) {
  try {
    wx.removeStorageSync(key)
    return true
  } catch (error) {
    console.error('删除本地数据失败：' + key, error)
    return false
  }
}

function getFavoriteIds() {
  return readArray(FAVORITE_KEY, function(id) {
    var word = dataModule.getWordById(id)
    return word ? word.id : null
  })
}

function saveFavoriteIds(ids) {
  var valid = ids.filter(function(id) {
    return dataModule.getWordById(id)
  }).filter(function(id, index, list) {
    return list.indexOf(id) === index
  })
  return writeArray(FAVORITE_KEY, valid)
}

function readHistory(key) {
  var limit = HISTORY_KEYS[key]
  if (!limit) return []
  return readArray(key, function(item) {
    if (key === 'search_history') {
      return typeof item === 'string' && item.trim() ? item.trim() : null
    }
    if (!item || typeof item.original !== 'string' || !item.original.trim() ||
        typeof item.translated !== 'string' || typeof item.time !== 'string') return null
    if (item.mode !== 'toHuman' && item.mode !== 'toJargon') return null
    return {
      original: item.original,
      translated: item.translated,
      time: item.time,
      mode: item.mode
    }
  }, limit)
}

module.exports = {
  readArray: readArray,
  writeArray: writeArray,
  removeKey: removeKey,
  getFavoriteIds: getFavoriteIds,
  saveFavoriteIds: saveFavoriteIds,
  readHistory: readHistory
}
