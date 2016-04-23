import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login(){
            let $userAccount = $('#userName').val().trim();
            let $userPwd = $('#userPwd').val().trim();
            if($userAccount && $userPwd) {
                window.myGetJson('http://localhost:8080/login.php',{
                    userName: $userAccount,
                    userPwd: $userPwd
                }, 'post').then(data => {console.log(data);});
            } else {
                window.tip("用户名和密码不能为空！", 'error');
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
