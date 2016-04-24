import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        didInsert() {
            let $navbar = $('ul.nav.navbar-nav');
            window.animateCss($navbar, 'swing');
        },

        willDestroyFunc(someWhere) {
            let $navbar = $('.page-index ul.nav.navbar-nav');
            window.animateCss($navbar, 'hinge', true).then(() => {
                console.log('aaaa');
                this.transitionToRoute(someWhere);
                console.log('bbbb');
            });
        }
    }
});
