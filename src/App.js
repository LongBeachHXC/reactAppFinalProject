import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/Imagelinkform/imagelinkform';
import Rank from './Components/Rank/rank';
import './App.css';

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
  render() {
    return (
      <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm />
          {/*<FaceRecognition /> */}

      </div>
    );
  }
}

export default App;
