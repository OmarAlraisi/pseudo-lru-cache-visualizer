// redux imports
import { combineReducers } from "redux";

// Create a root reducer that combines all reducers
const rootReducer = combineReducers({});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
