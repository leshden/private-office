import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login-state/loginStateSlice';
import contactsReducer from '../features/contacts/contactsStateSlice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    contacts: contactsReducer
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
