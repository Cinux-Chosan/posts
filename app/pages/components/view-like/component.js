import Ember from 'ember';

export default Ember.Component.extend({
    didInsert: null,
    didInsertParams: [],
    didInsertElement(){
        this.get('didInsert')(this.get('didInsertParams'));
    }
});
