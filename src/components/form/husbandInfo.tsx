import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "components/control/input";
import { get } from "lodash";
import Select from "components/control/select";

export type FormHusbandInfoValues = {
  husbandPhone: string;
  husbandFullName: string;
  husbandAddress: string;
  husbandYearOfBirth: number;
  husbandCareerType: number;
  husbandHeight: number;
  husbandWeight: number;
  husbandBMI?: number;
  husbandNation: string;
};

interface Props {
  defaultValue?: FormHusbandInfoValues;
  formControl: UseFormReturn<any>
}

const YEAR_LIST = (()=> {
  let index = 1900;
  const result =[]
  const yearNow = new Date().getFullYear();
  while (index <= yearNow) {
    result.push({
      value: index,
      label: index
    })
    index ++;
  }
  return result;
})();

const JOB = [
  {
    value: 1,
    label: "Văn phòng"
  },{
    value: 2,
    label: "Công nhân"
  },{
    value: 3,
    label: "Nông dân"
  },{
    value: 4,
    label: "Buôn bán"
  },{
    value: 5,
    label: "Y tế"
  },{
    value: 6,
    label: "Khác"
  },
]

const FormHusbandInfo: React.FC<Props>= ({formControl, defaultValue})=> {
  const {
    control,
    formState: { errors },
  } = formControl;

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-md mb-6 uppercase">Thông tin chồng thai phụ</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="husbandPhone"
          control={control}
          defaultValue={get(defaultValue, "husbandPhone", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "husbandPhone.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandFullName"
          control={control}
          defaultValue={get(defaultValue, "husbandFullName")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Họ và tên"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "husbandFullName.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandAddress"
          control={control}
          defaultValue={get(defaultValue, "husbandAddress", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Địa chỉ"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "husbandAddress.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandYearOfBirth"
          control={control}
          defaultValue={get(defaultValue, "husbandYearOfBirth")}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={YEAR_LIST}
              inputProps={{ label: "Năm sinh" }}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandCareerType"
          control={control}
          defaultValue={get(defaultValue, "husbandCareerType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={JOB}
              inputProps={{ label: "Nghề nghiệp" }}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandHeight"
          control={control}
          defaultValue={get(defaultValue, "husbandHeight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Chiều cao"
              className="w-full mb-3 sm:col-start-1 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "husbandHeight.message", "")}
              inputRef={ref}
              endAdornment={<span className="transform translate-y-[0.125rem] pl-2 text-primary-4">cm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandWeight"
          control={control}
          defaultValue={get(defaultValue, "husbandWeight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Cân nặng"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "husbandWeight.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">kg</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandBMI"
          control={control}
          defaultValue={get(defaultValue, "BMI", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="husbandBMI"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              disabled={true}
              errorMsg={get(errors, "husbandBMI.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="husbandNation"
          control={control}
          defaultValue={get(defaultValue, "husbandNation")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Dân tộc"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "husbandNation.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormHusbandInfo;