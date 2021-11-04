import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import MuiFilledInput, { FilledInputProps as MuiFilledInputProps, } from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import COLORS from "utils/colors";

const useInputStyles = makeStyles({
  input: {
    color: COLORS.PRIMARY_6,
    background: COLORS.coolGray['50'],
    borderRadius: "0.5rem",
    border: "1px solid transparent",
    fontSize: "1rem",
    "& .MuiFilledInput-input": {
      paddingLeft: 20,
    },
    "& .MuiFilledInput-input:-webkit-autofill": {
      borderRadius: "0.75rem",
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
  },
  disabled: {
    opacity: "0.5",
    background: COLORS.coolGray['50'],
  },
  label: {
    transform: "translate(20px, 10px) scale(0.75)",
    fontSize: "0.875rem",
    color: COLORS.PRIMARY_6,
    fontWeight: 500,
    "&.Mui-focused": {
      color: "#808080",
      transform: "translate(20px, 10px) scale(0.75)",
    },
    "&.MuiInputLabel-filled.MuiInputLabel-shrink": {
      transform: "translate(20px, 10px) scale(0.75)",
    },
    "&.Mui-error": {
      color: "#808080",
    },
  },
  control: {
    width: "100%",
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
    <div className={className}>
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
