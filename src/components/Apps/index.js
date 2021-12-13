import React from "react";
import actor from "../../Images/actor-database.jpg";
import track from "../../Images/one-track.jpg";
import smiley from "../../Images/smiley-job-recruiter.jpg";
import book from "../../Images/book.jpg";
import "./style.css";

export default function Apps() {

    return (
        <>
            <section className="apps" id="apps">
                <div className="project">
                    <a href="https://m-ray-ofsunshine.github.io/actor-database/" target="_blank" rel="noreferrer">
                        <img src={actor} width="290" height="200" alt="actor database" />
                    </a>
                    <h3>Actor Database</h3>
                    <a href="https://github.com/mohamedabukar/actor-database" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://arcane-castle-03954.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={track} width="290" height="200" alt="one track" />
                    </a>
                    <h3>One Track Music</h3>
                    <a href="https://github.com/mohamedabukar/one-track" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://safe-journey-56448.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={smiley} width="290" height="200" alt="smiley" />
                    </a>
                    <h3>Smiley Recruiter</h3>
                    <a href="https://github.com/mohamedabukar/Smiley-Recruiter" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
                <div className="project">
                    <a href="https://powerful-fortress-73500.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={book} width="290" height="200" alt="book search" />
                    </a>
                    <h3>Book Search</h3>
                    <a href="https://github.com/mohamedabukar/booksearch" target="_blank" rel="noreferrer">
                        <p>Github Repository</p>
                    </a>
                </div>
            </section>
        </>
    )
}