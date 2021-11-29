import React from "react";
import "./style.css";
import {Phone, Mail} from "@material-ui/icons"

export default function Navbar({setMenuOpen, menuOpen}){
    return(
        <>
            <div className={"navbar " + (menuOpen && "active")}>
                <div className="wrapper">
                    <div className="left">
                        <a href="#bio" className="logo">Bio.</a>
                        <div className="itemContainer">
                            <Phone className="icon"/>
                            <span>612-644-0078</span>
                        </div>
                        <div className="itemContainer">
                            <Mail className="icon"/>
                            <span>mohamed.h.abukar@gmail.com</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    );
}