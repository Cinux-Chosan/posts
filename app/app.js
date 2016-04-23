import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import LazyLoadMixin from 'posts/mixins/lazy-load';
import LazyLoader from 'posts/mixins/lazy-loader';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.Route = Ember.Route.extend(LazyLoadMixin, {});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

App.LazyLoader = LazyLoader;
window.APP = App;

loadInitializers(App, config.modulePrefix);

export default App;
