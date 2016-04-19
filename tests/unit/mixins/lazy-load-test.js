import Ember from 'ember';
import LazyLoadMixin from 'posts/mixins/lazy-load';
import { module, test } from 'qunit';

module('Unit | Mixin | lazy load');

// Replace this with your real tests.
test('it works', function(assert) {
  let LazyLoadObject = Ember.Object.extend(LazyLoadMixin);
  let subject = LazyLoadObject.create();
  assert.ok(subject);
});
