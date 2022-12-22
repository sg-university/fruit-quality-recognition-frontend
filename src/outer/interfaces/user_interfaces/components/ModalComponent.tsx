import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";

type ModalComponentProps = {
  children?: React.ReactNode;
  show: boolean;
  onHide: () => void;
}

const ModalComponent = ({children, ...props}: ModalComponentProps) => {

  return (
    <Modal {...props}>
      {children}
    </Modal>
  );
};

export default ModalComponent;