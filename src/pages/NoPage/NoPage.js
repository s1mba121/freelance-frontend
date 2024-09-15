import React from "react";
import "./NoPage.css";
import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <div className="no-page">
            <div className="no-page-container">
                <h1 className="no-page-title">Oops!</h1>
                <h2 className="no-page-subtitle">
                    Данная страница всё ещё в{" "}
                    <span style={{ color: "#9917FF" }}>космосе</span>, но мы
                    пока думаем над
                    <br />
                    решением этой проблемы
                </h2>
                <img className="no-page-img" src="Group 3.png" />
                <Link
                    style={{ marginTop: "60px" }}
                    to="/"
                    className="status-page-button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                    >
                        <path
                            d="M4.37903 6.9165H14.4624C16.1758 6.9165 17.0326 6.9165 17.6707 7.28494C18.0888 7.5263 18.4359 7.87345 18.6773 8.2915C19.0457 8.92964 19.0457 9.78637 19.0457 11.4998C19.0457 13.2133 19.0457 14.07 18.6773 14.7082C18.4359 15.1262 18.0888 15.4734 17.6707 15.7147C17.0326 16.0832 16.1758 16.0832 14.4624 16.0832H8.0457M4.37903 6.9165L7.12903 4.1665M4.37903 6.9165L7.12903 9.6665"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Вернуться
                </Link>
            </div>
        </div>
    );
};

export default NoPage;
