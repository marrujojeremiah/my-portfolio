import React from 'react';
import './App.css';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faMobileAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <img src="/images/profile-picture.jpg" alt="Profile" className="profile-picture" />
        <h1>Jeremiah Marrujo</h1>
        <h2>Portfolio</h2>
      </header>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my personal portfolio website.</p>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <h2>About</h2>
        <p>I am currently a BSCS student at WGU with an expected graduation of 11/24..</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>marrujojeremiah@gmail.com</p>
      </section>
      <section className="features">
        <div className="feature">
          <FontAwesomeIcon icon={faFileAlt} /> 
          <h3>Well Documented</h3>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faMobileAlt} /> 
          <h3>Fully Responsive</h3>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
        </div>
        <div className="feature">
          <FontAwesomeIcon icon={faHeadset} /> 
          <h3>Full Support</h3>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
        </div>
      </section>
      <section className="services">
        <h2>Awesome Features</h2>
        <p>Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
      </section>
    </div>
  );
}

export default App;
