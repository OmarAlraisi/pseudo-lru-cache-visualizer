import { useState } from "react";
import "./map.css";
import MapTable from "./mapTable/map-table";
import TableRow from "./mapTable/table-row";

const CacheMap = () => {
  const [emptyBlocks, setEmptyBlocks] = useState(4);
  const statsLabels = [
    "Empty Blocks",
    "Total Misses",
    "Miss Percentage",
    "Total Hits",
    "Hit Percentage",
  ];
  const renderStats = () => {
    return (
      <div className="cache-map--stats">
        {statsLabels.map((label, index) => {
          return (
            <div className="cache-map--stats--row">
              <span className="stats--row--label">{label}</span>
              <span className="stats--row--data">{index + 1}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="cache-map--main-root">
      {renderStats()}
      <TableRow mapKey="Key" path="Graph Path" data="Data" className="header" />
      <MapTable />
    </div>
  );
};

export default CacheMap;
