import { createSlice } from "@reduxjs/toolkit";
export const activeUserSlices = createSlice({
  name: "counter",
  initialState: {
    value: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo"))
      : null,
  },
  reducers: {
    activeUserInfo: (state, action) => {
      state.value = action.payload;
      
    },
  },
});

export const { activeUserInfo } = activeUserSlices.actions;

export default activeUserSlices.reducer;
