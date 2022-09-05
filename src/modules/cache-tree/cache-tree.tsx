
import { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Canvas,
  CanvasRef,
  EdgeData,
  Label,
  Node,
  NodeData,
} from "reaflow";
import { AppQueries } from "../../store/queries/app-queries";
import { createEdges, createNodes } from "./canvas-helper";
import "./cache-tree.css"

const CacheTree = () => {
  let nodes: NodeData[] = [],
    edges: EdgeData[] = [];

  const numOfBlocks = useSelector(AppQueries.getNumOfBlocks),
    updateHelper = useSelector(AppQueries.getUpdateHelper),
    treeNodes = useSelector(AppQueries.getTreeNodes);

  useMemo(() => {
    nodes = createNodes(treeNodes);
    let lruBlock = -1;
    [edges, lruBlock] = createEdges(treeNodes, numOfBlocks) as [
      EdgeData<any>[],
      number
    ];
    nodes[lruBlock].className += " lru-block-node";
  }, [updateHelper, treeNodes]);

  useEffect(() => {
    window.addEventListener("resize", () => {});
  });

  const ref = useRef<CanvasRef | null>(null);

  useMemo(() => {
    setTimeout(() => ref.current?.fitCanvas?.(), 150);
  }, [numOfBlocks]);

  return (
    <div className="cache-tree--main-root">
      <div>
        <Canvas
          direction="RIGHT"
          maxWidth={window.innerWidth - window.innerWidth * 0.3}
          maxHeight={window.innerHeight - 120}
          fit={true}
          minZoom={-0.95}
          nodes={nodes}
          edges={edges}
          ref={ref}
          node={
            <Node
              className="node"
              label={<Label style={{ fill: "black" }} />}
            />
          }
        />
      </div>
    </div>
  );
};

export default CacheTree;
