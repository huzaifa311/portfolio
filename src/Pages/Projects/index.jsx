import React, { useState } from 'react'
import { FlippingCard, Header, NativeCard } from '../../Components'
import styles from './index.module.css'
import { Helmet } from 'react-helmet';
const Projects = () => {

    const clientProjects = [
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1721946698/txiectlytwsuelqvwana.mp4',
            headingF: 'Baggage Claimed',
            headingB: 'Luggage Website',
            para: 'Luggage handling Project',
            hostingUrl: 'https://delicate-gnome-666e0a.netlify.app/',
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1716590817/e8kuko2sn9lrlchzytqj.mp4',
            headingF: 'Event Rush',
            headingB: 'Event Rush Website',
            para: 'Client Projects',
            hostingUrl: 'https://dev-muh-git-main-jhs-projects-3a7b2631.vercel.app/',
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1721947123/dv8wr9qznjor3wfrxuly.mp4',
            headingF: 'Wandk Web',
            headingB: 'Company Portfolio',
            para: 'Client Projects',
            hostingUrl: 'https://wandktech.com/',
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1709595480/a8sef1rvwnobxus2vch8.mp4',
            headingF: 'Toolbelts',
            headingB: 'Toolbelts Website',
            para: 'Client Projects',
            hostingUrl: 'https://lively-pothos-8b74fa.netlify.app/',
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1709594909/Safe_Behavioral_DNA_Prueba_de_seguridad_laboral_-_Google_Chrome_2024-03-05_04-24-01_quphvd.mp4',
            headingF: 'SDBNA Website',
            headingB: 'Safe Behavorial DNA',
            para: 'Client Projects',
            hostingUrl: 'https://safety-espanol-main.vercel.app/',
        },
        {
            img: 'https://res.cloudinary.com/dqh1f3r2w/video/upload/v1713308581/jpduj9qyitenb4c8uso9.mp4',
            headingF: 'Real Estate Website',
            headingB: 'Real Estate Website',
            para: 'Client Projects',
            hostingUrl: 'https://main--heartfelt-gaufre-941880.netlify.app/',
        },
        /* {
            img: 'https://res.cloudinary.com/dqh1f3r2w/video/upload/v1713308254/v7d0lcighjjxh0subd80.mp4',
            headingF: 'Website for Artists',
            headingB: 'Artist',
            para: 'Client Projects',
            hostingUrl: 'https://warm-muffin-369a55.netlify.app/',
        }, */
    ]

    const mernProjects = [
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1706178590/youtube_htdhnw.mp4',
            headingF: 'YouTube Mern',
            headingB: 'Youtube Clone',
            para: 'Clone of Youtube in MERN Stack',
            hostingUrl: 'https://youtube-huzaifa311.vercel.app/',
            sourceCode: 'https://github.com/huzaifa311/FrontendWhatsapp'
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1704819597/c8ppifc3raw6xfxhflnm.mp4',
            headingF: 'Amazon Clone',
            headingB: 'MERN Amazon Clone',
            para: 'Clone of WhaAmazon in MERN Stack & Stripe',
            hostingUrl: 'https://amazon-774l.vercel.app/',
            sourceCode: 'https://github.com/huzaifa311/FrontendWhatsapp'
        },
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1704184820/wf9rcrhseq1lbf0fqim8.mp4',
            headingF: 'Whatsapp Mern',
            headingB: 'Whatsapp Clone',
            para: 'Clone of WhatsApp in MERN Stack',
            hostingUrl: 'https://frontend-whatsapp-huzaifa311.vercel.app/',
            sourceCode: 'https://github.com/huzaifa311/FrontendWhatsapp'
        },
    ]

    const reactProjects = [
        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103491/xcgojr60jkuddhp1ixo4.mp4',
            headingF: 'Immersive Animator',
            headingB: 'Animator Website',
            para: 'Clone of Immersive Animator',
            hostingUrl: 'https://animator-gules.vercel.app/',
            sourceCode: 'https://github.com/huzaifa311/animator'
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103281/ywjhkrmh2fsfi0i25ocg.mp4',
            headingF: 'Portfolio Website',
            headingB: 'Portfolio Website',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-huzaifa311.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/portfolio"
        },

       /*  {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103758/k1wrsbktxaaihwifuclh.mp4',
            headingF: 'Blogging',
            headingB: 'Blogging Website',
            para: 'Blog App using React, Tailwind & FireBase',
            hostingUrl: 'https://blog-react-tau.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/Blog-React"
        }, */

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103440/kj0yot93icnfrskswofn.mp4',
            headingF: 'Logistics Website',
            headingB: 'Logistics Web Landing Page',
            para: 'Logistics Website Using React Js',
            hostingUrl: 'https://logisticsweb-huzaifa311.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/LogisticsWeb"
        },

      /*   {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103387/qsunnmzzffjfwax1fxwv.mp4',
            headingF: 'Portfolio Website',
            headingB: 'My Portfolio',
            para: 'Portfolio Website Using React Js',
            hostingUrl: 'https://portfolio-react-henna-ten.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/Portfolio-React"
        }, */

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102584/ldsnrjucsahqcza4uhnf.mp4',
            headingF: 'Weather Web',
            headingB: 'React Js Weather Web',
            para: 'Weather Web by React & tailwind.',
            hostingUrl: 'https://react-weather-alpha-dusky.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/reactWeather"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103704/ak3xdzn1ttlzs7znf1a8.mp4',
            headingF: 'Ecommerce',
            headingB: 'Ecommerce Website',
            para: 'Ecommerce WEBSITE USING REACTJS',
            hostingUrl: 'https://ecommerce-react-plum.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/EcommerceReact"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103616/njk5excghgfhgbs3rzkr.mp4',
            headingF: 'Github Api',
            headingB: 'Github Api Website',
            para: 'Github Api Website which shows data of github profiles',
            hostingUrl: 'https://github-api-ruby.vercel.app/',
            sourceCode: "https://github.com/huzaifa311/Github-API"
        },

        /* {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102582/rucuwlfmantlbdqzrkil.mp4',
            headingF: 'REACT TODO',
            headingB: 'REACT TODO',
            para: 'TODO WEBSITE USING REACTJS',
            hostingUrl: "https://todo-react-red-ten.vercel.app/",
            sourceCode: "https://github.com/huzaifa311/todoReact"
        }, */
    ]

    /* const htmlCssJs = [

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701104052/uqf8gpr9vhnnzqh3poqs.mp4',
            headingF: 'Calculator Website',
            headingB: 'Calculator',
            para: 'Fully Functional Calculator.',
            hostingUrl: 'https://huzaifa311.github.io/calculator/',
            sourceCode: "https://github.com/huzaifa311/calculator"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701104114/zj0w80ouysv3jxcdp6ek.mp4',
            headingF: 'Digital Clock',
            headingB: 'Digital Clock Website',
            para: 'DigitalClockWebsite via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/DigitalClock/',
            sourceCode: "https://github.com/huzaifa311/DigitalClock"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103560/asckxwsmdwkjrnw4ppsx.mp4',
            headingF: 'Hacking Prank',
            headingB: 'FAKE HACKING WEBSITE',
            para: 'HackingPrank Web via HTML,CSS &Js',
            hostingUrl: 'https://huzaifa311.github.io/HackPrank/',
            sourceCode: "https://github.com/huzaifa311/HackPrank"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103653/swqsyicibskkzefucbzm.mp4',
            headingF: 'Food-Panda',
            headingB: 'Food-Panda Landing Page',
            para: 'Food-Panda Clone via HTML, CSS & Js',
            hostingUrl: 'https://huzaifa311.github.io/FoodPanda/',
            sourceCode: "https://github.com/huzaifa311/FoodPanda"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102574/vvec50jutsdewqmtnx6u.mp4',
            headingF: 'Stop Watch',
            headingB: 'Stop Watch Web',
            para: 'Stop Watch Web via HTML, CSS & Js',
            hostingUrl: 'https://huzaifa311.github.io/Stop-Watch/',
            sourceCode: "https://github.com/huzaifa311/Stop-Watch"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102579/kokbs0xpnkpegan1cqud.mp4',
            headingF: 'Todo Website',
            headingB: 'Todo Website',
            para: 'Todo List via HTML,CSS &Js',
            hostingUrl: 'https://github.com/huzaifa311/todoList',
            sourceCode: ""
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701103216/ksba3br3rgvdledqqonv.mp4',
            headingF: 'Saylani',
            headingB: 'Saylani Landing Page',
            para: 'Saylani Web using Html, Css',
            hostingUrl: 'https://huzaifa311.github.io/Saylani/',
            sourceCode: "https://github.com/huzaifa311/Saylani"
        },

        {
            img: 'https://res.cloudinary.com/diaelwaqe/video/upload/v1701102581/u9yfv7i0fmu4ph0conoe.mp4',
            headingF: 'Tour Website',
            headingB: 'Tour Website',
            para: 'Tour Website via HTML & CSS',
            hostingUrl: "https://huzaifa311.github.io/TripAdvisor/",
            sourceCode: "https://github.com/huzaifa311/TripAdvisor"
        },
    ] */
    const [isDarkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };
    const homeClass = isDarkTheme ? "light" : "wrapper";
    const textClass = isDarkTheme ? "text-black " : styles.bgH;
    const subHeading = isDarkTheme ? "text-black md:w-screen text-4xl font-semibold" : "text-white md:w-screen text-4xl font-semibold"
    const gridLi = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4`
    return (
        <>
            <Helmet>
                <title>Huzaifa Portfolio - Projects Page</title>
            </Helmet>
            <div className={`md:flex md:justify-center ${homeClass} px-[2vw] md:px-16`}>
                <Header isDarkTheme={isDarkTheme} custom3={"text-[#FA6136]"} onClick={toggleTheme} />
                <div className='max-w-[1400px] pt-24 overflow-hidden'>

                    <h1 className={`text-center tracking-wider text-6xl py-8 font-black animate__animated animate__backInRight ${textClass}`} >Projects</h1>

                    <h1 className={`${subHeading} mb-5`}>Client Projects</h1>
                    <div className={gridLi}>
                        {clientProjects.map((project, i) => <FlippingCard key={i} project={project} />)}
                    </div>

                    <h1 className={`${subHeading} mb-5 mt-10`}>Mern Projects</h1>
                    <div className={gridLi}>
                        {mernProjects.map((project, i) => <FlippingCard key={i} project={project} />)}
                    </div>

                    <h1 className={`${subHeading} mb-5 mt-10`}>React Projects</h1>
                    <div className={gridLi}>
                        {reactProjects.map((project, i) => <FlippingCard key={i} project={project} />)}
                    </div>

                    <h1 className={`text-white md:w-screen text-4xl font-semibold mt-10 mb-5`}>React Native Projects</h1>
                    <div className={gridLi}>
                        <NativeCard img={'https://firebasestorage.googleapis.com/v0/b/react-blog-42ef4.appspot.com/o/Android%20Emulator%20-%20Pixel_7_Pro_API_30_5554%202023-12-01%2000-12-37.mp4?alt=media&token=2f73b35d-b006-4cb7-9474-7815214383be'} headingF={'React Native Instagram Clone'} headingB={'Instagram Clone in React Native'} />
                    </div>

                    {/* <h1 className={`${subHeading} mb-5 mt-10`}>HTML, CSS & Javascript</h1>
                    <div className={gridLi}>
                        {htmlCssJs.map((project, i) => <FlippingCard key={i} project={project} />)}
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Projects
