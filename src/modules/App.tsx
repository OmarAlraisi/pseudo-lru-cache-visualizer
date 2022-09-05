import CacheTree from "./cache-tree/cache-tree";
import Controls from "./controls/controls";
import RightPanel from "./right-panel/right-panel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Controls />
      <div className="body">
        <CacheTree />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
