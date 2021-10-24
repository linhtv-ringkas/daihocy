import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MuiSelect, { SelectProps as MuiSelectProps, } from "@material-ui/core/Select";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MuiMenuItem, { MenuItemProps as MuiMenuItemProps, } from "@material-ui/core/MenuItem";
import Input, { Props as InputProps } from "components/control/input";

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
      input={<Input {...inputProps} />}
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
