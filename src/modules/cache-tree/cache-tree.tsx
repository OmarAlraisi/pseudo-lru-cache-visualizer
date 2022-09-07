
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Arrow,
  Canvas,
  CanvasRef,
  Edge,
  EdgeData,
  Label,
  MarkerArrow,
  Node,
  NodeData,
} from "reaflow";
import { Queries } from "../../store/queries/app-queries";
import { createEdges, createNodes } from "./canvas-helper";
import CanvasController from "./controller/canvas-controller";
import "./cache-tree.css"

const CacheTree = () => {
  let nodes: NodeData[] = [],
    edges: EdgeData[] = [];

  const numOfBlocks = useSelector(Queries.getNumOfBlocks),
    updateHelper = useSelector(Queries.getUpdateHelper),
    treeNodes = useSelector(Queries.getTreeNodes);
  
  const ref = useRef<CanvasRef | null>(null);

  useMemo(() => {
    nodes = createNodes(treeNodes);
    let lruBlock = -1;
    [edges, lruBlock] = createEdges(treeNodes, numOfBlocks) as [
      EdgeData<any>[],
      number
    ];
    nodes[lruBlock].className = "lru-block-node";
  }, [updateHelper, treeNodes]);

  useMemo(() => {
    setTimeout(() => ref.current?.fitCanvas?.(), 150);
  }, [numOfBlocks]);

  /** Handlers */
  const canvasFitHandler = () => ref.current?.fitCanvas?.();
  const canvasZoomInHandler = () => ref.current?.zoomIn?.();
  const canvasZoomOutHandler = () => ref.current?.zoomOut?.();

  return (
    <div className="cache-tree--main-root">
      <CanvasController fitHandler={canvasFitHandler} zoomInHandler={canvasZoomInHandler} zoomOutHandler={canvasZoomOutHandler}/>
      <div>
        <Canvas
          direction="DOWN"
          maxWidth={window.innerWidth - window.innerWidth * 0.3}
          maxHeight={window.innerHeight - 125}
          fit={true}
          zoomable={false}
          minZoom={-0.77}
          nodes={nodes}
          edges={edges}
          ref={ref}
          node={
            <Node
              label={<Label style={{ fill: "#F4EBD9" }} />}
            />
          }
          arrow={<MarkerArrow style={{ fill: '#A39A92' }} />}
        />
      </div>
    </div>
  );
};

export default CacheTree;
