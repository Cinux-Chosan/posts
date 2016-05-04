import Ember from 'ember';

export default Ember.Controller.extend({

    showAddPraise: true,

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
            let input_email = $('#InputEmail1'),
                input_name =  $('#InputName'),
                input_comments = $('#InputComment');
            if(input_comments.val().trim()) {
                window.myGetJson('posts/addComments.php', {
                    email: input_email.val().trim(),
                    name: input_name.val().trim(),
                    comments: input_comments.val().trim(),
                    art_id:this.get('art_id')
                }, 'post').then(function(data) {
                    if(data.status) {
                        window.tip('感谢您的评论！');
                        input_email.val('');
                        input_name.val('');
                        input_comments.val('');
                    }
                });
            } else {
                window.tip('评论类容必不可少！', 'warning');
            }
        },

        addPraise(){
            let self = this,
                $addPraise = $('.add-praise');
            window.myGetJson('posts/addPraise.php', {art_id: this.get('art_id')}).then(function(data) {
                if(data.status) {
                    window.tip('感谢点赞！');
                    window.animateCss($addPraise, 'slideOutUp', true).then( data => {
						self.set('showAddPraise', false);
						});
                }
            });

        }

    }
});
