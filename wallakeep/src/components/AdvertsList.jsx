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

    this.loadInitList();

  }

  loadInitList = async event => {
    const data = await searchAll();
    const { success, count, results } = data;

    let adverts = [];

    results.map(elem => {
      adverts.push(new Advert(elem));
    });

    this.setState({
      adverts
    });

  };

  //parte para filtros
  handleSubmit = async event => {
    const data = await searchAll();
    const { success, count, results } = data;

    let adverts = [];

    results.map(elem => {
      adverts.push(new Advert(elem));
    });

    this.setState({
      adverts
    });

  };

  buildAdvertsList = () => {
      return (
        <div className="row">
          {this.state.adverts.map(advert => (
            <AdvertLine advert={advert} />
          ))}
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
    
    return (
      <div>
        <h1>Lista de filtros:</h1>

        <h3>v{name}</h3>
        <h3>v{surname}</h3>
        <h3>v{tag}</h3>
        
        <button onClick={this.handleSubmit}>
          Buscar
        </button>

        <h1>Lista de artículos:</h1>
        {
          this.state.adverts.length > 0
          &&
          this.buildAdvertsList()
        }

      </div>
    );
  }
}

AdvertsList.contextType = MainContext;
