import React from "react";

const ProjectItem = ({ project }) => {
    return (
        <div className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="budget">Budget: ${project.budget}</p>
            <p className="skills">
                Skills: {project.skills ? project.skills.join(", ") : "None"}
            </p>
        </div>
    );
};

export default ProjectItem;
