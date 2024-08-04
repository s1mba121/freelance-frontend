import React, { useState, useEffect } from "react";
import projectService from "../../services/projectService";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import ProjectList from "./ProjectList";
import "./Projects.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");
    const [selectedSkills, setSelectedSkills] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectService.getAllProjects();
                setProjects(response.data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleMinBudgetChange = (event) => {
        setMinBudget(event.target.value);
    };

    const handleMaxBudgetChange = (event) => {
        setMaxBudget(event.target.value);
    };

    const handleSkillChange = (event) => {
        const skill = event.target.value;
        setSelectedSkills((prevSkills) =>
            prevSkills.includes(skill)
                ? prevSkills.filter((s) => s !== skill)
                : [...prevSkills, skill]
        );
    };

    const filteredProjects = projects.filter((project) => {
        const matchesSearch = project.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesMinBudget =
            minBudget === "" || project.budget >= parseInt(minBudget);
        const matchesMaxBudget =
            maxBudget === "" || project.budget <= parseInt(maxBudget);
        const matchesSkills = selectedSkills.every(
            (skill) => project.skills && project.skills.includes(skill)
        );

        return (
            matchesSearch &&
            matchesMinBudget &&
            matchesMaxBudget &&
            matchesSkills
        );
    });

    return (
        <div className="projects-container">
            <div className="header">
                <h1 style={{ color: "white" }}>Available Projects</h1>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                />
            </div>
            <div className="projects-list-container">
                <div className="filters">
                    <Filters
                        minBudget={minBudget}
                        maxBudget={maxBudget}
                        onMinBudgetChange={handleMinBudgetChange}
                        onMaxBudgetChange={handleMaxBudgetChange}
                        selectedSkills={selectedSkills}
                        onSkillChange={handleSkillChange}
                    />
                </div>
                <ProjectList projects={filteredProjects} />
            </div>
        </div>
    );
};

export default Projects;
