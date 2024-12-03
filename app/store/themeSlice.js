import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGreen: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isGreen = !state.isGreen;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
