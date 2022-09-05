import { useSelector } from "react-redux";
import { AppQueries } from "../../../../store/queries/app-queries";
import { useMemo } from "react";
import TableRow from "./table-row";
import "./map-table.css";

const MapTable = () => {
  const map = useSelector(AppQueries.getMap);
  const updateHelper = useSelector(AppQueries.getUpdateHelper);

  let cacheKeys: string[] = [];
  useMemo(() => cacheKeys = Array.from(map.keys()), [updateHelper]);

  return (
    <div className="map-table--main-root">
      {cacheKeys.map((key, index) => (
        <TableRow mapKey={key} path={map.get(key)!} key={`map-table--row--at-${index}`} />
      ))}
    </div>
  );
};

export default MapTable;
