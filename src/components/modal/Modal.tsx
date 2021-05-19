import RootModal from "./root/RootModal";

import "./Modal.css";

interface ModalInterface {
  onBackgroundClick?: React.MouseEventHandler<HTMLDivElement>;
  animation?: "fadeIn" | "bounceIn";
  type?: "full-width" | "relative-width";
  className?: string;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalInterface> = ({
  onBackgroundClick,
  children,
  animation = "fadeIn",
  type = "relative-width",
  className,
  onScroll,
}) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <RootModal>
      <div onClick={onBackgroundClick} className="modal-background">
        <div
          onScroll={onScroll}
          className={`modal-container ${type} ${animation} ${className}`}
          onClick={stopPropagation}
        >
          {children}
        </div>
      </div>
    </RootModal>
  );
};

export default Modal;
