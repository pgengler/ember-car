# ember-car

`ember-car` is an [http://www.ember-cli.com/](http://www.ember-cli.com/) addon that provides Lisp-like [`car` and `cdr`](https://en.wikipedia.org/wiki/CAR_and_CDR) helpers.

The short version is that given a list (array), `car` returns the item at the head of the list (index 0), while `cdr` returns a list (array) without the first element.

## Usage
### Installation
`ember install ember-car`

### In Your Application
Two template helpers are provided, called `car` and `cdr`. These are automatically resolved so you can just use them in your templates without any additional code.

These template helpers each take a single (positional) parameter, the list on which to operate. `car` returns a scalar value (or `null`, if the given array is empty); `cdr` returns an array (which may be empty).

Here's a brief partial example of their use:
```
// app/routes/index.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [ 'first', 'second', 'third' ];
  }
});

// in app/templates/index.hbs
car(model): {{car model}}
<br>
cdr(model): {{cdr model}}
```

This example will render the output:
```
car(model): first
cdr(model): second,third
```

## Notes
These helpers are designed to be used with arrays, but also to not blow up when used with non-arrays (primitives or objects). If `car` is passed a non-array value, it simply returns it. If `cdr` is passed a non-array value, it returns an empty array. Effectively, non-array parameters are treated as if they were arrays that contained only the given value.

## Why?!
This addon was created mainly as a jokey response to what feels to me like the increasing Lisp-ification of templates. You are welcome, however, to find actual uses for this.
