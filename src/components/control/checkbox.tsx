import React from "react";
import MuiCheckbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import AlbumIcon from '@material-ui/icons/Album';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import COLORS from "utils/colors";
import { makeStyles } from "@material-ui/core/styles";

const useCheckboxStyles = makeStyles({
  unchecked: {
    fill: COLORS.NEUTRAL_3
  },
  checked: {
    "&>path" : {
      fill: COLORS.PRIMARY_4,
      stroke: COLORS.PRIMARY_4
    }

  },
})

const Checkbox: React.FC<CheckboxProps> = ({
  ...others
}) => {
  const classes = useCheckboxStyles();
  return <MuiCheckbox
    icon={<RadioButtonUncheckedOutlinedIcon classes={{root: classes.unchecked}}  />}
    checkedIcon={<AlbumIcon classes={{root: classes.checked}}/>}
    {...others}
  />
};

export default Checkbox;
