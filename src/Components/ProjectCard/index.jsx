import React from "react";
import './index.css'

const FlippingCard = ({ project }) => {
    return (
        <>
            <div className="card1 w-[350px] h-[200px] items-center flex rounded-[20px] m-[20px] relative animate__animated animate__fadeInUpBig">
                <div className="face front">
                    <video autoPlay muted loop>
                        <source src={project?.img} />
                    </video>
                    <h3>{project?.headingF}</h3>
                </div>
                <div className="face back">
                    <h3>{project?.headingB} </h3>
                    <p>{project?.para}</p>
                    <div className="link flex justify-around cursor-pointer">
                        <a href={project?.hostingUrl} target="_blank">Go to Web</a>
                        {/* <a href={sourceCode} target="_blank">{"</>"} Source Code</a> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlippingCard;