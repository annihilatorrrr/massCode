import type { Language } from '../../renderer/components/editor/types'

export interface Folder {
  id: string
  name: string
  defaultLanguage: Language
  parentId: string
  index: number
  isOpen: boolean
  isSystem: boolean
  createdAt: number
  updatedAt: number
}

export interface SnippetContent {
  label: string
  language: Language
  value: string
}

export interface Snippet {
  id: string
  name: string
  content: SnippetContent[]
  folderId: string
  tagsIds: []
  isFavorites: boolean
  isDeleted: boolean
  createdAt: number
  updatedAt: number
}

export interface Tag {
  id: string
  name: string
  createdAt: number
  updatedAt: number
}

export interface DB {
  folders: Folder[]
  snippets: Snippet[]
  tags: Tag[]
}
