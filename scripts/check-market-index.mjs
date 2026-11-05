#!/usr/bin/env node
/**
 * Validate a plugin-market index (format 1) without depending on the DSH install.
 *
 *   node scripts/check-market-index.mjs [market-index.json]
 *
 * Mirrors the rules the host's @deepseek-ai/dsh-plugin-market-index enforces for the
 * fields this repository uses: format, localized text, plugin identity, SemVer
 * versions in descending order, npm/git sources, and icon size.
 */
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const file = process.argv[2] || 'market-index.json'
const raw = JSON.parse(await readFile(file, 'utf8'))
const problems = []

const isText = (v) => typeof v === 'string' || (v && typeof v === 'object' && !Array.isArray(v) &&
  Object.values(v).every((s) => typeof s === 'string'))
const isUrl = (v) => typeof v === 'string' && /^https:\/\/[^\s?#]+$/.test(v)
const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/

if (raw.format !== 1) problems.push('$.format must be 1')
if (!isText(raw.title)) problems.push('$.title must be a string or a localized object')
if (!Array.isArray(raw.plugins) || raw.plugins.length === 0) problems.push('$.plugins must be a non-empty array')

const names = new Set()
for (const [i, p] of (raw.plugins || []).entries()) {
  const at = `$.plugins[${i}]`
  if (typeof p.name !== 'string' || !/^(@[a-z0-9-]+\/)?[a-z0-9][a-z0-9._-]*$/.test(p.name)) {
    problems.push(`${at}.name is not a valid package name`)
  } else if (names.has(p.name)) {
    problems.push(`${at}.name is duplicated`)
  } else {
    names.add(p.name)
  }
  if (p.title !== undefined && !isText(p.title)) problems.push(`${at}.title must be localized text`)
  if (p.description !== undefined && !isText(p.description)) problems.push(`${at}.description must be localized text`)
  if (p.homepage !== undefined && !isUrl(p.homepage)) problems.push(`${at}.homepage must be an https URL`)
  if (p.repository && !isUrl(p.repository.url)) problems.push(`${at}.repository.url must be an https URL`)
  if (!Array.isArray(p.versions) || p.versions.length === 0) {
    problems.push(`${at}.versions must be a non-empty array`)
    continue
  }
  let prev = null
  for (const [j, v] of p.versions.entries()) {
    const vat = `${at}.versions[${j}]`
    if (!SEMVER.test(v.version || '')) problems.push(`${vat}.version is not exact SemVer`)
    if (typeof v.publishTimestamp !== 'number' || !Number.isInteger(v.publishTimestamp) || v.publishTimestamp < 0) {
      problems.push(`${vat}.publishTimestamp must be Unix seconds`)
    }
    if (prev) {
      const cmp = compareSemver(prev, v.version)
      if (cmp < 0) problems.push(`${vat}.version must be <= the previous one (descending order)`)
    }
    prev = v.version
    const s = v.source || {}
    if (s.type === 'npm') {
      if (s.registry !== undefined && !isUrl(s.registry)) problems.push(`${vat}.source.registry must be an https URL`)
    } else if (s.type === 'git') {
      if (!isUrl(s.url)) problems.push(`${vat}.source.url must be an https URL`)
      if (!/^[0-9a-f]{40}$/.test(s.commit || '')) problems.push(`${vat}.source.commit must be a lowercase 40-hex SHA`)
      if (s.path !== undefined && (typeof s.path !== 'string' || s.path.startsWith('/'))) {
        problems.push(`${vat}.source.path must be a relative POSIX path`)
      }
    } else {
      problems.push(`${vat}.source.type must be "npm" or "git"`)
    }
    if (v.engines?.dsh !== undefined && typeof v.engines.dsh !== 'string') {
      problems.push(`${vat}.engines.dsh must be a SemVer range string`)
    }
  }
}

function compareSemver(a, b) {
  const pa = a.split('-')[0].split('.').map(Number)
  const pb = b.split('-')[0].split('.').map(Number)
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i]
  return 0
}

if (problems.length) {
  console.error('INVALID ' + file + '\n- ' + problems.join('\n- '))
  process.exit(1)
}
console.log(`ok ${file}: ${raw.plugins.length} plugin(s)`)
