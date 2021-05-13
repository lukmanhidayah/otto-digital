type TextInputType = {
  name: string;
  placeholder: string;
  type: string;
};

const TextInput = ({ name, placeholder, type }: TextInputType) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="border px-3 py-3 placeholder-gray-300 text-black bg-white rounded text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
