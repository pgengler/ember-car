import { car } from '../../../helpers/car';
import { module, test } from 'qunit';

module('Unit | Helper | car');

test('returns the first element when the argument is an array', function(assert) {
  let array = [ 'a', 'b', 'c' ];
  let result = car(array);
  assert.equal(result, 'a');
});
