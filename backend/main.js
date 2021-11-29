var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var moviesController = require('./controller/moviesController')
var app = express()


require('./configs/database')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/movies',moviesController)


app.listen(8080,()=>{
    console.log("The server is up");
})