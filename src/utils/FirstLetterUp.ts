const FirstLetterUp = (letter: string) => {
  return letter
    .replace("/", "")
    .toLocaleLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1));
};

export default FirstLetterUp;
