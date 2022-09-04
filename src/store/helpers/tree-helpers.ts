import { CacheBlock, CacheBit } from "../types/classes-and-enums-types";

export const constructTree = (level: number) => {
  if (!level) return new CacheBlock();

  const cacheBit = new CacheBit();
  cacheBit.up = constructTree(level - 1);
  cacheBit.down = constructTree(level - 1);
  return cacheBit;
}

// bfs
export const constructNodesArray = (root: CacheBit) => {
  const nodes = [],
    queue = [];

  queue.push(root);

  while (queue.length) {
    var curr = queue.shift() as CacheBit | CacheBlock;

    if (curr instanceof CacheBit) {
      queue.push(curr.up);
      queue.push(curr.down);
    }

    nodes.push(curr);
  }

  return nodes;
}

export const constructTreeState = (level: number) => {
  const root = constructTree(level) as CacheBit;
  const nodes = constructNodesArray(root as CacheBit);
  return {
    rootNode: root,
    nodes: nodes,
    updateHelper: true,
  }
}