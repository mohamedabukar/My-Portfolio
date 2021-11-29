import React from "react";
import "./style.css";
// import {Phone, Mail} from "@material-ui/icons"

export default function Navbar(){
    return(
        <>
            <div className="NavBar">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/#apps">Apps</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                        <li>
                            <a href="/#resume">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}