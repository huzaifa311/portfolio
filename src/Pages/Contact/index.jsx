import React, { useState } from 'react'
import { Header } from '../../Components';
import { Helmet } from 'react-helmet';
import styles from './index.module.css'
import '../../index.css'
import Swal from 'sweetalert2';

const Contact = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    const homeClass = isDarkTheme ? "bg-white" : "bg-[#202430]";
    const pClass = isDarkTheme ? "text-black" : "text-white";
    const kug = e => {
        e.preventDefault()
        Swal.fire("It's just a frontend UI, No database or backend in it. You can contact me on whatsapp ");
        setTimeout(() => {
            window.open('https://wa.me/+923218901245', '_blank')
        }, 2000)
    }
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - Contact Page</title>
            </Helmet>
            <div className={`flex flex-row justify-center ${homeClass} md:h-[100vh]`}>
                <Header custom4={'text-[#FA6136]'} isDarkTheme={isDarkTheme} onClick={toggleTheme} />
                <div className='max-w-[1500px] pt-24 pb-8'>
                    <h1 className={`text-center tracking-wider text-6xl pb-6 font-black animate__animated animate__backInRight ${textClass}`} >Contact Me</h1>
                    <form className={`mt-14 flex flex-col bgForm bg-contain  rounded-2xl py-10 px-12  animate__animated animate__zoomInDown`}>
                        <input type="text" name="" id="" className={`${pClass} bg-transparent border-b-2 outline-none pb-5 text-white placeholder`} placeholder='Name *' />
                        <input type="text" name="" id="" className={`mt-10 bg-transparent border-b-2 outline-none pb-5 ${pClass}  placeholder`} placeholder='Email *' />
                        <input type="text" name="" id="" className={`mt-10 bg-transparent border-b-2 outline-none pb-5 ${pClass}  placeholder`} placeholder='Subject *' />
                        <textarea type="text" name="" id="" className={`${pClass} mt-10 bg-transparent border-b-2 outline-none pb-5 text-white  placeholder`} placeholder='Message *' />
                        <button className='text-lg mt-10 bg-[#FA6136] hover:bg-[#87331b] text-white font-bold py-2 px-4 rounded' onClick={kug}>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
