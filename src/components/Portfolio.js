import React from 'react';
import Project from './project';

const Portfolio = () => {
  const projects = [
    {
      title: 'project-1',
      description: 'Stock Price Prediction Using Recurrent Neural Networks (RNN)',
      image: 'project1.jpg'
    },
    {
      title: 'Project 2',
      description: 'Accident detection and alerting system',
      image: 'project2.jpg'
    },
    {
      title: 'Project 3',
      description: 'criminal investigation securing laws',
      image: 'project2.jpg'
    },
    
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Portfolio;
