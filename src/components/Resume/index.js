import React from "react";
import Footer from "../footer";
import "./style.css";

export default function Resume() {
    return (
        <>
            <div className="resume" id="resume">
                <h1>Resume</h1>
                <h2 className="resume">
                    <a className="resume-link" href="https://docs.google.com/document/d/1RxdfONZ7IiGqhbTwwonCETXpTtNFNtiHvESaIhqF_20/edit?usp=sharing" target="_blank" rel="noreferrer">Click for link to Resume</a>
                </h2>
                <h3>Front-end Proficiencies</h3>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li className="bottom">GraphQL</li>
                </ul>
                <Footer />
            </div>
        </>
    );
}