import { handleActions } from "redux-actions";
import { controlsActions } from "../actions/controls-action";
import { constructTreeState } from "../helpers/tree-helpers";
import { AppState, TreeState } from "../types/app-state-types";

const createAppState = (numOfBlocks: number) => {
  return {
    controls: {
      numOfBlocks: numOfBlocks,
    },
    map: new Map<string, string>(),
    tree: constructTreeState(Math.log2(numOfBlocks)) as TreeState,
    stats: {
      numOfEmptyBlocks: numOfBlocks,
      numOfMisses: 0,
      numOfHits: 0,
    }
  }
}

const initAppState: AppState = {
  controls: {
    numOfBlocks: 2,
  },
  map: new Map<string, string>(),
  tree: constructTreeState(Math.log2(2)) as TreeState,
  stats: {
    numOfEmptyBlocks: 2,
    numOfMisses: 0,
    numOfHits: 0,
  }
}

const { setCacheBlockSize } = controlsActions;

export default handleActions<AppState, any> ({
  [setCacheBlockSize.toString()] (
    _,
    {payload}: ReturnType<typeof setCacheBlockSize>
  ) {
    const { numOfBlocks } = payload;
    return createAppState(numOfBlocks);
  },
}, initAppState);