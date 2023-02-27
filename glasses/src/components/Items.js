import React, { Component } from "react";
import "./item.css";

class Items extends Component {
  state = {
    isTry: false,
    url: "",
    name: "",
    desc: "",
  };
  listGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  renderListGlasses = () => {
    let lstItemUIs = this.listGlasses.map((item) => {
      return (
        <button key={item.id} className="glass btn col-2" onClick={() => {
          this.renderGlassTry(item.id);
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

  renderCard = () => {
    if(this.state.isTry){
      return (
        <div className="card">
          <img src={this.state.url} alt="" className="card-img"></img>
          <div className="card-body">
            <h5>{this.state.name}</h5>
            <p>{this.state.desc}</p>
          </div>
        </div>
      );
    }
  };

  renderGlassTry = (id) => {
    let item = this.listGlasses.find((item) => item.id === id);
    console.log(item);
    if (item !== -1) {
      this.setState({
        isTry: true,
        url: item.url,
        name: item.name,
        desc: item.desc,
      })
    }
  };

  render() {
    return (
      <div className="items">
        {this.renderCard()}
        <div className="listGlasses row">{this.renderListGlasses()}</div>
      </div>
    );
  }
}
export default Items;
