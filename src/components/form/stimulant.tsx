import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import { FormControlLabel } from "@material-ui/core";
import Select from "components/control/select";
import Input from "components/control/input";
import Checkbox from "components/control/checkbox";

export type FormStimulantValues = {
  isCigarette: boolean;
  isPipeTobacco: boolean;
  isBeer: boolean;
  isAlcohol: boolean;
  stimulantType: boolean;
  numberOfCigaretteType:number;
  yearOfCigaretteType:number;
  numberOfPipeTobaccoType:number;
  yearOfPipeTobaccoType:number;
  numberOfBeerType:number;
  timeOfBeerType:number;
  numberOfAlcoholType:number;
  timeOfAlcoholType:number;
  stimulant:string;
};

const NUMBER_ARRAY = [{
  label: "0", value: 0
}, {
  label: "<5", value: 1
}, {
  label: "5-10", value: 2
}, {
  label: ">10", value: 3
},]


interface Props {
  defaultValue?: FormStimulantValues;
  formControl: UseFormReturn<any>
}

const FormStimulant: React.FC<Props> = ({formControl, defaultValue}) => {
  const {
    control,
    formState: { errors },
    watch
  } = formControl;

  const watchIsCigarette = watch("isCigarette", false);
  const watchIsPipeTobacco = watch("isPipeTobacco", false);
  const watchIsBeer = watch("isBeer", false);
  const watchIsAlcohol = watch("isAlcohol", false);
  const watchStimulantType = watch("stimulantType", false);

  return ( <div className="my-6 p-6 bg-white rounded-2xl">
    <div className="font-bold text-md mb-6 uppercase">CHẤT KÍCH THÍCH</div>
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
      <Controller
        name="isCigarette"
        control={control}
        defaultValue={get(defaultValue, "isCigarette", false)}
        render={({field: {ref, ...others}}) => (<FormControlLabel
          className="col-start-1 sm:col-span-2"
          control={<Checkbox/>}
          label="Hút thuốc lá"
          labelPlacement="end"
          {...others}
        />)}
      />
      {+watchIsCigarette > 0 && (<>
        <Controller
          name="numberOfCigaretteType"
          control={control}
          defaultValue={get(defaultValue, "numberOfCigaretteType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số điếu/ngày"}}
              {...others}
            />)}
        />
        <Controller
          name="yearOfCigaretteType"
          control={control}
          defaultValue={get(defaultValue, "yearOfCigaretteType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số năm hút"}}
              {...others}
            />)}
        />
      </>)}
      <Controller
        name="isPipeTobacco"
        control={control}
        defaultValue={get(defaultValue, "isPipeTobacco", false)}
        render={({field: {ref, ...others}}) => (<FormControlLabel
          className="sm:col-start-1 sm:col-span-2"
          control={<Checkbox/>}
          label="Hút thuốc lào"
          labelPlacement="end"
          {...others}
        />)}
      />
      {+watchIsPipeTobacco > 0 && (<>
        <Controller
          name="numberOfPipeTobaccoType"
          control={control}
          defaultValue={get(defaultValue, "numberOfPipeTobaccoType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số điếu/ngày"}}
              {...others}
            />)}
        />
        <Controller
          name="yearOfPipeTobaccoType"
          control={control}
          defaultValue={get(defaultValue, "yearOfPipeTobaccoType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số năm hút"}}
              {...others}
            />)}
        />
      </>)}
      <Controller
        name="isBeer"
        control={control}
        defaultValue={get(defaultValue, "isBeer", false)}
        render={({field: {ref, ...others}}) => (<FormControlLabel
          className="sm:col-start-1 sm:col-span-2"
          control={<Checkbox/>}
          label="Bia"
          labelPlacement="end"
          {...others}
        />)}
      />
      {+watchIsBeer > 0 && (<>
        <Controller
          name="numberOfBeerType"
          control={control}
          defaultValue={get(defaultValue, "numberOfBeerType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số cốc/lần"}}
            {...others}
          />)}
        />
        <Controller
          name="timeOfBeerType"
          control={control}
          defaultValue={get(defaultValue, "timeOfBeerType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số lần/tuần"}}
            {...others}
          />)}
        />
      </>)}
      <Controller
        name="isAlcohol"
        control={control}
        defaultValue={get(defaultValue, "isAlcohol", false)}
        render={({field: {ref, ...others}}) => (<FormControlLabel
          className="sm:col-start-1 sm:col-span-2"
          control={<Checkbox/>}
          label="Rượu"
          labelPlacement="end"
          {...others}
        />)}
      />
      {+watchIsAlcohol>0 && (<>
        <Controller
          name="numberOfAlcoholType"
          control={control}
          defaultValue={get(defaultValue, "numberOfAlcoholType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số cốc/lần"}}
            {...others}
          />)}
        />
        <Controller
          name="timeOfAlcoholType"
          control={control}
          defaultValue={get(defaultValue, "timeOfAlcoholType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số lần/tuần"}}
            {...others}
          />)}
        />
      </>)}
      <Controller
        name="stimulantType"
        control={control}
        defaultValue={get(defaultValue, "stimulantType", false)}
        render={({field: {ref, ...others}}) => (<FormControlLabel
          className="sm:col-start-1 sm:col-span-2"
          control={<Checkbox/>}
          label="Khác"
          labelPlacement="end"
          {...others}
        />)}
      />
      {+watchStimulantType > 0 && (<>
        <Controller
          name="stimulant"
          control={control}
          defaultValue={get(defaultValue, "stimulant", "")}
          render={({field: {ref, ...others}}) => (<Input
            label="Khác"
            className="col-start-1 w-full mb-3 sm:col-span-4"
            type="text"
            errorMsg={get(errors, "stimulant.message", "")}
            inputRef={ref}
            {...others}
          />)}
        />
      </>)}
    </div>
  </div>);
}

export default FormStimulant;