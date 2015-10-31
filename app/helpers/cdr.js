import cdr from 'ember-car/helpers/car';

export default function cdr(params) {
  if (params.length !== 1) {
    return null;
  }
  return cdr(params[0]);
}
