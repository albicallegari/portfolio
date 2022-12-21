import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { persistedSessionSlice } from './store/sessionSlice/sessionSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loaderSlice from './store/loaderSlice/loaderSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  session: persistedSessionSlice,
  loader: loaderSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
