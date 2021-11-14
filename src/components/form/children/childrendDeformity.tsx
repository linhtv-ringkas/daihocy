import Input from "components/control/input";
import Select from "components/control/select";
import useWatchFormData from "hooks/useWatchFormData";
import { chain, get } from "lodash";
import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import * as yup from "yup";

export type FormChildrenDeformityValues = {
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

export const FormChildrenDeformitySchema = {
  phone: yup
    .string()
    .required("Vui lòng điền số điện thoại"),
  fullName: yup
    .string()
    .required("Vui lòng điền họ tên"),
}

interface Props {
  defaultValue?: FormChildrenDeformityValues;
  formControl: UseFormReturn<any>
}

const FormChildrenDeformity: React.FC<Props> = ({ formControl, defaultValue }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = formControl;
  const fields = [
    { key1: "headache", key2: "headacheDetail", title: "Tật đầu mặt", defaultValue: 1 },
    { key1: "digest", key2: "digestDetail", title: "Tật ống tiêu hóa", defaultValue: 1 },
    { key1: "eyes", key2: "eyesDetail", title: "Tật của mắt", defaultValue: 1 },
    { key1: "genital", key2: "genitalDetail", title: "Tật cơ quan sinh dục", defaultValue: 1 },
    { key1: "ears", key2: "earsDetail", title: "Tật của tai", defaultValue: 1 },
    { key1: "blood", key2: "bloodDetail", title: "Tật tuần hoàn máu", defaultValue: 1 },
    { key1: "bone", key2: "boneDetail", title: "Tật của xương", defaultValue: 1 },
    { key1: "nerve", key2: "nerveDetail", title: "Tật hệ thần kinh", defaultValue: 1 },
    { key1: "skinMuscle", key2: "skinMuscleDetail", title: "Tật của da, cơ", defaultValue: 1 },
    { key1: "anotherAgency", key2: "anotherAgencyDetail", title: "Cơ quan khác", defaultValue: 1 },
  ]
  const watchFieldArr = chain(fields).keyBy('key1').mapValues('defaultValue').value();
  const watchData = useWatchFormData(watchFieldArr, watch)

  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-md mb-6 uppercase">Các dị tật quan sát được</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        {fields.map(field => (<React.Fragment key={field.key1}>
          <Controller
            name={field.key1}
            control={control}
            defaultValue={get(defaultValue, field.key1, 1)}
            render={({ field: { ref, ...others } }) => (
              <Select
                className="w-full mb-3 sm:col-span-3 sm:col-start-1"
                options={[
                  { value: 1, label: "Không" },
                  { value: 2, label: "Có" },
                ]}
                inputProps={{ label: field.title }}
                {...others}
              />
            )}
          />
          {watchData[field.key1] === 2 && (
            <Controller
              name={field.key2}
              control={control}
              defaultValue={get(defaultValue, field.key2, "")}
              render={({ field: { ref, ...others } }) => (
                <Input
                  label={field.title}
                  className="w-full mb-3 sm:col-span-3"
                  type="text"
                  errorMsg={get(errors, [field.key2, "message"], "")}
                  inputRef={ref}
                  {...others}
                />
              )}
            />
          )}
        </React.Fragment>))}
      </div>
    </div>
  );
}

export default FormChildrenDeformity;