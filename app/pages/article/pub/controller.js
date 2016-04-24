import Ember from 'ember';

export default Ember.Controller.extend({
    articleController: Ember.inject.controller('article'),
    actions: {

        didInsert() {
            this.get('articleController').set('currentTab', 'pub');
            window.animateCss($('.page-art-pub'), 'zoomIn');
        },
        willDestroy() {

        }
    }
});
