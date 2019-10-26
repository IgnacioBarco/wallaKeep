import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AdvertLine extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.advert._id}`);
  };

  render() {
    const { advert } = this.props;

    return (
      <div
        style={{
          cursor: "pointer"
        }}
        key={advert._id}
        className="col-4"
        onClick={this.goToDetail}
      >
        <h5>{advert.name}</h5>
      </div>
    );
  }
}

export default withRouter(AdvertLine);
