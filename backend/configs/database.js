var mongoose = require('mongoose')

mongoose.connect('mongodb://mongo-db:27017/moviesDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})