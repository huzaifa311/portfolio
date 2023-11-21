import React, { useState } from 'react'
import { Header } from '../../Components';
import { Helmet } from 'react-helmet';
import styles from './index.module.css'
import '../../index.css'

const Contact = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    const homeClass = isDarkTheme ? "bg-white" : "bg-[#202430]";
    const pClass = isDarkTheme ? "text-black" : "text-white";
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - Contact Page</title>
            </Helmet>
            <div className={`flex flex-row justify-center ${homeClass} h-[100vh]`}>
                <Header custom4={'text-[#FA6136]'} isDarkTheme={isDarkTheme} onClick={toggleTheme} />
                <div className='max-w-[1500px] mt-24'>
                    <h1 className={`text-center tracking-wider text-6xl pb-6 font-black animate__animated animate__backInRight ${textClass}`} >Contact Me</h1>
                    <form className={`mt-14 flex flex-col bgForm bg-contain  rounded-2xl py-10 px-12 animate__animated animate__backInUp  animate__backInLeft`}>
                        <input type="text" name="" id="" className={`${pClass} bg-transparent border-b-2 outline-none pb-5 text-white placeholder`} placeholder='Name *' />
                        <input type="text" name="" id="" className={`mt-10 bg-transparent border-b-2 outline-none pb-5 ${pClass}  placeholder`} placeholder='Email *' />
                        <input type="text" name="" id="" className={`mt-10 bg-transparent border-b-2 outline-none pb-5 ${pClass}  placeholder`} placeholder='Subject *' />
                        <textarea type="text" name="" id="" className={`${pClass} mt-10 bg-transparent border-b-2 outline-none pb-5 text-white  placeholder`} placeholder='Message *' />
                        <button className='text-lg mt-10 bg-[#FA6136] hover:bg-[#87331b] text-white font-bold py-2 px-4 rounded'>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
