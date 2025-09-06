// Simplified search utilities for OrbitID landing page
// Blog functionality has been removed, so this is a minimal stub

export type MatchesPosition = { start: number; length: number }[]

export type SearchEntry = {
  slug: string
  title: string
  description: string
  _formatted: {
    content: string
    slug: string
    title: string
    description: string
  }
  _matchesPosition: {
    content: MatchesPosition
    slug: MatchesPosition
    title: MatchesPosition
    description: MatchesPosition
  }
}

export type SearchResult = {
  estimatedTotalHits: number
  hits: SearchEntry[]
  limit: number
  offset: number
  processingTimeMs: number
}

// Placeholder search function for OrbitID landing page
export const getSearchResults = async (
  query: string,
): Promise<SearchResult> => {
  // Return empty results since blog functionality is not available
  return {
    hits: [],
    estimatedTotalHits: 0,
    limit: 0,
    offset: 0,
    processingTimeMs: 0,
  }
}

// Placeholder metadata function 
export const fetchPostMetadata = async (slug: string) => {
  // Return empty metadata since blog functionality is not available
  return {}
}
