import { useState } from "react";
import { ArrowDownIcon } from "../../assets/svg/icons";
import IsNullOrEmpty from "../../utils/IsNullOrEmpty";
import "./SelectOption.css";

type SelectOptionType = {
  placeholder: string;
  value?: any;
  isShow: Boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SelectOption = ({
  placeholder,
  value,
  isShow,
  onClick,
}: SelectOptionType) => {
  const conditionValue = IsNullOrEmpty(value) ? placeholder : value;
  const [isChildShow, setIsChildShow] = useState(isShow);
  return (
    <div className="group relative w-full">
      <label
        htmlFor=""
        className="block text-gray-900 text-sm font-normal mb-2"
      >
        {placeholder}
      </label>
      <div className="select-option-container">
        <button
          onBlur={() => {
            setIsChildShow(false);
          }}
          className={`select-option-header`}
          onClick={onClick}
        >
          <h3
            className={`${
              conditionValue === placeholder && "custom-placeholder"
            }`}
          >
            {conditionValue}
          </h3>
          <span className="icon">
            <ArrowDownIcon width={16} height={16} />
          </span>
        </button>
      </div>
      {isShow && (
        <div className="absolute top z-50 w-full max-h-24 rounded shadow bg-gray-100 overflow-y-auto ">
          <div className="px-4 py-2">span</div>
          <div className="px-4 py-2">span</div>
          <div className="px-4 py-2">span</div>
          <div className="px-4 py-2">span</div>
          <div className="px-4 py-2">span</div>
          <div className="px-4 py-2">span</div>
        </div>
      )}
    </div>
  );
};

export default SelectOption;
