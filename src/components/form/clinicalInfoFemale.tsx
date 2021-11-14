import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Input from "components/control/input";
import { FormControlLabel } from "@material-ui/core";
import Checkbox from "components/control/checkbox";
import Select from "components/control/select";

export type FormClinicalInfoFemaleValues = {
  medicalHistory: string;
  diseaseAcquired: boolean;
  diseaseAcquiredOther: string;
  historyDrugAllergy: boolean;
  historyDrugAllergyOther: string;
  timeOfPregnanciesType: number;
  numberOfBirthType:number;
  aliveChild:number;
  prematureBirthType:number;
  prematureBirth: string;
  dieChildType:number;
  dieChild: string;
  deformityChildType:number;
  deformityChild: string;
  miscarriage:number;
  abortion:number;
  stillbirth:number;
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
  menstrualCycleType: number;
  menstrualCycle: string;
  lastDatePeriod: string;
  para: string;
  diagnosticType: number;
};

interface Props {
  defaultValue?: FormClinicalInfoFemaleValues;
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

const FormClinicalInfoFemale: React.FC<Props> = ({formControl, defaultValue}) => {
  const {
    control,
    formState: {errors},
    watch,
  } = formControl;

  const watchDiseaseAcquired = watch("diseaseAcquired", false);
  const watchHistoryDrugAllergy = watch("historyDrugAllergy", false);
  const watchToxicAgent = watch("toxicAgent", false);
  const watchGeneticPathologyType = watch("geneticPathologyType", 0);
  const watchGeneticPathologyType1 = watch("geneticPathologyType1", 0);
  const watchGeneticPathologyType2 = watch("geneticPathologyType2", 0);
  const watchGeneticPathologyType3 = watch("geneticPathologyType3", 0);
  const watchFPrematureBirthType = watch("prematureBirthType", 0);
  const watchFDieChildType = watch("dieChildType", 0);
  const watchFDeformityChildType = watch("deformityChildType", 0);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-md mb-6 uppercase">THÔNG TIN LÂM SÀNG</div>
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
              className="w-full mb-3 sm:col-span-2 sm:col-start-1"
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
              className="w-full mb-3 sm:col-span-2"
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
              className="w-full mb-3 sm:col-span-2"
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
          name="prematureBirthType"
          control={control}
          defaultValue={get(defaultValue, "prematureBirthType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2 sm:col-start-1"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Số lần đẻ non"}}
              {...others}
            />
          )}
        />
        {+watchFPrematureBirthType > 0 &&
        <Controller
          name="prematureBirth"
          control={control}
          defaultValue={get(defaultValue, "prematureBirth", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Bao nhiêu tuần?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "prematureBirth.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

        <Controller
          name="dieChildType"
          control={control}
          defaultValue={get(defaultValue, "dieChildType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2 sm:col-start-1"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Số con chết"}}
              {...others}
            />
          )}
        />
        {+watchFDieChildType > 0 &&
        <Controller
          name="dieChild"
          control={control}
          defaultValue={get(defaultValue, "dieChild", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Lý do chết?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "dieChild.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

        <Controller
          name="deformityChildType"
          control={control}
          defaultValue={get(defaultValue, "deformityChildType", 0)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-2 sm:col-start-1"
              options={[
                {value: 0, label: 'Không'},
                {value: 1, label: 'Có'},
              ]}
              inputProps={{label: "Số con dị tật"}}
              {...others}
            />
          )}
        />
        {+watchFDeformityChildType > 0 &&
        <Controller
          name="deformityChild"
          control={control}
          defaultValue={get(defaultValue, "deformityChild", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Loại di tật là gì?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "deformityChild.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

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
        <label className="w-full sm:col-span-6 font-bold">
          Có ai trong gia đình và họ hàng mắc bệnh lý di truyền không?
        </label>
        <Controller
          name="geneticPathologyType"
          control={control}
          defaultValue={get(defaultValue, "geneticPathologyType", 0)}
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
          render={({field: {ref, ...others}}) => (
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
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "lastDatePeriod.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="para"
          control={control}
          defaultValue={get(defaultValue, "para", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="PARA"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "para.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="diagnosticType"
          control={control}
          defaultValue={get(defaultValue, "diagnosticType", 1)}
          render={({field: {ref, ...others}}) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                {value: 1, label: 'Không'},
                {value: 2, label: 'Dị tật bẩm sinh'},
                {value: 3, label: 'Trước hôn nhân'},
                {value: 4, label: 'Sàng lọc trước sinh'},
                {value: 5, label: 'Di truyền sinh sản'},
                {value: 6, label: 'Khác'},
              ]}
              inputProps={{label: "Chuẩn đoán"}}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormClinicalInfoFemale;