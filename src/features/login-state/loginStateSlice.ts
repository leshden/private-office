import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from "axios";

interface LoginState {
  login: boolean;
  access_token: string;
  error: string;
}

interface AccessToken {
  access_token: string;
}

interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

interface User {
  email: string;
  password: string;
}

const initialState = {
  login: false,
  access_token: '',
  error: '',
} as LoginState

export const loginAsync = createAsyncThunk<AccessToken, User>(
  'login-state/loginAsync',
  async ({email, password}: User) => {

      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email, password
      });

      console.log(response.data);

      return response.data;
  }
);

export const loginStateSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.access_token = action.payload.access_token;
        state.login = true;
        console.log(action)
      })
      .addCase(loginAsync.rejected, (state, action) => {
        console.log('ERROR!!!')
        console.log(action);
      });
  },

});

export default loginStateSlice.reducer;
