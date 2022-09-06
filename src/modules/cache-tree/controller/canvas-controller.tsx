import "./canvas-controller.css";

interface CanvasControllerProps {
  fitHandler: () => void;
  zoomInHandler: () => void;
  zoomOutHandler: () => void;
}

const CanvasController = ({ fitHandler, zoomInHandler, zoomOutHandler }: CanvasControllerProps) => {
  return (
    <div className="canvas-controller--main-root">
      <button className="canvas-controller--fit-button" onClick={fitHandler}>Fit Canvas</button>
      <div className="canvas-controller--zoom-controllers">
        <span className="zoom-controller--text">Zoom:</span>
        <button className="zoom-controller--button" onClick={zoomOutHandler}>-</button>
        <button className="zoom-controller--button" onClick={zoomInHandler}>+</button>
      </div>
    </div>
  )
}

export default CanvasController;