const assert = require('assert');
const Rooster = require('../index.js');
describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //setup
      const expected = 'oooooooooooooooo!';
      //exercise
      const result = Rooster.announceDawn();
      //verify
      assert.strictEqual(result, expected.toString());
    });
  });
    describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const hour = '1';
      //exercise
      const result1 = Rooster.timeAtDawn(hour);
      //verify
      assert.strictEqual(result1, hour);
    });
    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = '-1';
      //verify
      assert.throws( () => {
          Rooster.timeAtDawn(hour);
      }, RangeError);
    });
      it('throws an error if passed a number greater than 23', () => {
      //setup
      const hour = '25';
      // verify
      assert.throws( () => {
          Rooster.timeAtDawn(hour);
      }, RangeError);
  });
});
});
    