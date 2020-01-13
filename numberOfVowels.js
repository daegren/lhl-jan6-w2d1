const countLetters = (input, want) => {
  let total = 0;
  const chars = input.toLowerCase().split('');

  chars.forEach(c => {
    if (want.includes(c)) {
      total++;
    }
  });

  return total;
};

const numberOfVowels = (input) => {
  // TODO: fill this in
  const want = ['a', 'e', 'i', 'o', 'u'];
  return countLetters(input, want);
};

module.exports = numberOfVowels;
