import React, { FC } from "react";
import classes from "./Modal.module.css";

type ModalProps = {
  message: string;
};

const Modal: FC<ModalProps> = ({ message }) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>
        <img
          className={classes.image}
          src="./images/simpleTick.png"
          alt="tick"
        />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
