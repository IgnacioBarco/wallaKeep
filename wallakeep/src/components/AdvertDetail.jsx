import React, { Component } from "react";
import MainContext from "../services/MainContext";
import locStorage from "../services/LocalStorage";
import api from "../services/NodePopDBService";

const { searchAdvert } = api();

export default class AdvertDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      result : {}
    };

    this.loadAdvert();
  }

  loadAdvert = async event => {
    const id = this.props.match.params.id;
    const data = await searchAdvert(id);

    const { success, result } = data;

    this.setState({
      success,
      result
    });

  };

  buildDetailAdvert = () => {
    const advert = this.state.result
    return (
      <div className="row">
        <h2>{advert.name}</h2>
        <h3>{advert.price}</h3>
        <h3>{advert.description}</h3>
        <h3>{advert.type}</h3>
        <h3>{advert.photo}</h3>
        <h3>{advert.createdAt}</h3>
        <h3>{advert.updatedAt}</h3>
      </div>
    );
  };

  handleSubmitBack = event => {
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
        {
          this.state.success === true 
          && 
          this.buildDetailAdvert()
        }

        <button onClick={this.handleSubmitBack}>Volver</button>
      </div>
    );
  }
}

AdvertDetail.contextType = MainContext;
