//  var socket = io('http://localhost');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
//   });

// window.onload = function(){
//     debugger
//     var f = new Factory();
//     window.App = f.createNewObj('App');
// };

// debugger

debugger
Modernizr.load([{
        test : typeof(angular) == "object",
        nope : [
            '/js/vendor/angular/angular.js'
        ]
    },[{
        test : false,
        nope : [
            '/css/main.css',
            '/js/app/app.js',
            '/js/app/controllers/fileGallery.js'
        ]
    }],['js/app/init.js']
]);