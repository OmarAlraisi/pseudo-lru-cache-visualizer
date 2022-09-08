import classNames from "classnames";
import { useSelector } from "react-redux";
import { Queries } from "../../../../store/queries/app-queries";
import { State } from "../../../../store/reducers";
import "./map-table.css";

interface TableRowProps {
  mapKey: string;
  className?: string;
}

const TableRow = ({ mapKey, className }: TableRowProps) => {
  const path = useSelector(
    (state: State) => Queries.getMapValueByKey(state, mapKey)
  );
  const getPathText = () => {
    if (className) return "Pointer Path";
    if (!path) return "";
    return path.split("").join(" - ").replaceAll("1", "L").replaceAll("0", "R");
  }

  return (
    <div className={classNames("table-row--main-root", className)}>
      <div className="table-row--column key">
        <span className="table-row--column--key-text">{mapKey}</span>
      </div>
      <span className="table-row--column--separator">:</span>
      <div className="table-row--column value">
        <span className="value-text path">{getPathText()}</span>
      </div>
    </div>
  );
};

export default TableRow;
