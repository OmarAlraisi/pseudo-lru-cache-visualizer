import CacheSizeSelector from "./cache-size-selector/cache-size-selector";
import RequestForm from "./request-form/request-form";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/actions";
import "./controls.css";

const ClearCacheButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="controls--clear-cache-button"
      onClick={() => dispatch(Actions.clearCache())}
    >
      Clear Cache
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
