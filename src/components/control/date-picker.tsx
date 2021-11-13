import React from "react";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { TextFieldProps } from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/dayjs";
import Input from "./input";

export interface Props extends MuiDatePickerProps {}

const InputAdaptTextField = (props: TextFieldProps): any => {
  return (
    <Input
      label={props.label as string}
      value={props.value}
      onChange={props.onChange}
      onClick={props.onClick}
      className={props.className}
    />
  );
};
const DatePicker: React.FC<Props> = ({ ...others }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiDatePicker TextFieldComponent={InputAdaptTextField} {...others} />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
