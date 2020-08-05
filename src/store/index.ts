import { combineReducers } from "@reduxjs/toolkit";

import { systemReducer } from "./system/reducers";
import { chatReducer } from "./chat/reducers";
import { controllerReducer } from "./controller/reducers";

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  controller: controllerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
