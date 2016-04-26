/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here

      /*  babel:{
            includePolyfill: true,
            comments: false,
            only: [
      /!*          './components/!*.js',
                './pages/!**!/!*.js',
                './mixins/!*.js',
                './models/!*.js',
            //    './transitions/!*.js',
            //    './transitions.js',
                './helpers/!*.js',
                './!*.js'*!/
            ]


        },*/


        autoprefixer: {
            sourcemap: false,
            cascade: false,
            browsers: ["> 10%", "last 2 versions"]
        },

        fingerprint: {
            exclude:['public/xhEditor/'],     // exclude 中的文件不会被加上指纹，xhEditor在加载过后再加载自己的文件，文件被编码在js内部，加了指纹过后会找不到对应文件
            //prepend: 'http://www.1235.ac.cn'   // prepend 会使得 http://www.1235.ac.cn 被加在编译文件的文件名最前面
        },
        outputPaths: {
            //   "C:/Users/Chosan/Documents/My FTPRush Downloads"

        },
        minifyJS: {
            //压缩js
            enabled: false
        },
        minifyCSS: {
            //压缩css
            enabled: true
        },

        lessOptions: {
            //加在paths数组里面的路径的资源会被编译，
            paths: [
                'app/styles/app'
            ]
        }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

    /*********************************************************************
    使用app.import()引入的静态资源(css，js)将会被编译进对应的vender.css或者vender.js
    ***********************************************************************/

    //js
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js');
    app.import('vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js');
    app.import('vendor/lodash/lodash/dist/lodash.js');
    app.import('vendor/myPosts.js');
    app.import('vendor/jquery-toastmessage-plugin/src/main/javascript/jquery.toastmessage.js');

    //css

    app.import('vendor/jquery-toastmessage-plugin/src/main/resources/css/jquery.toastmessage.css');
    app.import('vendor/Font-Awesome-3.2.1/css/font-awesome.min.css');  //usage :http://www.bootcss.com/p/font-awesome/
    app.import('vendor/animate.css/animate.min.css');

    //ttf
    app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
        destDir: 'fonts'      //由于bootstrap中的variables.less中定义的@icon-font-path: "../fonts/"; 在不修改该变量的情况下，将字体文件编译进assets/fonts目录
    });  //引入bootstrap的字体

    app.import('vendor/Font-Awesome-3.2.1/font/fontawesome-webfont.ttf', {
        destDir: 'fonts'
    });


    /*********************************************************************
    使用app.import()引入的其他资源(less，ttf 等)将会被原封不动的装入dist/目录中
    ***********************************************************************/
  

  return app.toTree();
};
