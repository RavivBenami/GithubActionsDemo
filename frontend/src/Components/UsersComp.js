import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, useHistory } from "react-router-dom";

class UsersComp extends Component {
  constructor() {
    super();
    this.state = { hover: false, name: "", email: "", address: { city: "", street: "", zipcode: "" }, clicked: false, id: "" };
  }

  deleteUser = (id) => {
    this.props.dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };
  showData = (id) => {
    this.setState({ hover: true });
  };
  closeData = (id) => {
    this.setState({ hover: false });
  };
  setName = (e) => {
    this.setState({ name: e.target.value });
  };
  setEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  setCity = (e) => {
    this.setState({ address: { city: e.target.value, street: this.state.address.street } });
  };
  setStreet = (e) => {
    this.setState({ address: { street: e.target.value, city: this.state.address.city } });
  };
  setZipcode = (e) => {
    this.setState({ zipcode: e.target.value });
  };
  updateUser = (id) => {
    let user = {
      id: id,
      name: this.state.name,
      email: this.state.email,
      address: {
        city: this.state.address.city,
        street: this.state.address.street,
        zipcode: this.state.zipcode,
      },
    };
    this.props.passToParent(user);
    this.props.dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };
  changeDivColor = (id) => {
    this.props.dispatch({
      type: "CLICKED",
      payload: id,
    });
  };

  render() {
    let user = this.props.user;
    let divColor = "";
    let userTodos = this.props.data.todos.filter((todos) => todos.userId == user.id);
    let counter = 0;
    for (let i = 0; i < userTodos.length; i++) {
      if (userTodos[i].completed == false) {
        counter++;
      }
    }
    if (counter >= 1) {
      divColor = "1px solid red";
    } else {
      divColor = "1px solid green";
    }

    let divBGColor = "white";
    let clickedArr = this.props.data.clickedArr;
    if (clickedArr[user.id] == true) {
      divBGColor = "orange";
    } else {
      divBGColor = "white";
    }

    let otherDataObj = <div></div>;

    if (this.state.hover) {
      otherDataObj = (
        <div>
          city: <input type="text" placeholder={user.address.city} onChange={this.setCity} />
          <br />
          street : <input type="text" placeholder={user.address.street} onChange={this.setStreet} />
          <br />
          ZipCode: <input type="text" placeholder={user.address.zipcode} onChange={this.setZipcode} />
          <br />
        </div>
      );
    }

    return (
      <div key={this.props.key} style={{ border: divColor, width: "300px", backgroundColor: divBGColor }}>
        <Link to={`/users/selectedUser/${user.id}`} onClick={this.changeDivColor.bind(this, user.id)}>
          ID : {user.id}
        </Link>
        <br />
        Name : <input type="text" placeholder={user.name} onChange={this.setName} />
        <br />
        Email : <input type="text" placeholder={user.email} onChange={this.setEmail} />
        <br />
        <input type="button" value="Other Data" onMouseOver={this.showData.bind(this, this.props.key)} onClick={this.closeData.bind(this, this.props.index)} />
        <input type="button" value="Update" onClick={this.updateUser.bind(this, user.id)} />
        <input type="button" value="Delete" onClick={this.deleteUser.bind(this, user.id)} />
        {otherDataObj}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};
export default connect(mapStateToProps)(UsersComp);
