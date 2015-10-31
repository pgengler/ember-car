import car from 'ember-car/helpers/car';

export default function car(params) {
  if (params.length !== 1) {
    return null;
  }
  return car(params[0]);
}
