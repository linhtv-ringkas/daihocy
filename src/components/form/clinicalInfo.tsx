import React from "react";
import { Control, Controller, FieldErrors, UseFormWatch } from "react-hook-form";
import { get } from "lodash";
import Input from "../control/input";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export type FormClinicalInfoValues = {
  medicalHistory: string;
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

interface Props {
  control: Control<any>;
  errors:  FieldErrors;
  defaultValue?: FormClinicalInfoValues;
  watch: UseFormWatch<any>;
}

const FormClinicalInfo: React.FC<Props>= ({watch,control, errors, defaultValue})=> {
  const watchDiseaseAcquired = watch("diseaseAcquired", false);
  return (
    <div className="mb-6">
      <div className="font-bold text-2xl mb-6">THÔNG TIN LÂM SÀN</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="medicalHistory"
          control={control}
          defaultValue={get(defaultValue, "medicalHistory", "" )}
          render={({ field: { ref, ...others } }) => (
            <Input
              label="Bệnh sử"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "medicalHistory.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />
        <Controller
          name="diseaseAcquired"
          control={control}
          defaultValue={get(defaultValue, "diseaseAcquired", false)}
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
        {watchDiseaseAcquired &&
        <Controller
            name="diseaseAcquiredOther"
            control={control}
            defaultValue={get(defaultValue, "diseaseAcquiredOther", false)}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Bệnh tật đã mắc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "diseaseAcquiredOther.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
      </div>
    </div>
  );
}

export default FormClinicalInfo;