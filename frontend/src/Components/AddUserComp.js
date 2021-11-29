import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class AddUserComp extends Component {
    constructor() {
        super();
        this.state = {name:"",email:""}
    }
    setName = (e)=>{
        this.setState({name:e.target.value})
    }
    setEmail = (e)=>{
        this.setState({email:e.target.value})
    }
    addUser = ()=>{
        let user = {
            name: this.state.name,
            email: this.state.email,
            id:"",
            address :{
                city:"",
                street:"",
                zipcode:""
            }
        }
        this.props.dispatch({
            type:"ADD_USER",
            payload:user
        })
        this.props.history.goBack()
    }
    cancelUser = ()=>{
        this.props.history.goBack()
    }
    
    render() {
        return (
            <div>
                Name :<input type="text" onChange={this.setName} /><br/>
                Email : <input type="text" onChange={this.setEmail} /><br/>
                <input type="button" value="Add" onClick={this.addUser} />
                <input type="button" value="Cancel" onClick={this.cancelUser} />
            </div>
        );
    }
}

export default withRouter(connect()(AddUserComp))