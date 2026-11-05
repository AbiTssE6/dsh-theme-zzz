/**
 * Host half of dsh-theme-zzz.
 *
 * Serves the fonts the browser half asks for from CSS. The theme does NOT bundle
 * 印品鸿蒙体 (its licence does not allow redistribution), so the lookup order is:
 *
 *   1. $DSH_HOME/dsh-theme-zzz/fonts/  (the user drops the .woff2 there)
 *   2. ./fonts/                        (a developer checkout that still has them)
 *
 * When neither exists the request is a 404 and CSS falls back to the system fonts.
 */
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const DSH_HOME = process.env.DSH_HOME || join(homedir(), '.dsh')
const USER_FONT_DIR = join(DSH_HOME, 'dsh-theme-zzz', 'fonts')
const ROUTES = [
  {
    path: '/zzz-theme/fonts',
    dir: join(HERE, 'fonts'),
    userDir: USER_FONT_DIR,
    files: {
      'inpin-bold.woff2': 'font/woff2',
      'inpin-d40.woff2': 'font/woff2',
      'noto-sans-sc-regular.woff2': 'font/woff2',
    },
    cache: 'public, max-age=31536000, immutable',
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
    let file
    let info
    for (const dir of [route.userDir, route.dir]) {
      if (!dir) continue
      try {
        info = await stat(join(dir, name))
        file = join(dir, name)
        break
      } catch {
        /* try the next location */
      }
    }
    if (file === undefined || info === undefined) {
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
      () =>
        ctx.webServer.register({ kind: 'prefix', path: route.path, handler: staticHandler(route) }),
      `dsh-theme-zzz: ${route.path}`,
    )
  }
}
