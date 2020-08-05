import { combineReducers } from "@reduxjs/toolkit";

import { systemReducer } from "./system/reducers";
import { controllerReducer } from "./controller/reducers";

export const rootReducer = combineReducers({
  system: systemReducer,
  controller: controllerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
