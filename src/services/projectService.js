import axios from "axios";

const API_URL = "http://localhost:3000/api/projects/";

const createProject = (projectData) => {
    const token = localStorage.getItem("token");
    return axios.post(API_URL, projectData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

const getAllProjects = () => {
    return axios.get(API_URL);
};

export default {
    createProject,
    getAllProjects,
};