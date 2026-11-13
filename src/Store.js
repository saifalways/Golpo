import { configureStore } from "@reduxjs/toolkit";
import  activeUserSlices  from "./Slices/activeUserSlices";

export const store = configureStore({
  reducer: {
    counter: activeUserSlices,
  },
});
