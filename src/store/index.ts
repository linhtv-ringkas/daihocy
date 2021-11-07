import { configureStore } from '@reduxjs/toolkit';
import { apiMale } from 'features/male/api';
import apiFemale from "features/female/api";

export const store = configureStore({
  reducer: {
    [apiMale.reducerPath]: apiMale.reducer,
    [apiFemale.reducerPath]: apiFemale.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiMale.middleware,
      apiFemale.middleware
    ),
});
