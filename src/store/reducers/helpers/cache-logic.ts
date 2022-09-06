import { AppState } from "../../types/app-state-types";
import { CacheBit, CacheBlock } from "../../types/classes";
import { DirectionEnum } from "../../types/constants";

// This is the only method that is called from outside this file, it takes in the key of the requested data and the state and returns the stats after perforimng this request
const get = (key: string, state: AppState) => {
  const { map, treeNodes, numOfBlocks, stats } = state;
  let { numOfHits, numOfMisses } = stats;

  if (!map.has(key)) {
    // Cache miss
    addToCache(key, treeNodes[0] as CacheBit, map);
    numOfMisses += 1;
  } else {
    // Cache hit
    if (map.size === numOfBlocks)
      navigateToBlock(map.get(key)!, treeNodes[0] as CacheBit);
    numOfHits += 1;
  }

  return {
    numOfEmptyBlocks: numOfBlocks - map.size,
    numOfMisses: numOfMisses,
    numOfHits: numOfHits,
  };
};

// Called on cache misses to add the requested key to the cache
const addToCache = (
  key: string,
  treeRoot: CacheBit,
  map: Map<string, string>
) => {
  const [path, block] = getToLRBlock("", treeRoot);

  // Evict old data
  map.delete(block.key);
  block.key = key;

  // Add to map
  map.set(key, path);

  navigateToNextLRBlock(map.get(key)!, treeRoot);
};

// Returns the path and the block where the new data should be entered
const getToLRBlock: (
  path: string,
  cacheNode: CacheBit | CacheBlock
) => [string, CacheBlock] = (
  path: string,
  cacheNode: CacheBit | CacheBlock
) => {
  if (cacheNode instanceof CacheBlock) return [path, cacheNode];
  if (cacheNode.direction === DirectionEnum.LEFT)
    return getToLRBlock(`${path}1`, cacheNode.left as CacheBit | CacheBlock);
  return getToLRBlock(`${path}0`, cacheNode.right as CacheBit | CacheBlock);
};

// After adding the new data this is called to move the pointer to the next block
const navigateToNextLRBlock = (path: string, treeRoot: CacheBit) => {
  const pathArr = path.split("").reverse();
  while (parseInt(pathArr[0]) === DirectionEnum.RIGHT) pathArr.shift();

  // Last block
  if (!pathArr.length) {
    resetAllToLeft(treeRoot);
    return;
  }

  // Toggle the required node and get it
  var toggledNode = getToggledNode(pathArr.length - 1, treeRoot);

  // Reset new path
  if (toggledNode.direction === DirectionEnum.LEFT)
    resetAllToLeft(toggledNode.left as CacheBit);
  else resetAllToLeft(toggledNode.right as CacheBit);
};

// Reset all subtree nodes to up
const resetAllToLeft = (node: CacheBit | CacheBlock) => {
  if (node instanceof CacheBlock) return;
  node.direction = DirectionEnum.LEFT;
  resetAllToLeft(node.left as CacheBit | CacheBlock);
  resetAllToLeft(node.right as CacheBit | CacheBlock);
};

// Finds the target bit where we need to toggle direction, toggles its direction, and returns it
const getToggledNode = (distance: number, treeRoot: CacheBit) => {
  var node = treeRoot;
  while (distance) {
    if (node.direction === DirectionEnum.LEFT) node = node.left as CacheBit;
    else node = node.right as CacheBit;
    distance -= 1;
  }
  node.toggleDirection();
  return node;
};

// Called on cache hits; Navigates to the with existing key and then moves to the next one.
const navigateToBlock = (path: string, treeRoot: CacheBit) => {
  var node = treeRoot;
  for (var dir of path) {
    // while (pathArr.length) {
    if (parseInt(dir) === DirectionEnum.LEFT) {
      node.direction = DirectionEnum.LEFT;
      node = node.left as CacheBit;
    } else {
      node.direction = DirectionEnum.RIGHT;
      node = node.right as CacheBit;
    }
  }

  navigateToNextLRBlock(path, treeRoot);
};

export const Cache = { get };
