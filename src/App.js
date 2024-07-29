
import './App.css';
import projects from './Projects';

function App() {
  return (
    <div ClassName="App">
      <header ClassName="App-header">
        <h1>Welcome to my Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to my personal portfolio website</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>Information about me.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
}

export default App;