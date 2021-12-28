import { configureStore } from "@reduxjs/toolkit";
import prodcutsReducer from "./slices/productSlice";
import customersReducer from "./slices/customerSlice";

export default configureStore({
  reducer: {
    products: prodcutsReducer,
    customers: customersReducer,
  },
});
