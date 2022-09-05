import { useDispatch } from "react-redux";
import { AppActions } from "../../../store/actions";
import "./cache-size-selector.css";

const Selector = () => {
  const dispatch = useDispatch();
  const options = [2, 4, 8, 16, 32]; // TODO: Move to store
  return (
    <select
      className="cache-size-selector--selector"
      onChange={(event) => dispatch(AppActions.controlsActions.setCacheBlockSize(parseInt(event.target.value)))}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}

const CacheSizeSelector = () => {
  return (
    <div className="cache-size-selector--main-root">
      <span className="cache-size-selector--label">Cache Size:</span>
      <Selector />
    </div>
  );
};

export default CacheSizeSelector;
