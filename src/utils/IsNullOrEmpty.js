const IsNullOrEmpty = (val) => {
  return (
    val === "" ||
    val === undefined ||
    val === "undefined" ||
    val === " " ||
    val === null ||
    val === "null"
  );
};

export default IsNullOrEmpty;
