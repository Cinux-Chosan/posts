import Ember from 'ember';

export default Ember.Controller.extend({
    articleController: Ember.inject.controller('article'),
    actions: {

        didInsert() {
            this.get('articleController').set('currentTab', 'pub');
            window.animateCss($('.page-art-pub'), 'zoomIn').then(function() {
                return window.animateCss($('.form-submit'), 'lightSpeedIn');
            }).then(function(data) {
                window.animateCss(data, 'flipOutY').then(function() {
                    $('.form-btn-group').addClass('hover-show-parent');
                });
            });
        },
        willDestroy() {

        },
        submit() {
            let title = $('#art-title').val(),
                text = $('.article-text').val(),
                article_type = $('#text-type').text();
            window.myGetJson('posts/addArticle.php', {
                'articleTitle': title,
                'articleText': text,
                'articleType': article_type
            }, 'post').then(data => {
                if(data.status) {
                    window.tip('添加成功！');
                }
            });

        }
    }
});
