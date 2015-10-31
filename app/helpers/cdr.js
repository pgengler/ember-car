import Cdr from 'ember-car/helpers/car';

export default function cdr(params) {
  if (params.length !== 1) {
    return null;
  }
  return Cdr(params[0]);
}
