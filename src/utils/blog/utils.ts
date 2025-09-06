// Simplified blog utilities for OrbitID landing page
// Blog functionality has been removed, so this is a minimal stub

import { titleCase } from '../formatters'

// Placeholder types for compatibility
export type Post = {
  cover?: any
  'cover-thumb'?: any
}

export type Author = {
  avatar?: any
  records: Record<string, string>
}

export const getPostAssets = (slug: string): Post | undefined => {
  // Return empty since blog functionality is not available
  return undefined
}

export const getAuthorAssets = (name: string): Author | undefined => {
  // Return empty since blog functionality is not available
  return undefined
}

export class AssetNotFoundError extends Error {
  constructor(asset: string) {
    super(`Asset ${asset} not found. Blog functionality is not available in OrbitID landing page.`)
  }
}

const tagMap: Record<string, string> = {
  'ens-v2': 'ENSv2',
  dns: 'DNS',
}

export const formatTag = (tag: string) => {
  return tagMap[tag] || titleCase(tag)
}
