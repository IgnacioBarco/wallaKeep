import React, { Component } from "react";
import MainContext from "../services/MainContext";

export default class AdvertsList extends Component {
  // constructor(props) {
  //   super(props);
    // const { name, surname, tag } = this.context;
    // console.log('contexto de AdvertList en constructor: ' + this.context);

  // }

  render() {
    const { name, surname, tag } = this.context;
    console.log('contexto de AdvertList: ' + this.context);

    return (
      <div>
        <h1>AdvertsList</h1>
        <h3>v{name}</h3>
        <h3>v{surname}</h3>
        <h3>v{tag}</h3>
      </div>
    );
  }
}

AdvertsList.contextType = MainContext;
