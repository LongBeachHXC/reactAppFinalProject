import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/Imagelinkform/imagelinkform';
import Rank from './Components/Rank/rank';
import './App.css';

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blue: 5
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles
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
