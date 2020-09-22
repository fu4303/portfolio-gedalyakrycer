import React, { useState } from 'react';
import './style.css';
import { FaGithub, FaDesktop } from 'react-icons/fa';


// This is static top section of the page and gives it semantic value.
function DevProjectCard({ img, title, tech, deployLink, repoLink }) {

    const [cardSlide, setCardSlide] = useState(false);

    const cardSlider = () => !cardSlide ? setCardSlide(true) : setCardSlide(false);

    // Styles text to be separates words in pill shapes
    const techStyler = []
    const styledTech = tech.split(", ")
    styledTech.forEach(element => {
        techStyler.push(<h5 className="dev-project__tech ">{element}</h5>)

    });



    return (
        <div className="g_projects-container">
            <button tabIndex="0" className={`g_card-slide ${cardSlide ? "g_card-slide-up" : ""}`} onClick={cardSlider}>

                <img src={img} alt={title} className="g_project-img" />

            </button>

            <div className="g_meta-container dev-project__meta-container">
                <div className="dev-project__links">
                    <a href={deployLink}
                        target="_blank"
                        rel="noopener noreferrer" className="dev-project__button">
                        <FaDesktop />
                        <h5>View Deployed</h5>
                    </a>
                    <a href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer" className="dev-project__button">
                        <FaGithub />
                        <h5>View Repo</h5>
                    </a>
                </div>
                <div className="dev-project__info">
                    <h4>{title}</h4>
                    {techStyler}
                </div>
            </div>

        </div>
    )
}


export default DevProjectCard;
