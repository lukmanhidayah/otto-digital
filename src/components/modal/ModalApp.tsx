import Modal from "./Modal";

import "./ModalApp.css";

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
        <h3 className="modal-title">{title}</h3>

        <div className="py-2">{children}</div>
      </div>
      <div className="button-container-sticky">
        <div />
        <button
          onClick={onToggleModal}
          className="button-secondary bg-white text-blue-800 border border-blue-800 active:bg-blue-50 "
        >
          {textCancel}
        </button>
        <button className="button-secondary bg-blue-900 text-white ml-5 active:bg-blue-850 shadow">
          {textSubmit}
        </button>
      </div>
    </Modal>
  );
};

export default ModalApp;
