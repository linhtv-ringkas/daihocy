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
import { useGetInfoMaleQuery, useUpdateInfoMutation } from "features/male/api";
import { PHONE_REGEX } from "../../utils/constant";
import AlertModal from "../../components/modals/AlertModal";

type FormValues = FormInfoValues & FormStimulantValues & FormClinicalInfoValues & FormSemenChartInfoValues;

const Male: React.FC<{}>= ()=> {
  const location = useLocation();
  const FormSchema = yup.object().shape({
    ...FormInfoSchema
  });
  const [sendInfo, updateInfoState ] = useUpdateInfoMutation();
  //form
  const formControl = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(FormSchema),
  });
  const { handleSubmit, watch, setValue } = formControl;
  const watchPhone = watch("phone", "");

  useEffect(()=> {
    console.log("updateInfoState", updateInfoState)
    if(updateInfoState.isSuccess && !updateInfoState.isLoading){
      const { close } = AlertModal({
        title: "Thông báo",
        description: "Cập nhật thành công",
        type: "success",
        bottomText: "Đồng ý",
        onBottomClick: () => {
          close();
        },
      });
    }
  },[updateInfoState])
  const state = useGetInfoMaleQuery(watchPhone, {skip: !PHONE_REGEX.test(watchPhone)});
  useEffect(()=> {
    const {isSuccess, data} = state;
    if(isSuccess && Object.keys(data).length) {
      for (const [key, value] of Object.entries(data)) {
        setValue(key as any, value);
      }
    }
  }, [setValue, state])
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data", data)
    sendInfo(data)
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