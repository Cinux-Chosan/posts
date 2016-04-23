import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['w100p h100p'],
    bindClass: '',
    insertClass: Ember.computed('bindClass', function () {
        let bindClass = this.get('bindClass');
        return Ember.isArray(bindClass) ? bindClass.join(' ') : bindClass;
    }),
    didInsertElement() {
            $('#post-xh-editor').xheditor();
    }
});
