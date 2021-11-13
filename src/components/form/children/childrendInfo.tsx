import React from "react";
import { FormControlLabel } from "@material-ui/core";
import Checkbox from "components/control/checkbox";
import Input from "components/control/input";
import Select from "components/control/select";
import dayjs from "dayjs";
import { get } from "lodash";
import { Controller, UseFormReturn } from "react-hook-form";
import * as yup from "yup";
import DatePicker from "components/control/date-picker";

export type FormChildrenInfoValues = {
  phone: string;
  fullName: string;
  isFamily: boolean;
  familyPhone: string;
  address: string;
  birthday: string;
  gender: number;
  birthHistoryType: number;
  birthHistoryType1: number;
  birthStatusType: number;
  weight: number;

};

export const FormChildrenInfoSchema = {
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại"),
  fullName: yup
    .string()
    .required("Vui lòng điền họ tên"),
}

interface Props {
  defaultValue?: FormChildrenInfoValues;
  formControl: UseFormReturn<any>
}

const FormChildrenInfo: React.FC<Props> = ({ formControl, defaultValue }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = formControl;
  const watchIsFamily = watch("isFamily", false);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-xl mb-6 uppercase">THÔNG TIN CHUNG</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="phone"
          control={control}
          defaultValue={get(defaultValue, "phone", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số điện thoại người đại diện *"
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
          name="birthday"
          control={control}
          defaultValue={dayjs(get(defaultValue, "birthday"), "DD/MM/YYYY").format()}
          render={({ field: { ref, ...others } }) => (
            <DatePicker
              disableFuture
              openTo="year"
              format="DD/MM/YYYY"
              label="Ngày sinh"
              views={["year", "month", "date"]}
              className="w-full mb-3 sm:col-span-3"
              {...others}
            />
          )}
        />
        <Controller
          name="gender"
          control={control}
          defaultValue={get(defaultValue, "gender", 2)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                { value: 0, label: "Gái" },
                { value: 1, label: "Trai" },
                { value: 2, label: "Khác" },
              ]}
              inputProps={{ label: "Giới tính" }}
              {...others}
            />
          )}
        />

        <Controller
          name="birthHistoryType"
          control={control}
          defaultValue={get(defaultValue, "birthHistoryType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                { value: 1, label: "Đẻ thường" },
                { value: 2, label: "Can thiệp" },
              ]}
              inputProps={{ label: "Tiền sử lúc sinh" }}
              {...others}
            />
          )}
        />
        <Controller
          name="birthHistoryType1"
          control={control}
          defaultValue={get(defaultValue, "birthHistoryType1", 3)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                { value: 3, label: "Đơn thai" },
                { value: 4, label: "Đa thai" },
              ]}
              inputProps={{ label: "Tiền sử lúc sinh" }}
              {...others}
            />
          )}
        />
        <Controller
          name="birthStatusType"
          control={control}
          defaultValue={get(defaultValue, "birthStatusType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                { value: 1, label: "Khóc to" },
                { value: 2, label: "Thở oxy" },
              ]}
              inputProps={{ label: "Tình trạng lúc sinh" }}
              {...others}
            />
          )}
        />

        <Controller
          name="weight"
          control={control}
          defaultValue={get(defaultValue, "weight", 0)}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Cân nặng"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "weight.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">g</span>}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormChildrenInfo;