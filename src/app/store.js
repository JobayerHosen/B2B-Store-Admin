import { configureStore } from "@reduxjs/toolkit";
import prodcutsReducer from "./slices/productSlice";

export default configureStore({
  reducer: {
    products: prodcutsReducer,
  },
});
