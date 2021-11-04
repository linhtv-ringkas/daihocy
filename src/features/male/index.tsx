import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInfo, { FormInfoSchema, FormInfoValues } from "components/form/info";
import MuiButton from '@material-ui/core/Button';
import FormStimulant, { FormStimulantValues } from "components/form/stimulant";
import FormClinicalInfo, { FormClinicalInfoValues } from "components/form/clinicalInfo";
import FormSemenChartInfo, { FormSemenChartInfoValues } from "components/form/semenChartInfo";

type FormValues = FormInfoValues & FormStimulantValues & FormClinicalInfoValues & FormSemenChartInfoValues;

const Male: React.FC<{}>= ()=> {
  const location = useLocation();
  const FormSchema = yup.object().shape({
    ...FormInfoSchema
  });
  //form
  const formControl = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(FormSchema),
  });
  const { handleSubmit } = formControl;

  useEffect(()=> {
    console.log("location", location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data", data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-primary-5">
        <FormInfo formControl={formControl}/>
        <FormStimulant formControl={formControl}/>
        <FormClinicalInfo formControl={formControl}/>
        <FormSemenChartInfo formControl={formControl}/>
        <div className="flex flex-col items-center justify-center">
          <MuiButton color={"primary"} type="submit" className="w-12 bg-blue-800" variant="contained">Lưu</MuiButton>
        </div>
      </form>
    </>
  );
}

export default Male;