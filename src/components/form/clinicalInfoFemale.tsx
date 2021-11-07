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
  fTimeOfPregnanciesType: number;
  fNumberOfBirthType:number;
  fAliveChild:number;
  fPrematureBirthType:number;
  fPrematureBirth: string;
  fDieChildType:number;
  fDieChild: string;
  fDeformityChildType:number;
  fDeformityChild: string;
  fMiscarriage:number;
  fAbortion:number;
  fStillbirth:number;
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
  fMenstrualCycleType: number;
  fMenstrualCycle: string;
  fLastDatePeriod: string;
  fPara: string;
  fDiagnosticType: number;
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
  const watchFPrematureBirthType = watch("fPrematureBirthType", 0);
  const watchFDieChildType = watch("fDieChildType", 0);
  const watchFDeformityChildType = watch("fDeformityChildType", 0);

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-2xl mb-6 uppercase">THÔNG TIN LÂM SÀNG</div>
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
          name="fTimeOfPregnanciesType"
          control={control}
          defaultValue={get(defaultValue, "fTimeOfPregnanciesType", 0)}
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
          name="fNumberOfBirthType"
          control={control}
          defaultValue={get(defaultValue, "fNumberOfBirthType", 0)}
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
          name="fAliveChild"
          control={control}
          defaultValue={get(defaultValue, "fAliveChild", 0)}
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
          name="fPrematureBirthType"
          control={control}
          defaultValue={get(defaultValue, "fPrematureBirthType", 0)}
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
          name="fPrematureBirth"
          control={control}
          defaultValue={get(defaultValue, "fPrematureBirth", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Bao nhiêu tuần?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "fPrematureBirth.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

        <Controller
          name="fDieChildType"
          control={control}
          defaultValue={get(defaultValue, "fDieChildType", 0)}
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
          name="fDieChild"
          control={control}
          defaultValue={get(defaultValue, "fDieChild", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Lý do chết?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "fDieChild.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

        <Controller
          name="fDeformityChildType"
          control={control}
          defaultValue={get(defaultValue, "fDeformityChildType", 0)}
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
          name="fDeformityChild"
          control={control}
          defaultValue={get(defaultValue, "fDeformityChild", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Loại di tật là gì?"
              className="w-full mb-3 sm:col-span-4"
              type="text"
              errorMsg={get(errors, "fDeformityChild.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />}

        <Controller
          name="fMiscarriage"
          control={control}
          defaultValue={get(defaultValue, "fMiscarriage", 0)}
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
          name="fAbortion"
          control={control}
          defaultValue={get(defaultValue, "fAbortion", 0)}
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
          name="fStillbirth"
          control={control}
          defaultValue={get(defaultValue, "fStillbirth", 0)}
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
          name="fMenstrualCycleType"
          control={control}
          defaultValue={get(defaultValue, "fMenstrualCycleType", 0)}
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
          name="fMenstrualCycle"
          control={control}
          defaultValue={get(defaultValue, "fMenstrualCycle", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Vòng kinh"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "fMenstrualCycle.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="fLastDatePeriod"
          control={control}
          defaultValue={get(defaultValue, "fLastDatePeriod", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="Ngày đầu của kỳ kinh cuối cùng"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "fLastDatePeriod.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="fPara"
          control={control}
          defaultValue={get(defaultValue, "fPara", "")}
          render={({field: {ref, ...others}}) => (
            <Input
              label="PARA"
              className="w-full mb-3 sm:col-span-3"
              type="text"
              errorMsg={get(errors, "fPara.message", "")}
              inputRef={ref}
              {...others}
            />
          )}
        />

        <Controller
          name="fDiagnosticType"
          control={control}
          defaultValue={get(defaultValue, "fDiagnosticType", 1)}
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