routesFolder = 'test/mockDataRoutes'
express  = require 'express'
routes   = require './'+routesFolder
mockData = require './'+routesFolder+'/mockData'
http = require 'http'
path = require 'path'

app = express()
# all environments
app.set 'port', process.env.PORT || 3000
app.set 'views', path.join __dirname, 'templates/jade'
app.set 'view engine', 'jade'
app.use express.static path.join(__dirname, 'static')
app.get '/', routes.index

app.get '/url/:folder/:file', (res,req) ->
  req.writeHead 302,
    'Location': '/images/'+res.params.folder+'/'+res.params.file
  req.end()

#sourceMappingURL="/js/application/panelweb/modules/virtual-keypad/static//src/keypad.styl.map
app.get '/js/application/panelweb/modules/virtual-keypad/templates/css/stylus/:folder/:file', (res,req) ->
  req.writeHead 302,
    'Location': '/templates/css/stylus/'+res.params.folder+'/'+res.params.file
  req.end()

app.get '', (res,req) ->
  req.send
    isenabled:
      data:
        isenabled:false

server = http.createServer(app).listen app.get('port'), ->
  console.log('Express server listening on port ' + app.get 'port' )

#io = (require 'socket.io')(server)
#io.path '/mockToken'
#io.emit 'entrance', message: 'entrance!'
#io.on 'disconnect', -> io.emit 'exit', message: 'exit'
#io.on 'chat',-> io.emit 'chat', message: '# ' + data.message

#// reference the http module so we can create a webserver
#var http = require("http");
#
#// create a server
#http.createServer(function(req, res) {
    #// on every request, we'll output 'Hello world'
    #res.end("Hello world from Cloud9!");
#}).listen(process.env.PORT, process.env.IP);
