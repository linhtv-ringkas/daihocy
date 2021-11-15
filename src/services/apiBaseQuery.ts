import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import callApi from 'services/axiosService'
import { AxiosError, AxiosRequestConfig } from "axios";

const apiBase = (): BaseQueryFn<AxiosRequestConfig> => async (requestOptions, { getState }) => {
  try {
    const result = await callApi(requestOptions);
    console.log("result", result);
    return { data: result};
  } catch (axiosError) {
    let err = axiosError as AxiosError
    return {
      error: { status: err.response?.status, data: err.response?.data },
    }
  }
}

export default apiBase()
