import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state, { payload }) => {
      state.orders = payload;
    },
  },
});

export const { addOrders } = orderSlice.actions;
export const getAllOrders = (state) => state.orders.orders;
export default orderSlice.reducer;
