import "./dropdown.css";
import classNames from "classnames";
import ChevronDownIcon from "../../../assets/chevron-down-icon";
import { useState } from "react";

const BlockSeelector = () => {
  const [extended, toggleExtended] = useState(false);
  const [onLoad, setOnLoadToFalse] = useState(true);
  const [numberofBlocks, setNumberOfBlocks] = useState(2);

  const renderOptions = () => {
    return (
      <div className="block-selector--options">
        {[2, 4, 8, 16, 32].map((option) => {
          return (
            numberofBlocks !== option && (
              <div
                className="block-selector--options-choice"
                onClick={() => setNumberOfBlocks(option)}
              >
                <span className="block-selector--options-choice--text">
                  {option}
                </span>
              </div>
            )
          );
        })}
      </div>
    );
  };
  return (
    <div className="block-selector--main-root">
      <span className="block-selector--label">Number of Blocks: </span>
      <div
        className={classNames("block-selector--dropdown", "", {
          extended: extended,
          unextended: !extended && !onLoad,
        })}
        onClick={() => {
          toggleExtended(!extended);
          setOnLoadToFalse(false);
        }}
      >
        <div className="block-selector--selected-option">
          <span className="selected-option--text">{numberofBlocks}</span>
          <ChevronDownIcon
            color="black"
            width={30}
            height={30}
            className={classNames("block-selector--icon", {
              extended: extended,
              unextended: !extended && !onLoad,
            })}
          />
        </div>
        {renderOptions()}
      </div>
    </div>
  );
};

export default BlockSeelector;
