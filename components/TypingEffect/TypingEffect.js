const TypingEffect = async (sentence, eleRef, delay = 100) => {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
};

const waitForMs = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export default TypingEffect;
