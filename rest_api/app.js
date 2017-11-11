const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const routes = require('./routes/index')
const http = require('http')
const bodyParser = require('body-parser')

var app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: "layout", layoutsDir: __dirname + '/views/layouts/'})) // extention hbs
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

// url
app.use('/', routes)
app.use('/new', routes)
app.use('/detail', routes)
app.use('/list', routes)


app.set('port', (process.env.PORT || 3000))


// create http server
var server = http.createServer(app)
server.listen(app.get('port'))
server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
    console.log("error: ", error)
}

function onListening() {
    console.log("server is running")
}

module.exports = app
