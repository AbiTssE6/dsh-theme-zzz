/**
 * Host half of dsh-theme-zzz.
 *
 * Serves the settings-page copy from locale/*.json so the text lives in editable files
 * instead of the client bundle. Fonts are not served: they come from the OS.
 */
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROUTES = [
  {
    path: '/zzz-theme/locale',
    dir: join(HERE, 'locale'),
    files: {
      'zh.json': 'application/json; charset=utf-8',
      'en.json': 'application/json; charset=utf-8',
    },
    cache: 'no-cache',
  },
]

function staticHandler(route) {
  return async function handler(req, res) {
    const path = (req.url ?? '').split('?', 1)[0]
    const name = path.startsWith(`${route.path}/`) ? path.slice(route.path.length + 1) : undefined
    const type = name === undefined ? undefined : route.files[name]
    if (type === undefined) {
      res.statusCode = 404
      res.end('not found')
      return
    }
    const file = join(route.dir, name)
    let info
    try {
      info = await stat(file)
    } catch {
      res.statusCode = 404
      res.end('not found')
      return
    }
    res.setHeader('Content-Type', type)
    res.setHeader('Content-Length', String(info.size))
    res.setHeader('Cache-Control', route.cache)
    res.setHeader('X-Content-Type-Options', 'nosniff')
    if (req.method === 'HEAD') {
      res.end()
      return
    }
    createReadStream(file).pipe(res)
  }
}

export const inject = ['webServer']

export function apply(ctx) {
  for (const route of ROUTES) {
    ctx.effect(
      () => ctx.webServer.register({ kind: 'prefix', path: route.path, handler: staticHandler(route) }),
      `dsh-theme-zzz: ${route.path}`,
    )
  }
}
