// ZZZ theme self-check.
//
// Run:  node tools/check-theme.mjs
//
// Guards the invariants this project has broken at least once:
//   1. the file parses
//   2. no backticks inside the CSS template literal (a backtick in a comment ends the
//      template and the whole plugin fails to load)
//   3. each palette object has no duplicate keys (DARK and LIGHT may share keys -
//      that is the point of two palettes)
//   4. glass surfaces read --zzz-glass-* tokens: no raw rgba(16,16,16,...) / blur(14px)
//      in declarations. Comments, base64 data URIs and the token definitions are
//      ignored.
//   5. RATCHET: the two debt counters (!important and :not(#zzz-guard) overrides) may
//      only go down. When a change lowers them, lower the baseline in the same commit.

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Measured 2026-10-29 after the stale-hash cleanup and observer merge.
// 2026-11-03: +3 for the dialog glass surface (it must out-rank the card fill).
const BASELINE = {
  important: 638,
  idHacks: 9,
}

const here = path.dirname(fileURLToPath(import.meta.url))
const file = path.join(here, '..', 'client.js')
const source = await readFile(file, 'utf8')

const problems = []
const report = []

try {
  new Function(source.replace(/^import .*$/gm, ''))
  report.push('syntax: ok')
} catch (error) {
  problems.push('syntax: ' + error.message)
}

const marker = 'const CSS = `'
const cssStart = source.indexOf(marker)
const cssEnd = source.indexOf('\n`', cssStart)
if (cssStart < 0 || cssEnd < 0) problems.push('css block: not found')

if (cssStart >= 0 && cssEnd >= 0) {
  const css = source.slice(cssStart + marker.length, cssEnd)
  const backs = [...css.matchAll(/`/g)].length
  if (backs > 0) problems.push(`css block: ${backs} stray backtick(s)`)
  else report.push('css block: no stray backticks')

  const code = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/url\("data:[^"]*"\)/g, 'url()')
    .replace(/--zzz-glass-[a-z-]+:[^;]*;/g, '')

  const rawGlass = [...code.matchAll(/rgba\(16,\s*16,\s*16,/g)].length
  const rawBlur = [...code.matchAll(/blur\(14px\) saturate\(180%\)/g)].length
  if (rawGlass > 0) problems.push(`glass: ${rawGlass} raw rgba(16,16,16,...) declaration(s)`)
  if (rawBlur > 0) problems.push(`glass: ${rawBlur} raw blur(14px) declaration(s)`)
  if (rawGlass + rawBlur === 0) report.push('glass: every surface uses --zzz-glass-*')

  const hacks = [...code.matchAll(/:not\(#zzz-guard\)/g)].length
  const important = [...code.matchAll(/!important/g)].length
  report.push(`debt: ${important} !important (baseline ${BASELINE.important})`)
  report.push(`debt: ${hacks} id-level overrides (baseline ${BASELINE.idHacks})`)

  if (important > BASELINE.important) {
    problems.push(`!important grew: ${important} > ${BASELINE.important}`)
  }
  if (hacks > BASELINE.idHacks) {
    problems.push(`id-level overrides grew: ${hacks} > ${BASELINE.idHacks}`)
  }
  if (important < BASELINE.important || hacks < BASELINE.idHacks) {
    report.push('debt went DOWN - lower BASELINE in tools/check-theme.mjs to keep the ratchet tight')
  }
}

function paletteBlock(name) {
  const start = source.indexOf(`const ${name} = {`)
  if (start < 0) return null
  let depth = 0
  for (let i = source.indexOf('{', start); i < source.length; i++) {
    if (source[i] === '{') depth++
    else if (source[i] === '}') {
      depth--
      if (depth === 0) return source.slice(start, i + 1)
    }
  }
  return null
}

for (const name of ['DARK', 'LIGHT']) {
  const block = paletteBlock(name)
  if (!block) {
    report.push(`palette ${name}: not found (skipped)`)
    continue
  }
  const keys = [...block.matchAll(/'(--dsw-[a-z0-9-]+)':/g)].map((m) => m[1])
  const seen = new Set()
  const dupes = new Set()
  for (const key of keys) {
    if (seen.has(key)) dupes.add(key)
    seen.add(key)
  }
  if (dupes.size) problems.push(`palette ${name} duplicates: ${[...dupes].join(', ')}`)
  else report.push(`palette ${name}: ${seen.size} keys, no duplicates`)
}

// ---- 6. void geometry / interaction invariants -----------------------------
const voidStart = source.indexOf('const VOID = {')
let voidCfg = null
if (voidStart < 0) {
  problems.push('void: VOID tunables table not found')
} else {
  let depth = 0
  let end = -1
  for (let i = source.indexOf('{', voidStart); i < source.length; i++) {
    if (source[i] === '{') depth++
    else if (source[i] === '}') {
      depth--
      if (depth === 0) { end = i; break }
    }
  }
  if (end < 0) {
    problems.push('void: VOID table is not closed')
  } else {
    const literal = source.slice(source.indexOf('{', voidStart), end + 1)
    try {
      voidCfg = new Function('return (' + literal + ')')()
    } catch (error) {
      problems.push('void: VOID is not a plain object literal: ' + error.message)
    }
  }
}

if (voidCfg) {
  const need = [
    'SIZE', 'RADIUS', 'BAND_W', 'SHADOW_W', 'SHADOW_ALPHA', 'SHADOW_DEBUG_ALPHA',
    'ZOOM', 'ZOOM_TAU', 'FPS', 'FPS_ZOOM', 'FPS_LOW', 'FPS_LOW_ZOOM',
    'DPR', 'DPR_LOW', 'FRES_SIZE', 'FRES_SIZE_LOW', 'FRES_SPEED',
    'FRES_HOLE', 'FRES_HOLE_W', 'FRES_ALPHA_EXP', 'GLOW_DIV',
    'BLUR_IN', 'BLUR_OUT', 'BLUR_TIGHT', 'ALPHA_IN', 'ALPHA_OUT', 'ALPHA_TIGHT',
    'TICKS', 'WHITE_SMOOTH',
  ]
  const missing = need.filter((k) => !(k in voidCfg))
  if (missing.length) problems.push('void: VOID missing ' + missing.join(', '))

  const ratio = voidCfg.BAND_W / voidCfg.SHADOW_W
  if (Math.abs(ratio - 0.618) > 0.002) {
    problems.push(`void: band/shadow ratio ${ratio.toFixed(3)} is not 0.618`)
  }

  const reach = (voidCfg.RADIUS + 149) * voidCfg.ZOOM
  if (reach > voidCfg.SIZE / 2) {
    problems.push(`void: ${voidCfg.ZOOM}x outer glow reaches ${reach.toFixed(1)} > canvas half ${voidCfg.SIZE / 2}`)
  }

  if (voidCfg.DPR_LOW > voidCfg.DPR) problems.push('void: DPR_LOW is larger than DPR')
  if (voidCfg.FRES_SIZE_LOW > voidCfg.FRES_SIZE) problems.push('void: FRES_SIZE_LOW is larger than FRES_SIZE')
  if (voidCfg.FPS_LOW > voidCfg.FPS) problems.push('void: FPS_LOW is higher than FPS')
  if (voidCfg.FPS_LOW_ZOOM > voidCfg.FPS_ZOOM) problems.push('void: FPS_LOW_ZOOM is higher than FPS_ZOOM')
  if (voidCfg.FRES_HOLE + voidCfg.FRES_HOLE_W >= 1) problems.push('void: fresnel hole + transition exceeds the radius')

  const cssSized = (source.match(new RegExp('width:' + voidCfg.SIZE + 'px', 'g')) || []).length
  if (cssSized < 2) problems.push('void: stage/band CSS width does not match VOID.SIZE')

  report.push(`void: band ${voidCfg.BAND_W}px, shadow ${voidCfg.SHADOW_W}px (ratio ${ratio.toFixed(3)}), zoom ${voidCfg.ZOOM}x fits ${voidCfg.SIZE / 2}px`)
}

if (/scale\(\.62\)/.test(source)) problems.push('void: stale scale(.62) transform found')
if (/repeating-radial-gradient/.test(source)) problems.push('void: repeating-radial-gradient present in the hollow')
if (!source.includes("name: 'settings.section', id: 'zzz-theme'")) {
  problems.push('void: official settings.section registration missing')
}
if (!source.includes('w = VOID.BAND_W')) problems.push('void: band width does not read VOID.BAND_W')

console.log(report.join('\n'))
if (problems.length) {
  console.error('\nFAILED:\n- ' + problems.join('\n- '))
  process.exit(1)
}
console.log('\nall checks passed')
