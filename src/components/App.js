import React from 'react';
import '../App.css'; // Ensure the path is correct
import centralIcon from '../assets/middleicon.png'; // Ensure the path is correct
import userImage from '../assets/central icon.png'; // Ensure the path is correct
import planetImage from '../assets/planets.jpg'; // Ensure the path is correct
// hello brother
const App = () => {
  return (
    <div className="border-container">
      <div className="border-content">
        <header className="header">
          <div className="logo">
            <div className="circle"></div>
            <h1>STELLAR SAVIORS</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#learn">LEARN</a></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="content">
            <div className="text-content">
              <h1>Orbit Guardians</h1>
              <p>In a universe filled with mysteries and challenges, the Orbit Guardians stand as the first line of defense and exploration. As members of this elite group, we are committed to maintaining the balance and safety of our celestial neighbors, while uncovering the secrets of the cosmos.</p>
              <button>START</button>
            </div>
            <div className="image-content">
              <div className="planet">
                <img src={planetImage} alt="Planet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
