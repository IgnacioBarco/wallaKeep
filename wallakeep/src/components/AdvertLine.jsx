import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AdvertLine extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.advert._id}`);
  };

  render() {
    const { advert } = this.props;
    console.log('advertLine')
    console.log(advert.name)
    console.log('advertLine')
    return (
      <div
        style={{
          cursor: "pointer"
        }}
        key={advert._id}
        className="col-4"
        onClick={this.goToDetail}
      >
        <h5
          // style={{
          //   color: movie.isImportant() ? "green" : "red"
          // }}
        >
          {advert.name}
        </h5>
        {/* <p>{movie.popularity}</p>
        <p>{movie.vote_count}</p> */}
      </div>
    );
  }
}

export default withRouter(AdvertLine);