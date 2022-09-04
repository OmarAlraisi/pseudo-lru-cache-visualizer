import { createAction } from "redux-actions";

const setCacheBlockSize = createAction(
  "APP--CONTROLS--SET-CACHE-BLOCK-SIZE",
  (numOfBlocks: number) => ({ numOfBlocks })
);

export const controlsActions = { setCacheBlockSize };