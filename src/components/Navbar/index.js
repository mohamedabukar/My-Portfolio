import React from "react";
import "./style.css";

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="wrapper">
                    <div className="left">
                        <a href="#bio">Bio</a>
                        <a href="#apps">Apps</a>
                        <div className="itemContainer">
                            
                        </div>
                    </div>
                    <div className="right">
                        This is the right side
                    </div>
                </div>
            </div>
        </>
    );
}