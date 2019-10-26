import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from "../services/LocalStorage";
import api from "../services/NodePopDBService";
import Advert from "../models/Advert";
import AdvertLine from "../components/AdvertLine";

const { searchAll } = api();

export default class AdvertsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adverts: []
    };

    this.handleSubmit();
  }

  handleSubmit = async event => {
    this.state.adverts = [];

    const data = await searchAll();

    const { success, count, results } = data;

    results.map(elem => {
      this.state.adverts.push(new Advert(elem));
    });

    console.log(this.state);
  };

  buildAdvertsList = adverts => {
    let datos = [];
    datos = adverts;
    console.log("adverts ");
    console.log(adverts);
    console.log("adverts ");

    console.log("datos");
    console.log(datos);
    console.log(adverts[[1]]);
    console.log("datos");
    

    return (
      <div className="row">
        linea---
        {datos.map(advert => ( <AdvertLine advert={{ advert }} /> ))
        // <AdvertLine advert={{tags: Array(3), _id: "5db338218cfc2139bc897417", name: "Raton Gaming Razer Mam"}}/>
        }
        +++fin
      </div>
    );
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
    console.log(`contexto de AdvertList: ${name} ${surname} ${tag}`);

    // /////////////////////////////////////////////
    const { adverts } = this.state;

    return (
      <div>
        <h1>AdvertsList</h1>
        <h3>v{name}</h3>
        <h3>v{surname}</h3>
        <h3>v{tag}</h3>
        <button onClick={this.handleSubmit}>submit</button>

        <h1>advertsline</h1>
        {this.buildAdvertsList(adverts)}

        <a href="/detail/1"> detail1 </a>
      </div>
    );
  }
}

AdvertsList.contextType = MainContext;
