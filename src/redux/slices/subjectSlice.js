import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../utility/Axios";


export const getClassSubjects = createAsyncThunk("/getClassSubjects", async (values) => {
  try {
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", values)

    const res = await get(`/get-all-subject?classIds=${values}`);
    console.log("rrrrrrrrrrrssssssssssssssssss", res)
    return res.data;
  } catch (error) {
    console.error(error);
  }
});




export const subjectSlice = createSlice({
  name: "subject",
  initialState: {
    classesSubject: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getClassSubjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClassSubjects.fulfilled, (state, action) => {
      state.loading = false;

      state.classesSubject = action.payload.data.subjects;
      console.log("data.........kkkkkkkk", action.payload.data.subjects)
    });
    builder.addCase(getClassSubjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

  },
});

export default subjectSlice.reducer;
export const { } = subjectSlice.actions;
