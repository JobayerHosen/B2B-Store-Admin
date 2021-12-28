import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomers: (state, { payload }) => {
      state.customers = payload;
    },
  },
});

export const { addCustomers } = customerSlice.actions;
export const getAllCustomers = (state) => state.customers.customers;
export default customerSlice.reducer;
