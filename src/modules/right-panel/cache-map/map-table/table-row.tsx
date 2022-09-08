import classNames from "classnames";
import { useSelector } from "react-redux";
import { Queries } from "../../../../store/queries/app-queries";
import { AppState } from "../../../../store/types/app-state-types";
import "./map-table.css";

interface TableRowProps {
  mapKey: string;
  className?: string;
}

const TableRow = ({ mapKey, className }: TableRowProps) => {
  const path = useSelector((state: {app: AppState}) => Queries.getMapValueByKey(state, mapKey));
  return (
    <div className={classNames("table-row--main-root", className)}>
      <div className="table-row--column key">
        <span className="table-row--column--key-text">{mapKey}</span>
      </div>
      <span className="table-row--column--separator">:</span>
      <div className="table-row--column value">
        <span className="value-text path">
          {className 
            ? "Path to Key"
            : path
              ? path === "Tree Path"
                ? path 
                : path.split("").join(" – ").replaceAll("1", "L").replaceAll("0", "R")
              : ""
          }
        </span>
      </div>
    </div>
  );
};

export default TableRow;
