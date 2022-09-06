import {
  CacheBit,
  CacheBlock,
} from "../../store/types/classes";
import { DirectionEnum } from "../../store/types/constants";

export const createNodes = (treeNodes: (CacheBit | CacheBlock)[]) => {
  const nodes = [];
  let i = 0;
  for (var node of treeNodes) {
    if (node instanceof CacheBit) {
      nodes.push({
        id: `${i}`,
        text: `${node.direction === 1 ? "L" : "R"}`,
        height: 65,
        width: 65,
        disabled: true,
      });
    } else {
      nodes.push({
        id: `${i}`,
        text: `${node.key}`,
        height: 75,
        width: 75,
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
  let lruBlock = -1;
  const edges: {
    id: string;
    from: string;
    to: string;
    disabled: boolean;
    className: string;
  }[] = [];
  for (var i = 0; i < numOfBlocks - 1; i++) {
    edges.push({
      id: `${i}-${i * 2 + 1}`,
      from: `${i}`,
      to: `${i * 2 + 1}`,
      disabled: true,
      className:
        (treeNodes[i] as CacheBit).direction === DirectionEnum.LEFT
          ? i === 0 || edges[i - 1].className === "animate-edge"
            ? "animate-edge"
            : "edge"
          : "hide-edge",
    });
    edges.push({
      id: `${i}-${i * 2 + 2}`,
      from: `${i}`,
      to: `${i * 2 + 2}`,
      disabled: true,
      className:
        (treeNodes[i] as CacheBit).direction === DirectionEnum.LEFT
          ? "hide-edge"
          : i === 0 || edges[i - 1].className === "animate-edge"
          ? "animate-edge"
          : "edge",
    });
  }
  lruBlock =
    treeNodes.length -
    1 -
    edges.reverse().findIndex((e) => e.className === "animate-edge");

  edges.reverse();
  return [edges, lruBlock];
};
