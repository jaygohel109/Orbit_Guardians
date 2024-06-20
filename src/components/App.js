import React from 'react';
import '../App.css'; // Ensure the path is correct
import centralIcon from '../assets/middleicon.png'; // Ensure the path is correct
import userImage from '../assets/central icon.png'; // Ensure the path is correct
import planetImage from '../assets/planets.jpg'; // Ensure the path is correct

const App = () => {
return (
<div className="container">
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
<div className="orbit-container">
<div className="orbit orbit1">
<div className="icon-circle bank">
<i className="fa-solid fa-building"></i>
</div>
<div className="icon-circle">
<img src={centralIcon} alt="Central Icon" />
</div>
<div className="icon-circle money">
<i className="fa-solid fa-money-bill-wave"></i>
</div>
<div className="icon-circle user-group">
<i className="fa-solid fa-user-group"></i>
</div>
<div className="icon-circle community">
<img src={userImage} alt="User" />
</div>
</div>
</div>
</div>
</div>
</div>
);
};

export default App;