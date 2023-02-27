import React, { Component } from "react";

import "./models.css";
class Models extends Component {
  renderImage = () => {
    const imageModel = "../glassesImage/model.jpg";
    return <img className="imgModel" src={imageModel} alt=""></img>;
  };
  render() {
    return (
      <div className="models">
        {this.renderImage()}
        {this.renderImage()}
      </div>
    );
  }
}

export default Models;
