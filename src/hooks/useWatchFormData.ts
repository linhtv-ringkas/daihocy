import { useMemo } from "react";
import { UseFormWatch } from "react-hook-form";

const useWatchFormData = (watchFiels: {[key:string]: any}, watchFn: UseFormWatch<any>)=> {
    const watchFields = watchFn(Object.keys(watchFiels), { ...watchFiels });
    const watchData = useMemo(()=> {
      const result = {} as any;
      Object.keys(watchFiels).forEach((key, index)=> {
        result[key]= watchFields[index];
      },)  
      return result
    }, [watchFields, watchFiels])

    return watchData
}

export default useWatchFormData;