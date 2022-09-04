import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppActions } from "../../../../store/actions";
import "./cache-size-selector.css";

const CacheSizeSelector = () => {

  const dispatch = useDispatch();

  const options = [2, 4, 8, 16, 32];

  const [selectedOption, setSelectedOption] = useState(2);
  return (
    <div className="cache-size-selector--main-root">
      <span className="cache-size-selector--label">Cache Size:</span>
      <select
        className="cache-size-selector--selector"
        onChange={(event) => dispatch(AppActions.controlsActions.setCacheBlockSize(parseInt(event.target.value)))}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CacheSizeSelector;
