import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class AddTodoComp extends Component {
    constructor(){
        super();
        this.state = {title:""}
    }

    setTitle = (e)=>{
        this.setState({title:e.target.value})
    }
    addTodo = ()=>{
        let todo = {
            title:this.state.title,
            userId:+(this.props.id),
            completed:false,
            id:this.props.data.todos.length+1
        }
        console.log(todo);
        this.props.dispatch({
            type:'ADD_TODO',
            payload:todo
        })
        this.props.history.goBack()
    }
    cancelTodo = ()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
               Title: <input type="text" onChange={this.setTitle} />
               <input type="button" value="Cancel" onClick={this.cancelTodo} />
               <input type="button" value="Add" onClick={this.addTodo} />
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        data:state
    }
}

export default withRouter(connect(mapStateToProps)(AddTodoComp))