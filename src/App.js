import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/Imagelinkform/imagelinkform';
import Rank from './Components/Rank/rank';
import FaceRecognition from './Components/FaceRecognition/facerecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd78f3a9a7ea0403db43d98d2a70bfe7e'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    move: {
      enable: true,
      speed:6
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box:{},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageUrl={this.state.imageUrl} />

      </div>
    );
  }
}

export default App;
