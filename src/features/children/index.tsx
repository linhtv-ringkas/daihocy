import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/control/button";
import FormChildrenClinicalInfo from "components/form/children/childClinicalInfo";
import { FormChildrenClinicalInfoValues } from "components/form/children/childClinicalInfo";
import FormChildrenClinicalExamination, { FormChildrenClinicalExaminationValues } from "components/form/children/childrenClinicalExamination";
import FormChildrenDeformity, { FormChildrenDeformityValues } from "components/form/children/childrendDeformity";
import FormChildrenInfo, { FormChildrenInfoValues } from "components/form/children/childrendInfo";
import FormParentInfo from "components/form/children/parentInfo";
import { FormInfoSchema } from "components/form/info";
import AlertModal from "components/modals/AlertModal";
import { useGetInfoQuery, useUpdateInfoMutation } from "features/children/api";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PHONE_REGEX } from "utils/constant";
import * as yup from "yup";

type FormValues = FormChildrenInfoValues & FormChildrenClinicalInfoValues & FormChildrenClinicalExaminationValues & FormChildrenDeformityValues

const Male: React.FC<{}>= ()=> {
  const navigate = useNavigate();
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
      navigate(-1);
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
  },[updateInfoState, navigate])
  const state = useGetInfoQuery(watchPhone, {skip: !PHONE_REGEX.test(watchPhone)});
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
        <FormChildrenInfo formControl={formControl}/>
        <FormChildrenClinicalInfo formControl={formControl}/>
        <FormChildrenClinicalExamination formControl={formControl}/>
        <FormChildrenDeformity formControl={formControl}/>
        <FormParentInfo formControl={formControl} formType="father"/>
        <FormParentInfo formControl={formControl} formType="mother"/>
        <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
          <Button color={"primary"} type="submit" className="w-12 bg-blue-800" variant="contained">Lưu</Button>
        </div>
      </form>
    </>
  );
}

export default Male;