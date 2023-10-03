// ** Redux Imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//  UseJWT import to get config
import useJwt from "@src/auth/jwt/useJwt";
import { get, post } from "../utility/Axios";

const config = useJwt.jwtConfig;

const initialUser = () => {
  const item = window.localStorage.getItem("userData");
  //** Parse stored json or if none return initialValue
  return item ? JSON.parse(item) : {};
};

export const login = createAsyncThunk(
  "user/login",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await post("/login", body);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);





export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: initialUser(),
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload
      state[config.storageTokenKeyName] = action.payload[config.storageTokenKeyName]
      state[config.storageRefreshTokenKeyName] = action.payload[config.storageRefreshTokenKeyName]
      localStorage.setItem('userData', JSON.stringify(action.payload))
      localStorage.setItem(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken))
      localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken))
    },
    // handleLogin: (state, action) => {
    //   state.userData = action.payload
    //   state[config.storageTokenKeyName] = action.payload[config.storageTokenKeyName]
    //   state[config.storageRefreshTokenKeyName] = action.payload[config.storageRefreshTokenKeyName]
    //   localStorage.setItem('userData', JSON.stringify(action.payload))
    //   localStorage.setItem(config.storageTokenKeyName, JSON.stringify(action.payload.accessToken))
    //   localStorage.setItem(config.storageRefreshTokenKeyName, JSON.stringify(action.payload.refreshToken))
    // },
    handleLogout: (state) => {
      state.userData = {};
      state[config.storageTokenKeyName] = null;
      state[config.storageRefreshTokenKeyName] = null;
      // ** Remove user, accessToken & refreshToken from localStorage
      localStorage.removeItem("userData");
      localStorage.removeItem(config.storageTokenKeyName);
      localStorage.removeItem(config.storageRefreshTokenKeyName);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      console.log("kkkkkkkkkkkkkkkkkkk.........", action)
      if (action.payload.success) {
        state.message = action.payload.message;
        state.user = action.payload.data.user;
        localStorage.setItem("token", JSON.stringify(action.payload.data.token));
      }
      state.loading = false;
    });


    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });

  },
});

export const { handleLogin, handleLogout } = authSlice.actions;

export default authSlice.reducer;

//  export const RegisterThunk = createAsyncThunk ('auth/register', async (values, {rejectWithValue}) =>{
//   try{
//     const response = await post('/register', values)
//     return response.data
//   }catch (error)
//   {
//     if(error.response && error.response.data.messege){
//       return rejectWithValue(error.response.data.messege)
//     }
//     else{
//       rejectWithValue(error.messege)
//     }
//   }
// } )
