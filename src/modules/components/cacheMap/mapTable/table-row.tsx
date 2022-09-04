import classNames from "classnames";
import "./map-table.css";

interface TableRowProps {
  mapKey: String;
  data?: String;
  path: String;
  className?: String;
}

const TableRow = ({ mapKey, data = "...", path, className }: TableRowProps) => {
  return (
    <div className={classNames("table-row--main-root", className)}>
      <div className="table-column key">{mapKey}</div>
      <span className="table-column--separator">:</span>
      <div className="table-column value">
        <span className="value-text path">
          {path === "Tree Path" ? path : path.split("").join(" – ")}
        </span>
        <span className="value-text data">{data}</span>
      </div>
    </div>
  );
};

export default TableRow;
