import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../utility/Axios";


export const getAllClasses = createAsyncThunk("/getAllClasses", async () => {
  try {
    const res = await get("/get-all-classes");
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

export const classSlice = createSlice({
  name: "class",
  initialState: {
    allclasses: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllClasses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllClasses.fulfilled, (state, action) => {
      state.loading = false;
      state.allclasses = action.payload.data;
      console.log("data.........kkkkkkkk",action.payload.data)
    });
    builder.addCase(getAllClasses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });    
  },
});

export default classSlice.reducer;
export const { } = classSlice.actions;
