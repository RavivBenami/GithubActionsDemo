import React, { Component } from "react";
import {Route,Link,Switch} from 'react-router-dom'
import AddUserComp from './AddUserComp'
import TodosAndPostsComp from './TodosAndPostsComp'
import AddTodoShowPost from './AddTodoShowPost'
import AddPostShowTodo from './AddPostShowTodo'
import MainComp from './MainComp'
import MoviesComp from './MoviesComp'

class NavigationComp extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div>
       
        <div className={"topnav"}>
          <a href="http://localhost:3000/users">
            Users
          </a>
          <a href="/movies">Movies</a>
        </div>
        <br />
        <div className={"leftDiv"}>
        <Switch>
        <Route path = "/users" component ={MainComp}/> 
        <Route path = "/movies" component={MoviesComp}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default NavigationComp;
