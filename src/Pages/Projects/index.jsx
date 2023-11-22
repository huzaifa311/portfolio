import React, { useState } from 'react'
import { FlippingCard, Header } from '../../Components'
import { Box, Grid } from '@mui/material';
import styles from './index.module.css'
import { Helmet } from 'react-helmet';
const Projects = () => {
    const data = [
        {
            img: './weather.jpg',
            headingF: 'Weather Web',
            headingB: 'React Js Weather Web',
            para: 'Weather Web by React & tailwind.',
            hostingUrl: 'https://react-weather-alpha-dusky.vercel.app/'
        },

        {
            img: './blog.jpg',
            headingF: 'Blogging',
            headingB: 'Blogging Website',
            para: 'Blog App using React, Tailwind & FireBase',
            hostingUrl: 'https://blog-react-tau.vercel.app/'
        },

        {
            img: './portfolio.jpg',
            headingF: 'Portfolio Website',
            headingB: 'My Portfolio',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-react-henna-ten.vercel.app/'
        },

        {
            img: './immersive.jpg',
            headingF: 'Immersive Animator',
            headingB: 'Animator Website',
            para: 'Clone of Immersive Animator',
            hostingUrl: 'https://animator-gules.vercel.app/'
        },

        {
            img: './portfolio2.jpg',
            headingF: 'Portfolio Website',
            headingB: 'Portfolio Website',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-7hapks1kv-huzaifa311.vercel.app/'
        },

        {
            img: './ecommerce.jpg',
            headingF: 'Ecommerce',
            headingB: 'Ecommerce Website',
            para: 'Ecommerce WEBSITE USING REACTJS',
            hostingUrl: 'https://ecommerce-react-plum.vercel.app/'
        },

        {
            img: './github.jpg',
            headingF: 'Github Api',
            headingB: 'Github Api Website',
            para: 'Github Api Website which shows data of github profiles',
            hostingUrl: 'https://portfolio-7hapks1kv-huzaifa311.vercel.app/'
        },

        {
            img: './todo2.jpg',
            headingF: 'Todo Website',
            headingB: 'Todo Website',
            para: 'Todo List via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/todo/'
        },

        {
            img: './calculator.jpg',
            headingF: 'Calculator Website',
            headingB: 'Calculator',
            para: 'Fully Functional Calculator.',
            hostingUrl: 'https://huzaifa311.github.io/calculator/'
        },

        {
            img: './digitalClock.jpg',
            headingF: 'Digital Clock',
            headingB: 'Digital Clock Website',
            para: 'DigitalClockWebsite via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/DigitalClock/'
        },

        {
            img: './food.jpg',
            headingF: 'Food-Panda',
            headingB: 'Food-Panda Landing Page',
            para: 'Food-Panda Clone via HTML, CSS & Js',
            hostingUrl: 'https://huzaifa311.github.io/FoodPanda/'
        },

        {
            img: './hack.jpg',
            headingF: 'Hacking Prank',
            headingB: 'FAKE HACKING WEBSITE',
            para: 'HackingPrank Web via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/HackPrank/'
        },

        {
            img: './saylani.jpg',
            headingF: 'Saylani',
            headingB: 'Saylani Landing Page',
            para: 'Saylani Web using Html, Css',
            hostingUrl: 'https://huzaifa311.github.io/Saylani/'
        },

        {
            img: './todo.jpg',
            headingF: 'REACT TODO',
            headingB: 'REACT TODO',
            para: 'TODO WEBSITE USING REACTJS',
            hostingUrl: "https://todo-react-red-ten.vercel.app/"
        },

        {
            img: './tour.jpg',
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
