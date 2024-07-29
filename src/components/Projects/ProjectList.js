import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
    return (
        <div className="projects-list">
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
