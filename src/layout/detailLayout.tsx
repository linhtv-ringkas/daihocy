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
          large: 'md:bg-male-large'
        }
      }
      case '/female': {
        return {
          small: 'bg-female-small',
          large: 'md:bg-female-large'
        }
      }
      case '/pregnant': {
        return {
          small: 'bg-pregnant-small',
          large: 'md:bg-pregnant-large'
        }
      }
      case '/children':
      default: {
        return {
          small: 'bg-children-small',
          large: 'md:bg-children-large'
        }
      }
    }
  }, [location])

  return (<div className={classNames(
    "w-screen h-screen flex flex-col bg-no-repeat bg-contain",
    imageClass.small, imageClass.large
    )}>
    <header>
      <div className="container mx-auto">
        <Link to="/" className="w-auto h-100">
          <img className="w-auto h-[60px] rounded-b-xl" src={Logo} alt="Logo"/>
        </Link>
      </div>
    </header>
    <main className="container mx-auto flex-1">
      {children}
    </main>
  </div>);
};

export default DetailLayout;
