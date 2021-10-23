import React from "react";
import HeaderImage from 'assets/images/header-bg.jpeg' ;
const DefaultLayout: React.FC = ({children}) => {

  return (<>
    <header className="h-[122px]">
      <img className="h-full w-auto object-cover" src={HeaderImage} alt="Header"/>
    </header>
    <main>
      {children}
    </main>
    <footer>

    </footer>
  </>);
};

export default DefaultLayout;
