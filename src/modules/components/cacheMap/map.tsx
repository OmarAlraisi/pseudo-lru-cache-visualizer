import { useSelector } from "react-redux";
import { AppQueries } from "../../../store/queries/app-queries";
import "./map.css";
import MapTable from "./mapTable/map-table";
import TableRow from "./mapTable/table-row";

const CacheMap = () => {
  const { numOfEmptyBlocks, numOfHits, numOfMisses } = useSelector(
    AppQueries.getStats
  );
  const renderStats = () => {
    return (
      <div className="cache-map--stats">
        <div className="cache-map--stats--row">
          <span className="stats--row--label">Empty Blocks</span>
          <span className="stats--row--data">{numOfEmptyBlocks}</span>
        </div>

        <div className="cache-map--stats--row">
          <span className="stats--row--label">Total Hits</span>
          <span className="stats--row--data">{numOfHits}</span>
        </div>

        <div className="cache-map--stats--row">
          <span className="stats--row--label">Total Misses</span>
          <span className="stats--row--data">{numOfMisses}</span>
        </div>

        <div className="cache-map--stats--row">
          <span className="stats--row--label">{`${
            ((numOfHits / (numOfHits + numOfMisses)) * 100) | 0
          }% Hits`}</span>
          <span className="stats--row--label">{`${
            ((numOfMisses / (numOfHits + numOfMisses)) * 100) | 0
          }% Misses`}</span>
        </div>
      </div>
    );
  };
  return (
    <div className="cache-map--main-root">
      {renderStats()}
      <TableRow mapKey="Key" path="Tree Path" data="Data" className="header" />
      <MapTable />
    </div>
  );
};

export default CacheMap;
