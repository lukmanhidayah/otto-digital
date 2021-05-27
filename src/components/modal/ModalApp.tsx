import Modal from "./Modal";

import "./ModalApp.css";

import { XCircleIcon } from "../../assets/svg/icons";

type ModalAppType = {
  children?: React.ReactNode;
  onToggleModal: React.MouseEventHandler<any>;
  title: string;
  textSubmit?: string;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
  textCancel?: string;
};
const ModalApp = ({
  children,
  onToggleModal,
  title,
  onScroll,
  textSubmit = "Simpan",
  textCancel = "Batal",
}: ModalAppType) => {
  return (
    <Modal
      onScroll={onScroll}
      type="full-width"
      className="w-full md:w-2/3 lg:w-1/2"
      onBackgroundClick={onToggleModal}
      animation="fadeIn"
    >
      <div className="relative w-full p-5 py-4">
        <h3 className="modal-title flex items-center">
          {title}
          <button
            className="absolute right-5 focus:outline-none"
            onClick={onToggleModal}
          >
            <XCircleIcon width={20} height={20} />
          </button>
        </h3>

        <div className="py-2">{children}</div>
      </div>
    </Modal>
  );
};

export default ModalApp;
