import Ember from 'ember';

export default Ember.Controller.extend({
    currentTab: 'list',
    isList : Ember.computed.equal('currentTab', 'list'),
    isPub : Ember.computed.equal('currentTab', 'pub'),
    isOther : Ember.computed.equal('currentTab', 'other'),
    actions: {
        goto(someWhere) {
            let $left = $('.art-list-body .art-list-left'),
                $right = $('.art-list-body .art-list-right');

        /*    window.animateCss([$left, $right], ['fadeOutRight', 'fadeOutLeft']);
            window.animateCss($right, 'fadeOutLeft').then(() => {
                this.transitionToRoute(someWhere);
            });
        */

            console.log('DDD');
            window.animateCss([$left, $right], ['fadeOutRight', 'fadeOutLeft'], true).then(() => {
                this.transitionToRoute(someWhere);
            });
        }
    }
});
