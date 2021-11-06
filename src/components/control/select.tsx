import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MuiSelect, { SelectProps as MuiSelectProps, } from "@material-ui/core/Select";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps, } from "@material-ui/core/MenuItem";
import Input, { Props as InputProps } from "components/control/input";
import { OutlinedInput } from "@material-ui/core";
import COLORS from "utils/colors";

export interface Props extends Omit<MuiSelectProps, "inputProps"> {
  options: any[];
  inputProps?: InputProps;
  renderChild?: (option: any) => React.ReactNode;
  width?: string;
  height?: string;
  valueField?: string;
  labelField?: string;
  disableNative?:boolean;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ItemProps extends Omit<MuiMenuItemProps, "button"> { }

const useSelectStype = makeStyles({
  input: {
    color: COLORS.coolGray['900'],
    background: COLORS.coolGray['50'],
    border: "1px solid transparent",
    lineHeight: '1.5rem',
    fontSize: "1rem",
    fontWeight: 500,
    marginTop: '0.25rem',
    "& .MuiFilledInput-input": {
      padding: '1.25rem 0 0 0',
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
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'none'
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
  select: {
    "&:hover": {
      background: "#f5f7fa",
      borderRadius: "0.75rem",
    },
    "&:focus": {
      background: "#f5f7fa",
      borderRadius: "0.75rem",
    },
  },
  icon: {
    marginRight: "0.5rem",
    fill: COLORS.PRIMARY_4
  },
});

const useMenuItemStyle = makeStyles({
  root: {
    fontSize: "0.875rem",
    "&:focus": {
      background: "#f5f7fa",
      "& .MuiListItemIcon-root": {
        color: "#808080",
      },
      "& .MuiListItemText-primary": {
        color: "#808080",
      },
    },
    "&.Mui-selected": {
      background: "#f5f7fa",
    },
    "&:hover": {
      background: "#f5f7fa",
    },
  },
});

const useMenuStyle = makeStyles<Theme, { height: string; width: string }>({
  paper: {
    maxHeight: (props) => props.height,
    marginTop: "1rem",
    borderRadius: "0.75rem",
    width: (props) => props.width,
    "&::-webkit-scrollbar": {
      width: "0.4rem",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "2px",
      backgroundColor: "rgba(0,0,0,.15)",
    },
  },
});

const SelectItem = React.forwardRef<HTMLLIElement, ItemProps>(
  ({ ...others }, ref) => {
    const classes = useMenuItemStyle();
    return (
      <MuiMenuItem ref={ref} classes={{ root: classes.root }} {...others} />
    );
  }
);

SelectItem.displayName = "SelectItem";

const Select: React.FC<Props> = ({
  width = "",
  height = "12rem",
  options,
  inputProps,
  valueField = "value",
  labelField = "label",
  renderChild,
  disableNative = false,
  ...others
}) => {
  const classes = useSelectStype();
  const menuClasses = useMenuStyle({ width, height });
  return (
    <MuiSelect
      input={inputProps?.label?.length ?
        <Input {...inputProps} /> :
        <OutlinedInput classes={{root: classes.input}} />
      }
      IconComponent={KeyboardArrowDownIcon}
      classes={{
        select: classes.select,
        icon: classes.icon,
      }}
      MenuProps={{
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        classes: {
          paper: menuClasses.paper,
        },
      }}
      {...others}
    >
      {options.map((i) => {
        if (renderChild && typeof renderChild === "function") {
          return renderChild(i);
        }
        return (
          <SelectItem key={i[valueField]} value={i[valueField]}>
            {i[labelField]}
          </SelectItem>
        );
      })}
    </MuiSelect>
  );
};

export default Select;
