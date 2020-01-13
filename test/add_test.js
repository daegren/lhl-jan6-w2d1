const add = require('../add');
const assert = require('chai').assert;

describe('addition', () => {
  it('2 + 2 = 4', () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const result = add(a, b);

    // Assert
    assert.equal(result, 4);
  });

  it('2 + (-2) = 0', () => {
    // Arrange
    const a = 2;
    const b = -2;

    // Act
    const result = add(a, b);

    // Assert
    assert.equal(result, 0);
  });
});
