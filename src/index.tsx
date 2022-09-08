import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./modules/App";
import InvalidScreen from "./modules/invalid-screen";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <InvalidScreen />
    </Provider>
  </React.StrictMode>
);
