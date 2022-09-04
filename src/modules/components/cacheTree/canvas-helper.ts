import {
  CacheBit,
  CacheBlock,
  DirectionEnum,
} from "../../../store/types/classes-and-enums-types";

export const createNodes = (treeNodes: (CacheBit | CacheBlock)[]) => {
  const nodes = [];
  let i = 0;
  for (var node of treeNodes) {
    if (node instanceof CacheBit) {
      nodes.push({
        id: `${i}`,
        text: `${node.direction}`,
        height: 65,
        width: 65,
        disabled: true,
      });
    } else {
      nodes.push({
        id: `${i}`,
        text: `${node.key}`,
        height: 65,
        width: 65,
        className: "block-node",
        disabled: true,
      });
    }
    i += 1;
  }
  return nodes;
};

export const createEdges = (
  treeNodes: (CacheBit | CacheBlock)[],
  numOfBlocks: number
) => {
  const edges = [];
  for (var i = 0; i < numOfBlocks - 1; i++) {
    edges.push({
      id: `${i}-${i * 2 + 1}`,
      from: `${i}`,
      to: `${i * 2 + 1}`,
      disabled: true,
      className:
        (treeNodes[i] as CacheBit).direction === DirectionEnum.UP
          ? ""
          : "hide-edge",
    });
    edges.push({
      id: `${i}-${i * 2 + 2}`,
      from: `${i}`,
      to: `${i * 2 + 2}`,
      disabled: true,
      className:
        (treeNodes[i] as CacheBit).direction === DirectionEnum.UP
          ? "hide-edge"
          : "",
    });
  }
  return edges;
};
