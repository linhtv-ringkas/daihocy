import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from "services/apiServices";

const PATH = "API_MALE"
export const apiMale = createApi({
  reducerPath: PATH,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getInfoMale: builder.mutation({
      query: (phone:string) => ({
        url: `checkPhoneMale`,
        method: 'POST',
        body: {phone},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
  }),
});

export const { useGetInfoMaleMutation } = apiMale;
