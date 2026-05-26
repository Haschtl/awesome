import type { ShowcaseEntry } from '../types/showcase'

const toDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const createIcon = (glyph: string, accent: string, surface: string) =>
  toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
      <rect width="72" height="72" rx="20" fill="${surface}" />
      <circle cx="36" cy="36" r="24" fill="${accent}" opacity="0.18" />
      <path d="M20 52c10-12 22-22 32-30" stroke="${accent}" stroke-width="4" stroke-linecap="round" />
      <text x="36" y="42" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="${accent}">
        ${glyph}
      </text>
    </svg>
  `)

const createPreview = (
  title: string,
  eyebrow: string,
  accent: string,
  accentSoft: string,
  surface: string,
) =>
  toDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" fill="none">
      <rect width="1200" height="760" rx="48" fill="${surface}" />
      <rect x="42" y="42" width="1116" height="676" rx="34" fill="#0f1721" opacity="0.08" />
      <circle cx="970" cy="176" r="186" fill="${accent}" opacity="0.18" />
      <circle cx="864" cy="618" r="132" fill="${accentSoft}" opacity="0.34" />
      <rect x="94" y="112" width="230" height="26" rx="13" fill="${accent}" opacity="0.82" />
      <rect x="94" y="176" width="540" height="88" rx="24" fill="#102033" />
      <rect x="94" y="302" width="426" height="24" rx="12" fill="#415063" />
      <rect x="94" y="344" width="368" height="24" rx="12" fill="#607086" />
      <rect x="94" y="468" width="280" height="144" rx="30" fill="${accentSoft}" opacity="0.88" />
      <rect x="404" y="468" width="280" height="144" rx="30" fill="#16324d" />
      <rect x="714" y="468" width="392" height="144" rx="30" fill="${accent}" opacity="0.82" />
      <text x="94" y="96" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#102033">
        ${eyebrow}
      </text>
      <text x="126" y="233" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#f7fafc">
        ${title}
      </text>
    </svg>
  `)

export const showcaseEntries: ShowcaseEntry[] = [
  {
    id: 'signal-atlas',
    title: 'Signal Atlas',
    shortDescription: 'Curated Sammlung aus internen Workflows, APIs und Quick-Links.',
    longDescription:
      'Signal Atlas ist als zentrale Startoberflaeche fuer wiederkehrende Recherche-, Debug- und Delivery-Aufgaben gedacht. Das Tool buendelt handverlesene Links, kleine Utilities und Kontext-Snippets in einem klaren Raster statt in verstreuten Bookmarks.',
    category: 'Workflow Hub',
    author: 'Haschtl',
    softwareArt: 'web',
    tags: ['dashboard', 'links', 'research', 'workflow'],
    icon: createIcon('S', '#f97316', '#fff7ed'),
    previewImage: createPreview('Signal Atlas', 'Own Tool', '#f97316', '#fdba74', '#fff7ed'),
    href: '#signal-atlas-detail',
    kind: 'own',
  },
  {
    id: 'prompt-canvas',
    title: 'Prompt Canvas',
    shortDescription: 'Bausteinbasierter Editor fuer Prompts, Notizen und Varianten.',
    longDescription:
      'Prompt Canvas fokussiert auf schnelles Iterieren: kurze Vorlagen, Varianten pro Use Case und direkte Vergleichbarkeit von Formulierungen. Die Karte im Portfolio reserviert bewusst Platz fuer weitere Screenshots oder spaetere Case Studies.',
    category: 'AI Workspace',
    author: 'Haschtl',
    softwareArt: 'desktop',
    tags: ['prompting', 'editor', 'notes', 'ai'],
    icon: createIcon('P', '#0f766e', '#ecfeff'),
    previewImage: createPreview('Prompt Canvas', 'Own Tool', '#0f766e', '#5eead4', '#ecfeff'),
    href: '#prompt-canvas-detail',
    kind: 'own',
  },
  {
    id: 'release-radar',
    title: 'Release Radar',
    shortDescription: 'Kompakter Ueberblick ueber Versionen, Deployments und offene Checks.',
    longDescription:
      'Release Radar ist fuer Produkt- und Engineering-Status gebaut: Was ist live, was wartet auf Review und welche Abhaengigkeiten blockieren gerade? Das Muster eignet sich gut fuer Teams, die Release-Transparenz ohne schweres PM-Tool wollen.',
    category: 'Delivery Ops',
    author: 'Haschtl',
    softwareArt: 'mobile-app',
    tags: ['release', 'deployments', 'monitoring', 'status'],
    icon: createIcon('R', '#2563eb', '#eff6ff'),
    previewImage: createPreview('Release Radar', 'Own Tool', '#2563eb', '#93c5fd', '#eff6ff'),
    href: '#release-radar-detail',
    kind: 'own',
  },
  {
    id: 'openai-platform',
    title: 'OpenAI Platform',
    shortDescription: 'Modelle, APIs und Workflows fuer Assistants, Agents und Multimodalitaet.',
    longDescription:
      'Die OpenAI Platform ist hier als externer Referenzpunkt aufgenommen, weil sie fuer Prototyping, Textverarbeitung und agentische Automatisierung oft die schnellste Abkuerzung ist. Im Portfolio funktioniert sie als klar verlinkter Technologie-Baustein.',
    category: 'External Tool',
    author: 'OpenAI',
    softwareArt: 'web',
    tags: ['llm', 'api', 'agents', 'multimodal'],
    icon: createIcon('O', '#111827', '#f3f4f6'),
    previewImage: createPreview('OpenAI Platform', 'External', '#111827', '#9ca3af', '#f8fafc'),
    href: 'https://platform.openai.com/',
    kind: 'external',
  },
  {
    id: 'figma',
    title: 'Figma',
    shortDescription: 'Interface-Entwurf, Kommentare und schnelle UI-Abstimmung im Team.',
    longDescription:
      'Figma bleibt ein starker externer Anker fuer visuelle Exploration, Component Thinking und schnelle Abstimmungen. In dieser Liste ist es als Werkzeug verortet, das direkt in Konzept-, Design- und Handoff-Phasen eingreift.',
    category: 'External Tool',
    author: 'Figma',
    softwareArt: 'web',
    tags: ['design', 'ui', 'prototype', 'collaboration'],
    icon: createIcon('F', '#e11d48', '#fff1f2'),
    previewImage: createPreview('Figma', 'External', '#e11d48', '#fda4af', '#fff1f2'),
    href: 'https://www.figma.com/',
    kind: 'external',
  },
  {
    id: 'raycast',
    title: 'Raycast',
    shortDescription: 'Schneller Launcher fuer Shortcuts, Skripte und taegliche Automationen.',
    longDescription:
      'Raycast ist als externer Produktivitaetshebel relevant, wenn du viele kleine Aktionen aus dem Kontext heraus ausloesen willst. In einem Portfolio mit Tool-Fokus passt es gut als Referenz fuer kurze Wege und hohe Bediengeschwindigkeit.',
    category: 'External Tool',
    author: 'Raycast',
    softwareArt: 'desktop',
    tags: ['launcher', 'automation', 'shortcuts', 'productivity'],
    icon: createIcon('R', '#7c3aed', '#f5f3ff'),
    previewImage: createPreview('Raycast', 'External', '#7c3aed', '#c4b5fd', '#f5f3ff'),
    href: 'https://www.raycast.com/',
    kind: 'external',
  },
]
