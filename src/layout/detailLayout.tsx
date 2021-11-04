import React, { useMemo } from "react";
import Logo from 'assets/images/logo3.jpg';
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const DetailLayout: React.FC = ({children}) => {
  let location = useLocation();
  const imageClass = useMemo(()=> {
    switch (location.pathname){
      case '/male': {
        return {
          small: 'bg-male-small',
          large: 'md:bg-male-large',
          title: "Thông tin \n bệnh nhân nam"
        }
      }
      case '/female': {
        return {
          small: 'bg-female-small',
          large: 'md:bg-female-large',
          title: "Thông tin \n bệnh nhân nữ"
        }
      }
      case '/pregnant': {
        return {
          small: 'bg-pregnant-small',
          large: 'md:bg-pregnant-large',
          title: "Thông tin \n Thai phụ"
        }
      }
      case '/children':
      default: {
        return {
          small: 'bg-children-small',
          large: 'md:bg-children-large',
          title: "Thông tin \n bệnh nhân trẻ em"
        }
      }
    }
  }, [location])

  return (<div className={classNames("flex flex-col  overflow-x-hidden relative")}>
    <header >
      <div className={classNames("w-screen h-screen absolute top-0 left-0  bg-no-repeat bg-contain", imageClass.small, imageClass.large)} style={{zIndex: -1}}/>
      <div className="container mx-auto z-10 relative">
        <Link to="/" className="w-auto h-100">
          <img className="w-auto h-[60px] rounded-b-xl" src={Logo} alt="Logo"/>
        </Link>
      </div>
    </header>
    <main className="container mx-auto flex-1 mb-36">
      <h1 className="whitespace-pre-line text-[2rem] md:text-[2.5rem] mt-32 leading-9 md:leading-10 md:mt-24 lg:mt-10 2xl:mt-28 3xl:mt-60 font-black text-white">{imageClass.title}</h1>
      <div className="mt-6 bg-white h-full rounded-t-2xl px-6 pt-6">
        {children}
      </div>
    </main>
  </div>);
};

export default DetailLayout;
