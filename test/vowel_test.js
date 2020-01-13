const { numberOfVowels, numberOfFirstFive } = require('../numberOfVowels');
// Above is the same as the two following lines
// const numberOfVowels = require('../numberOfVowels').numberOfVowels
// const numberOfFirstFive = require('../numberOfVowels').numberOfFirstFive

const { assert } = require('chai');

describe('numberOfVowels', () => {
  it('counts the number of vowels in "orange"', () => {
    const input = "orange";

    const result = numberOfVowels(input);

    assert.equal(result, 3);
  });

  it('counts the number of vowels in "lighthouse labs"', () => {
    const input = "lighthouse labs";

    const result = numberOfVowels(input);

    assert.equal(result, 5);
  });

  it('counts upper or lower case vowels', () => {
    const input = "aA iI oo GG";

    const result = numberOfVowels(input);

    assert.equal(result, 6);
  });
});

describe('numberOfFirstFive', () => {
  it('counts the right amount', () => {
    const input = "abcdef";

    const result = numberOfFirstFive(input);

    assert.equal(result, 5);
  });
});
