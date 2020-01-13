const countLetters = require('./countLetters');

const numberOfVowels = (input) => {
  // TODO: fill this in
  const want = ['a', 'e', 'i', 'o', 'u'];
  return countLetters(input, want);
};

exports.numberOfVowels = numberOfVowels;


const numberOfFirstFive = (input) => {
  const want = ['a', 'b', 'c', 'd', 'e'];
  return countLetters(input, want);
};

exports.numberOfFirstFive = numberOfFirstFive;
