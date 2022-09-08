import TableRow from "./map-table/table-row";
import MapTable from "./map-table/map-table";
import "./cache-map.css";

const CacheMap = () => {
  return (
    <div className="cache-map--main-root">
      <TableRow mapKey="Key" className="header" />
      <MapTable />
    </div>
  );
};

export default CacheMap;
