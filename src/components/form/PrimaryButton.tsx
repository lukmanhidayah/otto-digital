import "./PrimaryButton.css";

type PrimaryButtonType = {
  title: string | React.ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton = ({
  title,
  disabled = false,
  type,
  onClick,
}: PrimaryButtonType) => {
  return (
    <div className="text-center mt-6">
      <button
        className={`button ${disabled && "disabled"}`}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
