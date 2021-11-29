import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoComp from './TodoComp'
import PostComp from './PostComp'
import MainComp from './MainComp';
class TodosAndPostsComp extends Component {
    constructor(){
        super();
        this.state = {id:""}
    }
   

    render() {      

        let id = this.props.match.params.id
        console.log(id);
        
        return (
            <div>
            <TodoComp id={id} />
            <PostComp id={id} />
           

            </div>
        );
    }
}

export default TodosAndPostsComp