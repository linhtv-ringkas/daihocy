import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from "services/apiBaseQuery";

const PATH = "API_CHILD"
export const apiPregnant= createApi({
  reducerPath: PATH,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: (phone:string) => ({
        url: `/checkPhoneChildren`,
        method: 'POST',
        data: {phone},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/submitChildren`,
        method: 'POST',
        data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
  }),
});

export const { useGetInfoQuery, useUpdateInfoMutation } = apiPregnant;
export default apiPregnant;
