// src/App.jsx
import React from 'react';
import Nav from './Components/Nav'; 
import Her from './Components/Her';
import video from './assets/video.mp4'; 
//Commit
function App() {
  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Nav /> 
      <Her />
    </div>
  );
}

export default App;
