import { AppState } from "../../types/app-state-types";
import {
  CacheBit,
  CacheBlock,
  DirectionEnum,
} from "../../types/classes-and-enums-types";

const get = (key: string, state: AppState) => {
  const { map, tree, controls, stats } = state;
  const { numOfBlocks } = controls;
  let { numOfHits, numOfMisses } = stats;
  if (!map.has(key)) {
    // cache miss
    addToCache(key, tree.rootNode, map);
    numOfMisses += 1;
  } else {
    // cache hit
    if (map.size === numOfBlocks) navigateToBlock(map.get(key)!, tree.rootNode);
    numOfHits += 1;
  }
  
  return {
    numOfEmptyBlocks: numOfBlocks - map.size,
    numOfMisses: numOfMisses,
    numOfHits: numOfHits,
  };
};

const addToCache = (
  key: string,
  treeRoot: CacheBit,
  map: Map<string, string>
) => {
  const [path, block] = getToLRBlock("", treeRoot);

  // Delete old data and set block key
  map.delete(block.key);
  block.key = key;

  // Add to map
  map.set(key, path);

  navigateToNextLRBlock(map.get(key)!, treeRoot);
};

// Returns the location and the block where the new data should be added
const getToLRBlock: (
  path: string,
  cacheNode: CacheBit | CacheBlock
) => [string, CacheBlock] = (
  path: string,
  cacheNode: CacheBit | CacheBlock
) => {
  if (cacheNode instanceof CacheBlock) return [path, cacheNode];
  if (cacheNode.direction === DirectionEnum.UP)
    return getToLRBlock(`${path}1`, cacheNode.up as CacheBit | CacheBlock);
  return getToLRBlock(`${path}0`, cacheNode.down as CacheBit | CacheBlock);
};

const navigateToNextLRBlock = (path: string, treeRoot: CacheBit) => {
  const pathArr = path.split("").reverse();
  while (parseInt(pathArr[0]) === DirectionEnum.DOWN) pathArr.shift();

  if (!pathArr.length) {
    // Means the current block is the last and move to the very first block
    resetAllToUp(treeRoot);
    return;
  }

  // Toggle the required node
  var toggledNode = getToggledNode(pathArr.length - 1, treeRoot);

  // Make everything on the right of the toggled node point upwards
  if (toggledNode.direction === DirectionEnum.UP)
    resetAllToUp(toggledNode.up as CacheBit);
  else resetAllToUp(toggledNode.down as CacheBit);
};

const resetAllToUp = (node: CacheBit | CacheBlock) => {
  if (node instanceof CacheBlock) return;
  node.direction = DirectionEnum.UP;
  resetAllToUp(node.up as CacheBit | CacheBlock);
  resetAllToUp(node.down as CacheBit | CacheBlock);
};

const getToggledNode = (distance: number, treeRoot: CacheBit) => {
  var node = treeRoot;
  while (distance) {
    if (node.direction === DirectionEnum.UP) node = node.up as CacheBit;
    else node = node.down as CacheBit;
    distance -= 1;
  }
  node.toggleDirection();
  return node;
};

const navigateToBlock = (path: string, treeRoot: CacheBit) => {
  const pathArr = path.split("");
  var node = treeRoot;
  while (pathArr.length) {
    if (parseInt(pathArr.shift()!) === DirectionEnum.UP) {
      node.direction = DirectionEnum.UP;
      node = node.up as CacheBit;
    } else {
      node.direction = DirectionEnum.DOWN;
      node = node.down as CacheBit;
    }
  }

  navigateToNextLRBlock(path, treeRoot);
};

export const Cache = { get };
