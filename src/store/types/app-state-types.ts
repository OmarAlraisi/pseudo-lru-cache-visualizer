import { CacheBit, CacheBlock } from "./classes"

export type AppState = {
  numOfBlocks: number
  map: Map<string, string>,
  treeNodes: (CacheBit | CacheBlock)[],
  stats: StatsState,
  updateHelper: boolean,
}

export type StatsState = {
  numOfEmptyBlocks: number,
  numOfMisses: number,
  numOfHits: number,
}