import Ember from 'ember';
import LazyLoadMixin from 'posts/mixins/lazy-load';

var lazyLoader = new (Ember.Object.extend(LazyLoadMixin))();

export default lazyLoader;
