import Ember from 'ember';

export default Ember.Component.extend({

    currentPage : Ember.computed('pageData', function () {
        return this.get('pageData').page || 0;
    }),

    pageData: null,  // {page: 当前页, total: 总条目, limit: 每一页的条数}
    totalPage: Ember.computed('pageData', function () {
        return Math.ceil(this.get('pageData').total / this.get('pageData').limit);
    }),
    pages: Ember.computed('totalPage', function () {
        let pageArr = [],
            length = this.get('totalPage');
        for(let i = 0; i < length; ++i) {
            pageArr.push(i);
        }
        return pageArr;
    }),
    action: 'turnPage',

    actions:　{
        prev() {
            this.send('turnToPage', this.get('currentPage') - 1);
        },

        turnToPage(page) {
            debugger
            if((page < 0) || page >= this.get('totalPage')) {
                return;
            }
            let pageData = this.get('pageData') || {};
            pageData.page = page;
            pageData.limit = pageData.limit || 10;
            pageData.total = pageData.total || 0;

            this.sendAction(this.get('action'), pageData);
        },

        next() {
            this.send('turnToPage', this.get('currentPage') + 1);
        }
    }
});
