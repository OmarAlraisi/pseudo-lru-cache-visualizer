import { State } from "../reducers";

const getNumOfBlocks = (state: State) => state.app.numOfBlocks;

const getTreeNodes = (state: State) => state.app.tree.nodes;

const getUpdateHelper = (state: State) => state.app.updateHelper;

const getStats = (state: State) => state.app.stats;

const getMapKeys = (state: State) => Array.from(state.app.map.keys());

const getMapValueByKey = (state: State, key: string) => state.app.map.get(key);

export const Queries = { getNumOfBlocks, getTreeNodes, getUpdateHelper, getStats, getMapKeys, getMapValueByKey };