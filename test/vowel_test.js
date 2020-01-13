const numberOfVowels = require('../numberOfVowels');
const assert = require('chai').assert;

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
