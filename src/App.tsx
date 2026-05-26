import { useDeferredValue, useState } from 'react'
import './App.css'
import { showcaseEntries } from './data/showcaseEntries'

const categories = [...new Set(showcaseEntries.map((entry) => entry.category))]

function App() {
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)
  const normalizedSearch = deferredSearch.trim().toLowerCase()

  const filteredEntries = showcaseEntries.filter((entry) => {
    if (!normalizedSearch) return true

    const searchIndex = [
      entry.title,
      entry.shortDescription,
      entry.longDescription,
      entry.category,
      entry.author,
      entry.softwareArt,
      ...entry.tags,
    ]
      .join(' ')
      .toLowerCase()

    return searchIndex.includes(normalizedSearch)
  })

  const ownEntries = filteredEntries.filter((entry) => entry.kind === 'own')

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 md:px-6 md:py-5 lg:px-8">
      <section className="reveal overflow-hidden rounded-[1.75rem] border border-white/50 bg-white/75 shadow-[0_20px_70px_rgba(15,23,33,0.12)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/75 dark:shadow-[0_20px_70px_rgba(2,6,23,0.55)]">
        <div className="grid gap-6 px-5 py-5 md:px-7 md:py-7 lg:grid-cols-[1.35fr_0.9fr] lg:px-9 lg:py-9">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <span className="rounded-full border border-slate-300/80 bg-white/80 px-3 py-1 dark:border-slate-600 dark:bg-slate-800/90 dark:text-slate-200">
                awesome
              </span>
              <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-200">
                Own + External Tools
              </span>
            </div>

            <div className="max-w-3xl space-y-3">
              <p className="font-display text-4xl leading-[0.92] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-slate-50">
                Tools, die Arbeit verkuerzen und Ideen schneller live bringen.
              </p>
              <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base dark:text-slate-300">
                Ein kompakter One-Pager fuer eigene Produkte, Experimente und externe
                Werkzeuge, die taeglich in Recherche, Design und Delivery auftauchen.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#tools"
                className="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
              >
                Tools ansehen
              </a>
              <a
                href="#own-tools"
                className="rounded-full border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
              >
                Eigene Projekte
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-5 text-white dark:border-slate-700">
            <div className="absolute inset-x-8 top-0 h-40 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="relative space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-semibold">{showcaseEntries.length}</p>
                  <p className="mt-1 text-xs text-slate-300">kuratierte Eintraege</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3">
                  <p className="text-2xl font-semibold">{ownEntries.length}</p>
                  <p className="mt-1 text-xs text-slate-300">eigene Tools</p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Data Model</p>
                <ul className="mt-3 grid grid-cols-2 gap-1.5 text-xs text-slate-200">
                  <li>`title`</li>
                  <li>`shortDescription`</li>
                  <li>`longDescription`</li>
                  <li>`category`</li>
                  <li>`author`</li>
                  <li>`softwareArt`</li>
                  <li>`tags[]`</li>
                  <li>`icon`</li>
                  <li>`previewImage`</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="tools" className="mt-5 space-y-4 scroll-mt-28">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Showcase
            </p>
            <h2 className="font-display text-2xl tracking-[-0.04em] text-slate-950 md:text-3xl dark:text-slate-50">
              Ausgewaehlte Werkzeuge in einer klaren Struktur
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-5 text-slate-600 dark:text-slate-300">
            Die Karten werden vollstaendig aus einer zentralen Datenquelle gerendert und
            lassen sich damit leicht erweitern oder spaeter an ein CMS anbinden.
          </p>
        </div>

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
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium dark:bg-slate-800 dark:text-slate-200">
                {filteredEntries.length} Treffer
              </span>
              {normalizedSearch ? (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                >
                  Suche leeren
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredEntries.map((entry, index) => {
            const isExternal = entry.kind === 'external'

            return (
              <article
                key={entry.id}
                className="reveal group relative overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/80 shadow-[0_12px_36px_rgba(15,23,33,0.08)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_12px_36px_rgba(2,6,23,0.38)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {isExternal ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${entry.title} extern oeffnen`}
                    className="absolute inset-0 z-10 rounded-[1.35rem]"
                  />
                ) : null}

                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <img
                    src={entry.previewImage}
                    alt={`${entry.title} preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                      {entry.kind}
                    </span>
                    <span className="text-xs font-medium text-white/90">{entry.author}</span>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={entry.icon}
                      alt=""
                      className="h-11 w-11 shrink-0 rounded-xl border border-slate-200 dark:border-slate-700"
                    />
                    <div className="min-w-0 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50">
                          {entry.title}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {entry.category}
                        </span>
                        <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                          {entry.softwareArt}
                        </span>
                      </div>
                      <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                        {entry.shortDescription}
                      </p>
                    </div>
                  </div>

                  <p className="card-description text-sm leading-5 text-slate-500 dark:text-slate-400">
                    {entry.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-50 px-2 py-1 text-[11px] font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {isExternal ? (
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 transition group-hover:border-slate-400 group-hover:text-slate-950 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:group-hover:border-slate-500">
                      Extern oeffnen
                      <span aria-hidden="true">↗</span>
                    </div>
                  ) : (
                    <a
                      href={entry.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500"
                    >
                      Zum Detailabschnitt
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {filteredEntries.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white/60 px-6 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            Keine Eintraege fuer diese Suche gefunden.
          </div>
        ) : null}
      </section>

      <section id="own-tools" className="mt-6 space-y-4 scroll-mt-28">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
              Eigene Tools
            </p>
            <h2 className="font-display text-2xl tracking-[-0.04em] text-slate-950 md:text-3xl dark:text-slate-50">
              Interne Verlinkung fuer deine eigenen Projekte
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-5 text-slate-600 dark:text-slate-300">
            Diese Abschnitte sind bewusst direkt aus denselben Eintraegen aufgebaut und koennen
            spaeter problemlos durch echte Live-Links, Repos oder Case Studies ersetzt werden.
          </p>
        </div>

        <div className="grid gap-3">
          {ownEntries.map((entry, index) => (
            <article
              id={`${entry.id}-detail`}
              key={entry.id}
              className="reveal grid gap-4 overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_12px_36px_rgba(15,23,33,0.08)] md:grid-cols-[1.1fr_1fr] md:p-5 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-[0_12px_36px_rgba(2,6,23,0.38)]"
              style={{ animationDelay: `${(index + 1) * 110}ms` }}
            >
              <div className="overflow-hidden rounded-[1.15rem] border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                <img
                  src={entry.previewImage}
                  alt={`${entry.title} preview`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={entry.icon}
                    alt=""
                    className="h-10 w-10 rounded-xl border border-slate-200 dark:border-slate-700"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      {entry.category} · {entry.softwareArt}
                    </p>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-slate-50">
                      {entry.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{entry.longDescription}</p>
                <div className="flex flex-wrap gap-1.5">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-5 text-slate-500 dark:text-slate-400">
                  Autor: <span className="font-semibold text-slate-700 dark:text-slate-200">{entry.author}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {normalizedSearch && ownEntries.length === 0 ? (
          <div className="rounded-[1.25rem] border border-dashed border-slate-300 bg-white/60 px-6 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
            Unter den eigenen Tools gibt es aktuell keinen Treffer fuer diese Suche.
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default App
