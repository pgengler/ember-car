import Ember from 'ember';

export function car(val) {
  if (Ember.isArray(val)) {
    return val[0];
  }
  return val;
}

export default Ember.Helper.helper(car);
