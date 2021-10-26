import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Select from "../control/select";

export type FormSemenChartInfoValues = {
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
  defaultValue?: FormSemenChartInfoValues;
  formControl: UseFormReturn<any>
}

const DAY_LIST = [
  {
    value: 0,
    label: 'Chọn ngày'
  }, {
    value: 1,
    label: '< 2 ngày'
  }, {
    value: 2,
    label: '2-7 ngày'
  }, {
    value: 3,
    label: '> 7 ngày'
  },
]
const COUNT_LIST = [
  {
    value: 0,
    label: 'Chưa'
  }, {
    value: 1,
    label: '1 lần'
  }, {
    value: 2,
    label: '2 lần'
  }, {
    value: 3,
    label: '> 2 lần'
  },
]

const RESULT_LIST = [
  {
    value: 0,
    label: 'Chưa'
  }, {
    value: 1,
    label: 'Có nhiều tinh trùng'
  }, {
    value: 2,
    label: 'Có ít tinh trùng'
  }, {
    value: 3,
    label: 'Không có tinh trùng'
  },
]

const DIAGNOSE_LIST = [
  {
    value: 0,
    label: 'Chưa'
  }, {
    value: 1,
    label: 'Dị tật bẩm sinh'
  }, {
    value: 2,
    label: 'Trước hôn nhân'
  }, {
    value: 3,
    label: 'Sàng lọc trước sinh'
  },{
    value: 4,
    label: 'Di truyền sinh sản'
  },{
    value: 5,
    label: 'Khác'
  },
]

const FormSemenChartInfo: React.FC<Props>= ({formControl,defaultValue})=> {
  const {
    control,
  } = formControl;

  return (
    <div className="mb-6">
      <div className="font-bold text-2xl mb-6 uppercase">Xét nghiệm tinh dịch đồ</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="nearestEjaculationType"
          control={control}
          defaultValue={get(defaultValue, "nearestEjaculationType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={DAY_LIST}
              inputProps={{ label: "Lần xuất tinh gần nhất cách mấy ngày" }}
              {...others}
            />
          )}
        />
        <Controller
          name="semenTestType"
          control={control}
          defaultValue={get(defaultValue, "semenTestType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={COUNT_LIST}
              inputProps={{ label: "Trước đây đã từng xét nghiệm tinh dịch đồ chưa?" }}
              {...others}
            />
          )}
        />
        <Controller
          name="resultSemenTestTye"
          control={control}
          defaultValue={get(defaultValue, "resultSemenTestTye", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={RESULT_LIST}
              inputProps={{ label: "Kết quả xét nghiệm tinh dịch đồ của lần trước" }}
              {...others}
            />
          )}
        />
        <Controller
          name="mDiagnosticType"
          control={control}
          defaultValue={get(defaultValue, "mDiagnosticType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={DIAGNOSE_LIST}
              inputProps={{ label: "Chẩn đoán" }}
              {...others}
            />
          )}
        />

      </div>
    </div>
  );
}

export default FormSemenChartInfo;