type TextInputType = {
  name: string;
  placeholder: string;
  type: string;
  min?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  accept?: string;
  value?: any;
  disabled?: boolean;
  currency?: Boolean;
  isNull?: Boolean;
};

const TextInput = ({
  name,
  placeholder,
  type,
  onChange,
  min,
  disabled = false,
  accept,
  value,
  isNull,
  currency = false,
}: TextInputType) => {
  return (
    <div className="relative w-full mb-6">
      <label
        className="block text-gray-900 text-sm font-normal mb-2"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <div className="relative">
        {currency && (
          <label
            htmlFor={name}
            className="absolute left-0 h-full text-gray-900 bg-blue-800 bg-opacity-20 w-10 text-xs border-0 rounded-l flex justify-center items-center"
          >
            Rp.
          </label>
        )}
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          disabled={disabled}
          accept={accept}
          onChange={onChange}
          className={`border px-3 py-3 ${
            currency && "pl-12"
          } placeholder-gray-400 text-black bg-white rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full ${
            isNull && "border-red-300"
          } ${disabled && "bg-gray-100"}`}
          placeholder={placeholder}
          min={min}
        />
      </div>
      <span
        className={`absolute top-0 right-0 text-xxs bg-red-500 text-white rounded py-1 px-3 ${
          isNull ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 ease-in-out`}
      >
        cannot be null
      </span>
    </div>
  );
};

export default TextInput;
