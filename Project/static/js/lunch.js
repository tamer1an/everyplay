//  var socket = io('http://localhost');
//   socket.on('news', function (data) {
//     console.log(data);
//     socket.emit('my other event', { my: 'data' });
//   });


window.onload = function(){
    var f = new Factory();
    window.App = f.createNewObj('App');
};
