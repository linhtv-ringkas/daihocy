import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import FormInfo, { FormInfoSchema, FormInfoValues } from "../../components/form/info";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MuiButton from "@material-ui/core/Button";
import FormClinicalInfoFemale, { FormClinicalInfoFemaleValues } from "../../components/form/clinicalInfoFemale";

type FormValues = FormInfoValues & FormClinicalInfoFemaleValues;

const Female: React.FC<{}>= ()=> {
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
    <div className="pt-8 mb-32">
      <h2 className="text-center text-4xl font-bold pb-8">THÔNG TIN BỆNH NHÂN (NỮ)</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInfo formControl={formControl}/>
        <FormClinicalInfoFemale formControl={formControl} />
        <div className="flex flex-col items-center justify-center">
          <MuiButton color={"primary"} type="submit"  className="w-12 bg-blue-800" variant="contained">Lưu</MuiButton>
        </div>
      </form>
    </div>
  )
}

export default Female;