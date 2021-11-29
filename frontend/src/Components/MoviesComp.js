import axios from 'axios';
import React, { Component } from 'react';

class MoviesComp extends Component {
    constructor(){
        super();
        this.state = {movies:[]}
    }

   async componentDidMount(){
     let resp = await axios.get("http://api.tvmaze.com/shows")
     let movies = resp.data

     let filterdMovies = movies.slice(0,9);
    

     let resp2 = await axios.get("http://localhost:8080/movies")
     let movies2 = resp2.data

     if(movies2.length == 0){
        filterdMovies.forEach(async item => {
            let movie = {
                name:item.name,
                image:item.image.medium,
                rating:item.rating.average
            }
          await axios.post("http://localhost:8080/movies",movie)
        });
      }
      let resp3 = await axios.get("http://localhost:8080/movies")
      let movies3 = resp3.data
      this.setState({movies:movies3})
    }

    render() {
        let obj = this.state.movies.map((item,index)=>{
            return <ul key={index}>
                <li>
                 Name: {item.name}<br/>
                 <img src={item.image}></img><br/>
                 Rating: {item.rating}
                </li>
            </ul>
        })
        
        return (
            <div>
                {obj}
            </div>
        );
    }
}

export default MoviesComp;