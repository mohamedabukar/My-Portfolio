import React from "react";
import Footer from "../footer";
import "./style.css";

export default function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <h1>Contact</h1>
                <div className="form">
                    <h2><strong>Email:        </strong>mohamed.h.abukar@gmail.com</h2>
                    <h2><strong>Github:</strong><a href="https://github.com/mohamedabukar" target="_blank" rel="noreferrer"> My Github</a></h2>
                    <h2><strong>My phone number:  </strong> 612-644-0078</h2>
                    <h2><strong>linkdin: </strong><a href="https://www.linkedin.com/in/mohamed-abukar-0a99b2211/" target="_blank" rel="noreferrer">My Linkdin</a></h2>
                </div>
                <Footer />
            </div>
        </>
    );
}