export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

export function routeHref(path = '/') {
  if (path.startsWith('#')) return path
  if (path === '/') return `${basePath}/`
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

export function routePath(pathname) {
  const withoutBase = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname
  const normalized = withoutBase || '/'

  return normalized !== '/' ? normalized.replace(/\/$/, '') : normalized
}
