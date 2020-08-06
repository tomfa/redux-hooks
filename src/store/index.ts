import { combineReducers } from "@reduxjs/toolkit";

import { controllerReducer } from "./controller/reducers";

export const rootReducer = combineReducers({
  controller: controllerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
