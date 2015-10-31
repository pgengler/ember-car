import { cdr } from '../../../helpers/cdr';
import { module, test } from 'qunit';

module('Unit | Helper | cdr');

test('returns the remainder when the argument is an array', function(assert) {
  let array = [ 'a', 'b', 'c' ];
  let result = cdr([ array ]);
  assert.deepEqual(result, [ 'b', 'c' ]);
});

test('returns an empty array when the argument is a one-element array', function(assert) {
  let array = [ 'a' ];
  let result = cdr([ array ]);
  assert.deepEqual(result, [ ]);
});

test('returns an empty array when the argument is not an array', function(assert) {
  let obj = { a: 1 };
  let result = cdr([ obj ]);
  assert.deepEqual(result, [ ]);
});
