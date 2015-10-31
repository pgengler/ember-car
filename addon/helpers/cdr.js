import Ember from 'ember';

import cdrFunc from 'ember-car/lib/cdr';

export function cdr(params) {
  if (params.length === 1) {
    return cdrFunc(params[0]);
  }
  return null;
}

export default Ember.Helper.helper(cdr);
