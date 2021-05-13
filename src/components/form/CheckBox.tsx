const CheckBox = () => {
  return (
    <div>
      <label className="inline-flex mt-2 items-center cursor-pointer">
        <input
          id="customCheckLogin"
          type="checkbox"
          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
        />
        <span className="ml-2 text-sm font-semibold text-blueGray-600">
          Remember me
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
