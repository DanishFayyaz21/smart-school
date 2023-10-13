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

export const getAllTeachers = createAsyncThunk("/getAllTeachers", async () => {
  try {
    const res = await get("/get-all-teacher");
    console.log("res..........", res.data)
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentStudent: null,
    allTeacher: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentStudent: (state, action) => {
      state.currentStudent = action.payload;
    },
  },

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

    // getAllTeachers cases
    builder.addCase(getAllTeachers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTeachers.fulfilled, (state, action) => {
      state.loading = false;
      console.log("teachers...........", action.payload.data.teachers)
      state.allTeacher = action.payload.data.teachers;

    });
    builder.addCase(getAllTeachers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default userSlice.reducer;
export const {setCurrentStudent } = userSlice.actions;
