import React, { useEffect } from 'react';
import './style.css'; // Import the CSS for styling
import './solarSystemStyle.css'; // Create and import additional CSS file for solar system styles

const App = () => {
  useEffect(() => {
    const planets = document.querySelectorAll('.planet');
    const tooltip = document.getElementById('tooltip');

    planets.forEach(planet => {
      planet.addEventListener('mouseover', (e) => {
        const name = e.target.getAttribute('data-name');
        tooltip.textContent = name;
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
      });

      planet.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
      });

      planet.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
      });

      planet.addEventListener('click', () => {
        // Add link functionality here, e.g., window.location.href = 'your-link.html';
        alert('Planet clicked!');
      });
    });
  }, []);

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
              <div className="solar-system">
                <div className="orbit orbit1">
                  <div className="planet planet1" data-name="Bank"></div>
                </div>
                <div className="orbit orbit2">
                  <div className="planet planet2" data-name="Account"></div>
                </div>
                <div className="orbit orbit3">
                  <div className="planet planet3" data-name="Contacts"></div>
                </div>
                <div className="orbit orbit4">
                  <div className="planet planet4" data-name="Loans"></div>
                </div>
                <div className="orbit orbit5">
                  <div className="planet planet5" data-name="Investments"></div>
                </div>
                <div className="orbit orbit6">
                  <div className="planet planet6" data-name="Insurance"></div>
                </div>
                <div className="sun"></div>
              </div>
              <div id="tooltip"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;