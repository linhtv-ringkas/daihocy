import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import FormInfo, { FormInfoSchema, FormInfoValues } from "components/form/info";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/control/button";
import { useGetInfoPregnantQuery, useUpdateInfoMutation } from "features/pregnant/api";
import AlertModal from "components/modals/AlertModal";
import { PHONE_REGEX } from "utils/constant";
import FormStimulant, { FormStimulantValues } from "../../components/form/stimulant";
import FormClinicalInfoPregnant, { FormClinicalInfoPregnantValues } from "../../components/form/clinicalInfoPregnant";
import FormUltraSound, { FormUltraSoundValues } from "../../components/form/ultrasound";
import FormHusbandInfo, { FormHusbandInfoValues } from "../../components/form/husbandInfo";
import FormHusbandStimulant, { FormHusbandStimulantValues } from "../../components/form/husbandStimulant";
import FormFamilyInfo, { FormFamilyInfoValues } from "../../components/form/familyInfo";

type FormValues = FormInfoValues & FormClinicalInfoPregnantValues & FormStimulantValues & FormUltraSoundValues & FormHusbandInfoValues & FormHusbandStimulantValues & FormFamilyInfoValues;

const Pregnant: React.FC<{}> = () => {
  const navigate = useNavigate();
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
      navigate(-1);
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
  const state = useGetInfoPregnantQuery(watchPhone, {skip: !PHONE_REGEX.test(watchPhone)});
  useEffect(() => {
    console.log("state", state);
    
    // const {isSuccess, data = {}} = state;
    // if (isSuccess && Object.keys(data).length) {
    //   for (const [key, value] of Object.entries(data)) {
    //     setValue(key as any, value);
    //   }
    // }
  }, [setValue, state])
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data", data)
    sendInfo(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInfo formControl={formControl}/>
      <FormStimulant formControl={formControl}/>
      <FormClinicalInfoPregnant formControl={formControl}/>
      <FormUltraSound formControl={formControl}/>
      <FormHusbandInfo formControl={formControl}/>
      <FormHusbandStimulant formControl={formControl}/>
      <FormFamilyInfo formControl={formControl}/>
      <div className="flex flex-col items-center justify-center">
        <Button color={"primary"} type="submit" className="w-12 bg-blue-800" variant="contained">Lưu</Button>
      </div>
    </form>
  )
}

export default Pregnant;