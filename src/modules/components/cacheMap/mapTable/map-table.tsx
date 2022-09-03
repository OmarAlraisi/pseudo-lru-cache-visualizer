import { useMemo } from "react";
import "./map-table.css";
import TableRow from "./table-row";

const MapTable = () => {
  const cache = new Map<String, String>();
  cache.set("CA", "11");
  cache.set("WY", "10");
  cache.set("SC", "01");
  cache.set("NY", "00");
  cache.set("CB", "11");
  cache.set("WZ", "10");
  cache.set("SD", "01");
  cache.set("NZ", "00");

  let cacheKeys: string[] = [];
  useMemo(() => {
    cacheKeys = [];
    const keys = cache.keys();
    var k;
    while ((k = keys.next().value)) cacheKeys.push(String(k));
  }, [cache]);
  return (
    <div className="map-table--main-root">
      {cacheKeys.map((key) => (
        <TableRow mapKey={key} path={cache.get(key)!} />
      ))}
    </div>
  );
};

export default MapTable;
