import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../../utility/Axios";

export const getUserAsync = createAsyncThunk("/user/get", async () => {
  try {
    const res = await get("/users/get");
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.data;
    });
    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
