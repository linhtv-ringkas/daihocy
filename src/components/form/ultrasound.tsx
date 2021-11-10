import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "components/control/input";
import { get } from "lodash";
import Select from "components/control/select";

export type FormUltraSoundValues = {
  dateOfPregnancyUltrasound: string;
  pregnancyWeek: string;
  numberOfPregnancie: string;
  morphologicalUltrasound: string;
  theLengthOfButtock: string;
  lightBackOfNeck: string;
  inseminationPregnancyType: number;
};

interface Props {
  defaultValue?: FormUltraSoundValues;
  formControl: UseFormReturn<any>
}

const FormUltraSound: React.FC<Props>= ({formControl, defaultValue})=> {
  const {
    control,
    formState: { errors },
    watch,
    setValue
  } = formControl;
  const watchIsFamily = watch("isFamily", false);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-xl mb-6 uppercase">Siêu âm</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="dateOfPregnancyUltrasound"
          control={control}
          defaultValue={get(defaultValue, "dateOfPregnancyUltrasound", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Ngày siêu âm thai"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "dateOfPregnancyUltrasound.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="pregnancyWeek"
          control={control}
          defaultValue={get(defaultValue, "pregnancyWeek", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Tuần thai"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "pregnancyWeek.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">tuần</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="numberOfPregnancie"
          control={control}
          defaultValue={get(defaultValue, "numberOfPregnancie", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Số thai"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "numberOfPregnancie.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">thai</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="inseminationPregnancyType"
          control={control}
          defaultValue={get(defaultValue, "inseminationPregnancyType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                {value: 1, label: 'Tự nhiên'},
                {value: 2, label: 'IUI'},
                {value: 3, label: 'IVF'},
              ]}
              inputProps={{label: "Thai thụ tinh"}}
              {...others}
            />
          )}
        />
      <Controller
          name="theLengthOfButtock"
          control={control}
          defaultValue={get(defaultValue, "theLengthOfButtock", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Chiều dài đầu mông"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "theLengthOfButtock.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">mm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="lightBackOfNeck"
          control={control}
          defaultValue={get(defaultValue, "lightBackOfNeck", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Khoảng sáng sau gáy"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "lightBackOfNeck.message", "")}
              inputRef={ref}
              endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">mm</span>}
              {...others}
            />
          )}
        />
        <Controller
          name="morphologicalUltrasound"
          control={control}
          defaultValue={get(defaultValue, "morphologicalUltrasound", "")}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Hình thái siêu âm thai"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "morphologicalUltrasound.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="geneticPathologyType"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 1, label: 'Không'},
                {value: 2, label: 'Bố'},
                {value: 3, label: 'Mẹ'},
                {value: 4, label: 'Anh chị em'},
                {value: 5, label: 'Họ hàng'},
              ]}
              inputProps={{label: "Có ai trong gia đình và họ hàng mắc bệnh lý di truyền không?"}}
              {...others}
            />
          )}
        />

      </div>
    </div>
  );
}

export default FormUltraSound;