export type ShowcaseKind = 'own' | 'external'
export type Platform = "web" | "desktop" | "mobile-app" | "browser-plugin" | "server" | "cli" | "library"|"other";

export type ShowcaseEntry = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  category: string
  author: string
  platform: Platform
  tags: string[]
  icon?: string
  previewImage?: string
  href?: string
  kind: ShowcaseKind
}
