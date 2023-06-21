import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { post } from "../../../utility/Axios";

export const LoginUserAsync = createAsyncThunk(
    "/auth/login",
    async (value, { rejectWithValue }) => {
      try {
        const data = await post("/login", value);
        console.log('data from backend: ', data, data.data)
        return data.data;
      } catch (error) {
        rejectWithValue(error);
      }
    }
);

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
}

export const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(LoginUserAsync.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(LoginUserAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.data.user;
            state.token = action.payload.data.accessToken;
        })
        builder.addCase(LoginUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export const {} = loginSlice.reducer;
export default loginSlice.reducer;