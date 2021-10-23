import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import { cacheAdapterEnhancer, ICacheLike } from "axios-extensions";
import LRUCache from "lru-cache";
import * as https from "https";
import { get } from "lodash";
import qs from 'querystring';

export const cacheMemory = new LRUCache({
  maxAge: 10 * 60 * 1000, max: 50,
}) as ICacheLike<AxiosPromise>;

export const clearCache = () => {
  const cache: any = cacheMemory;
  console.log("clear cached api");
  if (cache && cache.reset && typeof cache.reset === "function") {
    cache.reset();
  }
};

const API_ROOT = process.env.REACT_APP_API_URL || "http://daihocy.xyz";
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const axiosInstance = axios.create({
  httpsAgent: httpsAgent, adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
    enabledByDefault: false, defaultCache: cacheMemory,
  }), timeout: 10000,
});
const _callApiFactory = (ROOT: string) => {
  return <T>(options: AxiosRequestConfig) => {
    if (options.url) {
      options.url = options.url.indexOf("https://") === -1 ? ROOT + options.url : options.url;
    }
    if (!options.headers) options.headers = {
      "Content-Type": "application/json", Accept: "application/json", "Accept-Language": "vi",
    };

    const isFormRequest = options.method?.toLowerCase() === 'post' && get(options, ["headers", "Content-Type"], "").includes("application/x-www-form-urlencoded")
    if(isFormRequest && options.data){
      options.data = qs.stringify(options.data)
    }
    return axiosInstance.request(options).then((response) => {
      return response.data as T;
    });
  };
};
export default _callApiFactory(API_ROOT);

export function callApiNotDomain(options: AxiosRequestConfig, schema?: any) {
  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json", Accept: "application/json",
    }, adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
      enabledByDefault: false,
    }), timeout: 10000,
  });

  return axiosInstance.request(options).then((response: AxiosResponse<any>) => {
    return response;
  }, (error) => {
    return error.response;
  });
}
