import { State } from "../reducers";

const getNumOfBlocks = (state: State) => state.app.controls.numOfBlocks;

const getTreeNodes = (state: State) => state.app.tree.nodes;

const getTreeUpdateHelper = (state: State) => state.app.tree.updateHelper;

const getStats = (state: State) => state.app.stats;

const getMap = (state: State) => state.app.map;

export const AppQueries = { getNumOfBlocks, getTreeNodes, getTreeUpdateHelper, getStats, getMap };