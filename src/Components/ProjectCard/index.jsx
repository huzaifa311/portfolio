import React from "react";
import './index.css'

const FlippingCard = ({ img, headingF, headingB,  para, hostingUrl}) => {
    return (
        <>
            <div className="card1 w-[350px] h-[200px] items-center flex rounded-[20px] m-[20px] relative animate__animated animate__fadeInUpBig">
                <div className="face front">
                    <video autoPlay muted loop>
                        <source src={img} />
                    </video>
                        <h3>{headingF}</h3>
                </div>
                <div className="face back">
                    <h3>{headingB} </h3>
                    <p>{para}</p>
                    <div className="link">
                        <a href={hostingUrl} target="_blank">Go to Web</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlippingCard;