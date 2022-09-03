import "./controls.css";
import CacheSizeSelector from "./cacheSizeSelector/cache-size-selector";
import RequestForm from "./requestForm/request-form";

const Controls = () => {
  const handleResetClicked = () => {
    // clear cache from store
  };
  return (
    <div className="controls--main-root">
      <CacheSizeSelector />
      <RequestForm />
      <button
        className="controls--clear-cache-button"
        onClick={() => handleResetClicked()}
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
