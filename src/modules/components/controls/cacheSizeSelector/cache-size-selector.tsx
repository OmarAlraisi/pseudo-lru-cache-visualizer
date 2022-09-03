import { useState } from "react";
import "./cache-size-selector.css";

const CacheSizeSelector = () => {
  const options = [2, 4, 8, 16, 32];

  const [selectedOption, setSelectedOption] = useState(2);
  return (
    <div className="cache-size-selector--main-root">
      <span className="cache-size-selector--label">Cache Size:</span>
      <select
        className="cache-size-selector--selector"
        onChange={(event) => setSelectedOption(parseInt(event.target.value))}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default CacheSizeSelector;
