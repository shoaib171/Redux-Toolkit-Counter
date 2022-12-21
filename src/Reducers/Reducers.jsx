/** @format */

import { createReducer } from "@reduxjs/toolkit";
const initialValue = {
  a: 0,
};
export const CustomReducer = createReducer(initialValue, {
  increment: (state, action) => {
    // state.a = state.a + 1;
    // state.a += 1;
    state.a += action.payload;
  },
  decrement: (state, action) => {
    // state.a = state.a - 1;
    // state.a -= 1;
    state.a -= action.payload;
  },
});
