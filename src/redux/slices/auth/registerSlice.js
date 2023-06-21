import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../../utility/Axios";

export const RegisterUserAsync = createAsyncThunk(
   "/auth/register",
   async (values, { rejectWithValue }) => {
      try {
         const res = await post("/register", values[0], values[1]);
         return res.data;
      } catch (error) {
         console.error(error);
         rejectWithValue(error);
      }
   }
);

const initialState = {
   loading: false,
   error: null,
   accountData: {},
   personalData: {},
   uploadData: [],
   isChanged: false,
   proceeded: false,
};

export const registerSlice = createSlice({
   name: "register",
   initialState: initialState,
   reducers: {
      handleAccount: (state, action) => {
         state.accountData = action.payload;
         
      },
      handlePersonal: (state, action) => {
         state.personalData = action.payload;
      },
      handleUpload: ({ uploadData }, { payload }) => {
         uploadData.push(payload);
      },
      handleProceed: (state) => {
         state.proceeded = true;
      },
      handleChange: (state) => {
         state.isChanged = true;
      },
      extraReducers: (builder) => {
         builder.addCase(RegisterUserAsync.pending, (state) => {
            state.loading = true;
         });
         builder.addCase(RegisterUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
      },
   },
});

export const { handleAccount, handlePersonal, handleUpload, handleProceed, handleChange } =
   registerSlice.actions;
export default registerSlice.reducer;
