import Ember from 'ember';
import carFunc from 'ember-car/lib/car';

export function car(params) {
  if (params.length === 1) {
    return carFunc(params[0]);
  }
  return null;
}

export default Ember.Helper.helper(car);
