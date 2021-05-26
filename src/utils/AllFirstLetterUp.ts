const FirstLetterUpper = (letter: String) => {
  try {
    return letter
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  } catch (err) {
    return letter;
  }
};

export default FirstLetterUpper;
