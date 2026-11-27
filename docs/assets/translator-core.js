(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.SlangTranslator = factory()
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  var DEFAULT_HUMAN_PHRASES = {
    '多沟通交流': '深度对齐',
    '需要帮助': '需要赋能',
    '完整的流程': '业务闭环',
    '具体方法': '抓手',
    '统一认识': '对齐认知',
    '协调资源': '拉通资源',
    '总结经验': '沉淀经验',
    '提供方案': '输出方案',
    '专注重点': '聚焦核心',
    '概括问题': '抽象问题',
    '提高效率': '降本增效',
    '提升效率': '降本增效',
    '降低成本': '降本增效',
    '减少成本': '降本增效'
  }

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  function firstSense(meaning) {
    var head = String(meaning).split(/[、，,；;]/)[0].trim()
    return head || meaning
  }

  function isSingleHan(term) {
    return /^[\u3400-\u9fff\uf900-\ufaff]$/.test(term)
  }

  function isValidHit(text, term, offset) {
    if (/[A-Za-z0-9]/.test(term)) {
      var before = text.charAt(offset - 1)
      var after = text.charAt(offset + term.length)
      if (/[A-Za-z0-9_]/.test(before) || /[A-Za-z0-9_]/.test(after)) {
        return false
      }
    }
    if (isSingleHan(term) && text.trim() !== term) {
      return false
    }
    return true
  }

  function buildPattern(terms) {
    if (!terms.length) return null
    return new RegExp(terms.map(escapeRegExp).join('|'), 'gi')
  }

  function buildLowerLookup(table) {
    var lower = {}
    Object.keys(table).forEach(function (key) {
      var lowerKey = key.toLowerCase()
      if (!(lowerKey in lower)) lower[lowerKey] = table[key]
    })
    return lower
  }

  function collectMatches(text, pattern, resolve) {
    var matches = []
    if (!pattern) return matches
    text.replace(pattern, function (hit, offset) {
      if (!isValidHit(text, hit, offset)) return hit
      var resolved = resolve(hit)
      if (!resolved) return hit
      matches.push({
        start: offset,
        end: offset + hit.length,
        original: hit,
        value: resolved.value,
        candidates: resolved.candidates || []
      })
      return hit
    })
    return matches
  }

  function buildSegments(text, matches) {
    var segments = []
    var cursor = 0
    matches.forEach(function (match, index) {
      if (match.start > cursor) {
        segments.push({ text: text.slice(cursor, match.start), matched: false })
      }
      segments.push({
        text: match.value,
        matched: true,
        original: match.original,
        candidates: match.candidates,
        matchIndex: index
      })
      cursor = match.end
    })
    if (cursor < text.length || segments.length === 0) {
      segments.push({ text: text.slice(cursor), matched: false })
    }
    return segments
  }

  function collectAlternatives(segments) {
    var alternatives = []
    segments.forEach(function (segment) {
      if (!segment.matched || !segment.candidates) return
      segment.candidates.slice(1).forEach(function (candidate) {
        alternatives.push({
          word: candidate.word,
          id: candidate.id,
          original: segment.original,
          matchIndex: segment.matchIndex
        })
      })
    })
    return alternatives
  }

  function createTranslator(options) {
    var words = options.words || []
    var jargonToHuman = {}
    var humanCandidates = {}

    words.forEach(function (item) {
      jargonToHuman[item.word] = item.brief || item.meaning
      if (!humanCandidates[item.meaning]) humanCandidates[item.meaning] = []
      humanCandidates[item.meaning].push({ word: item.word, id: item.id })
    })

    var humanPhrases = Object.assign({}, DEFAULT_HUMAN_PHRASES, options.humanPhrases || {})
    Object.keys(humanPhrases).forEach(function (phrase) {
      var preferred = { word: humanPhrases[phrase], id: null }
      var candidates = humanCandidates[phrase] || []
      humanCandidates[phrase] = [preferred].concat(
        candidates.filter(function (candidate) {
          return candidate.word !== preferred.word
        })
      )
    })

    var jargonTerms = Object.keys(jargonToHuman).sort(function (a, b) {
      return b.length - a.length
    })
    var humanTerms = Object.keys(humanCandidates).filter(function (phrase) {
      return phrase.length >= 2
    }).sort(function (a, b) {
      return b.length - a.length
    })

    var jargonPattern = buildPattern(jargonTerms)
    var humanPattern = buildPattern(humanTerms)
    var jargonLower = buildLowerLookup(jargonToHuman)
    var humanLower = buildLowerLookup(humanCandidates)

    function toHuman(text) {
      var matches = collectMatches(text, jargonPattern, function (hit) {
        var mapped = jargonToHuman[hit] !== undefined
          ? jargonToHuman[hit]
          : jargonLower[hit.toLowerCase()]
        return mapped === undefined ? null : { value: firstSense(mapped) }
      })
      var segments = buildSegments(text, matches)
      return {
        text: segments.map(function (segment) { return segment.text }).join(''),
        matched: matches.length,
        direction: 'toHuman',
        segments: segments,
        alternatives: []
      }
    }

    function toJargon(text) {
      var matches = collectMatches(text, humanPattern, function (hit) {
        var candidates = humanCandidates[hit] || humanLower[hit.toLowerCase()]
        if (!candidates || !candidates.length) return null
        return { value: candidates[0].word, candidates: candidates }
      })
      var segments = buildSegments(text, matches)
      return {
        text: segments.map(function (segment) { return segment.text }).join(''),
        matched: matches.length,
        direction: 'toJargon',
        segments: segments,
        alternatives: collectAlternatives(segments)
      }
    }

    function translate(text, targetType) {
      var trimmed = String(text || '').trim()
      var fallbackDirection = targetType === 'jargon' ? 'toJargon' : 'toHuman'
      if (!trimmed) {
        return { text: '', matched: 0, direction: fallbackDirection, segments: [], alternatives: [] }
      }

      var direction
      if (targetType === 'jargon') {
        direction = 'toJargon'
      } else if (targetType === 'human') {
        direction = 'toHuman'
      } else {
        var jargonHits = collectMatches(trimmed, jargonPattern, function (hit) {
          return jargonToHuman[hit] !== undefined || jargonLower[hit.toLowerCase()] !== undefined
            ? { value: '' }
            : null
        }).length
        direction = jargonHits > 0 ? 'toHuman' : 'toJargon'
      }

      return direction === 'toHuman' ? toHuman(trimmed) : toJargon(trimmed)
    }

    function detectTextType(text) {
      var trimmed = String(text || '').trim()
      if (!trimmed) return 'unknown'
      var jargonCount = collectMatches(trimmed, jargonPattern, function (hit) {
        return jargonToHuman[hit] !== undefined || jargonLower[hit.toLowerCase()] !== undefined
          ? { value: '' }
          : null
      }).length
      var humanCount = collectMatches(trimmed, humanPattern, function (hit) {
        return (humanCandidates[hit] || humanLower[hit.toLowerCase()]) ? { value: '' } : null
      }).length
      if (jargonCount > humanCount) return 'jargon'
      if (humanCount > jargonCount) return 'human'
      return 'unknown'
    }

    return {
      translateText: function (text) { return translate(text, 'auto') },
      translateToHuman: function (text) { return translate(text, 'human') },
      translateToJargon: function (text) { return translate(text, 'jargon') },
      detectTextType: detectTextType
    }
  }

  return { createTranslator: createTranslator }
})
