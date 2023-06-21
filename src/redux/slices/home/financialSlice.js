import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../utility/Axios";



export const getFinancialAsync = createAsyncThunk(
    "/home/financial",
    async () => {
      try {
        const res = await get("/get-financial");
        return res.data;
      } catch (error) {
        console.error(error);
      }
    }
  );



export const financialSlice = createSlice({
    name: "financial",
    initialState: {
        financial: [],
      loading: false,
      error: null,
    },
    reducers : {},
    
    extraReducers: (builder) => {
        builder
          .addCase(getFinancialAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(getFinancialAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.financial = action.payload.data;
          })
          .addCase(getFinancialAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
    });


export default  financialSlice.reducer;