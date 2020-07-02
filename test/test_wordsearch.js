const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['C', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['O', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['D', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CODE')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['C', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['Z', 'O', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['D', 'F', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'E', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'CODE')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally backwards", function() {
    const result = wordSearch([
      ['C', 'W', 'C', 'F', 'Q', 'U', 'A', 'S'],
      ['Z', 'H', 'I', 'N', 'F', 'E', 'H', 'D'],
      ['D', 'F', 'D', 'F', 'Q', 'O', 'A', 'L'],
      ['E', 'M', 'J', 'E', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SHOE')

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards horizontal (MIDDLE)", function() {
    const result = wordSearch([
      ['C', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['Z', 'W', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['D', 'F', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'E', 'E', 'V', 'R', 'G'],
      ['H', 'R', 'E', 'Y', 'W', 'A', 'L', 'P'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LAWYER')

    assert.isTrue(result);
  });
  it("should return true if the word is present backwards vertical ", function() {
    const result = wordSearch([
      ['C', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['Z', 'W', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['D', 'F', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['E', 'M', 'J', 'E', 'E', 'V', 'R', 'G'],
      ['H', 'R', 'E', 'Y', 'N', 'O', 'L', 'P'],
      ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'E', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'U', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'QUEEN')

    assert.isTrue(result);
  });
});
