import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { ThemeSessionState } from './sessionSlice.models';
import { baseConfig, SESSION_STORAGE_KEY } from './sessionSlice.utils';

const sessionSlice = createSlice({
  name: SESSION_STORAGE_KEY,
  initialState: {
    theme: 'light',
  } as ThemeSessionState,
  reducers: {
    setTheme: (state: ThemeSessionState, action: PayloadAction<'light' | 'dark'>) => ({
      ...state,
      theme: action.payload,
    }),
  },
});

export const { setTheme } = sessionSlice.actions;

export const persistedSessionSlice = persistReducer(
  {
    ...(baseConfig as PersistConfig<ThemeSessionState>),
    debug: process.env.NODE_ENV === 'development',
  },
  sessionSlice.reducer
);

export default sessionSlice;
