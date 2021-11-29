import React, { Component } from "react";
import utils from "../utils/utils";
import { connect } from "react-redux";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import "../design.css";
import UsersComp from "./UsersComp";
import TodosAndPostsComp from "./TodosAndPostsComp";
import AddPostComp from "./AddPostComp";
import AddTodoComp from "./AddTodoComp";
import AddUserComp from "./AddUserComp";
import AddTodoShowPost from "./AddTodoShowPost";
import AddPostShowTodo from "./AddPostShowTodo";
import NavigationComp from './NavigationComp'
import {withRouter} from 'react-router-dom'
class MainComp extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  async componentDidMount() {
    let usersResp = await axios.get("https://jsonplaceholder.typicode.com/users");
    let todosResp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    let postsResp = await axios.get("https://jsonplaceholder.typicode.com/posts");

    this.props.dispatch({
      type: "ADD_DATA",
      payload: {
        users: usersResp.data,
        todos: todosResp.data,
        posts: postsResp.data,
      },
    });
    this.setState({ users: usersResp.data });
  }

  getUserFromChild = (user) => {
    let usersArr = this.state.users;
    usersArr[user.id - 1] = user;
    console.log(usersArr);
    this.setState({ users: usersArr });
  };
  setSearch = (e) => {
    let users = this.props.data.users.filter((user) => {
      if (user.name.includes(e.target.value) || user.email.includes(e.target.value)) {
        return user;
      }
    });
    this.setState({ users: users });
  };

  render() {
    let users = this.state.users.map((user, index) => {
      return <UsersComp user={user} key={index} passToParent={this.getUserFromChild} />;
    });

    return (
      <div>
        search : <input type="text" onChange={this.setSearch} />
        <Link to="/users/addUser">
          <input type="button" value="Add" />
        </Link>
        <br />
        <br />
        <div className={"leftDiv"}>{users}</div>

        <div className={"rightDiv"}>
          <Switch>
            <Route path="/users/addUser" component={AddUserComp} />
            <Route path="/users/selectedUser/:id" exact component={TodosAndPostsComp} />
            <Route path="/users/selectedUser/:id/addTodo" component={AddTodoShowPost} />
            <Route path="/users/selectedUser/:id/addPost" component={AddPostShowTodo} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default withRouter(connect(mapStateToProps)(MainComp))
