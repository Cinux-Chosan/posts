import Ember from 'ember';

var LazyLoadMixin = Ember.Mixin.create({
    lazyLoadFiles() {
        return [];
    },
    _endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    },
    _isJsFile(file) {
        return this._endsWith(file, '.js');
    },
    _isCssFile(file) {
        return this._endsWith(file, '.css');
    },
    _getScript(url) {
        return $.ajax({
            url,
            dataType: 'script',
            cache: true
        });
    },
    _doLoad(path) {
        var filePath = path;
        var self = this;
        if (!LazyLoadMixin.loaded[filePath]) {
            if (this._isJsFile(filePath)) {
                if (LazyLoadMixin.loading[filePath]) {
                    return LazyLoadMixin.loading[filePath];
                }
                var loadPromise = self._getScript(filePath).then(function() { // getScript is in jQuery
                    LazyLoadMixin.loaded[filePath] = true;
                    LazyLoadMixin.loading[filePath] = null;
                    return true;
                });
                LazyLoadMixin.loading[filePath] = loadPromise;
                return loadPromise;
            } else if (this._isCssFile(filePath)) {
                $('<link/>', {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: filePath
                }).appendTo('head');
                LazyLoadMixin.loaded[filePath] = true;
                return window.myPromise(true);
            }
        } else {
            return window.myPromise(true);
        }
    },
    beforeModel() {
        var files = this.lazyLoadFiles() || [];
        var self = this;

        var promises = {};
        if (files && files.length > 0) {
            _(files).forEach(function(o, i) {
                promises[String(i)] = self._doLoad(o);
            });
            return Ember.RSVP.hash(promises);
        }
        return true;
    },

    myLoad(files) {
        var self = this;
        if ($.isArray(files) && files.length > 0) {
            var promises = files.map(function(o) {
                return self.myLoad(o);
            });
            return Ember.RSVP.all(promises);
        }
        if (typeof files === 'string') {
            return self._doLoad(files);
        }
        return window.myPromise();
    }

});
LazyLoadMixin.loaded = [];
LazyLoadMixin.loading = [];

window.LazyLoadMixin = LazyLoadMixin;

export default LazyLoadMixin;
