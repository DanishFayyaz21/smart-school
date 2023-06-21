import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../../utility/Axios";

export const createPermissionAsync = createAsyncThunk(
  "/permission/add",
  async (value, { rejectWithValue }) => {
    try {
      const res = await post("/permissions/add", value);
      console.log('data from backend: ', res, res.data)
      return res.data;
    } catch (error) {
      console.log("create not successfully", error);
      console.log(rejectWithValue);
    }
  }
);

// export const getPermissionAsync = createAsyncThunk(
//   "/user/permissions/get",
//   async () => {
//      try {
//         const res = await get("/permissions/get");
//         return res.data;
//      } catch (error) {
//         console.error(error);
//      }
//   }
// );

//data getting from backend API
export const getPermissionAsync = createAsyncThunk("user/permissions/get", async() => {
  try {
    const res = await get("/permissions/get")
    return res.data;
  } catch (error) {
    console.log(error)
  }
  }
  );

//creating slice for managing behaviour of data
export const permissionSlice = createSlice({
  name: "permission",
  initialState: {
    permissions: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPermissionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPermissionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.permissions = action.payload.data;
      })
      .addCase(getPermissionAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default permissionSlice.reducer;
export const {} = permissionSlice.reducer;
