import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppQueries } from "../../../../store/queries/app-queries";
import "./map-table.css";
import TableRow from "./table-row";

const MapTable = () => {
  const map = useSelector(AppQueries.getMap);
  const updateHelper = useSelector(AppQueries.getTreeUpdateHelper);

  let cacheKeys: string[] = [];
  useMemo(() => {
    cacheKeys = [];
    const keys = map.keys();
    var k;
    while ((k = keys.next().value)) cacheKeys.push(String(k));
  }, [updateHelper]);
  return (
    <div className="map-table--main-root">
      {cacheKeys.map((key) => (
        <TableRow mapKey={key} path={map.get(key)!} />
      ))}
    </div>
  );
};

export default MapTable;
