import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../utility/Axios";

//component request code
export const getActivityAsync = createAsyncThunk("/home/activity", async () => {
   try {
      const data = await get("/get-activities");
      console.log('data from thunk: ', data.data)
      return data.data;
   } catch (error) {
      console.error("error");
   }
});

//component slice code
export const activitySlice = createSlice({
   name: "activity",
   initialState: {
      activites: [],
      loading: false,
      error: null,
   },
   reducer: {},
   extraReducers: (builder) => {
      builder
         .addCase(getActivityAsync.pending, (state) => {
            state.loading = true;
         })
         .addCase(getActivityAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.activities = action.payload.data;
         })
         .addCase(getActivityAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   },
});

export const {} = activitySlice.actions;
export default activitySlice.reducer;
