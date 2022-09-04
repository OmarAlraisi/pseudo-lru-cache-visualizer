import { State } from "../reducers";

const getNumOfBlocks = (state: State) => state.app.controls.numOfBlocks;

export const AppQueries = { getNumOfBlocks };