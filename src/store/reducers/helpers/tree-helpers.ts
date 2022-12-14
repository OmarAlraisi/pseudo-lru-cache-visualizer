import { CacheBlock, CacheBit } from "../../types/classes";

const constructTree = (level: number) => {
  if (!level) return new CacheBlock();

  const cacheBit = new CacheBit();
  cacheBit.left= constructTree(level - 1);
  cacheBit.right = constructTree(level - 1);
  return cacheBit;
}

// bfs
const constructNodesArray = (root: CacheBit) => {
  const nodes = [],
    queue = [];

  queue.push(root);

  while (queue.length) {
    var curr = queue.shift() as CacheBit | CacheBlock;

    if (curr instanceof CacheBit) {
      queue.push(curr.left);
      queue.push(curr.right);
    }

    nodes.push(curr);
  }

  return nodes;
}

export const constructTreeState = (level: number) => {
  const root = constructTree(level) as CacheBit;
  const nodes = constructNodesArray(root as CacheBit);
  return nodes;
}