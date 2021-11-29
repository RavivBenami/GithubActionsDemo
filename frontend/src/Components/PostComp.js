import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class PostComp extends Component {
    constructor(){
        super();
        this.state = {posts:[],id:""}
    }

    addPost = ()=>{
        let id = this.props.id
        this.props.history.push(`/users/selectedUser/${id}/addPost`)
    }

    render() {

        let id = this.props.id
        let postsArr = this.props.data.posts.filter(item => item.userId == id)
        let posts = postsArr.map((item,index)=>{
            return <div key={index} className={"borderBlack"}>
                Title : {item.title}<br />
                Body : {item.body}
            </div>
         })
        return (
            <div>
                Posts - user{this.state.id}
                <input type="button" value="Add Post" onClick={this.addPost} />
                {posts}
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        data:state
    }
}

export default withRouter(connect(mapStateToProps)(PostComp))