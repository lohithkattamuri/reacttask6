import React from 'react';

const Project = (props) => {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default Project;
