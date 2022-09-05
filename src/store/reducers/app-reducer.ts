import { handleActions } from "redux-actions";
import { controlsActions } from "../actions/controls-action";
import { Cache } from "./helpers/cache-logic";
import { constructTreeState } from "./helpers/tree-helpers";
import { AppState, TreeState } from "../types/app-state-types";

const createAppState = (numOfBlocks: number) => {
  return {
    numOfBlocks: numOfBlocks,
    map: new Map<string, string>(),
    tree: constructTreeState(Math.log2(numOfBlocks)) as TreeState,
    stats: {
      numOfEmptyBlocks: numOfBlocks,
      numOfMisses: 0,
      numOfHits: 0,
    },
    updateHelper: true
  }
}

const initAppState = createAppState(2);

const { setCacheBlockSize, getRequest, clearCache } = controlsActions;

export default handleActions<AppState, any> ({
  [setCacheBlockSize.toString()] (
    _,
    {payload}: ReturnType<typeof setCacheBlockSize>
  ) {
    const { numOfBlocks } = payload;
    return createAppState(numOfBlocks);
  },
  [getRequest.toString()] (
    state,
    {payload}: ReturnType<typeof getRequest>
  ) {
    const { key } = payload;
    const stats = Cache.get(key, state);
    return {
      ...state,
      stats: stats,
      updateHelper: !state.updateHelper,
    };
  },
  [clearCache.toString()] (
    state
  ) {
    return createAppState(state.numOfBlocks);
  },
}, initAppState);