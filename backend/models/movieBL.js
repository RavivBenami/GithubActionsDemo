
var Movie = require('./movieScheme')


var getAllMovies = ()=> {

    return new Promise((resolve, reject)=>{
        Movie.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}

var getMovieById = (id)=>{
    return new Promise((resolve,reject)=>{
        Movie.findById({id},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


var addMovie = (newMovie)=> {
    return new Promise((resolve,reject)=> {

        var movie = new Movie({
            name: newMovie.name,
            image: newMovie.image,
            rating: newMovie.rating
        })
        movie.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(movie)
            }
        })
    })
}
var UpdateMovie = (updatedMovie,id)=>{
    return new Promise((resolve,reject)=>{
        Movie.findByIdAndUpdate(id,{
            name: newMovie.image,
            image: newMovie.image,
            rating: newMovie.rating
        },(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Movie Updated!");
            }
        })

    })
}

var DeleteMovie = (id)=>{
    return new Promise((resolve,reject)=>{
        Movie.findByIdAndDelete(id,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("movie has been deleted");
            }
        })
    })
}

module.exports = {getAllMovies,getMovieById,addMovie,DeleteMovie,UpdateMovie}