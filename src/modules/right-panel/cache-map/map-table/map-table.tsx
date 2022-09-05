import { useSelector } from "react-redux";
import { Queries } from "../../../../store/queries/app-queries";
import TableRow from "./table-row";
import "./map-table.css";

const MapTable = () => {
  const cacheKeys = useSelector(Queries.getMapKeys);

  return (
    <div className="map-table--main-root">
      {cacheKeys.map((key, index) => (
        <TableRow mapKey={key} key={`map-table--row--at-${index}`} />
      ))}
    </div>
  );
};

export default MapTable;
