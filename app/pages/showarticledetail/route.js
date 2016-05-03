import Ember from 'ember';

export default Ember.Route.extend({

    requestArtWithId(art_id) {
        return window.myGetJson('posts/getArticleDetail.php',{art_id:art_id}).then(function(data) {
            if(data.status) {
                return data.data;
            }
        });
    },

    requestCommentsWithId(art_id) {
        return window.myGetJson('posts/getComments.php', {art_id:art_id}).then(function(data) {
            if(data.status) {
                return data.list;
            }
        });
    },

    model(params) {
        let validId = parseInt(params.art_id),
            art_id = validId ? validId : 0;
        this.set('art_id', art_id);
        return Ember.RSVP.hash({
            art_info: this.requestArtWithId(art_id),
            art_comments: this.requestCommentsWithId(art_id)
        });
    },


    setupController(controller, model){
        controller.set('model', model);
        controller.set('art_id', this.get('art_id'));
    }

});
