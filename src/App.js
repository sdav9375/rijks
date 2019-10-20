import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import ArtCard from './components/Card';
import Clock from './components/Clock';

require('dotenv').config();

let api_key = process.env.REACT_APP_API_KEY;


function Welcome(props) {
  return <span style={{color:'white'}}>Hello, {props.name}</span>;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      records: '',
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
    let rembrandtItems = []
    axios
      .get(`https://www.rijksmuseum.nl/api/nl/collection?q=rembrandt&key=${api_key}&format=json`)
      .then(res => {
        console.log(res.data)
        res.data.artObjects.map(item => 
          rembrandtItems.push({
            title: item.longTitle,
            image: item.webImage.url
          })
        );
        // let artImage = res.data.artObject.webImage.url
        // this.setState({image: artImage})
        console.log(rembrandtItems);
        this.setState({images: rembrandtItems})

      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <Container style={appContainerStyle}>
        <h2>
          <Welcome name="Susan" />
        </h2>
        <Clock />
        <div style={containerStyle}>
            {this.state.images ? (
              this.state.images.map(image => (
                <ArtCard image={image.image} title={image.title} />
              ))
            ) : (
              <span>no image found</span>
            )}
        </div>
      </Container>
    )
  }
}

const appContainerStyle = {
  background: "#000033"
}

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}

export default App;

