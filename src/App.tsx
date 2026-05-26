import { useDeferredValue, useState } from 'react'
import './App.css'
import { showcaseEntries } from './data/showcaseEntries'
import type { ShowcaseEntry } from './types/showcase'

type PlatformFilter = 'all' | 'mobile' | 'desktop' | 'web' | 'browser-plugin' | 'server'

const platformOptions: PlatformFilter[] = ['all', 'mobile', 'desktop', 'web', 'browser-plugin', 'server']
const fallbackIcon = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
    <rect width="72" height="72" rx="18" fill="#e2e8f0" />
    <rect x="16" y="18" width="40" height="28" rx="8" fill="#64748b" opacity="0.18" />
    <path d="M23 49h26" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    <path d="M29 56h14" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    <path d="M24 24h24v16H24z" fill="#475569" opacity="0.78" />
  </svg>
`)}`

const getFaviconCandidates = (href: string) => {
  try {
    const url = new URL(href)
    const normalizedPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`

    return [
      `${url.origin}${normalizedPath}favicon.svg`,
      `${url.origin}${normalizedPath}favicon.ico`,
      `${url.origin}${normalizedPath}favicon.png`,
      `${url.origin}${normalizedPath}icon.svg`,
      `${url.origin}${normalizedPath}icon-192.png`,
      `${url.origin}${normalizedPath}apple-touch-icon.png`,
      `${url.origin}/favicon.svg`,
      `${url.origin}/favicon.ico`,
      `${url.origin}/favicon.png`,
      `${url.origin}/icon.svg`,
      `${url.origin}/icon-192.png`,
      `${url.origin}/apple-touch-icon.png`,
    ]
  } catch {
    return []
  }
}

const ShowcaseIcon = ({ entry }: { entry: ShowcaseEntry }) => {
  const faviconCandidates = entry.href ? getFaviconCandidates(entry.href) : []
  const sources = entry.icon
    ? [entry.icon, ...faviconCandidates, fallbackIcon]
    : [...faviconCandidates, fallbackIcon]
  const [sourceIndex, setSourceIndex] = useState(0)

  return (
    <img
      src={sources[sourceIndex]}
      alt=""
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex(sourceIndex + 1)
        }
      }}
      className="h-10 w-10 shrink-0 rounded-xl border border-slate-200 object-cover dark:border-slate-700"
    />
  )
}

const matchesPlatform = (
  platform: (typeof showcaseEntries)[number]['platform'],
  platforms: PlatformFilter[],
) => {
  if (platforms.length === 0 || platforms.includes('all')) return true
  if (platforms.includes('mobile') && platform === 'mobile-app') return true
  if (platforms.includes('desktop') && platform === 'desktop') return true
  if (platforms.includes('web') && platform === 'web') return true
  if (platforms.includes('browser-plugin') && platform === 'browser-plugin') return true
  if (platforms.includes('server') && platform === 'server') return true
  return false
}

const getDefaultPlatformFilters = (): PlatformFilter[] => {
  if (typeof window === 'undefined') return ['web', 'desktop']

  const isMobileClient = window.matchMedia('(max-width: 767px)').matches
    || /android|iphone|ipad|ipod|mobile/i.test(window.navigator.userAgent)

  return isMobileClient ? ['web', 'mobile'] : ['web', 'desktop']
}

function App() {
  const [search, setSearch] = useState('')
  const [platformFilters, setPlatformFilters] = useState<PlatformFilter[]>(getDefaultPlatformFilters)
  const deferredSearch = useDeferredValue(search)
  const normalizedSearch = deferredSearch.trim().toLowerCase()

  const togglePlatformFilter = (platform: PlatformFilter) => {
    setPlatformFilters((current) => {
      if (platform === 'all') {
        return current.includes('all') ? getDefaultPlatformFilters() : ['all']
      }

      const withoutAll = current.filter((entry) => entry !== 'all')
      if (withoutAll.includes(platform)) {
        const next = withoutAll.filter((entry) => entry !== platform)
        return next.length > 0 ? next : ['all']
      }

      return [...withoutAll, platform]
    })
  }

  const selectedPlatformLabel = platformFilters.includes('all')
    ? 'all'
    : platformFilters.join(', ')

  const filteredEntries = showcaseEntries.filter((entry) => {
    if (!matchesPlatform(entry.platform, platformFilters)) return false
    if (!normalizedSearch) return true

    const searchIndex = [
      entry.title,
      entry.shortDescription,
      entry.longDescription,
      entry.category,
      entry.author,
      entry.platform,
      ...entry.tags,
    ]
      .join(' ')
      .toLowerCase()

    return searchIndex.includes(normalizedSearch)
  })

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 md:px-6 md:py-5 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <span className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-200">
                awesome
              </span>
            </div>

      <section id="tools" className="mt-5 space-y-4 scroll-mt-28">
        <div className="sticky top-3 z-30 -mx-2 px-2 py-1 md:top-4">
          <div className="flex flex-col gap-3 rounded-[1.25rem] border border-white/70 bg-[rgba(255,248,239,0.9)] p-3 shadow-[0_18px_50px_rgba(15,23,33,0.12)] backdrop-blur-xl md:flex-row md:items-center md:justify-between dark:border-slate-700/70 dark:bg-[rgba(15,23,33,0.85)] dark:shadow-[0_16px_50px_rgba(2,6,23,0.5)]">
            <label className="block w-full md:max-w-xl">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 dark:text-slate-300">
                Suche
              </span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Titel, Kategorie, Software-Art, Autor oder Tags durchsuchen"
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-slate-400"
              />
            </label>
            <div className="flex flex-col gap-2 md:items-end">
              <details className="group relative">
                <summary className="list-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 outline-none transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500">
                  {selectedPlatformLabel}
                </summary>
                <div className="absolute right-0 top-[calc(100%+0.4rem)] z-40 min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_12px_30px_rgba(15,23,33,0.12)] dark:border-slate-700 dark:bg-slate-900">
                  {platformOptions.map((platform) => {
                    const checked = platformFilters.includes(platform)

                    return (
                      <label
                        key={platform}
                        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePlatformFilter(platform)}
                          className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-0 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                        />
                        <span>{platform}</span>
                      </label>
                    )
                  })}
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="grid gap-2.5">
          {filteredEntries.map((entry, index) => {
            const isOwn = entry.kind === 'own'
            const isClickable = typeof entry.href === 'string' && /^https?:\/\//.test(entry.href)

            return (
              <article
                key={entry.id}
                className="reveal group relative overflow-hidden rounded-[1.1rem] border border-slate-200/80 bg-white/80 shadow-[0_8px_24px_rgba(15,23,33,0.06)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_8px_24px_rgba(2,6,23,0.28)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {isClickable ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${entry.title} öffnen`}
                    className="absolute inset-0 z-10 rounded-[1.1rem]"
                  />
                ) : null}

                <div className="flex items-center gap-3 p-3 md:p-3.5">
                  <ShowcaseIcon entry={entry} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-semibold tracking-[-0.02em] text-slate-950 dark:text-slate-50">
                        {entry.title}
                      </h3>
                      {isOwn ? (
                        <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-700 dark:bg-orange-500/10 dark:text-orange-200">
                          own
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                      {entry.shortDescription}
                    </p>
                  </div>
                  {isClickable ? (
                    <div className="shrink-0 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      ↗
                    </div>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>

        {filteredEntries.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white/60 px-6 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            Keine Einträge für diese Suche gefunden.
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default App
