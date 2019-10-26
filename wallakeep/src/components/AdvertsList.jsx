import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from "../services/LocalStorage";
import api from "../services/NodePopDBService"

const { searchAll } = api();

export default class AdvertsList extends Component {
  constructor(props) {
    super(props);

    
  }
  

  render() {
    if (!locStorage.checkIsNull()) {
      console.log("falta algun dato");
      this.props.history.push("/");
    } else {
      console.log("todo bien");
    }
    
    this.context = locStorage.checkLocalStorage(this.context);
    
    const { name, surname, tag } = this.context;
    
    console.log(`contexto de AdvertList: ${name} ${surname} ${tag}`);
    
    const aaa = searchAll()
    // .then(() => console.log('lalalla'));
    console.log(aaa)
    
    return (
      <div>
        <h1>AdvertsList</h1>
        <h3>v{name}</h3>
        <h3>v{surname}</h3>
        <h3>v{tag}</h3>
        <a href="/detail/1"> detail1 </a>
        
      </div>
    );
  }
}

AdvertsList.contextType = MainContext;
