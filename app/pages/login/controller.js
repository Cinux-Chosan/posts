import Ember from 'ember';

export default Ember.Controller.extend({


    actions: {
        login(){
            let userAccount = $('#userName').val();
            let userPwd = $('#userPwd').val();
            console.log(userAccount);
            console.log(userPwd);
        }

    }
});
