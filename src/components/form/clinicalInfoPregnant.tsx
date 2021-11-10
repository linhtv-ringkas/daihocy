import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Input from "components/control/input";
import { FormControlLabel } from "@material-ui/core";
import Checkbox from "components/control/checkbox";
import Select from "components/control/select";

export type FormClinicalInfoPregnantValues = {
  medicalHistory: string;
  diseaseAcquired: boolean;
  diseaseAcquiredOther: string;
  historyDrugAllergy: boolean;
  historyDrugAllergyOther: string;
  timeOfPregnanciesType: number;
  numberOfBirthType:number;
  aliveChild:number;
  miscarriage:number;
  abortion:number;
  stillbirth:number;
  toxicAgent: boolean;
  toxicAgentOther: string;
  menstrualCycleType: number;
  menstrualCycle: string;
  lastDatePeriod: string;
};

interface Props {
  defaultValue?: FormClinicalInfoPregnantValues;
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

const FormClinicalInfoPregnant: React.FC<Props> = ({formControl, defaultValue}) => {
  const {
    control,
    formState: {errors},
    watch,
  } = formControl;

  const watchDiseaseAcquired = watch("diseaseAcquired", false);
  const watchHistoryDrugAllergy = watch("historyDrugAllergy", false);
  const watchToxicAgent = watch("toxicAgent", false);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-2xl mb-6 uppercase">Sinh sản</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="medicalHistory"
          control={control}
          defaultValue={get(defaultValue, "medicalHistory", "")}
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
            <FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox/>}
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
            <FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox/>}
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
          render={({field: {ref, ...others}}) => (
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
          name="timeOfPregnanciesType"
          control={control}
          defaultValue={get(defaultValue, "timeOfPregnanciesType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-3 sm:col-start-1"
              options={[
                {value: 0, label: 'Chưa'},
                {value: 1, label: '2'},
                {value: 2, label: '2'},
                {value: 3, label: '3'},
                {value: 4, label: '>3'},
              ]}
              inputProps={{label: "Số lần có thai"}}
              {...others}
            />
          )}
        />
        <Controller
          name="numberOfBirthType"
          control={control}
          defaultValue={get(defaultValue, "numberOfBirthType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                {value: 0, label: 'Chưa đẻ'},
                {value: 1, label: '2'},
                {value: 2, label: '2'},
                {value: 3, label: '3'},
                {value: 4, label: '>3'},
              ]}
              inputProps={{label: "Số lần đẻ"}}
              {...others}
            />
          )}
        />
        <Controller
          name="aliveChild"
          control={control}
          defaultValue={get(defaultValue, "aliveChild", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-3"
              options={[
                {value: 0, label: '0'},
                {value: 1, label: '2'},
                {value: 2, label: '2'},
                {value: 3, label: '3'},
                {value: 4, label: '>3'},
              ]}
              inputProps={{label: "Số con sống"}}
              {...others}
            />
          )}
        />
        <Controller
          name="aliveStatus"
          control={control}
          defaultValue={get(defaultValue, "aliveStatus", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Tình trạng"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "aliveStatus.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="miscarriage"
          control={control}
          defaultValue={get(defaultValue, "miscarriage", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2 sm:col-start-1"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Sảy"}}
              {...others}
            />
          )}
        />

        <Controller
          name="abortion"
          control={control}
          defaultValue={get(defaultValue, "abortion", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Nạo, hút"}}
              {...others}
            />
          )}
        />

        <Controller
          name="stillbirth"
          control={control}
          defaultValue={get(defaultValue, "stillbirth", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Thai lưu"}}
              {...others}
            />
          )}
        />

        <Controller
          name="toxicAgent"
          control={control}
          defaultValue={get(defaultValue, "toxicAgent", "")}
          render={({field: {ref, ...others}}) => (
            <FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox/>}
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
          render={({field: {ref, ...others}}) => (
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
        <Controller
          name="menstrualCycleType"
          control={control}
          defaultValue={get(defaultValue, "menstrualCycleType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="sm:col-start-1 w-full mb-3 sm:col-span-3"
              options={[
                {value: 0, label: 'Đều'},
                {value: 1, label: 'Không đều'},
                {value: 2, label: 'Khác'},
              ]}
              inputProps={{label: "Chu kỳ kinh"}}
              {...others}
            />
          )}
        />
        <Controller
          name="menstrualCycle"
          control={control}
          defaultValue={get(defaultValue, "menstrualCycle", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Vòng kinh"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "menstrualCycle.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="lastDatePeriod"
          control={control}
          defaultValue={get(defaultValue, "lastDatePeriod", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Ngày đầu của kỳ kinh cuối cùng"
              className="w-full mb-3 sm:col-span-6"
              type="text"
              errorMsg={get(errors, "lastDatePeriod.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

      </div>
    </div>
  );
}

export default FormClinicalInfoPregnant;