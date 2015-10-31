import Ember from 'ember';

export function cdr(val) {
  if (Ember.isArray(val)) {
    return val.slice(1);
  }
  return [ ];
}

export default Ember.Helper.helper(cdr);
