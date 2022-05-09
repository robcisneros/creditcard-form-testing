import { createSlice } from "@reduxjs/toolkit";

const initialFocusState = { focusItem: '' };

const focusSlice = createSlice({
  name: "focus",
  initialState: initialFocusState,
  reducers: {
    changeItemFocus(state,action) {
      state.focusItem = action.payload;
    },
  },
});

export const focusActions = focusSlice.actions;

export default focusSlice.reducer;
