const sum = require('../sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(4);
// });

describe('addition test', () => {
  describe('positive numbers', () => {
    it('adds 2 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
