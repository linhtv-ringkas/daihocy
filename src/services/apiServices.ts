import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { get } from 'lodash';
import qs from "querystring";

const ROOT =  process.env.REACT_APP_API_URL || "http://daihocy.xyz";
export interface FetchArgsCustom extends FetchArgs {
}
const baseQuery = fetchBaseQuery({
  baseUrl: ROOT,
  prepareHeaders: (headers, { getState }) => {
    //Get new Token

    // Get token from store (userSlice)
    // const token = getState().user.currentUser?.token;

    // Add token to headers
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    return headers;
  },
});
const apiBaseQuery: BaseQueryFn<
  FetchArgsCustom,
  unknown,
  FetchBaseQueryError
  > = async (options, api, extraOptions) => {
  const isFormRequest = options.method?.toLowerCase() === 'post' && get(options, ["headers", "Content-Type"], "").includes("application/x-www-form-urlencoded")
  if(isFormRequest && options.body){
    options.body = qs.stringify(options.body)
  }
  let result = await baseQuery(options, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // // try to get a new token
    // const refreshResult = await baseQuery('/refreshToken', api, extraOptions)
    // if (refreshResult.data) {
    //   // store the new token
    //   api.dispatch(tokenReceived(refreshResult.data))
    //   // retry the initial query
    //   result = await baseQuery(args, api, extraOptions)
    // } else {
    //   api.dispatch(loggedOut())
    // }
    result = await baseQuery(options, api, extraOptions)
  }
  console.log("result", result)
  return result
}

export default apiBaseQuery
