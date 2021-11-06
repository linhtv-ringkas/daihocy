import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Input from "../control/input";
import { FormControlLabel } from "@material-ui/core";
import Select from "../control/select";
import Checkbox from "../control/checkbox";

export type FormClinicalInfoValues = {
  medicalHistory: string;
  diseaseAcquired: boolean;
  diseaseAcquiredOther: string;
  historyDrugAllergy: boolean;
  historyDrugAllergyOther: string;
  toxicAgent: boolean;
  toxicAgentOther: string;
  geneticPathologyType: number;
  geneticPathologyReason: string;
  geneticPathologyType1: number;
  geneticPathologyReason1: string;
  geneticPathologyType2: number;
  geneticPathologyReason2: string;
  geneticPathologyType3: number;
  geneticPathologyReason3: string;
};

interface Props {
  defaultValue?: FormClinicalInfoValues;
  formControl: UseFormReturn<any>
}

const FAMILY_LIST = [
  {
    value: 0,
    label: 'Không'
  }, {
    value: 1,
    label: 'Bố'
  }, {
    value: 2,
    label: 'Mẹ'
  }, {
    value: 3,
    label: 'Anh chị em'
  }, {
    value: 4,
    label: 'Họ hàng'
  },
]

const FormClinicalInfo: React.FC<Props>= ({formControl,defaultValue})=> {
  const {
    control,
    formState: { errors },
    watch,
  } = formControl;

  const watchDiseaseAcquired = watch("diseaseAcquired", false);
  const watchHistoryDrugAllergy = watch("historyDrugAllergy", false);
  const watchToxicAgent = watch("toxicAgent", false);
  const watchGeneticPathologyType = watch("geneticPathologyType", 0);
  const watchGeneticPathologyType1 = watch("geneticPathologyType1", 0);
  const watchGeneticPathologyType2 = watch("geneticPathologyType2", 0);
  const watchGeneticPathologyType3 = watch("geneticPathologyType3", 0);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-2xl mb-6 uppercase">THÔNG TIN LÂM SÀNG</div>
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
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Bệnh tật đã mắc"
              labelPlacement="end"
              {...others}
            />
          )}
        />
        {watchDiseaseAcquired &&
        <Controller
            name="diseaseAcquiredOther"
            control={control}
            defaultValue={get(defaultValue, "diseaseAcquiredOther", "")}
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
        <Controller
          name="historyDrugAllergy"
          control={control}
          defaultValue={get(defaultValue, "historyDrugAllergy", "")}
          render={({ field: { ref, ...others } }) => (
            <FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Tiền sử ngộ độc/dị ứng thuốc"
              labelPlacement="end"
              {...others}
            />
          )}
        />
        {watchHistoryDrugAllergy &&
        <Controller
            name="historyDrugAllergyOther"
            control={control}
            defaultValue={get(defaultValue, "historyDrugAllergyOther", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Tiền sử ngộ độc/dị ứng thuốc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "historyDrugAllergyOther.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
        <Controller
          name="toxicAgent"
          control={control}
          defaultValue={get(defaultValue, "toxicAgent", "")}
          render={({ field: { ref, ...others } }) => (
            <FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Tiếp xúc với tác nhân độc hại"
              labelPlacement="end"
              {...others}
            />
          )}
        />
        {watchToxicAgent &&
        <Controller
            name="toxicAgentOther"
            control={control}
            defaultValue={get(defaultValue, "toxicAgentOther", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Tiếp xúc với tác nhân độc hại"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "toxicAgentOther.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
        <label className="w-full sm:col-span-6 font-bold">
          Có ai trong gia đình và họ hàng mắc bệnh lý di truyền không?
        </label>
        <Controller
          name="geneticPathologyType"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="sm:col-start-1 w-full mb-3 sm:col-span-3"
              options={FAMILY_LIST}
              {...others}
            />
          )}
        />
        {watchGeneticPathologyType > 0 &&
        <Controller
            name="geneticPathologyReason"
            control={control}
            defaultValue={get(defaultValue, "geneticPathologyReason", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Loại bệnh lý mắc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "geneticPathologyReason.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
        <Controller
          name="geneticPathologyType1"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType1", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="sm:col-start-1 w-full mb-3 sm:col-span-3"
              options={FAMILY_LIST}
              {...others}
            />
          )}
        />
        {watchGeneticPathologyType1 > 0 &&
        <Controller
            name="geneticPathologyReason1"
            control={control}
            defaultValue={get(defaultValue, "geneticPathologyReason1", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Loại bệnh lý mắc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "geneticPathologyReason1.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
        <Controller
          name="geneticPathologyType2"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType2", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="sm:col-start-1 w-full mb-3 sm:col-span-3"
              options={FAMILY_LIST}
              {...others}
            />
          )}
        />
        {watchGeneticPathologyType2 > 0 &&
        <Controller
            name="geneticPathologyReason2"
            control={control}
            defaultValue={get(defaultValue, "geneticPathologyReason2", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Loại bệnh lý mắc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "geneticPathologyReason2.message", "")}
                inputRef={ref}
                {...others}
              />
            )}
        />}
        <Controller
          name="geneticPathologyType3"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType3", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="sm:col-start-1 w-full mb-3 sm:col-span-3"
              options={FAMILY_LIST}
              {...others}
            />
          )}
        />
        {watchGeneticPathologyType3 > 0 &&
        <Controller
            name="geneticPathologyReason3"
            control={control}
            defaultValue={get(defaultValue, "geneticPathologyReason3", "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Loại bệnh lý mắc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, "geneticPathologyReason3.message", "")}
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