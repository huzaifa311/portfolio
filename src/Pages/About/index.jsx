import React, { useState } from 'react'
import { Header } from '../../Components';
import { motion } from "framer-motion";
import styles from './index.module.css'
import { Helmet } from 'react-helmet';
import cv from "../../docs/Huzaifa's Resume.pdf"

const About = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    const pClass = isDarkTheme ? "text-black" : "text-white";
    const homeClass = isDarkTheme ? "light" : "wrapper";
    const redirectWhatsapp = () => {
        window.open('https://wa.me/+923218901245', '_blank')
    }
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - About Page</title>
            </Helmet>
            <div className={`md:flex flex-col md:justify-center ${homeClass} md:h-[100vh]`}>
                <Header isDarkTheme={isDarkTheme} custom2={"text-[#FA6136]"} onClick={toggleTheme} />
                {/* <h1 className={`pt-24 text-center tracking-wider text-6xl pb-6 font-black animate__animated animate__backInRight ${textClass}`}>About Me</h1> */}
                <div className='h-full w-full bg-no-repeat md:bg-contain md:object-contain md:flex md:flex-row flex flex-col md:justify-center md:gap-10 md:place-items-center md:max-w-[100wh] md:mt-12 md:px-[5%] px-2 pt-20'>
                    <div>
                        <h1 className={`${textClass} font-bold text-5xl md:mt-2 mt-12 mb-8 animate__animated animate__backInLeft ${textClass}`}>So, Who am I ?</h1>
                        <p className={`md:w-[550px] ${pClass}`}>Hey👋 I'm Huzaifa. I love­ web developme­nt and making digital experience­s interactive and engaging. Te­chnology can change our world for the bette­r. The constant change and growth in web de­velopment excite­s me to no end.</p>
                        <p className={`md:w-[550px] my-8 ${pClass}`}>I'm open to collaboration, mentorship, and connecting with fellow developers and industry professionals. Feel free to reach out if you share a passion for technology or if you have a project you'd like to discuss. Let's create something amazing together!</p>
                        <div className='flex justify-between'>
                            <button className={`${styles.btn}`} onClick={redirectWhatsapp}>Contact Me</button>
                            <div className="flex animate__animated animate__fadeInRightBig">
                                <button className="transition duration-500 border-0 h-16  min-w-36 bg-[#b13918] text-white mt-2 px-3 rounded-md">
                                    <a href={cv} download><i className="fas fa-download animate__animated animate-bounce transition pr-4"></i></a>
                                    <span className='text-[20px] font-semibold'>Download CV</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col justify-center md:justify-normal place-items-center md:place-items-start">
                        <motion.img
                            initial={{ x: 5, y: 10 }}
                            animate={{ x: -5, y: -10 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                repeatType: "reverse",
                            }}
                            src="./about.jpg"
                            className="h-96 mt-8 rounded-2xl"
                            alt="bluebackground Image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
