import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from "axios";
import {ContactUser} from '../../interfaces/Contact';

interface ContactsState {
  error: string | null | undefined;
  contacts: ContactUser[];
}

interface ResponseData {
  contacts: ContactUser[];
}

interface ValidationErrors {
  message: string
}

const initialState = {
  error: '',
  contacts: [],
} as ContactsState

export const getAsync = createAsyncThunk<ResponseData, {email: string}, { rejectValue: ValidationErrors }>(
  'contacts/getAsync',
  async (userData, { rejectWithValue }) => {
    try {
      const { email } = userData
      const response = await axios.post('http://localhost:5000/api/contacts/get', {
         email
      });
      return response.data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err as AxiosError<ValidationErrors>
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
});

export const editAsync = createAsyncThunk<ResponseData, ContactUser & {email: string}, { rejectValue: ValidationErrors }>(
  'contacts/editAsync',
  async (userData, { rejectWithValue }) => {
    try {
      const { id, name, surname, phone, email } = userData
      const response = await axios.post('http://localhost:5000/api/contacts/edit', {
        id, name, surname, phone, email
      });
      return response.data;
    } catch (err) {
      let error: AxiosError<ValidationErrors> = err as AxiosError<ValidationErrors>
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
});

export const contactsStateSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.pending, (state) => {
      })
      .addCase(getAsync.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
        state.error = null;
      })
      .addCase(getAsync.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(editAsync.pending, (state) => {
      })
      .addCase(editAsync.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
        state.error = null;
      })
      .addCase(editAsync.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload.message;
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default contactsStateSlice.reducer;
