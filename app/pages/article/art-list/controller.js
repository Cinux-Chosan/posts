import Ember from 'ember';

export default Ember.Controller.extend({
    articleController: Ember.inject.controller('article'),

    actions: {
        didInsertFunc(){
            this.get('articleController').set('currentTab', 'list');
            let $left = $('.art-list-body .art-list-left'),
                $right = $('.art-list-body .art-list-right');
            window.animateCss([$left, $right], ['fadeInLeft', 'fadeInRight']);

        },
        willDestroyFunc(){

        }
    }
});
