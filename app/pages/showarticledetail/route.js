import Ember from 'ember';

export default Ember.Route.extend({

    requestArtWithId(art_id) {
        return window.myGetJson('posts/getArticleDetail.php',{art_id:art_id}).then(function(data) {
            if(data.status) {
                return data.data;
            }
        });
    },


    model(params) {
        let art_id = params.art_id ? parseInt(params.art_id) : 0;
        return this.requestArtWithId(art_id);
    },


    setupController(controller, model){
        controller.set('model', model);
    }

});
