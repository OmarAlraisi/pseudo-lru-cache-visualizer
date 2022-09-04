import "./controls.css";
import CacheSizeSelector from "./cacheSizeSelector/cache-size-selector";
import RequestForm from "./requestForm/request-form";
import { useDispatch } from "react-redux";
import { AppActions } from "../../../store/actions";

const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div className="controls--main-root">
      <CacheSizeSelector />
      <RequestForm />
      <button
        className="controls--clear-cache-button"
        onClick={() => dispatch(AppActions.controlsActions.clearCache())}
      >
        Clear
      </button>
    </div>
  );
};

export default Controls;
