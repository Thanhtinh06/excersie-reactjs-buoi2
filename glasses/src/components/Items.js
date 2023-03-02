import React, { Component } from "react";
import "./item.css";
import glasses from './data/glasses.json'

class Items extends Component {
  listGlasses = glasses;
  state = {
    isTry: false,
    glassTry : {}
  };
  renderListGlasses = () => {
    let lstItemUIs = this.listGlasses.map((item,index) => {
      return (
        <button key={index} className="glass btn col-2" onClick={() => {
          this.handerTryGlass(item);
        }}>
          <img
            className="img-btn-glass"
            src={item.url}
            alt=""
          ></img>
        </button>
      );
    });
    return lstItemUIs;
  };

  showGlassOnModel = () => {
    if(this.state.isTry){
      const {url,name,desc} = this.state.glassTry
      return (
        <div className="card">
          <img src={url} alt="" className="card-img"></img>
          <div className="card-body">
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
        </div>
      );
    }
  };

  handerTryGlass = (item) => {
      this.setState({
        isTry: true,
        glassTry : item
      })
    }


  render() {
    return (
      <div className="items">
        {this.showGlassOnModel()}
        <div className="listGlasses row">{this.renderListGlasses()}</div>
      </div>
    );
  }
} 

export default Items;
