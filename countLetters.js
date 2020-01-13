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

module.exports = countLetters;
