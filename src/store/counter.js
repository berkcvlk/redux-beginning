import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
