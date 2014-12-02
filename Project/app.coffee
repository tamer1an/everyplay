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

app.get '/files', (req,res) ->
  res.json
    files:[
      size:26
      name:'image'
      ext:'jpg',

        size:5
        name:'text'
        ext:'txt',

          size:10
          name:'page'
          ext:'html',
          
            size:26
            name:'test_image'
            ext:'jpg',
            
              size:5
              name:'test_text'
              ext:'txt',
    ]
    
server = http.createServer(app).listen app.get('port'), ->
  console.log('Express server listening on port ' + app.get 'port' )