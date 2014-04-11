/**
 * Module dependencies.
 */

var routesFolder = 'mockDataRoutes',
    express = require('express'),
    routes = require('./'+routesFolder),
    mockData = require('./'+routesFolder+'/mockData'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'templates/jade'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/list', mockData.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//app.get('/replay', routes.index);
//app.get('/replay/:video', function(req, res) {
//    res.send('<h1>' + req.params.video + '</h1>');
//});
