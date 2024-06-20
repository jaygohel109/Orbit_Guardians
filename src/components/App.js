import React from 'react';
import '../App.css'; // Ensure the path is correct
import planetImage from '../assets/planets.jpg'; // Ensure the path is correct

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <div className="circle"></div>
          <h1>STELLAR SAVIORS</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li> {/* Update href to be valid */}
            <li><a href="#about">ABOUT</a></li> {/* Update href to be valid */}
            <li><a href="#learn">LEARN</a></li> {/* Update href to be valid */}
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="text-content">
          <h1>MANAGE</h1>
          <h1>PLANET HACKUNIA</h1>
          <p>Nulla interdum sollicitudin justo eget facilisis. Fusce sagittis maximus urna quis ultricies. Integer varius massa ac viverra feugiat.</p>
          <button>START</button>
        </div>
        <div className="image-content">
          <div className="planet">
            <img src={planetImage} alt="Planet" />
          </div>
          {/* <div className="icon-circle bank">
            <i className="fa-solid fa-building"></i>
          </div>
          <div className="icon-circle money">
            <i className="fa-solid fa-money-bill-wave"></i>
          </div>
          <div className="icon-circle user-group">
            <i className="fa-solid fa-user-group"></i>
          </div>
          <div className="icon-circle community">
            <img src="https://images.unsplash.com/photo-1570295999919-56d0b08c6461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="User" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
