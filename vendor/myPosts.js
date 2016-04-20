
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
    if(!msg.trim()) {
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


window.animateCss = function (selector, animationName) {
    let $selector = $(selector);
    return new Ember.RSVP.Promise(function (resolve, reject) {
        let  animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $selector.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if(animationName) {
                resolve($selector);    //resolved的参数会作为参数传递给后面的then中函数的参数
            } else {
                reject(new Error('animation empty !!'));
            }
        });
    });
}


window.myGetJson = function(url, data, type) {
    type = type || 'GET';
    type = type.toUpperCase();
    function handleRequest(data) {
        if(!data.status) {
            window.tip(data.msg, 'error');
        }
        return data;
    }
    Ember.$.ajaxSetup({xhrFields: {withCredentials: false}});  //withCredentials为false允许跨域
    let promise = Ember.$.ajax({
        type: type,
        url: url,
        dataType: 'json',
        data: data
    });
    promise = promise.then(handleRequest);     //$.ajax返回promise对象，在handleRequest中处理出错情况
    return new Ember.RSVP.Promise(function (resolve, reject) {
        promise.done(resolve).fail(reject);
    });
}

