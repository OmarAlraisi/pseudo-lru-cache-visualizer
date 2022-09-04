import "./App.css";
import CacheTree from "./components/cacheTree/tree";
import CacheMap from "./components/cacheMap/map";
import Controls from "./components/controls/controls";

function App() {
  return (
    <div className="App">
      <Controls />
      <div className="body">
        <CacheTree />
        <CacheMap />
      </div>
    </div>
  );
}

export default App;

/* 

  Controlls:
    + NumberOfBlocks (Powers of 2**)
    + Request Data (KEY)
    + Clear Cache

  Cache Tree:
    + direction="RIGHT"

  =====================================================
  |                       Controlls                   |
  =====================================================
  |                                       |           |
  |                                       |           |
  |                                       |           |
  |               Cache Tree              | Cache Map |
  |                                       |           |
  |                                       |           |
  |                                       |           |
  =====================================================
*/
