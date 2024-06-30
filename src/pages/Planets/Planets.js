import React from "react";
import { useNavigate } from "react-router-dom";
import './Planets.css'; // Import the CSS file for styling
import planetImage from '../../assets/images/planets_intro.jpg'; // Import the background image
import earthImage from '../../assets/images/earth-image.png'; // Import the Earth image

const Planets = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="planets-container">
      <div className="content">
        <h1 className="main-title">MISSION: POSSIBLE</h1>
        <h2 className="sub-title">Safeguarding Hacunia's Legacy</h2>
        <p className="description">
        The people of Planet Hackunia need your courage to overcome the alien invasion threatening our existence. Orbit Guardian is here to provide you with all the resources, tools, and information you need to survive and thrive during this crisis.
        </p>
        <button className="start-button" onClick={handleButtonClick}>
          START
        </button>
      </div>
      <div className="image-container">
        <img src={planetImage} alt="Planet Hackunia" className="planet-image" />
        <img src={earthImage} alt="Earth" className="earth-image" />
      </div>
    </div>
  );
};

export default Planets;
