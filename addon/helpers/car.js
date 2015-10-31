import Ember from 'ember';

export function car(val) {
  return val[0];
}

export default Ember.Helper.helper(car);
