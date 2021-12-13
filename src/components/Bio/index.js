import React from "react";
import Footer from "../footer";
import "./style.css";
// import fire from "../../Images/campfire.png";
import profile from "../../Images/profile.jpg";
export default function Bio() {
    return (
        <>
            <div className="bio" id="home">
                <div>
                    <h1 className="center">About Me</h1>
                    <div className="container">
                        <div className="text">
                            <h2>Hello! My name is Mohamed Abukar</h2>
                            <p>I am a Full Stack Web Developer from Apple Valley, MN. I became a Web Developer by taking a bootcamp over the summer of 2021.</p>
                            <h2>Skills</h2>
                            <p>HTML, CSS, Javascript, JQuery, React, NodeJS, Express, MySQL, Sequelize, MongoDB, Mongoose, REST API's, GraphQL.</p>
                            <h2>Hobbies</h2>
                            <p>Playing Basketball, gaming, spending time with family, learning new skills.</p>
                        </div>
                        <div className="photo">
                            <img className="profile" src={profile} alt="profile" height="400px" width="450px"></img>
                        </div>
                    </div>
                </div>
                <Footer />

                {/* <img className="fire" src={fire} alt="fire"></img> */}
            </div>
        </>
    );
}