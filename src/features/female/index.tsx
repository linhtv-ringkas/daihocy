import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import FormInfo, { FormInfoSchema, FormInfoValues } from "components/form/info";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormClinicalInfoFemale, { FormClinicalInfoFemaleValues } from "components/form/clinicalInfoFemale";
import Button from "components/control/button";
import { useGetInfoFemaleQuery, useUpdateInfoMutation } from "features/female/api";
import AlertModal from "components/modals/AlertModal";
import { PHONE_REGEX } from "utils/constant";
import FormStimulant, { FormStimulantValues } from "components/form/stimulant";

type FormValues = FormInfoValues & FormClinicalInfoFemaleValues & FormStimulantValues;

const Female: React.FC<{}> = () => {
  const history = useHistory();
  const [sendInfo, updateInfoState] = useUpdateInfoMutation();
  const FormSchema = yup.object().shape({
    ...FormInfoSchema
  });
  //form
  const formControl = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(FormSchema),
  });
  const {handleSubmit, watch, setValue} = formControl;
  const watchPhone = watch("phone", "");

  useEffect(() => {
    console.log("updateInfoState", updateInfoState)
    if (updateInfoState.isSuccess && !updateInfoState.isLoading) {
      history.goBack();
      const {close} = AlertModal({
        title: "Thông báo",
        description: "Cập nhật thành công",
        type: "success",
        bottomText: "Đồng ý",
        onBottomClick: () => {
          close();
        },
      });
    }
  }, [updateInfoState])
  const state = useGetInfoFemaleQuery(watchPhone, {skip: !PHONE_REGEX.test(watchPhone)});
  useEffect(() => {
    const {isSuccess, data} = state;
    if (isSuccess && Object.keys(data).length) {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInfo formControl={formControl}/>
      <FormStimulant formControl={formControl}/>
      <FormClinicalInfoFemale formControl={formControl}/>
      <div className="flex flex-col items-center justify-center">
        <Button color={"primary"} type="submit" className="w-12 bg-blue-800" variant="contained">Lưu</Button>
      </div>
    </form>
  )
}

export default Female;