// redux imports
import { identity } from "lodash";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

// Reducers import
import rootReducer from "./reducers";

// Create enhancers => To display app state on redux debugger
let reactDevTool = identity;
reactDevTool =
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ ?
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;
const enhancers = [applyMiddleware(thunk), reactDevTool];
const enhancer = compose(...enhancers);

// create a store
export const store = createStore(rootReducer, {}, enhancer as any);
