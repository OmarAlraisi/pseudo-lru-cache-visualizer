import { createAction } from "redux-actions";

const setCacheBlockSize = createAction(
  "APP--CONTROLS--SET-CACHE-BLOCK-SIZE",
  (numOfBlocks: number) => ({ numOfBlocks })
);

const getRequest = createAction(
  "APP--CONTROLS--GET-REQUEST",
  (key: string) => ({ key })
)

export const controlsActions = { setCacheBlockSize, getRequest };