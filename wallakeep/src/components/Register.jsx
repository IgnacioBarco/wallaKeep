import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from '../services/LocalStorage';


export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      tag: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const { name, surname, tag } = this.state;
    this.context.name = name;
    this.context.surname = surname;
    this.context.tag = tag;

    // Guardamos en localstorage
    locStorage.setItem('name', name);
    locStorage.setItem('surname', surname);
    locStorage.setItem('tag', tag);

    this.props.history.push('/adverts');
  };

  onInputChangeName = event => {
    this.setState({
      name: event.target.value
    });
  };
  onInputChangeSurname = event => {
    this.setState({
      surname: event.target.value
    });
  };
  onInputChangeTag = event => {
    this.setState({
      tag: event.target.value
    });
  };

  render() {
    const { name, surname, tag } = this.state;

    return (
      <form>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.onInputChangeName}
          name="name"
        />

        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={this.onInputChangeSurname}
          name="surname"
        />

        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={this.onInputChangeTag}
          name="tag"
        />

        <button onClick={this.handleSubmit}>submit</button>
      </form>
    );
  }
}

Register.contextType = MainContext;
