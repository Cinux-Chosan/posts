import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        didInsertFunc() {
            let $html = $('html');
            $html.addClass('overflow-auto');
        },
        willDestroyFunc(){}

    }
});
