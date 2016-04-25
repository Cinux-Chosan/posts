import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login(){
            let self = this,
                $userAccount = $('#userName').val().trim(),
                $userPwd = $('#userPwd').val().trim();
            if($userAccount && $userPwd) {
                window.myGetJson('posts/login.php',{
                    userName: $userAccount,
                    userPwd: $userPwd
                }, 'post').then(data => {
                    if(data.status) {
                        window.tip('登陆成功，即将跳转');
                        Ember.run.later(() => {
                            window.animateCss($('.login-container'), 'rollOut', true).then(function() {
                                self.transitionToRoute('index');
                            });
                        }, 1000);
                    }
                });
            } else {
                window.tip("用户名和密码不能为空！", 'error');
            }
        },
        didInsert() {
            let $logo = $('.login-logo');
           /* window.animateCss($logo,'slideInDown').then(function(data) {
                window.animateCss(data, 'rubberBand');
            });*/
            $logo.addClass('hidden');
            window.animateCss($('.login-container'),'rollIn').then(function() {
                return window.animateCss($logo, 'slideInDown');
            }).then(function(data){
                window.animateCss(data, 'rubberBand');
            });
        },

        willDestroy() {
            window.animateCss($('.login-container'), 'rollOut');
        }

    }
});
