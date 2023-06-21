import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../utility/Axios";

export const getCustomerAsync = createAsyncThunk(
   "/home/customer-directory",
   async () => {
      try {
         const res = await get("/get-customer-directory");
         return res.data;
      } catch (error) {
         console.error(error);
      }
   }
);

export const customerSlice = createSlice({
   name: "customers",
   initialState: {
      customers: [],
      loading: false,
      error: null,
   },
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(getCustomerAsync.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCustomerAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.customers = action.payload.data;
         })
         .addCase(getCustomerAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export default customerSlice.reducer;
