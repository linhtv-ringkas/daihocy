import React from "react";
import { Control, Controller, FieldErrors, UseFormWatch } from "react-hook-form";
import Input from "components/control/input";
import { get } from "lodash";
import * as yup from "yup";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Select from "../control/select";

export type FormInfoValues = {
  phone: string;
  fullName: string;
  isFamily: boolean;
  familyPhone: string;
  address: string;
  reason: string;
  yearOfBirth: number;
  yearOfMarried: number;
  careerType: number;
  height: number;
  weight: number;
  BMI?: number;
  nation: string;
};

export const FormInfoSchema = {
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại"),
  fullName: yup
    .string()
    .required("Vui lòng điền họ tên"),
}

interface Props {
  control: Control<any>;
  errors:  FieldErrors;
  defaultValue?: FormInfoValues;
  watch: UseFormWatch<any>;
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

const FormInfo: React.FC<Props>= ({control, errors, defaultValue,watch})=> {
  const watchIsFamily = watch("isFamily", false);
  return (
    <div className="mb-6">
      <div className="font-bold text-2xl mb-6">THÔNG TIN CHUNG</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="phone"
          control={control}
          defaultValue={get(defaultValue, "phone", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại *"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "phone.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="fullName"
          control={control}
          defaultValue={get(defaultValue, "fullName")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Họ và tên *"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "fullName.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="isFamily"
          control={control}
          defaultValue={get(defaultValue, "isFamily", false)}
          render={({ field: { ref, ...others } }) => (
            <FormControlLabel
              className="justify-end sm:col-span-3"
              control={<Checkbox />}
              label="Hỗ trợ người thân"
              labelPlacement="start"
              {...others}
            />
          )}
        />
        {watchIsFamily &&
        <Controller
          name="familyPhone"
          control={control}
          defaultValue={get(defaultValue, "familyPhone")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại người thân"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "familyPhone.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}
        <Controller
          name="address"
          control={control}
          defaultValue={get(defaultValue, "address")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Địa chỉ"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "address.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="reason"
          control={control}
          defaultValue={get(defaultValue, "reason")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Lý do khám (xét nghiệm)"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "reason.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="yearOfBirth"
          control={control}
          defaultValue={get(defaultValue, "yearOfBirth")}
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
          name="yearOfMarried"
          control={control}
          defaultValue={get(defaultValue, "yearOfMarried")}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={YEAR_LIST}
              inputProps={{ label: "Năm kết hôn" }}
              {...others}
            />
          )}
        />
        <Controller
          name="careerType"
          control={control}
          defaultValue={get(defaultValue, "careerType")}
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
          name="height"
          control={control}
          defaultValue={get(defaultValue, "height")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Chiều cao"
              className="w-full mb-3 sm:col-start-1 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "height.message", "")}
              inputRef={ref}
              endAdornment={<span>cm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="weight"
          control={control}
          defaultValue={get(defaultValue, "weight")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Cân nặng"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              errorMsg={get(errors, "weight.message", "")}
              inputRef={ref}
              endAdornment={<span>kg</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="BMI"
          control={control}
          defaultValue={get(defaultValue, "BMI")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="BMI"
              className="w-full mb-3 sm:col-span-2"
              type="number"
              disabled={true}
              errorMsg={get(errors, "BMI.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="nation"
          control={control}
          defaultValue={get(defaultValue, "nation")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Dân tộc"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "nation.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormInfo;