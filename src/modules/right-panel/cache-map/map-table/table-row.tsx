import classNames from "classnames";
import { useSelector } from "react-redux";
import { Queries } from "../../../../store/queries/app-queries";
import { AppState } from "../../../../store/types/app-state-types";
import "./map-table.css";

interface TableRowProps {
  mapKey: string;
  data?: string;
  className?: string;
}

const TableRow = ({ mapKey, data = "...", className }: TableRowProps) => {
  const path = useSelector((state: {app: AppState}) => Queries.getMapValueByKey(state, mapKey));
  return (
    <div className={classNames("table-row--main-root", className)}>
      <div className="table-row--column key">{mapKey}</div>
      <span className="table-row--column--separator">:</span>
      <div className="table-row--column value">
        <span className="value-text path">
          {className 
            ? "Path to Key"
            : path
              ? path === "Tree Path"
                ? path 
                : path.split("").join(" – ").replaceAll("1", "U").replaceAll("0", "D")
              : ""
          }
        </span>
        <span className="value-text data">{data}</span>
      </div>
    </div>
  );
};

export default TableRow;
