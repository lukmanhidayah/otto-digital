type TextInputType = {
  name: string;
  placeholder: string;
  type: string;
  min?: number;
  currency?: Boolean;
};

const TextInput = ({
  name,
  placeholder,
  type,
  min,
  currency = false,
}: TextInputType) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block text-blueGray-600 text-xs font-bold mb-2"
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
          id={name}
          className={`border px-3 py-3 ${
            currency && "pl-12"
          } placeholder-gray-300 text-black bg-white rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full`}
          placeholder={placeholder}
          min={min}
        />
      </div>
    </div>
  );
};

export default TextInput;
