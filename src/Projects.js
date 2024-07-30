import React from 'react';

const projects = [
  {
    title: 'Password Generator',
    description: 'Generates a random password or multiple passwords',
    link: 'https://github.com/marrujojeremiah/PasswordGenerator',
    image: 'images/password.jpeg'
  },
  {
    title: 'Mind Reading Game',
    description: 'User enters a number between 1-10 and then using very simple math, the program is able to guess their number.',
    link: 'https://github.com/marrujojeremiah/MindReadingGame',
    image: 'images/mindReading.jpg'
  },
  {
    title: 'Golf Club Measurement App',
    description: 'Users approximate the correct golf club length based on their measurements.',
    link: 'https://github.com/marrujojeremiah/GolfClubMeasurementApp',
    image: 'images/golfmeasure.png'
  },
  {
    title: 'Task Management System',
    description: 'Users are able to input tasks, dates, and task priority.',
    link: 'https://github.com/marrujojeremiah/TaskManagementSystem',
    image: 'images/taskmanager.jpg'
  },
];

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
