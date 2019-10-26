import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from "../services/LocalStorage";

export default class CreateAndUpdate extends Component {
  // constructor(props){
  //     super(props);
  // }

  render() {
    if (!locStorage.checkIsNull()) {
      console.log("falta algun dato");
      this.props.history.push("/");
    } else {
      console.log("todo bien");
    }

    this.context = locStorage.checkLocalStorage(this.context);

    const { name, surname, tag } = this.context;

    console.log(`contexto de CreateAndUpdate: ${name} ${surname} ${tag}`);

    return <h1>CreateAndUpdate</h1>;
  }
}

CreateAndUpdate.contextType = MainContext;
