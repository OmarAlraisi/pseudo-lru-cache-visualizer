import { State } from "../reducers";

const getNumOfBlocks = (state: State) => state.app.numOfBlocks;

const getTreeNodes = (state: State) => state.app.tree.nodes;

const getUpdateHelper = (state: State) => state.app.updateHelper;

const getStats = (state: State) => state.app.stats;

const getMap = (state: State) => state.app.map;

export const AppQueries = { getNumOfBlocks, getTreeNodes, getUpdateHelper, getStats, getMap };