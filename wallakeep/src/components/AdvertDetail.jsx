import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from "../services/LocalStorage";

export default class AdvertDetail extends Component {
  constructor(props){
      super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();  
    this.props.history.push("/adverts");
  };

  render() {
    if (!locStorage.checkIsNull()) {
      console.log("falta algun dato");
      this.props.history.push("/");
    } else {
      console.log("todo bien");
    }

    this.context = locStorage.checkLocalStorage(this.context);

    const { name, surname, tag } = this.context;

    console.log(`contexto de AdvertDetail: ${name} ${surname} ${tag}`);

    return (
      <div>
        <h1>AdvertDetail</h1>
        <button onClick={this.handleSubmit}>Volver</button>
      </div>
    );
  }
}

AdvertDetail.contextType = MainContext;
