import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Canvas, EdgeData, NodeData } from "reaflow";
import { AppQueries } from "../../../store/queries/app-queries";
import { createEdges, createNodes } from "./canvas-helper";
import "./tree.css";

const CacheTree = () => {

  let nodes: ({ id: string; text: string; height: number; width: number; disabled: boolean; className?: undefined; } | { id: string; text: string; height: number; width: number; className: string; disabled: boolean; })[] | NodeData<any>[] | undefined = [],
      edges: { id: string; from: string; to: string; disabled: boolean; className: string; }[] | EdgeData<any>[] | undefined = [];
  const numOfBlocks = useSelector(AppQueries.getNumOfBlocks),
        updateHelper = useSelector(AppQueries.getTreeUpdateHelper),
        treeNodes = useSelector(AppQueries.getTreeNodes);

  useMemo(() => {
    nodes = createNodes(treeNodes);
    edges = createEdges(treeNodes, numOfBlocks);
  }, [updateHelper, treeNodes]);

  return (
    <div className="cache-tree">
      <div>
        <Canvas
          direction="RIGHT"
          maxWidth={800} // TODO: make dynamic
          maxHeight={600} // same
          fit={true}
          minZoom={-0.95}
          nodes={nodes}
          edges={edges}
        />
      </div>
    </div>
  );
};

export default CacheTree;