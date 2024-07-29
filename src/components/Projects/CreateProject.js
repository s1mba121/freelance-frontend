import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectService from "../../services/projectService";
import "./CreateProject.css";

const CreateProject = () => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");
    const [deadline, setDeadline] = useState("");
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await projectService.createProject({
                title,
                category,
                description,
                budget: parseInt(budget),
                deadline,
                categories,
                tags,
            });
            navigate("/dashboard/projects");
        } catch (err) {
            setError("Project creation failed. Please try again.");
        }
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategories(value.split(",").map((category) => category.trim()));
    };

    const handleTagChange = (e) => {
        const value = e.target.value;
        setTags(value.split(",").map((tag) => tag.trim()));
    };

    return (
        <div className="project-container">
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="project-box">
                        <h2>Basic Information</h2>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Project Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="design">Design</option>
                                <option value="development">Development</option>
                                <option value="marketing">Marketing</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>
                        <button
                            type="button"
                            className="project-button"
                            onClick={nextStep}
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="project-box">
                        <h2>Description and Files</h2>
                        <div className="input-container">
                            <textarea
                                placeholder="Project Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="project-button"
                            onClick={prevStep}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="project-button"
                            onClick={nextStep}
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div className="project-box">
                        <h2>Prices and Services</h2>
                        <div className="input-container">
                            <input
                                type="number"
                                placeholder="Budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="date"
                                placeholder="Deadline"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="button"
                            className="project-button"
                            onClick={prevStep}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="project-button"
                            onClick={nextStep}
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="project-box">
                        <h2>Frequently Asked Questions</h2>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Categories (comma separated)"
                                value={categories.join(", ")}
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Tags (comma separated)"
                                value={tags.join(", ")}
                                onChange={handleTagChange}
                            />
                        </div>
                        <button
                            type="button"
                            className="project-button"
                            onClick={prevStep}
                        >
                            Previous
                        </button>
                        <button type="submit" className="project-button">
                            Create Project
                        </button>
                        {error && <p className="error">{error}</p>}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreateProject;
