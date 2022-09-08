import "./canvas-key.css";

const CanvasKey = () => {
  return (
    <div className="canvas-key--main-root">
      <div className="canvas-key--container">
        <div className="canvas-key--node cache-bit"></div>
        <span className="canvas-key--title">Direction Node</span>
      </div>
      <div className="canvas-key--container">
        <div className="canvas-key--node cache-block"></div>
        <span className="canvas-key--title">Memory Location</span>
      </div>
      <div className="canvas-key--container">
        <div className="canvas-key--node lru-block"></div>
        <span className="canvas-key--title">LRU location</span>
      </div>
    </div>
  )
};

export default CanvasKey;