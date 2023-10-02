'use client'

import { useState } from "react"

import { Link } from "react-scroll"
import NavUtilitieslNormal from "./components/NavUtilitiesNormal"
import NavUtilitieslBurger from "./components/NavUtilitiesBurger"
const navItems = [
    {
        id: '0',
        name: 'Home'
    },
    {
        id: '1',
        name: 'Services'
    },
    {
        id: '2',
        name: 'About'
    }
]

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState("Home")
    const [dropNav, setDropNav] = useState(false)
    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }
    const handleDropNav = () => {
        dropNav ? setDropNav(false) : setDropNav(true)
    }


    return (
        <header className={`w-full bg-primary text-customWhite ${dropNav ? "h-24" : "h-12"} py-4 flex items-center justify-center shadow-lg fixed duration-150 z-50`}
            onMouseEnter={handleDropNav} onMouseLeave={handleDropNav}
        >

            <nav className="w-[90%] m:w-[80%] flex justify-between items-center">
                <div className={`${dropNav ? "h-20" : "h-10"} duration-150`}>
                    <Link role="button" to="Home" smooth={true}>
                        <img className="h-full" src="./NG_LOGOW.png" alt="logo" />
                    </Link>
                </div>
                <NavUtilitieslNormal className="hidden sm:block" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
                <NavUtilitieslBurger className="block sm:hidden" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header >
    )
}