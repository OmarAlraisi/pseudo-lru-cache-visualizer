import { Canvas } from 'reaflow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas
        direction="RIGHT"
        maxWidth={800}
        maxHeight={600}
        nodes={[
          {
            id: '1',
            text: '1',
            disabled: true
          },
          {
            id: '2',
            text: '2',
            disabled: true
          },
          {
            id: '3',
            text: '3',
            disabled: true
          },
          {
            id: '4',
            text: '4',
            disabled: true
          },
          {
            id: '5',
            text: '5',
            className: "block-node",
            disabled: true
          },
          {
            id: '6',
            text: '6',
            className: "block-node",
            disabled: true
          },
          {
            id: '7',
            text: '7',
            className: "block-node",
            disabled: true
          }
        ]}
        edges={[
          {
            id: '1-2',
            from: '1',
            to: '2',
            disabled: true
          },
          {
            id: '1-3',
            from: '1',
            to: '3',
            className: "hide-edge",
            disabled: true
          },
          {
            id: '2-4',
            from: '2',
            to: '4',
            disabled: true
          },
          {
            id: '2-5',
            from: '2',
            to: '5',
            className: "hide-edge",
            disabled: true
          },
          {
            id: '3-6',
            from: '3',
            to: '6',
            disabled: true
          },
          {
            id: '3-7',
            from: '3',
            to: '7',
            className: "hide-edge",
            disabled: true
          }
        ]}
      />
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