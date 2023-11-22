{/* import React from 'react'
import { Header } from '../../Components'

const Home = () => {
  return (
    <div className='flex flex-row justify-center place-items-center'>
      <Header custom1={'text-[#FA6136] '}/>
      <div className="max-w-[1500px] px-[5%]">
        <div className="flex w-full h-[100vh] gap-10 bg-[#1D262F]">
            <div className='bg-yellow-300'>
                <img src="huzaifa.png" alt="huzaifa" className='w-40 h-40' />
            </div>
            <div className='text-white bg-red-400'>
                ugmjuyhfujyfujygfugi
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home */}
import React, { useState } from "react";
import "../../index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import { Header } from '../../Components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Helmet } from "react-helmet";

const Home = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const textClass = isDarkTheme ? "text-black" : "text-white";
    const homeClass = isDarkTheme ? "bg-white" : "bg-[#202430]";
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio</title>
            </Helmet>
            <div className={`md:flex md:justify-center h-[100vh] ${homeClass} overflow-hidden`}>
                <Header isDarkTheme={isDarkTheme} custom1={"text-[#FA6136]"} onClick={toggleTheme} />
                <div className={`md:mt-5 md:h-[100vh] h-full w-full bg-no-repeat md:bg-contain md:object-contain md:flex md:flex-row flex flex-col md:justify-center md:gap-28 gap-12 md:place-items-center md:max-w-[1500px]`}>
                    <div className="flex flex-row md:flex-col justify-center md:justify-normal place-items-center md:place-items-start">

                        <motion.img
                            initial={{ x: 5, y: 10 }}
                            animate={{ x: -5, y: -10 }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                repeatType: "reverse",
                            }}
                            src="./huzaifa.png"
                            className="w-[300px] border-t-4 rounded-t-lg rounded-b-[50px] border-[#FC6731] bgGradient  h-[300px] shadow-lg shadow-slate-600  md:mt-0 mt-40 "
                            alt="bluebackground Image"
                        />
                    </div>
                    <div className=" ">
                        <h3 className={`text-3xl font-semibold    ${textClass} `}>
                            Hi, I'm
                        </h3>
                        <h1 className={`md:text-5xl text-4xl  animate__animated animate__swing font-bold flex gap-2   mt-3 ${textClass} `}>
                            <p className="text-[#FC6731]">Muhammad</p>Huzaifa
                        </h1>
                        <p className={` mt-8 md:w-[420px]   ${textClass}`}>
                            I'm a beginning Web Developer.I’m presently wanted to being involved in an organization that believes in gaining a competitive edge and giving back to the community.
                        </p>
                        <div className="flex justify-around mt-8 animate__animated animate__zoomInDown">
                            <div className="h-[40px] w-[40px] rounded-full hover:text-black hover:bg-[#FC6731] hover:shadow-2xl hover:shadow-[#FC6731] outline flex justify-center place-items-center text-[#FC6731] outline-gray-300 hover:outline-none">
                                <a href="https://www.linkedin.com/in/huzaifahabib-923215271" target="_blank">
                                    <LinkedInIcon fontSize="medium" />
                                </a>
                            </div>
                            <div className="h-[40px] w-[40px] rounded-full hover:text-black hover:bg-[#FC6731] hover:shadow-2xl hover:shadow-[#FC6731] outline flex justify-center place-items-center text-[#FC6731] outline-gray-300 hover:outline-none ">
                                <a href="https://github.com/huzaifa311" target="_blank">
                                    <GitHubIcon fontSize="medium" />
                                </a>
                            </div>
                            <div className="h-[40px] w-[40px] rounded-full hover:text-black hover:bg-[#FC6731] hover:shadow-2xl hover:shadow-[#FC6731] outline flex justify-center place-items-center text-[#FC6731] outline-gray-300 hover:outline-none ">
                                <a href="https://wa.me/+923218901245" target="_blank">
                                    <WhatsAppIcon fontSize="medium" />
                                </a>
                            </div>
                            <div className="h-[40px] w-[40px] rounded-full hover:text-black hover:bg-[#FC6731] hover:shadow-2xl hover:shadow-[#FC6731] outline flex justify-center place-items-center text-[#FC6731] outline-gray-300 hover:outline-none">
                                <a href="https://www.facebook.com/huzaifa.kabra.9" target="_blank">
                                    <FacebookIcon fontSize="medium" />
                                </a>
                            </div>
                            <div className="h-[40px] w-[40px] rounded-full hover:text-black hover:bg-[#FC6731] hover:shadow-2xl hover:shadow-[#FC6731] outline flex justify-center place-items-center text-[#FC6731] outline-gray-300 hover:outline-none ">
                                <a href="https://twitter.com/huzaifahabib311" target="_blank">

                                    <TwitterIcon fontSize="medium" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
