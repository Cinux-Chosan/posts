import Ember from 'ember';
import LazyLoaderMixin from 'posts/mixins/lazy-loader';
import { module, test } from 'qunit';

module('Unit | Mixin | lazy loader');

// Replace this with your real tests.
test('it works', function(assert) {
  let LazyLoaderObject = Ember.Object.extend(LazyLoaderMixin);
  let subject = LazyLoaderObject.create();
  assert.ok(subject);
});
