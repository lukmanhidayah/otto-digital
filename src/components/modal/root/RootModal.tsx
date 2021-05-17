import { useEffect } from "react";
import { createPortal } from "react-dom";

import "./RootModal.css";

const RootModal: React.FC<{}> = ({ children }) => {
  const modalRoot = document.querySelector("#modal-root") as HTMLElement;
  const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;

  useEffect(() => {
    // We assume `modalRoot` exists with '!'
    body.classList.add("modal-open");
    modalRoot!.classList.add("modal-open");
    return () => {
      void modalRoot!.classList.remove("modal-open");
      void body.classList.remove("modal-open");
    };
  }, [modalRoot, body]);

  return createPortal(children, modalRoot);
};

export default RootModal;
