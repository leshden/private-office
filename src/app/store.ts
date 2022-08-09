import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login-state/loginStateSlice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    login: loginReducer
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
