import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../store";

export default configureStore({
  reducer: rootReducer,
});
