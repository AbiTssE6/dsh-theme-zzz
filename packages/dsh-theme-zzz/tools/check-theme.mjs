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
const BASELINE = {
  important: 635,
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

console.log(report.join('\n'))
if (problems.length) {
  console.error('\nFAILED:\n- ' + problems.join('\n- '))
  process.exit(1)
}
console.log('\nall checks passed')
