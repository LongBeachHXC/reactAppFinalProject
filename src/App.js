import React, { Component } from 'react';
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/logo';
import ImageLinkForm from './Components/Imagelinkform/imagelinkform';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Logo />
         <ImageLinkForm />
         {/*<FaceRecognition /> */}

      </div>
    );
  }
}

export default App;
