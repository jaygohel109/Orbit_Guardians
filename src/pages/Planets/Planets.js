import React from "react";
import { useNavigate } from "react-router-dom";
import './Planets.css'; // Import the CSS file for styling
import planetImage from '../../assets/images/planets_intro.jpg'; // Import the image

const Planets = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="planets-container">
      <div className="content">
        <h1 className="main-title">MANAGE</h1>
        <h2 className="sub-title">PLANET HACKUNIA</h2>
        <p className="description">
          Nulla interdum sollicitudin justo eget facilisis. Fusce sagittis
          maximus urna quis ultricies. Integer varius massa ac viverra feugiat.
        </p>
        <button className="start-button" onClick={handleButtonClick}>
          START
        </button>
      </div>
      <div className="image-container">
        <img src={planetImage} alt="Planet Hackunia" className="planet-image" />
      </div>
    </div>
  );
};

export default Planets;
