import React from "react";
import "./style.css";
import fire from "../../Images/campfire.png";
export default function Bio(){
    return(
        <>
            <div className="bio">
                <div className="container">
                    <h1 className="hello">Hello</h1>
                    <h1>Welcome to my website</h1>
                </div>
                <img className="fire" src={fire} alt="fire"></img>
            </div>
        </>
    );
}