import Ember from 'ember';

export default Ember.Controller.extend({
    articleController: Ember.inject.controller('article'),

    selectedArtIndex: 0,
    selectedArtText: Ember.computed('selectedArtIndex', function () {
        let selectedArtIndex = this.get('selectedArtIndex');
        return this.get('model').articleList.list[selectedArtIndex].article_text;
    }),

    actions: {
        didInsertFunc() {
            this.get('articleController').set('currentTab', 'list');
            let $left = $('.art-list-body .art-list-left'),
                $right = $('.art-list-body .art-list-right');
            window.animateCss([$left, $right], ['fadeInLeft', 'fadeInRight']);

        },
        willDestroyFunc() {

        },
        showText(index) {
            this.set('selectedArtIndex',index);
        },

        turnPage(pageData) { debugger;
            window.myGetJson('posts/getArticleList.php', {
                // queryStart:
                queryStart: pageData.limit * pageData.page,
                querySkip: pageData.limit
            }).then(data => {
                this.set('model.articleList', data);
            });
        }
    }
});
