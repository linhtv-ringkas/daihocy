import React, { useEffect } from "react";
import { getData } from "./api";

const Home: React.FC<{}>= ()=> {

  useEffect(()=> {
    getData().then(res=> {
      console.log("data nè: ", res);
    });
  },[])
  return (
    <div>
      Đây là home
    </div>
  );
}

export default Home;