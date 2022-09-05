import { useDispatch } from "react-redux";
import { Actions } from "../../../store/actions";
import { NumberOfBlocksOptions } from "../../../store/types/constants";
import "./cache-size-selector.css";

const Selector = () => {
  const dispatch = useDispatch();
  return (
    <select
      className="cache-size-selector--selector"
      onChange={(event) => dispatch(Actions.setCacheBlockSize(parseInt(event.target.value)))}
    >
      {NumberOfBlocksOptions.map((option, index) => (
        <option value={option} key={`cache-size-selector--selector--option${index}`}>{option}</option>
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
