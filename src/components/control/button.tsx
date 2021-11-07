import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import MuiButton, { ButtonProps as MuiButtonProps, } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import COLORS from "utils/colors";

type Type =
  | "secondary"
type Size = "s" | "m";
type WidthType = "fit";
export interface Props extends MuiButtonProps {
  infType?: Type;
  infSize?: Size;
  loading?: boolean;
  classes?: { root?: string };
  width?: WidthType;
}

const useStyles = makeStyles({
  root: {
    background: COLORS.PRIMARY_4,
    borderRadius: "0.75rem",
    color: "#fff",
    minHeight: "2.375rem",
    width: "100%",
    "&:hover": {
      backgroundColor: COLORS.PRIMARY_5,
    },
    "&:focus": {
      outline: "none",
    },
    "&$disabled": {
      backgroundColor: COLORS.NEUTRAL_5,
      color: "#d3d3d3",
    },
  },
  fit: {
    minWidth: "fit-content",
    "& > .MuiButton-label": {
      padding: 0,
    },
  },
  label: {
    textTransform: "none",
  },
  disabled: {},
  tableAdd: {
    background: "#e3e6ea",
    color: "#808080",
    "&:hover": {
      background: "#b6b8bb",
    },
  },
  s: {
    fontSize: "0.75rem",
    borderRadius: "0.4rem",
    height: "1.875rem",
  },
  m: {},
  buttonProgress: {
    color: "#01334c",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: "-0.75rem",
    marginLeft: "-0.75rem",
  },
});

const Button: React.FC<Props> = ({
  infType,
  infSize = "m",
  width,
  loading,
  disabled,
  classes: propsClasses = {},
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <div className="w-full relative">
      <MuiButton
        classes={{
          root: classNames(
            classes.root,
            classes[infSize],
            width ? classes[width] : "",
            propsClasses.root
          ),
          label: classes.label,
          disabled: classes.disabled,
        }}
        disabled={loading || disabled}
        {...otherProps}
      />
      {loading && (
        <CircularProgress size={"1.5rem"} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default Button;
