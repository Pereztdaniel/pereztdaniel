import React, {Fragment}  from 'react';
import './global.css';
import Header from './components/header/header';
import Showcase from './components/showcase/showcase';
import Skill from './components/skill/skill';
import Project from './components/project/project';
import Social from './components/social/social.js';
import Footer from './components/footer/footer.js';


function App() {

  return (
  
    <>
      <div className="container">
        <Header />
        <hr />
        <Showcase />
        <Skill />
        <Project />
        <Social />
      </div>
      <Footer />
    </>
);
}

export default App;
