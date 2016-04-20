import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        didInsert() {
            let $navbar = $('ul.nav.navbar-nav');
            window.animateCss($navbar, 'swing');
        },

        willDestroyFunc(someWhere) {
            let $navbar = $('ul.nav.navbar-nav');
            window.animateCss($navbar, 'hinge').then(() => {
                this.transitionToRoute(someWhere);
            });
        }
    }
});
