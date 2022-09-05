import CacheSizeSelector from "./cache-size-selector/cache-size-selector";
import RequestForm from "./request-form/request-form";
import { useDispatch } from "react-redux";
import { AppActions } from "../../store/actions";
import "./controls.css";

const ClearCacheButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="controls--clear-cache-button"
      onClick={() => dispatch(AppActions.controlsActions.clearCache())}
    >
      Clear Memory
    </button>
  )
}

const Controls = () => {
  return (
    <div className="controls--main-root">
      <CacheSizeSelector />
      <RequestForm />
      <ClearCacheButton />
    </div>
  );
};

export default Controls;
