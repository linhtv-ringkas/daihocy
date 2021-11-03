import React from "react";
import Logo from 'assets/images/logo3.jpg';
import classNames from "classnames";
import { Link } from "react-router-dom";

const DefaultLayout: React.FC = ({children}) => {
  return (<div className={classNames("w-screen h-screen flex flex-col bg-home-small bg-no-repeat bg-contain md:bg-home-large md:bg-cover")}>
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
    <footer>

    </footer>
  </div>);
};

export default DefaultLayout;
