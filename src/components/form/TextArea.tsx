type TextInputType = {
  name: string;
  placeholder: string;
  value?: any;
};

const TextArea = ({ name, placeholder, value }: TextInputType) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block text-blueGray-600 text-xs font-normal mb-2"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <div className="relative">
        <textarea
          name={name}
          value={value}
          cols={5}
          id={name}
          className={`resize-none border px-3 py-3 placeholder-gray-300 text-black bg-white rounded text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full`}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
