import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInfo, { FormInfoSchema, FormInfoValues } from "components/form/info";
import MuiButton from '@material-ui/core/Button';

type FormValues = FormInfoValues;

const Male: React.FC<{}>= ()=> {
  const location = useLocation();
  const FormSchema = yup.object().shape({
    ...FormInfoSchema
  });
  //form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(FormSchema),
  });

  useEffect(()=> {
    console.log("location", location)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data", data)
  }
  return (
    <div className="pt-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInfo control={control} errors={errors}/>
        <div className="flex flex-col items-center justify-center">
          <MuiButton color={"primary"} type="submit"  className="w-12 bg-blue-800" variant="contained">Lưu</MuiButton>
        </div>
      </form>

    </div>
  );
}

export default Male;