import Ember from 'ember';

export default Ember.Route.extend({
    getArticleList(){
        return window.myGetJson('posts/getArticleList.php', {
           // queryStart:
            queryStart: 0,
            querySkip: 10
        }).then(data => {
            if(data.status) {
                return data;
            }
        });

    },

    model(){
        return Ember.RSVP.hash({
            articleList: this.getArticleList()

        });

    },
    setupController(controller, model){
        controller.set('model', model);
    }
});
