
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
    return new Ember.RSVP.Promise(function (resolved, rejected) {
        let  animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $selector.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if(animationName) {
                resolved($selector);    //resolved的参数会作为参数传递给后面的then中函数的参数
            } else {
                rejected(new Error('animation empty !!'));
            }
        });

    });

}


