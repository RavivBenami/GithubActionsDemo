var express = require('express')
var appRouter = express.Router()
var moviesBL = require('../models/movieBL')

appRouter.route('/').get(async(req,resp)=>{
    var movies = await moviesBL.getAllMovies()
    return resp.json(movies)
})

appRouter.route('/movies/:id').get(async(req,resp)=>{
    var id = req.params.id
    var movie = await moviesBL.getMovieById(id)
    return resp.json(movie)
})

appRouter.route('/').post(async(req,resp)=>{
    var movieObj = req.body;
    var movie = await moviesBL.addMovie(movieObj)
    return resp.json(movie)

})

appRouter.route('/movies/:id').put(async(req, resp)=>{
    var id = req.params.id
    var movieObj = req.body
    var result = await moviesBL.UpdateMovie(movieObj,id)
    return resp.json(result)

})

appRouter.route('/movies/:id').delete(async(req,resp)=>{
    var id = req.params.id
    var result = await moviesBL.DeleteMovie(id)
    return resp.json(result)
})



module.exports = appRouter