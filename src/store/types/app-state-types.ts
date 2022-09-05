import { CacheBit, CacheBlock } from "./classes"

export type AppState = {
  numOfBlocks: number
  map: Map<string, string>,
  tree: TreeState,
  stats: StatsState,
  updateHelper: boolean,
}

export type TreeState = {
  rootNode: CacheBit,
  nodes: (CacheBit | CacheBlock)[],
}

export type StatsState = {
  numOfEmptyBlocks: number,
  numOfMisses: number,
  numOfHits: number,
}