import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['w100p h100p'],
    bindClass: '',
    insertClass: Ember.computed('bindClass', function () {
        let bindClass = this.get('bindClass');
        return Ember.isArray(bindClass) ? bindClass.join(' ') : bindClass;
    }),
    didInsertElement() {
        let editor =  $('#post-xh-editor');
        editor.xheditor({
            upLinkUrl:"upload.php",
            upLinkExt:"zip,rar,txt",
            upImgUrl:"upload.php",
            upImgExt:"jpg,jpeg,gif,png",
            upFlashUrl:"upload.php",
            upFlashExt:"swf",
            upMediaUrl:"upload.php",
            upMediaExt:"avi"
        });
        window.editor = editor;
    }
});
