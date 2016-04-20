import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        window.myGetJson('http://rap.taobao.org/mockjsdata/2909/posts/index?').then(data => {
            console.log(data);
        });
    }
});
