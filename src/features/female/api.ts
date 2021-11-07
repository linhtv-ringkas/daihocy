import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from "services/apiBaseQuery";

const PATH = "API_FEMALE"
export const apiFemale = createApi({
  reducerPath: PATH,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getInfoFemale: builder.query({
      query: (phone:string) => ({
        url: `/checkPhoneFemale`,
        method: 'POST',
        data: {phone},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/submitFemale`,
        method: 'POST',
        data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
  }),
});

export const { useGetInfoFemaleQuery, useUpdateInfoMutation } = apiFemale;
export default apiFemale;
