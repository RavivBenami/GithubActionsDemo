import React, { Component } from 'react';
import AddTodoComp from './AddTodoComp';
import PostComp from './PostComp';
import {withRouter} from 'react-router-dom'

class AddTodoShowPost extends Component {
    constructor() {
        super();
    }
    
    render() {
        console.log("DADADADADA");
        return (
            <div>
                <AddTodoComp id={this.props.match.params.id}/>
                <PostComp id={this.props.match.params.id}/>
                
            </div>
        );
    }
}

export default AddTodoShowPost;