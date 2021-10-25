import React from "react";
import { Control, FieldErrors } from "react-hook-form";

export type FormClinicalInfoValues = {
  medicalHistory: string;
  fullName: string;
  isFamily: boolean;
  familyPhone: string;
  address: string;
  reason: string;
  yearOfBirth: number;
  yearOfMarried: number;
  careerType: number;
  height: number;
  weight: number;
  BMI?: number;
  nation: string;
};

interface Props {
  control: Control<any>;
  errors:  FieldErrors;
  defaultValue?: FormClinicalInfoValues
}

const FormClinicalInfo: React.FC<Props>= ({control, errors, defaultValue})=> {
  return (
    <div className="mb-6">
      <div className="font-bold text-2xl mb-6">THÔNG TIN LÂM SÀN</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">

      </div>
    </div>
  );
}

export default FormClinicalInfo;