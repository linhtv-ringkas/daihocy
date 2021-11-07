import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from "services/apiBaseQuery";

const PATH = "API_MALE"
export const apiMale = createApi({
  reducerPath: PATH,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getInfoMale: builder.query({
      query: (phone:string) => ({
        url: `/checkPhoneMale`,
        method: 'POST',
        data: {phone},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/submitMale`,
        method: 'POST',
        data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
  }),
});

export const { useGetInfoMaleQuery, useUpdateInfoMutation } = apiMale;
export default apiMale;
