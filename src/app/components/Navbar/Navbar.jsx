'use client'
import { FaHome, FaUserCircle, FaBrain, FaTools, FaFolderOpen } from "react-icons/fa";
import { MdWork } from "react-icons/md";


import { useState } from "react"
import { Link } from "react-scroll"
import NavUtilities from "./components/NavUtilities"
import GoUp from "../GoUp"

const navItems = [
    {
        id: '0',
        name: 'Home',
        ico: <FaHome />
    },
    {
        id: '1',
        name: 'Sobre mí',
        ico: <FaUserCircle />
    },
    {
        id: '2',
        name: 'Experiencia',
        ico: <FaBrain />
    },
    {
        id: '3',
        name: 'Portafolio',
        ico: <FaFolderOpen />
    },
    {
        id: '4',
        name: 'Tecnologías',
        ico: <FaTools />
    },

]

export default function Navbar({ scrollTop }) {

    const [activeIndex, setActiveIndex] = useState("Home")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }
    return (
        <header className={`w-[100vw] bg-primary10 backdrop-blur-xl opacity-[${scrollTop}% ] text-customWhite md:h-16 flex items-center justify-center shadow-lg shadow-customBlack10 text-sm font-light fixed px-8 duration-150 z-50 rounded-b-lg`}
        >
            <nav className="w-full max-w-[950px] md:w-[100%] flex justify-between items-center z-50">
                {/* <Link className="w-full z-50 flex hover:cursor-pointer items-center gap-4" role="button" to="Home" containerId="main" smooth={true}>
                    <GoUp />
                </Link> */}
                <NavUtilities navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header >
    )
}