import { createAction } from "redux-actions";

const setCacheBlockSize = createAction(
  "APP--CONTROLS--SET-CACHE-BLOCK-SIZE",
  (numOfBlocks: number) => ({ numOfBlocks })
);

const getRequest = createAction(
  "APP--CONTROLS--GET-REQUEST",
  (key: string) => ({ key })
);

const clearCache = createAction(
  "APP--CONTROLS--CLEAR-CACHE"
)

export const controlsActions = { setCacheBlockSize, getRequest, clearCache };