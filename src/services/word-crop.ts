const getCroppedWord = (word: string, length: number) => {
  const croppedWrod = word.substring(0, length);
  return croppedWrod;
};

export default getCroppedWord;
