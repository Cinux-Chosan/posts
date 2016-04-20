import Ember from 'ember';

export default Ember.Component.extend({
    didInsertFunc: null,
    didInsertParams: [],
    willDestroyFunc: null,
    willDestroyParams: [],
    didInsertElement(){
        let didInsertFunc = this.get('didInsertFunc');
        didInsertFunc && didInsertFunc(this.get('didInsertParams'));
    },
    willDestroy() {
        let willDestroyFunc = this.get('willDestroyFunc');
        willDestroyFunc && willDestroyFunc(this.get('willDestroyParams'));
    }
});
