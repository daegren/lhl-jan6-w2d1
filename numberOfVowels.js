const numberOfVowels = (input) => {
  // TODO: fill this in
  let total = 0;
  const chars = input.toLowerCase().split('');

  chars.forEach(c => {
    switch (c) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        total++;
        break;
      default:
        break;
    }
  });

  return total;
};

module.exports = numberOfVowels;
