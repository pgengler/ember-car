import Ember from 'ember';

export default function cdr(val) {
  if (Ember.isArray(val)) {
    return val.slice(1);
  }
  return [ ];
}
