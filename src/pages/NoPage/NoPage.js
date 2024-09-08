import React from "react";
import "./NoPage.css";

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
                <a className="back" href="/"></a>
            </div>
        </div>
    );
};

export default NoPage;
