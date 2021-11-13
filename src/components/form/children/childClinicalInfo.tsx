import React from "react";
import Input from "components/control/input";
import { get } from "lodash";
import { Controller, UseFormReturn } from "react-hook-form";
export type FormChildrenClinicalInfoValues = {
  familyHistory: string;
  sickSrartTime: string;
  originalExpression: string;
  developmentOfSick: string;
  whereMedical: string;
  currentStatus: string;
};

interface Props {
  defaultValue?: FormChildrenClinicalInfoValues;
  formControl: UseFormReturn<any>
}

const FormChildrenClinicalInfo: React.FC<Props>= ({formControl,defaultValue})=> {
  const {
    control,
    formState: { errors },
  } = formControl;
  // const watchGeneticPathologyType3 = watch("geneticPathologyType3", 0);
  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-2xl mb-6 uppercase">THÔNG TIN LÂM SÀNG</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="familyHistory"
          control={control}
          defaultValue={get(defaultValue, "familyHistory", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Tiền sử gia đình"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "familyHistory.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="sickSrartTime"
          control={control}
          defaultValue={get(defaultValue, "sickSrartTime", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Bệnh khởi phát từ bao giờ?"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "sickSrartTime.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="originalExpression"
          control={control}
          defaultValue={get(defaultValue, "originalExpression", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Biểu hiện ban đầu"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "originalExpression.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="developmentOfSick"
          control={control}
          defaultValue={get(defaultValue, "developmentOfSick", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Diễn biến của bệnh"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "developmentOfSick.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="whereMedical"
          control={control}
          defaultValue={get(defaultValue, "whereMedical", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Đã khám ở đâu, với kết quả như thế nào"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "whereMedical.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="currentStatus"
          control={control}
          defaultValue={get(defaultValue, "currentStatus", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Tình trạng hiện tại"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "currentStatus.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormChildrenClinicalInfo;