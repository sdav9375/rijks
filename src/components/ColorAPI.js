import React, { Component } from 'react';

class ColorAPI extends Component {
  constructor() {
    super()
    this.state = {
      colors: [],
      color: {},
      clickCount: 0,
    }
  }

  componentDidMount() {
    const colors = this.state.colors;
    fetch('https://reqres.in/api/unknown')
    .then(res => {
      return res.json();
    })
    .then(myJson => {
      console.log(myJson);
      myJson.data.map(x => colors.push({name: x.name, colorCode: x.color}));
      console.log(colors);
    });
    }

  getColor() {
    console.log('clicked')
    const colors = this.state.colors;
    const color = colors[Math.floor(Math.random()*colors.length)];
    this.setState({ color , clickCount: this.state.clickCount + 1 })
  }

  render() {
    return (
      <div className="calculator container d-flex flex-column align-items-center border border-dark p-2">
        <div className="color-square" style={{background: this.state.color.colorCode}}></div>
        <h3>{this.state.color.name}</h3>
        <h4>Click count: {this.state.clickCount}</h4>
        <button className="btn btn-dark straighten" onClick={() => this.getColor()}><h5>Get Random Color</h5></button>
      </div>
    );
  }
}

export default ColorAPI;