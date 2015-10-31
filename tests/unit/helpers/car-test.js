import { car } from '../../../helpers/car';
import { module, test } from 'qunit';

module('Unit | Helper | car');

test('returns the first element when the argument is an array', function(assert) {
  let array = [ 'a', 'b', 'c' ];
  let result = car(array);
  assert.equal(result, 'a');
});

test('returns the argument when it is not an array', function(assert) {
  let obj = { a: 1 };
  let result = car(obj);
  assert.strictEqual(result, obj);
});
