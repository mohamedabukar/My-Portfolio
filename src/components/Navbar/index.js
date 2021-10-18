import React from "react";
import "./style.css";

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="left">
                        <a href="#bio">Bio</a>
                    </div>
                    <div className="right">
                        <a href="#apps">Apps</a>
                    </div>
                    {/* <div className=></div> */}
                </div>
            </div>
        </>
    );
}