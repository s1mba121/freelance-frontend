import React, { useState, useEffect } from "react";
import userService from "../../services/userService";

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await userService.getPortfolios(token);
                setPortfolios(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPortfolios();
    }, [token]);

    return (
        <div>
            <h2>Portfolios</h2>
            <ul>
                {portfolios.map((portfolio) => (
                    <li key={portfolio.id}>
                        <h3>{portfolio.title}</h3>
                        <p>{portfolio.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolios;
