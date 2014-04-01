
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/compare/:url1/:url2', function(req, res) {
//    res.send('<h1>' + req.params.video + '</h1>');
    console.log(req,res);

//    ‌‌req.params.url1
//    var ulr1 = ‌‌req.params.url2;

    var body1,body2,mainRequest = req,content=false;

    var request = require('request');
    request('http://www.lazada.vn/'+mainRequest.param('url1')+'.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
            body1 = body;

            request('http://www.lazada.vn/'+mainRequest.param('url1')+'.html', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body) // Print the google web page.
                    body2 = body;
                    content = '<div id="compare_1">'+body1+'</div>'+'<div id="compare_2">'+body2+'</div>'
                    res.send(content);
                }
            });
        }
    });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
