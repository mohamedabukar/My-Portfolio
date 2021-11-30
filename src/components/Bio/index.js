import React from "react";
import "./style.css";
import fire from "../../Images/campfire.png";
import profile from "../../Images/me.jpg";
export default function Bio(){
    return(
        <>
            <div className="bio">
                <div className="container">
                    <h1 className="name">Mohamed Abukar</h1>
                </div>
                <img className="profile" src={profile} alt="profile"></img>
                <img className="fire" src={fire} alt="fire"></img>
            </div>
        </>
    );
}