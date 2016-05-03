import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        didInsertFunc() {
            let $html = $('html');
            $html.addClass('overflow-auto');
            $('body').addClass();
            $("header").headroom({
                "tolerance": 0,
                "offset": 0,
                "classes": {
                    "initial": "animated",
                    "pinned": "flipInX",
                    "unpinned": "flipOutX"
                }
            });

        },
        willDestroyFunc(){},

        submit(){
            let email = $('#InputEmail1').val().trim(),
                name =  $('#InputName').val().trim(),
                comments = $('#InputComment').val().trim();
            if(comments) {
                window.myGetJson('posts/addComments.php', {
                    email: email,
                    name: name,
                    comments: comments,
                    art_id:this.get('art_id')
                }, 'post').then(function(data) {
                    if(data.status) {
                        window.tip('感谢您的评论！');
                    }
                });
            } else {
                window.tip('评论类容必不可少！', 'warning');
            }
        }

    }
});
