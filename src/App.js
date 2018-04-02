import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import Card from './components/Card';
import axios from 'axios';

require('dotenv').config();

let api_key = process.env.REACT_APP_API_KEY;


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      image: '',
    }
    this.update = this
      .update
      .bind(this)
  }

  update(e) {
    this.setState({
      red: ReactDOM
        .findDOMNode(this.refs.red.refs.inp)
        .value
    })
  }

  componentDidMount () {
    axios
      .get(`https://www.rijksmuseum.nl/api/nl/collection/SK-A-4691?key=${api_key}&format=json`)
      .then(res => {
        let artImage = res.data.artObject.webImage.url
        this.setState({image: artImage})
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="container">
          
          <h2><Welcome name="Susan" /></h2>
          <Clock />
        <div className="container">
          <div className="card-group">
            <Card image={this.state.image} />
            <Card image={this.state.image} />
            <Card image={this.state.image} />
          </div>
        </div>
        </div>
    );
  }
}

export default App;

