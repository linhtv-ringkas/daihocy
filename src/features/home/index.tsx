import React, { useEffect } from "react";
import { getData } from "./api";
import { Link } from "react-router-dom";

const listFn = [
  {
    label: "THÔNG TIN BỆNH NHÂN (NAM)",
    link: '/male'
  }, {
    label: "THÔNG TIN BỆNH NHÂN (NỮ)",
    link: '/female'
  }, {
    label: "THÔNG TIN THAI PHỤ",
    link: '/pregnant'
  }, {
    label: "THÔNG TIN BỆNH NHÂN (TRẺ EM)",
    link: '/children'
  },
]

const Home: React.FC<{}>= ()=> {
  useEffect(()=> {
    getData().then(res=> {
      console.log("data nè: ", res);
    });
  },[])
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      {listFn.map(i=> (
        <Link className="w-[310px] text-center bg-blue-800 my-1 py-3 text-white rounded" to={i.link} key={i.label}>
          {i.label}
        </Link>
      ))}
    </div>
  );
}

export default Home;