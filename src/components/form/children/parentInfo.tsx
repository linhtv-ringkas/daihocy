import { Checkbox, FormControlLabel } from "@material-ui/core";
import Input from "components/control/input";
import Select from "components/control/select";
import useWatchFormData from "hooks/useWatchFormData";
import { get, transform } from "lodash";
import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";

const YEAR_LIST = (() => {
  let index = 1900;
  const result = []
  const yearNow = new Date().getFullYear();
  while (index <= yearNow) {
    result.push({
      value: index,
      label: index
    })
    index++;
  }
  return result;
})();
const JOB = [
  {
    value: 1,
    label: "Văn phòng"
  }, {
    value: 2,
    label: "Công nhân"
  }, {
    value: 3,
    label: "Nông dân"
  }, {
    value: 4,
    label: "Buôn bán"
  }, {
    value: 5,
    label: "Y tế"
  }, {
    value: 6,
    label: "Khác"
  },
]
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
export type FormFatherInfoValues = {
  headache: number;
  headacheDetail: string;
  digest: number;
  digestDetail: string;
  eyes: number;
  eyesDetail: string;
  genital: number;
  genitalDetail: string;
  ears: number;
  earsDetail: string;
  blood: number;
  bloodDetail: string;
  bone: number;
  boneDetail: string;
  nerve: number;
  nerveDetail: string;
  skinMuscle: number;
  skinMuscleDetail: string;
  anotherAgency: number;
  anotherAgencyDetail: string;
};

export type FormMotherInfoValues = {
  headache: number;
  headacheDetail: string;
  digest: number;
  digestDetail: string;
  eyes: number;
  eyesDetail: string;
  genital: number;
  genitalDetail: string;
  ears: number;
  earsDetail: string;
  blood: number;
  bloodDetail: string;
  bone: number;
  boneDetail: string;
  nerve: number;
  nerveDetail: string;
  skinMuscle: number;
  skinMuscleDetail: string;
  anotherAgency: number;
  anotherAgencyDetail: string;
};

interface Props {
  defaultValue?: FormFatherInfoValues | FormMotherInfoValues;
  formControl: UseFormReturn<any>;
  formType: "father" | "mother"
}

const FormParentInfo: React.FC<Props> = ({ formControl, defaultValue, formType }) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue
  } = formControl;
  const fields = {
    father: {
      //Thông tin chung
      phone: { key: "dadPhone", defaultValue: "" },
      fullName: { key: "dadFullName", defaultValue: "" },
      address: { key: "dadAddress", defaultValue: "" },
      nation: { key: "dadNation", defaultValue: "" },
      yearOfBirth: { key: "dadYearOfBirth", defaultValue: "" },
      careerType: { key: "dadCareerType", defaultValue: "" },
      height: { key: "dadHeight", defaultValue: "" },
      weight: { key: "dadWeight", defaultValue: "" },
      BMI: { key: "dadBMI", defaultValue: "" },
      //Chất kích thích
      isCigarette: { key: "dadIsCigarette", defaultValue: false },
      numberOfCigaretteType: { key: "dadNumberOfCigaretteType", defaultValue: 0 },
      yearOfCigaretteType: { key: "dadYearOfCigaretteType", defaultValue: 0 },
      isPipeTobacco: { key: "dadIsPipeTobacco", defaultValue: false },
      numberOfPipeTobaccoType: { key: "dadNumberOfPipeTobaccoType", defaultValue: 0 },
      yearOfPipeTobaccoType: { key: "dadYearOfPipeTobaccoType", defaultValue: 0 },
      isBeer: { key: "dadIsBeer", defaultValue: false },
      numberOfBeerType: { key: "dadNumberOfBeerType", defaultValue: 0 },
      yearOfBeerType: { key: "dadYearOfBeerType", defaultValue: 0 },
      isAlcohol: { key: "dadIsAlcohol", defaultValue: false },
      numberOfAlcoholType: { key: "dadNumberOfAlcoholType", defaultValue: 0 },
      yearOfAlcoholType: { key: "dadYearOfAlcoholType", defaultValue: 0 },
      stimulantType: { key: "dadStimulantType", defaultValue: false },
      stimulant: { key: "dadStimulant", defaultValue: "" },
      //Thông tin lâm sàng
      medicalHistory: { key: "dadMedicalHistory", defaultValue: "" },
      diseaseAcquired: { key: "dadDiseaseAcquired", defaultValue: false },
      diseaseAcquiredOther: { key: "dadDiseaseAcquiredOther", defaultValue: "" },
      historyDrugAllergy: { key: "dadHistoryDrugAllergy", defaultValue: false },
      historyDrugAllergyOther: { key: "dadHistoryDrugAllergyOther", defaultValue: "" },
      toxicAgent: { key: "dadToxicAgent", defaultValue: false },
      toxicAgentOther: { key: "dadToxicAgentOther", defaultValue: "" },
      geneticPathologyType: { key: "dadGeneticPathologyType", defaultValue: 1 },
    },
    mother: {
      //Thông tin chung
      phone: { key: "momPhone", defaultValue: "" },
      fullName: { key: "momFullName", defaultValue: "" },
      address: { key: "momAddress", defaultValue: "" },
      nation: { key: "momNation", defaultValue: "" },
      yearOfBirth: { key: "momYearOfBirth", defaultValue: "" },
      careerType: { key: "momCareerType", defaultValue: "" },
      height: { key: "momHeight", defaultValue: "" },
      weight: { key: "momWeight", defaultValue: "" },
      BMI: { key: "momBMI", defaultValue: "" },
      //Chất kích thích
      isCigarette: { key: "momIsCigarette", defaultValue: false },
      numberOfCigaretteType: { key: "momNumberOfCigaretteType", defaultValue: 0 },
      yearOfCigaretteType: { key: "momYearOfCigaretteType", defaultValue: 0 },
      isPipeTobacco: { key: "momIsPipeTobacco", defaultValue: false },
      numberOfPipeTobaccoType: { key: "momNumberOfPipeTobaccoType", defaultValue: 0 },
      yearOfPipeTobaccoType: { key: "momYearOfPipeTobaccoType", defaultValue: 0 },
      isBeer: { key: "momIsBeer", defaultValue: false },
      numberOfBeerType: { key: "momNumberOfBeerType", defaultValue: 0 },
      yearOfBeerType: { key: "momYearOfBeerType", defaultValue: 0 },
      isAlcohol: { key: "momIsAlcohol", defaultValue: false },
      numberOfAlcoholType: { key: "momNumberOfAlcoholType", defaultValue: 0 },
      yearOfAlcoholType: { key: "momYearOfAlcoholType", defaultValue: 0 },
      stimulantType: { key: "momStimulantType", defaultValue: false },
      stimulant: { key: "momStimulant", defaultValue: "" },
      //Thông tin lâm sàng
      medicalHistory: { key: "momMedicalHistory", defaultValue: "" },
      diseaseAcquired: { key: "momDiseaseAcquired", defaultValue: false },
      diseaseAcquiredOther: { key: "momDiseaseAcquiredOther", defaultValue: "" },
      historyDrugAllergy: { key: "momHistoryDrugAllergy", defaultValue: false },
      historyDrugAllergyOther: { key: "momHistoryDrugAllergyOther", defaultValue: "" },
      toxicAgent: { key: "momToxicAgent", defaultValue: false },
      toxicAgentOther: { key: "momToxicAgentOther", defaultValue: "" },
      geneticPathologyType: { key: "momGeneticPathologyType", defaultValue: 1 },
    }
  }

  const watchFieldArr = transform(fields[formType], function (result: { [key: string]: any }, value, key) {
    result[value.key] = value.defaultValue
  }, {});
  const watchData = useWatchFormData(watchFieldArr, watch);
  const watchHeight = watchData[fields[formType]['height']['key']];
  const watchWeight = watchData[fields[formType]['weight']['key']];
  useEffect(() => {
    if (watchHeight > 0 && watchWeight > 0) {
      const height = watchHeight / 100
      const bmi = watchWeight / (height * height)
      setValue(fields[formType]['BMI']['key'], Math.round(bmi * 100) / 100);
    } else {
      setValue(fields[formType]['BMI']['key'], 0);
    }
  }, [watchHeight, watchWeight])
  return (
    <>
      <div className="font-bold text-xl mb-6 uppercase pl-5">{formType === 'father' ? 'Thông tin của bố' : 'Thông tin của mẹ'}</div>
      <div className="my-6 p-6 bg-white rounded-2xl">
        <div className="font-bold text-md mb-6 uppercase">Thông tin chung</div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <Controller
            name={fields[formType]['phone']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['phone']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Số điện thoại *"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, `${fields[formType]['phone']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['fullName']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['fullName']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Họ và tên"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, `${fields[formType]['fullName']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['address']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['address']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Địa chỉ"
                className="w-full mb-3 sm:col-span-6"
                type="text"
                errorMsg={get(errors, `${fields[formType]['address']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['nation']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['nation']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Dân tộc"
                className="w-full mb-3 sm:col-span-3"
                type="text"
                errorMsg={get(errors, `${fields[formType]['nation']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['yearOfBirth']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['yearOfBirth']['key'], "")}
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
            name={fields[formType]['careerType']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['careerType']['key'], "")}
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
            name={fields[formType]['BMI']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['BMI']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="BMI"
                className="w-full mb-3 sm:col-span-3"
                type="number"
                disabled={true}
                errorMsg={get(errors, `${fields[formType]['BMI']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['height']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['height']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Chiều cao"
                className="w-full mb-3 sm:col-start-1 sm:col-span-3"
                type="number"
                errorMsg={get(errors, `${fields[formType]['height']['key']}.message`, "")}
                inputRef={ref}
                endAdornment={<span className="transform translate-y-[0.125rem] pl-2 text-primary-4">cm</span>}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['weight']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['weight']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Cân nặng"
                className="w-full mb-3 sm:col-span-3"
                type="number"
                errorMsg={get(errors, `${fields[formType]['weight']['key']}.message`, "")}
                inputRef={ref}
                endAdornment={<span className="ransform translate-y-[0.125rem] pl-2 text-primary-4">kg</span>}
                {...others}
              />
            )}
          />

        </div>
      </div>

      <div className="my-6 p-6 bg-white rounded-2xl">
        <div className="font-bold text-md mb-6 uppercase">Chất kích thích</div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <Controller
            name={fields[formType]['isCigarette']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['isCigarette']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-2"
              control={<Checkbox />}
              label="Hút thuốc lá"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['isCigarette']['key']] > 0 && (<>
            <Controller
              name={fields[formType]['numberOfCigaretteType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['numberOfCigaretteType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số điếu/ngày" }}
                {...others}
              />)}
            />
            <Controller
              name={fields[formType]['yearOfCigaretteType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['yearOfCigaretteType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số năm hút" }}
                {...others}
              />)}
            />
          </>)}

          <Controller
            name={fields[formType]['isPipeTobacco']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['isPipeTobacco']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-2"
              control={<Checkbox />}
              label="Hút thuốc lào"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['isPipeTobacco']['key']] > 0 && (<>
            <Controller
              name={fields[formType]['numberOfPipeTobaccoType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['numberOfPipeTobaccoType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số điếu/ngày" }}
                {...others}
              />)}
            />
            <Controller
              name={fields[formType]['yearOfPipeTobaccoType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['yearOfPipeTobaccoType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số năm hút" }}
                {...others}
              />)}
            />
          </>)}

          <Controller
            name={fields[formType]['isBeer']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['isBeer']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-2"
              control={<Checkbox />}
              label="Bia"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['isBeer']['key']] > 0 && (<>
            <Controller
              name={fields[formType]['numberOfBeerType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['numberOfBeerType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số điếu/ngày" }}
                {...others}
              />)}
            />
            <Controller
              name={fields[formType]['yearOfBeerType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['yearOfBeerType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "Số lần/tuần", value: 0 },
                  { label: "1", value: 1 },
                  { label: "2-3", value: 2 },
                  { label: ">3", value: 3 }
                ]}
                inputProps={{ label: "Số lần/tuần" }}
                {...others}
              />)}
            />
          </>)}
          <Controller
            name={fields[formType]['isAlcohol']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['isAlcohol']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-2"
              control={<Checkbox />}
              label="Rượu"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['isAlcohol']['key']] > 0 && (<>
            <Controller
              name={fields[formType]['numberOfAlcoholType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['numberOfAlcoholType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "0", value: 0 },
                  { label: "<5", value: 1 },
                  { label: "5-10", value: 2 },
                  { label: ">10", value: 3 }
                ]}
                inputProps={{ label: "Số cốc/lần" }}
                {...others}
              />)}
            />
            <Controller
              name={fields[formType]['yearOfAlcoholType']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['yearOfAlcoholType']['key'], "")}
              render={({ field: { ref, ...others } }) => (<Select
                className="w-full mb-3 sm:col-span-2"
                options={[
                  { label: "Số lần/tuần", value: 0 },
                  { label: "1", value: 1 },
                  { label: "2-3", value: 2 },
                  { label: ">3", value: 3 }
                ]}
                inputProps={{ label: "Số lần/tuần" }}
                {...others}
              />)}
            />
          </>)}

          <Controller
            name={fields[formType]['stimulantType']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['stimulantType']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-2"
              control={<Checkbox />}
              label="Khác"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['stimulantType']['key']] > 0 && (<>
            <Controller
              name={fields[formType]['stimulant']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['stimulant']['key'], "")}
              render={({ field: { ref, ...others } }) => (
                <Input
                  label="Khác"
                  className="w-full mb-3 sm:col-span-4"
                  type="text"
                  errorMsg={get(errors, `${fields[formType]['stimulant']['key']}.message`, "")}
                  inputRef={ref}
                  {...others}
                />
              )}
            />
          </>)}
        </div>
      </div>

      <div className="my-6 p-6 bg-white rounded-2xl">
        <div className="font-bold text-md mb-6 uppercase">Thông tin lâm sàng</div>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <Controller
            name={fields[formType]['medicalHistory']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['medicalHistory']['key'], "")}
            render={({ field: { ref, ...others } }) => (
              <Input
                label="Bênh sử"
                className="w-full mb-3 sm:col-span-6"
                type="text"
                errorMsg={get(errors, `${fields[formType]['medicalHistory']['key']}.message`, "")}
                inputRef={ref}
                {...others}
              />
            )}
          />
          <Controller
            name={fields[formType]['diseaseAcquired']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['diseaseAcquired']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Bệnh tật đã mắc"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['diseaseAcquired']['key']] > 0 && (
            <Controller
              name={fields[formType]['diseaseAcquiredOther']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['diseaseAcquiredOther']['key'], "")}
              render={({ field: { ref, ...others } }) => (
                <Input
                  label="Bệnh tật đã mắc"
                  className="w-full mb-3 sm:col-span-3"
                  type="text"
                  errorMsg={get(errors, `${fields[formType]['diseaseAcquiredOther']['key']}.message`, "")}
                  inputRef={ref}
                  {...others}
                />
              )}
            />)}

          <Controller
            name={fields[formType]['historyDrugAllergy']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['historyDrugAllergy']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Tiền sử ngộ độc/dị ứng thuốc"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['historyDrugAllergy']['key']] > 0 && (
            <Controller
              name={fields[formType]['historyDrugAllergyOther']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['historyDrugAllergyOther']['key'], "")}
              render={({ field: { ref, ...others } }) => (
                <Input
                  label="Tiền sử ngộ độc/dị ứng thuốc"
                  className="w-full mb-3 sm:col-span-3"
                  type="text"
                  errorMsg={get(errors, `${fields[formType]['historyDrugAllergyOther']['key']}.message`, "")}
                  inputRef={ref}
                  {...others}
                />
              )}
            />)}

          <Controller
            name={fields[formType]['toxicAgent']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['toxicAgent']['key'], "")}
            render={({ field: { ref, ...others } }) => (<FormControlLabel
              className="sm:col-start-1 sm:col-span-3"
              control={<Checkbox />}
              label="Tiếp xúc với tác nhân độc hại"
              labelPlacement="end"
              {...others}
            />)}
          />
          {+watchData[fields[formType]['toxicAgent']['key']] > 0 && (
            <Controller
              name={fields[formType]['toxicAgentOther']['key']}
              control={control}
              defaultValue={get(defaultValue, fields[formType]['toxicAgentOther']['key'], "")}
              render={({ field: { ref, ...others } }) => (
                <Input
                  label="Tiếp xúc với tác nhân độc hại"
                  className="w-full mb-3 sm:col-span-3"
                  type="text"
                  errorMsg={get(errors, `${fields[formType]['toxicAgentOther']['key']}.message`, "")}
                  inputRef={ref}
                  {...others}
                />
              )}
            />)}

          <label className="w-full sm:col-span-6 font-bold">
            Có ai trong gia đình và họ hàng mắc bệnh lý di truyền không?
          </label>
          <Controller
            name={fields[formType]['geneticPathologyType']['key']}
            control={control}
            defaultValue={get(defaultValue, fields[formType]['geneticPathologyType']['key'], 0)}
            render={({ field: { ref, ...others } }) => (
              <Select
                className="sm:col-start-1 w-full mb-3 sm:col-span-3"
                options={FAMILY_LIST}
                {...others}
              />
            )}
          />
          {formType === 'mother' && (
            <Controller
              name="diagnosticType"
              control={control}
              defaultValue={get(defaultValue, "diagnosticType", 1)}
              render={({ field: { ref, ...others } }) => (
                <Select
                  className="w-full mb-3 sm:col-span-6"
                  options={[
                    { value: 1, label: 'Không' },
                    { value: 2, label: 'Dị tật bẩm sinh' },
                    { value: 3, label: 'Trước hôn nhân' },
                    { value: 4, label: 'Sàng lọc trước sinh' },
                    { value: 5, label: 'Di truyền sinh sản' },
                    { value: 6, label: 'Khác' },
                  ]}
                  inputProps={{ label: "Chuẩn đoán" }}
                  {...others}
                />
              )}
            />)}
        </div>
      </div>
    </>
  );
}

export default FormParentInfo;