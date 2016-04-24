import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login(){
            let $userAccount = $('#userName').val().trim();
            let $userPwd = $('#userPwd').val().trim();
            if($userAccount && $userPwd) {
                window.myGetJson('posts/login.php',{
                    userName: $userAccount,
                    userPwd: $userPwd
                }, 'post').then(data => {
                    if(data.status) {
                        window.tip('登陆成功，即将跳转');
                        Ember.run.later(() => this.transitionToRoute('index'), 1000);
                    }
                });
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
