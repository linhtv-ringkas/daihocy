import { createApi } from '@reduxjs/toolkit/query/react';
import apiBaseQuery from "services/apiBaseQuery";

const PATH = "API_FEMALE"
export const apiPregnant= createApi({
  reducerPath: PATH,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    getInfoPregnant: builder.query({
      query: (phone:string) => ({
        url: `/checkPhonePregnant`,
        method: 'POST',
        data: {phone},
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
    updateInfo: builder.mutation({
      query: (data) => ({
        url: `/submitPregnant`,
        method: 'POST',
        data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
    }),
  }),
});

export const { useGetInfoPregnantQuery, useUpdateInfoMutation } = apiPregnant;
export default apiPregnant;
