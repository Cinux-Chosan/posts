

var isDev = true;

window.isDev = isDev;

var postsConfig = {
    API_HOST: location.origin || 'http://www.1235.ac.cn'    //location.origin指向url中的域名
};

var postsDevConfig = {
    API_HOST: 'http://localhost:8080'
}

window.myPromise = function(data, time) {
    return new Ember.RSVP.Promise(function(resolve) {
        if (time) {
            Ember.run.later(function() {
                resolve(data);
            }, time || 1);
        } else {
            resolve(data);
        }
    });
};


window.tip = function(msg, type, stayTime, sticky, closeCallback, closeText) {
    //usage : https://github.com/akquinet/jquery-toastmessage-plugin/wiki
    if(msg && !msg.trim()) {
        return;
    } else {
        msg = '<span class="word-break ff-sans-serif">' + msg + '</span>';
    }

    $().toastmessage('showToast', {
        text     : msg,
        sticky   : sticky,
        position : 'top-right',     //top-left, top-center, top-right, middle-left, middle-center, middle-right
        type     : type || 'success',       //notice, success, warning, error
        closeText: closeText,         //will be shown as close button
        close    : closeCallback,     //will trigger when the close button was clicked
        stayTime: stayTime || 3000
    });

};


window.animateCss = function (selector, animationName, isEnd) {
    var isArray = $.isArray(selector),
        $selector = isArray ? selector : $(selector);
    return new Ember.RSVP.Promise(function (resolve, reject) {

        var  animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        function rm(i, count, total) {
            var fuc = function() {
                var self = $(this);
                self.removeClass('animated ' + animationName[i]);
                if(isEnd) {
                    self.addClass('hidden');
                }
                if(animationName) {
                    if( (++count) === total) {
                        resolve($selector);
                    }
                } else {
                    reject(new Error('animation empty !!'));
                }
            };
            return fuc;
        }
        if(isArray) {
            var count = 0,
                total = $selector.length;
            for(var i = 0; i < total; ++i) {
                var item = $selector[i];
                if(item.length) {
                    item.removeClass('hidden').addClass('animated ' + animationName[i]).one(animationEnd, rm(i, ++count, total));  //此处使用匿名函数会得到JSHint提示： don't make functions within a loop
                } else {
                    if(++count === total) {
                        resolve($selector);
                    }
                }
            }
        } else {
            $selector.removeClass('hidden').addClass('animated ' + animationName).one(animationEnd, function() {
                if(!$selector.length) {
                    resolve($selector);
                }
                var self = $(this);
                self.removeClass('animated ' + animationName);
                if(isEnd) {
                    self.addClass('hidden');
                }
                if(animationName) {
                    resolve($selector);    //resolved的参数会作为参数传递给后面的then中函数的参数
                } else {
                    reject(new Error('animation empty !!'));
                }
            });
        }
    });
}


window.myGetJson = function(url, data, type) {
    var config = isDev ? postsDevConfig : postsConfig;
    url = (url.indexOf("http://") !== 0) ? config.API_HOST + '/' + url : url;
    type = type || 'GET';
    type = type.toUpperCase();
    function handleRequest(data) {
        if(!data.status) {
            window.tip(data.msg, 'error');
        }
        return data;
    }
    Ember.$.ajaxSetup({xhrFields: {withCredentials: true}});  //withCredentials为false允许跨域
    var promise = Ember.$.ajax({
        cache: false,
        type: type,
        url: url,
        dataType: 'json',
        data: data
    });
    promise = promise.then(handleRequest);     //$.ajax返回promise对象，在handleRequest中处理出错情况
    return new Ember.RSVP.Promise(function (resolve, reject) {
        promise.done(resolve).fail(reject);
    });
},


    window.myEncode = function(param){
        return encodeURIComponent(param);
    },

    window.myDecode = function(params) {
        return decodeURIComponent(params);
    }


/*
window.myDelay = function (time) {
    new $.promise();
}
*/

