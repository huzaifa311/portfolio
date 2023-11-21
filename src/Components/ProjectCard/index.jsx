import React from "react";
import './index.css'

const FlippingCard = ({ img, headingF, headingB,  para, hostingUrl}) => {
    return (
        <>
            <div className="card1 animate__animated animate__fadeInUpBig">
                <div className="face front">
                    <img src={img} alt="" />
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