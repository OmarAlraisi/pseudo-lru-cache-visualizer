// redux imports
import { combineReducers } from "redux";
import appReducer from "./app-reducer";

// Create a root reducer that combines all reducers
const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
