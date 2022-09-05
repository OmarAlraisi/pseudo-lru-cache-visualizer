import { createAction } from "redux-actions";

const setCacheBlockSize = createAction(
  "APP--CONTROLS--SET-CACHE-BLOCK-SIZE",
  (numOfBlocks: number) => ({ numOfBlocks })
);

const sendRequest = createAction(
  "APP--CONTROLS--SEND-REQUEST",
  (key: string) => ({ key })
);

const clearCache = createAction(
  "APP--CONTROLS--CLEAR-CACHE"
)
export const Actions = { setCacheBlockSize, sendRequest, clearCache }