import React, { useState } from 'react'
import { FlippingCard, Header } from '../../Components'
import { Box, Grid } from '@mui/material';
import styles from './index.module.css'
import { Helmet } from 'react-helmet';
const Projects = () => {
    const data = [
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103491/xcgojr60jkuddhp1ixo4.mp4',
            headingF: 'Immersive Animator',
            headingB: 'Animator Website',
            para: 'Clone of Immersive Animator',
            hostingUrl: 'https://animator-gules.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103281/ywjhkrmh2fsfi0i25ocg.mp4',
            headingF: 'Portfolio Website',
            headingB: 'Portfolio Website',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-huzaifa311.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103758/k1wrsbktxaaihwifuclh.mp4',
            headingF: 'Blogging',
            headingB: 'Blogging Website',
            para: 'Blog App using React, Tailwind & FireBase',
            hostingUrl: 'https://blog-react-tau.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103440/kj0yot93icnfrskswofn.mp4',
            headingF: 'Logistics Website',
            headingB: 'Logistics Web Landing Page',
            para: 'Logistics Website Using React Js',
            hostingUrl: 'https://logisticsweb-huzaifa311.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103387/qsunnmzzffjfwax1fxwv.mp4',
            headingF: 'Portfolio Website',
            headingB: 'My Portfolio',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-react-henna-ten.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102584/ldsnrjucsahqcza4uhnf.mp4',
            headingF: 'Weather Web',
            headingB: 'React Js Weather Web',
            para: 'Weather Web by React & tailwind.',
            hostingUrl: 'https://react-weather-alpha-dusky.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103704/ak3xdzn1ttlzs7znf1a8.mp4',
            headingF: 'Ecommerce',
            headingB: 'Ecommerce Website',
            para: 'Ecommerce WEBSITE USING REACTJS',
            hostingUrl: 'https://ecommerce-react-plum.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103616/njk5excghgfhgbs3rzkr.mp4',
            headingF: 'Github Api',
            headingB: 'Github Api Website',
            para: 'Github Api Website which shows data of github profiles',
            hostingUrl: 'https://github-api-ruby.vercel.app/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102582/rucuwlfmantlbdqzrkil.mp4',
            headingF: 'REACT TODO',
            headingB: 'REACT TODO',
            para: 'TODO WEBSITE USING REACTJS',
            hostingUrl: "https://todo-react-red-ten.vercel.app/"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701104052/uqf8gpr9vhnnzqh3poqs.mp4',
            headingF: 'Calculator Website',
            headingB: 'Calculator',
            para: 'Fully Functional Calculator.',
            hostingUrl: 'https://huzaifa311.github.io/calculator/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701104114/zj0w80ouysv3jxcdp6ek.mp4',
            headingF: 'Digital Clock',
            headingB: 'Digital Clock Website',
            para: 'DigitalClockWebsite via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/DigitalClock/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103560/asckxwsmdwkjrnw4ppsx.mp4',
            headingF: 'Hacking Prank',
            headingB: 'FAKE HACKING WEBSITE',
            para: 'HackingPrank Web via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/HackPrank/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103653/swqsyicibskkzefucbzm.mp4',
            headingF: 'Food-Panda',
            headingB: 'Food-Panda Landing Page',
            para: 'Food-Panda Clone via HTML, CSS & Js',
            hostingUrl: 'https://huzaifa311.github.io/FoodPanda/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102574/vvec50jutsdewqmtnx6u.mp4',
            headingF: 'Stop Watch',
            headingB: 'Stop Watch Web',
            para: 'Stop Watch Web via HTML, CSS & Js',
            hostingUrl: 'https://huzaifa311.github.io/Stop-Watch/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102579/kokbs0xpnkpegan1cqud.mp4',
            headingF: 'Todo Website',
            headingB: 'Todo Website',
            para: 'Todo List via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/todo/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103216/ksba3br3rgvdledqqonv.mp4',
            headingF: 'Saylani',
            headingB: 'Saylani Landing Page',
            para: 'Saylani Web using Html, Css',
            hostingUrl: 'https://huzaifa311.github.io/Saylani/'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102581/u9yfv7i0fmu4ph0conoe.mp4',
            headingF: 'Tour Website',
            headingB: 'Tour Website',
            para: 'Tour Website via HTML & CSS',
            hostingUrl: "https://huzaifa311.github.io/TripAdvisor/"
        },
    ]
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const homeClass = isDarkTheme ? "bg-white" : "bg-[#202430]";
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - Projects Page</title>
            </Helmet>
            <div className={`md:flex md:justify-center ${homeClass}`}>
                <Header custom3={'text-[#FA6136]'} onClick={toggleTheme} />
                <div className='max-w-[1500px] pt-24'>
                    <h1 className={`text-center tracking-wider text-6xl pb-6 font-black animate__animated animate__backInRight ${textClass}`} >Projects</h1>
                    {/* <Box className="px-5 my-5"> */}
                    {/* <Grid container columnSpacing={2} rowSpacing={2}> */}
                    <div className='flex flex-wrap justify-around'>
                        {data.map((data, index) => {
                            return <FlippingCard key={index} img={data.img} headingF={data.headingF} headingB={data.headingB} para={data.para} hostingUrl={data.hostingUrl} />
                        })}
                    </div>
                    {/* </Grid> */}
                    {/* </Box> */}
                </div>
            </div>
        </>
    )
}

export default Projects
