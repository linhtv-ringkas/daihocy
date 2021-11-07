import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "@material-ui/core/Backdrop";
import MuiModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/control/button";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import COLORS from "utils/colors";
import classNames from "classnames";


const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  iconError: {
    marginBottom: "0.9375rem",
    fontSize: "4.375rem",
    color: "#FF0000",
  },
  iconSuccess: {
    marginBottom: "0.9375rem",
    fontSize: "4.375rem",
    color: COLORS.SEMANTIC_GREEN,
  },
});

interface PopupProps {
  title?: string;
  description?: string;
  visible: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  afterClose: () => void;
  type: "success" | "error" | "warning";
  bottomText?: string;
  onBottomClick?: () => void;
  showCloseIcon?: boolean;
  disableEscapeKeyDown?: boolean;
  icon?: React.ReactNode
}

const Modal: React.FC<PopupProps> = ({
  title,
  description,
  visible,
  onOpen,
  onClose,
  afterClose,
  type,
  bottomText = "",
  onBottomClick,
  showCloseIcon = true,
  disableEscapeKeyDown = false,
  icon
}) => {
  const handleClose = useCallback(() => {
    if (onClose && typeof onClose === "function") {
      onClose();
    }
    if (afterClose && typeof afterClose === "function") {
      afterClose();
    }
  }, []);

  useEffect(() => {
    if (visible) {
      if (onOpen && typeof onOpen === "function") {
        onOpen();
      }
    }
  }, [visible]);
  const classes = useStyles();
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={visible}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300,
      }}
      disableBackdropClick
      disableEscapeKeyDown={disableEscapeKeyDown}
    >
      <div
        className={classNames(
          "bg-white p-5 pt-7 rounded-xl relative w-modal-m min-w-[300px] border-t-[5px] ", {
            "border-semantic-green": type === 'success',
            "border-red-600": type === 'error',
            "border-yellow-600": type === 'warning'
          })}
      >
        <div className={classes.center}>
          {icon}
          {!icon && type === 'success' && <CheckCircleOutlineIcon classes={{root: classes.iconSuccess}} />}
          {title && title?.length > 0 && (
            <div className="text-2xl font-bold mb-3">{title}</div>
          )}
          {description && (
            <div
              className="text-sm text-grey-80 mb-5 text-center"
              dangerouslySetInnerHTML={{__html: description}}
            />
          )}
          {bottomText.length > 0 && (
            <Button color={"primary"} onClick={onBottomClick} className="w-12 bg-blue-800 whitespace-nowrap px-10" variant="contained">{bottomText}</Button>
          )}
        </div>
      </div>
    </MuiModal>
  );
};

type DialogConfig = Omit<PopupProps, "visible" | "close" | "afterClose">;

type ConfigUpdate = DialogConfig | ((prevConfig: DialogConfig) => DialogConfig);

const AlertModal = (config: DialogConfig) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  let currentConfig: any = {
    ...config,
    close,
    visible: true,
    afterClose: destroy,
  };

  function destroy() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render({...props}: any) {
    ReactDOM.hydrate(<Modal {...props} />, div);
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      visible: false,
    };
    render(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === "function") {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  const closeModal = () => {
    close();
    destroy();
  };

  render(currentConfig);
  return {
    close: closeModal,
    update,
  };
};

export default AlertModal;
