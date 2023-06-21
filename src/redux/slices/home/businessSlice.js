import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Delete, get } from "../../../utility/Axios";

export const getBusinessAsync = createAsyncThunk("/home/business", async () => {
   try {
      const res = await get("/get-business-directory");
      return res.data;
   } catch (error) {
      console.log(error);
   }
});

export const deleteBusinessAsync = createAsyncThunk(
   "/home/business",
   async (id) => {
      try {
         const res = await Delete("delete-business-directory");
         return res.data;
      } catch (error) {
         console.log(error);
      }
   }
);

export const businessSlice = createSlice({
   name: "business",
   initialState: {
      business: [],
      loading: false,
      error: null,
   },

   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(getBusinessAsync.pending, (state) => {
            state.loading = true;
         })
         .addCase(getBusinessAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.business = action.payload.data;
         })
         .addCase(getBusinessAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
      // .deleteCase(deleteBusinessAsync.fulfilled, (state, action)=> {
      //     state.delete = action.payload.data
      // })
   },
});

export const {} = businessSlice.actions;
export default businessSlice.reducer;
