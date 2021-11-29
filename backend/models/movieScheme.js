var mongoose = require('mongoose')

var appSchema = mongoose.Schema

var MovieScheme = new appSchema({
    name : String,
    image : String,
    rating : String

})

module.exports = mongoose.model('movies', MovieScheme)