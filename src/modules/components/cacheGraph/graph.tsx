import { Canvas } from "reaflow";
import "./graph.css";

const CacheGraph = () => {
  return (
    <div className="cache-graph">
      <div>
        <Canvas
          direction="RIGHT"
          maxWidth={800}
          maxHeight={600}
          nodes={[
            // Bit Nodes
            {
              id: "1",
              text: "1",
              height: 65,
              width: 65,
              disabled: true,
            },
            {
              id: "2",
              text: "2",
              height: 65,
              width: 65,
              disabled: true,
            },
            {
              id: "3",
              text: "3",
              height: 65,
              width: 65,
              disabled: true,
            },

            // Cache Blocks Nodes
            {
              id: "4",
              text: "block-1",
              height: 80,
              width: 80,
              className: "block-node",
              disabled: true,
            },
            {
              id: "5",
              text: "block-2",
              height: 80,
              width: 80,
              className: "block-node",
              disabled: true,
            },
            {
              id: "6",
              text: "block-3",
              height: 80,
              width: 80,
              className: "block-node",
              disabled: true,
            },
            {
              id: "7",
              text: "block-4",
              height: 80,
              width: 80,
              className: "block-node",
              disabled: true,
            },
          ]}
          edges={[
            {
              id: "1-2",
              from: "1",
              to: "2",
              disabled: true,
            },
            {
              id: "1-3",
              from: "1",
              to: "3",
              className: "hide-edge",
              disabled: true,
            },
            {
              id: "2-4",
              from: "2",
              to: "4",
              disabled: true,
            },
            {
              id: "2-5",
              from: "2",
              to: "5",
              className: "hide-edge",
              disabled: true,
            },
            {
              id: "3-6",
              from: "3",
              to: "6",
              disabled: true,
            },
            {
              id: "3-7",
              from: "3",
              to: "7",
              className: "hide-edge",
              disabled: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CacheGraph;
