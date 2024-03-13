import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isDarkTheme, custom1, custom2, custom3, custom4, custom5, onClick }) => {
    let [open, setOpen] = useState(false);

    return (
        <div className={`shadow-2xl w-full fixed top-0 left-0 z-[100] ${custom1}`}>
            <div className="md:flex items-center justify-between bg-transparent backdrop-blur-md py-4 md:px-10 px-7">
                <div className="font-semibold text-2xl cursor-pointer flex items-center gap-1">
                    <h1 className="text-white animate__animated animate__backInDown">
                        <Link to="/" className="flex justify-center place-items-center">
                            <img src="/logo.png" alt="logo" className="h-14" /> HUZAIFA
                        </Link>
                    </h1>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 text-[#FA6136] cursor-pointer md:hidden w-7 h-7"
                >
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                <ul
                    className={`animate__animated animate__backInLeft md:flex md:items-center absolute md:static text-white bg-transparent backdrop-blur-md md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
                        }`}
                >
                    <li className="md:ml-8 md:my-0 my-7 md:mt-0 mt-14 font-semibold text-lg">
                        <NavLink to="/" className={` hover:text-[#FA6136] duration-500 ${custom1}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg">
                        <NavLink
                            to="/about"
                            className={` hover:text-[#FA6136] duration-500 ${custom2}`}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg">
                        <NavLink
                            to="/skills"
                            className={` hover:text-[#FA6136] duration-500 ${custom5}`}
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg">
                        <NavLink
                            to="/projects"
                            className={` hover:text-[#FA6136] duration-500 ${custom3}`}
                        >
                            Projects
                        </NavLink>
                    </li>

                    <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg">
                        <NavLink
                            to="/contact"
                            className={` hover:text-[#FA6136] duration-500 ${custom4}`}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="hidden md:inline-flex hover:cursor-pointer animate__animated animate__backInRight" onClick={onClick}>
                    {isDarkTheme ? <i className="fas fa-sun text-[#FF612E]"></i> : <i className="fas fa-moon text-[#FF612E]"></i>}
                    {/* <DarkModeIcon className="text-[#FF612E]"/> */}
                </div>
                {/* button */}
            </div>
        </div>
    );
};

export default Header;