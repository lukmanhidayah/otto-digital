import "./PrimaryButton.css";

type PrimaryButtonType = {
  title: string | React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const PrimaryButton = ({ title, disabled = false, onClick }: PrimaryButtonType) => {
  return (
    <div className="text-center mt-6">
      <button className={`button ${disabled && "disabled"}`} type="button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
