import apiPregnant from 'features/pregnant/api';
import { configureStore } from '@reduxjs/toolkit';
import apiMale from 'features/male/api';
import apiFemale from "features/female/api";
import apiChild from "features/children/api"
export const store = configureStore({
  reducer: {
    [apiMale.reducerPath]: apiMale.reducer,
    [apiFemale.reducerPath]: apiFemale.reducer,
    [apiPregnant.reducerPath]: apiPregnant.reducer,
    [apiChild.reducerPath]: apiChild.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiMale.middleware,
      apiFemale.middleware,
      apiPregnant.middleware,
      apiChild.middleware
    ),
});
