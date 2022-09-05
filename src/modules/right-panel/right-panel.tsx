import CacheStats from "./cache-stats/cache-stats";
import CacheMap from "./cache-map/cache-map";
import "./right-panel.css";

const RightPanel = () => {
  return (
    <div className="right-panel--main-root">
      <CacheStats />
      <CacheMap />
    </div>
  )
};

export default RightPanel;