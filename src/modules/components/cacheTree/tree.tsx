import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Canvas, CanvasRef, EdgeData, NodeData } from "reaflow";
import { AppQueries } from "../../../store/queries/app-queries";
import { createEdges, createNodes } from "./canvas-helper";
import "./tree.css";

const CacheTree = () => {
  let nodes: NodeData[] = [],
    edges: EdgeData[] = [];

  const numOfBlocks = useSelector(AppQueries.getNumOfBlocks),
    updateHelper = useSelector(AppQueries.getTreeUpdateHelper),
    treeNodes = useSelector(AppQueries.getTreeNodes);

  useMemo(() => {
    nodes = createNodes(treeNodes);
    edges = createEdges(treeNodes, numOfBlocks);
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
          maxWidth={window.innerWidth - window.innerWidth * 0.3} // TODO: make dynamic
          maxHeight={window.innerHeight - 120}
          fit={true}
          minZoom={-0.95}
          nodes={nodes}
          edges={edges}
          ref={ref}
        />
      </div>
    </div>
  );
};

export default CacheTree;
