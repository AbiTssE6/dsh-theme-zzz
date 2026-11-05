#!/usr/bin/env node
/**
 * Generate a plugin-market index (format 1) for this theme.
 *
 *   node scripts/make-market-index.mjs \
 *     --repo https://github.com/<owner>/dsh-theme-zzz \
 *     --commit <40-hex sha of the dist branch> \
 *     [--path dist] [--out market-index.json] [--registry <npm registry url>]
 *
 * The index points at a Git source by default (no npm account needed). The commit
 * must be the commit that contains the installable package (the `dist` branch).
 * Re-run after every release and commit the regenerated market-index.json.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgDir = path.join(root, 'packages', 'dsh-theme-zzz')

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const repo = arg('repo')
const commit = arg('commit')
const subPath = arg('path', 'dist')
const outFile = arg('out', path.join(root, 'market-index.json'))
const registry = arg('registry')
if (!repo || !/^https:\/\/[^?#]+$/.test(repo)) {
  console.error('usage: --repo https://github.com/<owner>/<repo> --commit <40-hex sha> [--path dist] [--out file] [--registry url]')
  process.exit(1)
}
if (!/^[0-9a-f]{40}$/.test(commit || '')) {
  console.error('--commit must be a lowercase 40-hex commit SHA (git rev-parse HEAD on the dist branch)')
  process.exit(1)
}

const pkg = JSON.parse(await readFile(path.join(pkgDir, 'package.json'), 'utf8'))
const en = JSON.parse(await readFile(path.join(pkgDir, 'locale', 'en.json'), 'utf8'))
const zh = JSON.parse(await readFile(path.join(pkgDir, 'locale', 'zh.json'), 'utf8'))
const version = pkg.version
const ts = Math.floor(Date.now() / 1000)

const index = {
  format: 1,
  title: { en: 'ZZZ Themes', zh: 'ZZZ 主题' },
  description: {
    en: 'Zenless Zone Zero style themes for the DeepSeek Harness Web UI.',
    zh: '《绝区零》风格的 DeepSeek Harness Web 主题。',
  },
  metadata: {
    categories: { theme: { title: { en: 'Theme', zh: '主题' } } },
    labels: {},
    sortKeys: {},
  },
  plugins: [
    {
      name: pkg.name,
      title: { en: en.meta.title, zh: zh.meta.title },
      description: { en: en.meta.description, zh: zh.meta.description },
      icon: './icon.svg',
      author: arg('author', 'dsh-theme-zzz contributors'),
      homepage: repo,
      repository: { url: repo, directory: subPath === '.' ? undefined : `packages/dsh-theme-zzz` },
      metadata: {
        category: 'theme',
        keywords: pkg.keywords || [],
        labels: [],
        sortKeys: {},
      },
      versions: [
        {
          version,
          publishTimestamp: ts,
          source: {
            type: 'git',
            url: repo,
            commit,
            ...(subPath && subPath !== '.' ? { path: subPath } : {}),
          },
          engines: { dsh: pkg.engines?.dsh || '>=0.2.1-rc.4' },
        },
      ],
    },
  ],
}

await writeFile(outFile, JSON.stringify(index, null, 2) + '\n')
console.log(`wrote ${path.relative(process.cwd(), outFile)} (${pkg.name}@${version})`)
console.log('validate with: node scripts/check-market-index.mjs ' + path.relative(process.cwd(), outFile))
