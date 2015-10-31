import Ember from 'ember';

export default function car(val) {
  if (Ember.isArray(val)) {
    return val[0];
  }
  return val;  
}
