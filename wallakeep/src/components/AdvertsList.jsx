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
    // const { success, count, results } = data;
    const { results } = data;

    let adverts = [];

    results.map(elem => {
      adverts.push(new Advert(elem));
      return true;
    });

    this.setState({
      adverts
    });
  };

  //parte para filtros
  handleSubmit = async event => {
    //cambiamos el filtro que viene dado por el registro
    const filtersTags = document.getElementById("filtroTags");
    this.context.tag = filtersTags.value;
    locStorage.setItem("tag", this.context.tag);

    const data = await searchAll();
    // const { success, count, results } = data;
    const { results } = data;

    let adverts = [];

    results.map(elem => {
      adverts.push(new Advert(elem));
      return true;
    });

    this.setState({
      adverts
    });
  };

  buildAdvertsList = () => {
    return (
      <div className="row">
        {this.state.adverts.map(advert => (
          <AdvertLine key={advert._id} advert={advert} />
        ))}
      </div>
    );
  };

  buildTagList = () => {
    const elems = this.context.tags.split(",");

    return (
      <select id="filtroTags">
        {elems.map(elem => {
          return (
            <option key={elem} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
    );
  };

  render() {
    if (!locStorage.checkIsNull()) {
      console.log("falta algun dato");
      this.props.history.push("/");
    }

    this.context = locStorage.checkLocalStorage(this.context);

    const { name, surname, tag } = this.context;
    console.log(this.context);

    return (
      <div>
        <h1>Lista de filtros:</h1>

        <h3>v{name}</h3>
        <h3>v{surname}</h3>
        {this.buildTagList()}

        <br />

        <button onClick={this.handleSubmit}>Buscar</button>

        <h1>Lista de artículos:</h1>
        <h3>tag filtrado: {tag}</h3>

        {this.state.adverts.length > 0 && this.buildAdvertsList()}
      </div>
    );
  }
}

AdvertsList.contextType = MainContext;
