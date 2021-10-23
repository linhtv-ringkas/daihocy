import React from "react";
import HeaderImage from 'assets/images/header-bg.jpeg' ;
import Logo from 'assets/images/logo3.jpeg';
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  headerImage: {
    background: `url(${HeaderImage}) right top no-repeat`,
    backgroundSize: 'cover'
  },
});

const DefaultLayout: React.FC = ({children}) => {
  const classes = useStyles();
  return (<>
    <header className={classNames(classes.headerImage, "h-[122px]")}>
      <Link to="/">
        <img className="w-[350px] h-[100px] pl-6" src={Logo} alt="Logo"/>
      </Link>
    </header>
    <main className="bg-green-500 mt-12">
      {children}
    </main>
    <footer>

    </footer>
  </>);
};

export default DefaultLayout;
