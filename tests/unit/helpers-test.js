import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-car-helpers', 'ember-car helpers', { integration: true });

test('has a car() helper', function(assert) {
  this.set('array', [ 'a', 'b' ]);
  this.render(hbs`{{car array}}`);
  assert.equal(this.$().text(), 'a');
});

test('has a cdr() helper', function(assert) {
  this.set('array', [ 'a', 'b', 'c' ]);
  this.render(hbs`{{cdr array}}`);
  assert.equal(this.$().text(), 'b,c');
});
