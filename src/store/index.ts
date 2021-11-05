import { configureStore } from '@reduxjs/toolkit';
import { apiMale } from 'features/male/api';

export const store = configureStore({
  reducer: {
    [apiMale.reducerPath]: apiMale.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMale.middleware),
});
