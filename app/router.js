import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('edit');
  this.route('article', function() {
    this.route('pub');
    this.route('art_list');
  });
  this.route('showarticledetail', {path: '/showarticledetail/:art_id'});
});

export default Router;
