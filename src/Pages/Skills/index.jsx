import React, { useState } from 'react'
import { Header, SkillsCmp } from '../../Components';
import { motion } from "framer-motion";
import styles from './index.module.css'
import { Helmet } from 'react-helmet';

const Skills = () => {

    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    const pClass = isDarkTheme ? "text-black" : "text-white ";
    const homeClass = isDarkTheme ? "bg-white" : "bg-[#202430]";
    const skillsArray = [
        {
            img: './html.png',
            p: 'html-5'
        },
        {
            img: './css.png',
            p: 'css3'
        },
        {
            img: './javascript.png',
            p: 'JavaScript'
        },
        {
            img: './react.png',
            p: 'reactjs'
        },
        {
            img: './node.png',
            p: 'nodejs + express'
        },
        {
            img: './mongo.png',
            p: 'mongodb'
        },
        {
            img: './firebase.png',
            p: 'firebase'
        },
        {
            img: './react.png',
            p: 'react native'
        },
    ]

    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - Skills Page</title>
            </Helmet>
            <div className={`md:flex flex-col md:justify-center ${homeClass} max-w-[100wh] px-[5%] md:h-[100vh]`}>
                <Header isDarkTheme={isDarkTheme} custom5={'text-[#FA6136]'} onClick={toggleTheme} />
                <h1 className={` pt-32 text-center tracking-wider text-6xl font-black animate__animated animate__backInRight ${textClass}`}>What I do ?</h1>
                <div className='mt-16 h-full w-full bg-no-repeat md:bg-contain md:object-contain md:flex md:flex-row flex flex-col md:justify-center md:gap-36 md:place-items-center md:max-w-[100wh] '>
                    <div className="flex flex-row md:flex-col justify-center md:justify-normal place-items-center md:place-items-start">
                        <motion.img
                            initial={{ x: 5, y: 10 }}
                            animate={{ x: -5, y: -10 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                repeatType: "reverse",
                            }}
                            src="./skills.png"
                            className="max-h-[500px] mt-8"
                            alt="bluebackground Image"
                        />
                    </div>
                    <div className='md:w-[640px] '>
                        {/* <h1 className={`${textClass} font-bold text-5xl md:mt-2 mt-12 mb-8 animate__animated animate__backInLeft ${textClass}`}>So, What I do ?</h1> */}
                        <p className={`tracking-wide text-2xl ${pClass}`}>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                        <div className='flex flex-wrap gap-6 mt-4 px-6'>
                            {
                                skillsArray.map((skills, index) => {
                                    return <SkillsCmp img={skills.img} p={skills.p} className={pClass} key={index} />

                                })
                            }
                        </div>
                        <p className={`my-8 ${pClass} text-xl font-thin`}>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
                        <p className={`my-8 ${pClass} text-xl font-thin`}>⚡  Integration of third party services such as Firebase</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills
