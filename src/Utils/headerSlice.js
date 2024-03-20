import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    corsPlugin: true,
  },
  reducers: {
    setCorsPlugin: (state, action) => {
      state.corsPlugin = action.payload;
    },
  },
});

export const { setCorsPlugin } = headerSlice.actions;
export default headerSlice.reducer;
