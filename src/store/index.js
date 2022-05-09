import { configureStore } from "@reduxjs/toolkit";
import focusReducer from "./focus-slice";

const store = configureStore({
  reducer: {  focus: focusReducer },
});

export default store;
