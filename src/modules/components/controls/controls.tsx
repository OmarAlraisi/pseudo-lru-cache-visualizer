import "./controls.css";
import DropDown from "./dropdown/dropdown";
import RequestForm from "./requestForm/request-form";

const Controls = () => {
  const handleClearCacheClicked = () => {
    // clear cache from store
  };
  return (
    <div className="controls--main-root">
      <DropDown />
      <RequestForm />
      <button
        className="controls--clear-cache-button"
        onClick={() => handleClearCacheClicked()}
      >
        Crear Cache
      </button>
    </div>
  );
};

export default Controls;

/* 
    Dropdown: 2, 4, 8, 16, 32, 64

    [           ]  (Request)  

    (Clear Cache)
*/
