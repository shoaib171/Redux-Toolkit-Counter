/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { CustomReducer } from "./Reducers/Reducers";
const store = configureStore({
    reducer: {
      custom:CustomReducer
  },
});
export default store;
