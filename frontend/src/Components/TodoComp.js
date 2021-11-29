import React, { Component } from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class TodoComp extends Component {
  constructor() {
    super();
    this.state = { todos: [], id: "" };
  }

  markCompleted = (id) => {
    this.props.dispatch({
      type: "MARK_COMPLETED",
      payload: id,
    });
  };
  addTodo = () => {
    var id = this.props.id
    this.props.history.push(`/users/selectedUser/${id}/addTodo`);
  };

  render() {
    let id = this.props.id;
    let todosArr = this.props.data.todos.filter((item) => item.userId == id);

    let todos = todosArr.map((item, index) => {
      console.log(item);
      let btnVisibilty = "";
      if (item.completed) {
        btnVisibilty = "hidden";
      } else {
        btnVisibilty = "visible";
      }
      return (
        <div key={index} className={"borderBlack"}>
          Title : {item.title}
          <br />
          Completed : {`${item.completed}`}      
          <input type="button" value="Mark Completed" style={{ visibility: btnVisibilty }} onClick={this.markCompleted.bind(this, item.id)} />
        </div>
      );
    });
    return (
      <div>
        Todos - user {id}
        <input type="button" value="Add" onClick={this.addTodo} />
        {todos}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default withRouter(connect(mapStateToProps)(TodoComp))
