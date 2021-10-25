import React from "react";
import { Control, Controller, FieldErrors, UseFormWatch } from "react-hook-form";
import { get } from "lodash";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Select from "../control/select";
import Input from "../control/input";

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
  control: Control<any>;
  errors: FieldErrors;
  watch: UseFormWatch<any>
  defaultValue?: FormStimulantValues
}

const FormStimulant: React.FC<Props> = ({control, errors, defaultValue, watch}) => {
  const watchIsCigarette = watch("isCigarette", false);
  const watchIsPipeTobacco = watch("isPipeTobacco", false);
  const watchIsBeer = watch("isBeer", false);
  const watchIsAlcohol = watch("isAlcohol", false);
  const watchStimulantType = watch("stimulantType", false);

  return (<div className="mb-6">
    <div className="font-bold text-2xl mb-6">CHẤT KÍCH THÍCH</div>
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
      {watchIsCigarette && (<>
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
      {watchIsPipeTobacco && (<>
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
      {watchIsBeer && (<>
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
      {watchIsAlcohol && (<>
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
      {watchStimulantType && (<>
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