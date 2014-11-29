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

Modernizr.load([[{
        test : !angular,
        nope : [
            '/css/mainGallery.css',
            '/js/app/galleryapp/app.js',
            '/js/app/galleryapp/controllers/fileGallery.js'
        ]
    }],['js/app/galleryapp/init.js']
]);