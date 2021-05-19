import "./SecondaryButton.css";

type SecondaryButtonType = {
  children: React.ReactNode;
  className?: string;
  onClick: React.ReactEventHandler<HTMLButtonElement>;
};

const SecondaryButton = ({
  children,
  onClick,
  className,
}: SecondaryButtonType) => {
  return (
    <button
      className={`secondary-button-container ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
