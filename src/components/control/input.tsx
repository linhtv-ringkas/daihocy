import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import MuiFilledInput, { FilledInputProps as MuiFilledInputProps, } from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import COLORS from "utils/colors";
import classNames from "classnames";

const useInputStyles = makeStyles({
  input: {
    color: COLORS.coolGray['900'],
    background: COLORS.coolGray['50'],
    border: "1px solid transparent",
    lineHeight: '1.5rem',
    fontSize: "1rem",
    fontWeight: 500,
    marginTop: '0.25rem',
    borderRadius: '0.3rem',
    padding: '5px',
    "& .MuiFilledInput-input": {
      padding: '0.25rem 0 0 0',
    },
    "& .MuiFilledInput-input:-webkit-autofill": {
      borderRadius: "0.3rem",
      "-webkit-box-shadow": `0 0 0 30px ${COLORS.coolGray['50']} inset !important`
    },
    "&:hover": {
      background: COLORS.coolGray['50'],
    },
    "&:focus": {
      background: COLORS.coolGray['50'],
    },
    "&:active": {
      background: COLORS.coolGray['50'],
    },
    "&.Mui-focused": {
      background: COLORS.coolGray['50'],
    },
    "&.Mui-error": {
      borderColor: "#f53126",
    },
    "&.Mui-disabled": {
      background: COLORS.coolGray['50'],
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
    "& .MuiSelect-nativeInput[value='']": {
      background: COLORS.coolGray['50'],
      opacity: 1
    }
  },
  disabled: {
    opacity: "0.5",
    background: COLORS.coolGray['50'],
  },
  label: {
    fontSize: "0.875rem",
    lineHeight: '1.25rem',
    color: COLORS.PRIMARY_6,
    fontWeight: 500,
    position: "relative",
    transform: "unset !important",
    scale: "unset !important",
    "&.Mui-error": {
      color: "#f53126",
    },
  },
  control: {
    width: "100%",
    padding: '0.75rem',
    background: COLORS.coolGray['50'],
    borderRadius: "0.5rem",
    "& .MuiInputBase-input::-webkit-input-placeholder" : {
      color: COLORS.NEUTRAL_3
    },
    "& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder" : {
      opacity: "0.42 !important",
      color: COLORS.NEUTRAL_3
    }

  },
  helperText: {
    position: "absolute",
    bottom: "0.75rem",
    right: "0.75rem",
    marginRight: "0",
    marginLeft: "0",
  },
});


export interface Props extends MuiFilledInputProps {
  label?: string;
  type?: string;
  className?: string;
  errorMsg?: string;
  helperBottomMsg?: string;
  disableErrorMsg?: boolean;
  defaultValue?: unknown;
  onClickIconEye?: () => void;
}

const Input: React.FC<Props> = ({
  label,
  type,
  className = "",
  errorMsg,
  disableErrorMsg,
  defaultValue = "",
  onClickIconEye,
  ...otherProps
}) => {
  const classes = useInputStyles();
  const [value, setValue] = React.useState<unknown>(defaultValue);

  const [inputId] = useState(() => `${Math.floor(Math.random() * 10000) + 1}`);

  return (
    <div className={classNames(className)}>
      <FormControl
        variant="filled"
        className={classes.control}
        error={!!errorMsg}
      >
        {label && (
          <InputLabel
            htmlFor={"component-filled" + inputId}
            classes={{
              root: classes.label,
            }}
          >
            {label}
          </InputLabel>
        )}
        <MuiFilledInput
          id={"component-filled" + inputId}
          aria-describedby={"helper-text" + inputId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          fullWidth={true}
          placeholder={otherProps.placeholder ?? label}
          classes={{
            root: classes.input,
            disabled: classes.disabled,
          }}
          {...otherProps}
        />
        {errorMsg && !disableErrorMsg && (
          <Fade in={!!errorMsg && !disableErrorMsg}>
            <div className="pl-5 mt-1 text-xs text-red-600">{errorMsg}</div>
          </Fade>
        )}
      </FormControl>
    </div>
  );
};

export default Input;
