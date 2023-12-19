import React from "react";


function ProjectList({ projects }) {
  console.log(projects);

  const projectElements = projects.map((project)=>{
    return (
      <div key={project.id}>
      <h3>{project.name}</h3>
      <h3>{project.about}</h3>
      {project.technologies.join(", ")}
      </div>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
