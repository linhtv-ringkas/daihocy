import Input from "components/control/input";
import { get } from "lodash";
import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

export type FormChildrenClinicalExaminationValues = {
  currentHeight: number;
  currentWeight: number;
  cBMI: number;
};
// FormChildrenClinicalExaminationValues
interface Props {
  defaultValue?: FormChildrenClinicalExaminationValues;
  formControl: UseFormReturn<any>
}

const FormChildrenClinicalExamination: React.FC<Props>= ({formControl,defaultValue})=> {
  const {
    control,
    formState: { errors },
    watch,
    setValue
  } = formControl;

  const watchHeight = watch("currentHeight", 0);
  const watchWeight = watch("currentWeight", 0);
  useEffect(()=> {
      if(watchHeight> 0 && watchWeight > 0) {
        const height = watchHeight/100
        const bmi = watchWeight/(height*height)
        setValue('cBMI', Math.round(bmi*100)/100);
      } else {
        setValue('cBMI', 0);
      }
  }, [setValue, watchHeight, watchWeight])
  // const watchGeneticPathologyType3 = watch("geneticPathologyType3", 0);
  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-2xl mb-6 uppercase">Thăm khám lâm sàng</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
      <Controller
          name="currentHeight"
          control={control}
          defaultValue={get(defaultValue, "currentHeight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Chiều cao"
              className="w-full mb-3 sm:col-start-1 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "currentHeight.message", "")}
              inputRef={ref}
              endAdornment={<span className="transform translate-y-[0.125rem] pl-2 text-primary-4">cm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="currentWeight"
          control={control}
          defaultValue={get(defaultValue, "currentWeight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Cân nặng"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "currentWeight.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">kg</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="cBMI"
          control={control}
          defaultValue={get(defaultValue, "cBMI", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="BMI"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              disabled={true}
              errorMsg={get(errors, "cBMI.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormChildrenClinicalExamination;