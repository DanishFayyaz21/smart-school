import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../../utility/Axios";

export const createRoleAsync = createAsyncThunk(
  "/role/add",
  async (value, { rejectWithValue }) => {
    try {
      const res = await post("/roles/add", value);
      console.log('data from backend: ', res.data)
      return res.data;
    } catch (error) {
      console.log("create not successfully", error);
      rejectWithValue(error);
    }
  }
);

export const getRoleAsync = createAsyncThunk("/roles/permission", async () => {
  try {
    const res = await get("/roles/get");
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

export const roleSlice = createSlice({
    name: "role",
  initialState: {
    roles: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createRoleAsync.pending, (state) => {
       state.loading = true;
    });
    builder.addCase(createRoleAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.roles= action.payload;
   });
    builder.addCase(createRoleAsync.rejected, (state, action) => {
       state.loading = false;
       state.error = action.payload.message;
    });
  }
});

export default roleSlice.reducer;
export const {} = roleSlice.reducer;
