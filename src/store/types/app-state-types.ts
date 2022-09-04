import { CacheBit, CacheBlock } from "./classes-and-enums-types"

export type AppState = {
  controls: ControlsState,
  map: Map<string, string>,
  tree: TreeState,
  stats: StatsState,
}

export type ControlsState = {
  numOfBlocks: number,
}

export type TreeState = {
  rootNode: CacheBit,
  nodes: (CacheBit | CacheBlock)[],
  updateHelper: boolean,
}

export type StatsState = {
  numOfEmptyBlocks: number,
  numOfMisses: number,
  numOfHits: number,
}

