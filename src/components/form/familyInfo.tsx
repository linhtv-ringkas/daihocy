import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { get } from "lodash";
import Select from "components/control/select";

export type FormFamilyInfoValues = {
  thirdGenarateType: number;
  thirdGenarateGeneticType: number;
  whereWarType: number;
  diagnosticType: number;
};

interface Props {
  defaultValue?: FormFamilyInfoValues;
  formControl: UseFormReturn<any>
}

const FormFamilyInfo: React.FC<Props> = ({ formControl, defaultValue }) => {
  const {
    control,
  } = formControl;
  return (
    <div className="my-6 p-6 bg-white rounded-2xl">
      <div className="font-bold text-md mb-6 uppercase">Thông tin gia đình</div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <Controller
          name="thirdGenarateType"
          control={control}
          defaultValue={get(defaultValue, "thirdGenarateType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                { value: 0, label: 'Không' },
                { value: 1, label: 'Có' },
              ]}
              inputProps={{ label: "Trong 3 thế hệ có ai bị thai bất thường không" }}
              {...others}
            />
          )}
        />
        <Controller
          name="thirdGenarateGeneticType"
          control={control}
          defaultValue={get(defaultValue, "thirdGenarateGeneticType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                { value: 0, label: 'Không' },
                { value: 1, label: 'Có' },
              ]}
              inputProps={{ label: "Trong 3 thế hệ có ai mắc hoặc sinh con bị các bệnh di truyền hoặc dị tật bẩm sinh không? Đặc biệt các bệnh Down, Dị tật ống thần kinh (hộp sọ, cột sống), Chậm phát triển tâm thần, Teo cơ, Bệnh tim, Lùn, Vô kinh, Vô sinh" }}
              {...others}
            />
          )}
        />
        <Controller
          name="whereWarType"
          control={control}
          defaultValue={get(defaultValue, "whereWarType", 0)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                { value: 0, label: 'Không' },
                { value: 1, label: 'Có' },
              ]}
              inputProps={{ label: "Ông bà, bố mẹ bên vợ, bên chồng có ai đi bộ đội ở chiến trường miền Nam trước năm 1975 không? Ở đâu" }}
              {...others}
            />
          )}
        />
        <Controller
          name="diagnosticType"
          control={control}
          defaultValue={get(defaultValue, "diagnosticType", 1)}
          render={({ field: { ref, ...others } }) => (
            <Select
              className="w-full mb-3 sm:col-span-6"
              options={[
                { value: 1, label: 'Không' },
                { value: 2, label: 'Dị tật bẩm sinh' },
                { value: 3, label: 'Trước hôn nhân' },
                { value: 4, label: 'Sàng lọc trước sinh' },
                { value: 5, label: 'Di truyền sinh sản' },
                { value: 6, label: 'Khác' },
              ]}
              inputProps={{ label: "Chuẩn đoán" }}
              {...others}
            />
          )}
        />
      </div>
    </div>
  );
}

export default FormFamilyInfo;