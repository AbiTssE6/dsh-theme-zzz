#!/usr/bin/env node
/**
 * Build the `dist` branch content: the installable package at the repository root,
 * without the non-redistributable fonts.
 *
 *   node scripts/make-dist.mjs
 *
 * The build runs tools/check-theme.mjs and tools/check-paint.mjs first and exits
 * non-zero without touching dist/ if either fails. --skip-checks exists for an
 * emergency only; it prints a warning into the release log.
 *
 * Then publish it as the `dist` branch:
 *
 *   git worktree add .dist-worktree --detach
 *   # copy dist/* into .dist-worktree (the script prints the exact command)
 *   git -C .dist-worktree add -A
 *   git -C .dist-worktree commit -m "release: v<version>"
 *   git -C .dist-worktree push origin HEAD:dist
 */
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgDir = path.join(root, 'packages', 'dsh-theme-zzz')
const out = path.join(root, 'dist')

// ---- preflight ----------------------------------------------------------------
// check-theme guards the stylesheet invariants (parse, tail, debt ratchets).
// check-paint measures the real computed paint of every key on every surface, which
// is the only thing that catches "the rule is there but something flattened it".
// Both must pass before a byte is written: a broken version must not be packageable.
const checks = [
  ['theme invariants', ['packages/dsh-theme-zzz/tools/check-theme.mjs']],
  ['key paint', ['packages/dsh-theme-zzz/tools/check-paint.mjs']],
]
if (!process.argv.includes('--skip-checks')) {
  for (const [label, args] of checks) {
    const run = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' })
    if (run.status !== 0) {
      console.error(`\nrelease aborted: ${label} failed (dist/ left untouched)`)
      process.exit(run.status ?? 1)
    }
  }
} else {
  console.warn('WARNING: --skip-checks given; the theme checks did not run before this build')
}

const FILES = [
  'index.js',
  'client.js',
  'cordis.patch.yml',
  'icon.svg',
  'FONT-LICENSES.md',
  'CHANGES.md',
  'README.md',
  'LICENSE',
  'package.json',
]
const DIRS = ['locale', 'assets', 'tools']

await rm(out, { recursive: true, force: true })
await mkdir(out, { recursive: true })

for (const name of FILES) {
  const from = path.join(pkgDir, name)
  if (!existsSync(from)) {
    console.warn(`skip (missing): ${name}`)
    continue
  }
  await cp(from, path.join(out, name))
}
for (const dir of DIRS) {
  const from = path.join(pkgDir, dir)
  if (!existsSync(from)) continue
  await cp(from, path.join(out, dir), { recursive: true })
}

// fonts are never published: 印品鸿蒙体 does not allow redistribution
const pkg = JSON.parse(await readFile(path.join(pkgDir, 'package.json'), 'utf8'))
pkg.files = pkg.files.filter((f) => !f.startsWith('fonts'))
await writeFile(path.join(out, 'package.json'), JSON.stringify(pkg, null, 2) + '\n')

console.log(`dist/ built from ${path.relative(root, pkgDir)} (v${pkg.version})`)
console.log('\nnext:')
console.log('  git worktree add .dist-worktree --detach')
console.log('  robocopy dist .dist-worktree /MIR   # or: cp -r dist/. .dist-worktree/')
console.log('  git -C .dist-worktree add -A')
console.log(`  git -C .dist-worktree commit -m "release: v${pkg.version}"`)
console.log('  git -C .dist-worktree push origin HEAD:dist')
