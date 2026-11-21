// ZZZ theme paint check.
//
// Run:  node tools/check-paint.mjs [client.js]
//
// Why this exists: every "my change did nothing" bug in this theme so far was the
// same shape - a component rule lost to a broader !important rule and nothing ever
// measured the result. Reading the CSS cannot answer "what does this element look
// like", so this harness builds one page per surface, drops the real stylesheet in,
// forces :hover / :focus-visible through equivalent class selectors, and asserts the
// computed background, label and radius of each key.
//
// Add a case whenever a new surface or key family appears. A case that fails here is
// exactly the bug class the theme keeps hitting, caught before a human sees it.

import { readFile } from 'node:fs/promises'
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const target = process.argv[2] ?? path.join(here, '..', 'client.js')
const source = await readFile(target, 'utf8')

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => existsSync(p))

if (!CHROME) {
  console.log('paint check skipped: no Chrome found')
  process.exit(0)
}

// ---- palette: the CSS template interpolates ${tokenBlock(DARK)} -----------------
const darkStart = source.indexOf('const DARK = {')
const darkEnd = source.indexOf('\n    }', darkStart)
const DARK = Object.fromEntries(
  [...source.slice(darkStart, darkEnd).matchAll(/'([^']+)':\s*'([^']*)'/g)].map((m) => [m[1], m[2]]),
)

const cssStart = source.indexOf('const CSS = `') + 'const CSS = `'.length
const cssEnd = source.indexOf('`\n', cssStart)
let css = source.slice(cssStart, cssEnd)
if (cssEnd < 0) {
  console.error('paint check: css block not found')
  process.exit(1)
}
css = css.replace('${tokenBlock(DARK)}', '')
css = css.replace(/\$\{MARKER\}/g, 'data-dsh-theme-zzz')

const tokens = 'html[data-dsh-theme-zzz]{' +
  Object.entries(DARK).map(([k, v]) => `${k}:${v} !important;`).join('') + '}'

// ---- cases ---------------------------------------------------------------------
// [surface, keyClass, label, forcedState, expected]
// expected fields: bg (rgb string), fg (rgb string), and optionally radius.
const P = (r, g, b) => `rgb(${r}, ${g}, ${b})`
const INK = P(11, 11, 11)
const LABEL = P(247, 247, 247)
const DIMLABEL = P(220, 220, 220)
const YELLOW = P(252, 221, 0)
const ONYELLOW = P(16, 16, 16)
const RED = P(200, 24, 0)
const REDLABEL = P(255, 97, 82)
const QUIET = P(28, 28, 28)
const MUTED = P(43, 43, 43)
const FAINT = P(125, 125, 125)

const SURFACES = {
  dialog: '<div role="dialog" class="host">',
  glass: '<div role="dialog" class="host"><div class="glassRow" data-zzz-glass>',
  plugin: '<div data-dsh-plugin><div class="host">',
}

const CASES = [
  ['dialog', 'zGbnIq_primaryButton', 'rest', { bg: INK, fg: LABEL, radius: '8px' }],
  ['dialog', 'zGbnIq_primaryButton zzz-h', 'hover', { bg: YELLOW, fg: ONYELLOW }],
  ['dialog', 'zGbnIq_secondaryButton', 'rest', { bg: 'rgba(0, 0, 0, 0)', fg: P(234, 234, 234) }],
  ['dialog', 'zGbnIq_secondaryButton zzz-h', 'hover', { bg: QUIET, fg: LABEL }],
  ['dialog', 'zGbnIq_dangerButton', 'rest', { bg: 'rgba(0, 0, 0, 0)', fg: REDLABEL }],
  ['dialog', 'zGbnIq_dangerButton zzz-h', 'hover', { bg: RED, fg: LABEL }],
  ['dialog', 'zGbnIq_iconButtonDanger zzz-h', 'hover', { bg: RED, fg: LABEL }],
  ['dialog', 'zGbnIq_addButton', 'rest', { bg: 'rgba(0, 0, 0, 0)', fg: P(234, 234, 234), radius: '8px' }],
  ['dialog', 'zGbnIq_addButton zzz-h', 'hover', { bg: YELLOW, fg: ONYELLOW }],
  ['dialog', 'X_button_1rv3m_2 X_sm_1rv3m_28', 'rest', { bg: INK, fg: DIMLABEL }],
  ['dialog', 'X_button_1rv3m_2 X_sm_1rv3m_28 zzz-h', 'hover', { bg: YELLOW, fg: ONYELLOW }],
  // the surface the editor lives on: a settings row tagged as glass
  ['glass', 'zGbnIq_primaryButton', 'rest', { bg: INK, fg: LABEL }],
  ['glass', 'zGbnIq_secondaryButton zzz-h', 'hover', { bg: QUIET, fg: LABEL }],
  ['glass', 'zGbnIq_dangerButton zzz-h', 'hover', { bg: RED, fg: LABEL }],
  ['glass', 'zGbnIq_addButton zzz-h', 'hover', { bg: YELLOW, fg: ONYELLOW }],
  ['glass', 'X_button_1rv3m_2 X_sm_1rv3m_28 zzz-h', 'hover', { bg: YELLOW, fg: ONYELLOW }],
  // plugin panels keep their own rows but the theme's keys must still read right
  ['plugin', 'zGbnIq_dangerButton zzz-h', 'hover', { bg: RED, fg: LABEL }],
]

// :hover cannot be driven in a headless dump, so the same rules are mirrored with a
// class of identical specificity (a class and a pseudo-class weigh the same).
const forced = css
  .replace(/:hover/g, '.zzz-h')
  .replace(/:focus-visible/g, '.zzz-f')
  .replace(/:focus(?![-\w])/g, '.zzz-f')

const rows = []
for (const [surface, cls, label, expect] of CASES) {
  const open = SURFACES[surface]
  const depth = (open.match(/<div/g) ?? []).length
  const body =
    `${open}<div class="host"><button class="${cls}" type="button"><span>确定</span></button></div>` +
    '</div>'.repeat(depth) + '</div>'
  rows.push({ surface, cls, label, expect, body })
}

const markup = rows
  .map(
    (r, i) =>
      `<section id="s${i}">${r.body}</section>`,
  )
  .join('\n')

const probe = `
const out = []
for (const row of window.__rows) {
  const btn = document.querySelector('#s' + row.i + ' button')
  if (!btn) { out.push({ ...row, error: 'not found' }); continue }
  const cs = getComputedStyle(btn)
  out.push({
    i: row.i,
    surface: row.surface,
    cls: row.cls,
    label: row.label,
    expect: row.expect,
    got: { bg: cs.backgroundColor, fg: cs.color, radius: cs.borderRadius },
  })
}
document.documentElement.setAttribute('data-out', JSON.stringify(out))
`

const page = `<!doctype html><html data-dsh-theme-zzz><head><meta charset="utf-8">
<style>${tokens}</style>
<style>${css}</style>
<style>${forced}</style>
<style>
  html[data-dsh-theme-zzz] body{margin:0;background:#131313;font:14px sans-serif}
  .host{padding:12px}
  .host button{margin:6px 0}
</style>
</head><body>
${markup}
<script>window.__rows = ${JSON.stringify(rows.map((r, i) => ({ i, surface: r.surface, cls: r.cls, label: r.label, expect: r.expect })))}
${probe}</script>
</body></html>`

const dir = mkdtempSync(path.join(tmpdir(), 'zzz-paint-'))
const file = path.join(dir, 'paint.html')
writeFileSync(file, page, 'utf8')

let dump = ''
try {
  dump = execFileSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--user-data-dir=${path.join(dir, 'profile')}`,
      '--virtual-time-budget=2500',
      '--dump-dom',
      'file:///' + file.replace(/\\/g, '/'),
    ],
    { encoding: 'utf8', timeout: 90_000 },
  )
} catch (error) {
  console.error('paint check: chrome failed to render', error.message)
  rmSync(dir, { recursive: true, force: true })
  process.exit(1)
}
rmSync(dir, { recursive: true, force: true })

const match = dump.match(/data-out="([^"]*)"/)
if (!match) {
  console.error('paint check: the page produced no measurement (stylesheets dropped?)')
  process.exit(1)
}
const decoded = match[1]
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&')

const results = JSON.parse(decoded)
const problems = []
const pad = (s, n) => String(s).padEnd(n)
console.log(pad('surface', 9) + pad('key', 40) + pad('state', 7) + 'measured')
for (const r of results) {
  const got = r.got ?? {}
  const line = `${pad(r.surface, 9)}${pad(r.cls, 40)}${pad(r.label, 7)}${got.bg} / ${got.fg}`
  let bad = false
  if (r.error) {
    bad = true
  } else {
    for (const k of ['bg', 'fg', 'radius']) {
      if (r.expect[k] !== undefined && got[k] !== r.expect[k]) bad = true
    }
  }
  console.log((bad ? 'x ' : '  ') + line)
  if (bad) {
    const want = Object.entries(r.expect)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ')
    problems.push(`${r.surface}/${r.cls}/${r.label} -> got bg=${got.bg} fg=${got.fg} radius=${got.radius}; want ${want}`)
  }
}

if (problems.length) {
  console.log('')
  console.log('FAILED:')
  for (const p of problems) console.log('- ' + p)
  process.exit(1)
}
console.log('')
console.log(`paint: ${results.length} key/surface/state cases match the token layer`)
