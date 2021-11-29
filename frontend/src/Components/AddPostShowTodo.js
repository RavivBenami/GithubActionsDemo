import React, { Component } from 'react';
import TodoComp from './TodoComp';
import AddPostComp from './AddPostComp'

class AddPostShowTodo extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
            <TodoComp id={this.props.match.params.id}/>
            <AddPostComp id={this.props.match.params.id}/>
            </div>
        );
    }
}

export default AddPostShowTodo;