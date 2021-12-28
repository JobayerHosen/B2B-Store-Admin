import { configureStore } from "@reduxjs/toolkit";
import prodcutsReducer from "./slices/productSlice";
import customersReducer from "./slices/customerSlice";
import ordersReducer from "./slices/orderSlice";

export default configureStore({
  reducer: {
    products: prodcutsReducer,
    customers: customersReducer,
    orders: ordersReducer,
  },
});
