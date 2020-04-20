import React, { Component } from 'react';
import Particles from 'react-particles-js';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from './components/Navigation/Navigation';
import SocialLinks from './components/SocialLinks/SocialLinks';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoTop from './components/GoTop/GoTop';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
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
        <Navigation/>
        <SocialLinks/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contact/>
        <SocialLinks/>
        <Footer/>
        <GoTop /> 
      </div>
    );
  }
}

export default App;
