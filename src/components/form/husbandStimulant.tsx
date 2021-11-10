import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import { FormControlLabel } from "@material-ui/core";
import Select from "components/control/select";
import Checkbox from "components/control/checkbox";

export type FormHusbandStimulantValues = {
  husbandIsCigarette: boolean;
  husbandIsPipeTobacco: boolean;
  husbandIsBeer: boolean;
  husbandIsAlcohol: boolean;
  husbandNumberOfCigaretteType:number;
  husbandYearOfCigaretteType:number;
  husbandNumberOfPipeTobaccoType:number;
  husbandYearOfPipeTobaccoType:number;
  husbandNumberOfBeerType:number;
  husbandTimeOfBeerType:number;
  husbandNumberOfAlcoholType:number;
  husbandTimeOfAlcoholType:number;
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
  defaultValue?: FormHusbandStimulantValues;
  formControl: UseFormReturn<any>
}

const FormHusbandStimulant: React.FC<Props> = ({formControl, defaultValue}) => {
  const {
    control,
    formState: { errors },
    watch
  } = formControl;

  const watchIsCigarette = watch("husbandIsCigarette", false);
  const watchIsPipeTobacco = watch("husbandIsPipeTobacco", false);
  const watchIsBeer = watch("husbandIsBeer", false);
  const watchIsAlcohol = watch("husbandIsAlcohol", false);

  return ( <div className="my-6 p-6 bg-white rounded-2xl">
    <div className="font-bold text-2xl mb-6 uppercase">CHẤT KÍCH THÍCH</div>
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
      <Controller
        name="husbandIsCigarette"
        control={control}
        defaultValue={get(defaultValue, "husbandIsCigarette", false)}
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
          name="husbandNumberOfCigaretteType"
          control={control}
          defaultValue={get(defaultValue, "husbandNumberOfCigaretteType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số điếu/ngày"}}
              {...others}
            />)}
        />
        <Controller
          name="husbandYearOfCigaretteType"
          control={control}
          defaultValue={get(defaultValue, "husbandYearOfCigaretteType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số năm hút"}}
              {...others}
            />)}
        />
      </>)}
      <Controller
        name="husbandIsPipeTobacco"
        control={control}
        defaultValue={get(defaultValue, "husbandIsPipeTobacco", false)}
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
          name="husbandNumberOfPipeTobaccoType"
          control={control}
          defaultValue={get(defaultValue, "husbandNumberOfPipeTobaccoType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số điếu/ngày"}}
              {...others}
            />)}
        />
        <Controller
          name="husbandYearOfPipeTobaccoType"
          control={control}
          defaultValue={get(defaultValue, "husbandYearOfPipeTobaccoType", 0)}
          render={({field: {ref, ...others}}) => (<Select
              className="w-full mb-3 sm:col-span-2"
              options={NUMBER_ARRAY}
              inputProps={{label: "Số năm hút"}}
              {...others}
            />)}
        />
      </>)}
      <Controller
        name="husbandIsBeer"
        control={control}
        defaultValue={get(defaultValue, "husbandIsBeer", false)}
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
          name="husbandNumberOfBeerType"
          control={control}
          defaultValue={get(defaultValue, "husbandNumberOfBeerType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số cốc/lần"}}
            {...others}
          />)}
        />
        <Controller
          name="husbandTimeOfBeerType"
          control={control}
          defaultValue={get(defaultValue, "husbandTimeOfBeerType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số lần/tuần"}}
            {...others}
          />)}
        />
      </>)}
      <Controller
        name="husbandIsAlcohol"
        control={control}
        defaultValue={get(defaultValue, "husbandIsAlcohol", false)}
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
          name="husbandNumberOfAlcoholType"
          control={control}
          defaultValue={get(defaultValue, "husbandNumberOfAlcoholType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số cốc/lần"}}
            {...others}
          />)}
        />
        <Controller
          name="husbandTimeOfAlcoholType"
          control={control}
          defaultValue={get(defaultValue, "husbandTimeOfAlcoholType", 0)}
          render={({field: {ref, ...others}}) => (<Select
            className="w-full mb-3 sm:col-span-2"
            options={NUMBER_ARRAY}
            inputProps={{label: "Số lần/tuần"}}
            {...others}
          />)}
        />
      </>)}
    </div>
  </div>);
}

export default FormHusbandStimulant;