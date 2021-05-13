import "./PrimaryButton.css";

type PrimaryButtonType = {
  title: string | React.ReactNode;
  disabled?: boolean;
};

const PrimaryButton = ({ title, disabled = false }: PrimaryButtonType) => {
  return (
    <div className="text-center mt-6">
      <button className={`button ${disabled && "disabled"}`} type="button">
        {title}
      </button>
    </div>
  );
};

export default PrimaryButton;
