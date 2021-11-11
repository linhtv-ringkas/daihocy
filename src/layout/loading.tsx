import React from "react";
import classNames from "classnames";

const LoadingComponent: React.FC = ({children}) => {
  return (<div className={classNames("flex flex-col overflow-x-hidden")}>
    Loading...
  </div>);
};

export default LoadingComponent;
