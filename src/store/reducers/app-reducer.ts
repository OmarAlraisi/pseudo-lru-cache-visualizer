import { handleActions } from "redux-actions";
import { Cache } from "./helpers/cache-logic";
import { constructTreeState } from "./helpers/tree-helpers";
import { AppState } from "../types/app-state-types";
import { Actions } from "../actions";

const createAppState = (numOfBlocks: number) => {
  return {
    numOfBlocks: numOfBlocks,
    map: new Map<string, string>(),
    treeNodes: constructTreeState(Math.log2(numOfBlocks)),
    stats: {
      numOfEmptyBlocks: numOfBlocks,
      numOfMisses: 0,
      numOfHits: 0,
    },
    updateHelper: true
  }
}

const initAppState = createAppState(2);

const { setCacheBlockSize, sendRequest, clearCache } = Actions;

export default handleActions<AppState, any> ({
  [setCacheBlockSize.toString()] (
    _,
    {payload}: ReturnType<typeof setCacheBlockSize>
  ) {
    const { numOfBlocks } = payload;
    return createAppState(numOfBlocks);
  },
  [sendRequest.toString()] (
    state,
    {payload}: ReturnType<typeof sendRequest>
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