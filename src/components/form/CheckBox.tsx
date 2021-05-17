const CheckBox = () => {
  return (
    <div>
      <label
        className="inline-flex mt-2 items-center cursor-pointer"
        htmlFor="remember"
      >
        <input
          id="remember"
          type="checkbox"
          className="form-checkbox rounded border-gray-300 text-blue-800 focus:outline-none transition duration-500 ease-in-out"
        />
        <span className="ml-2 text-xs font-normal text-gray-600">
          Remember me
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
