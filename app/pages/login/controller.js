import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login(){
            let userAccount = $('#userName').val().trim();
            let userPwd = $('#userPwd').val().trim();
            if(userAccount && userPwd) {
                window.myGetJson('www.baidu.com');

            } else {

            }
        },
        didInsert() {
            let $logo = $('.login-logo');
            window.animateCss($logo,'slideInDown').then(function(data) {
                window.animateCss(data, 'rubberBand');
            });
        }

    }
});
