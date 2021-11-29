import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class AddPostComp extends Component {
    constructor(){
        super();
        this.state = {title:"",body:''}
    }
    setTitle = (e)=>{
        this.setState({title:e.target.value})
    }
    setBody = (e)=>{
        this.setState({body:e.target.value})
    }
    addPost = ()=>{
        let post = {
            title:this.state.title,
            body:this.state.body,
            userId:this.props.id
        }
        this.props.dispatch({
            type:'ADD_POST',
            payload:post
        })
        this.props.history.goBack()
    }
    cancelPost = ()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
               Title: <input type="text" onChange={this.setTitle} />
               Body: <input type="text" onChange={this.setBody} />
               <input type="button" value="Cancel" onClick={this.cancelPost} />
               <input type="button" value="Add" onClick={this.addPost} />

            </div>
        );
    }
}

export default withRouter(connect()(AddPostComp))