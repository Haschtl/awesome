export type ShowcaseKind = 'own' | 'external'
export type SoftwareArt = 'web' | 'desktop' | 'mobile-app' | 'browser-plugin'

export type ShowcaseEntry = {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  category: string
  author: string
  softwareArt: SoftwareArt
  tags: string[]
  icon: string
  previewImage: string
  href: string
  kind: ShowcaseKind
}
