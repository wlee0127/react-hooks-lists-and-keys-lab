import React from "react";



function ProjectItem({ name, about, technologies }) {
  const  techElements = technologies.map((tech)=>{
    return <span key={tech}>{tech}</span>
  });
  console.log(techElements)


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElements}
      </div>
    </div>
  );
}

export default ProjectItem;
