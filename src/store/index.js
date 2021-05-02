import { configureStore } from "@reduxjs/toolkit";

/** Slices to merge to the store */
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
