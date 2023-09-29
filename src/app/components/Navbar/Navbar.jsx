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
    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }
    console.log(window)

    return (
        <header className="bg-primary text-customWhite h-28 py-4 flex items-center justify-center shadow-lg fixed w-full">

            <nav className="w-[80%] flex justify-between items-center">
                <div className="w-[100px]">
                    <Link role="button" to="Home" smooth={true}>
                        <img src="./NG_LOGOW.png" alt="logo" />
                    </Link>
                </div>
                <NavUtilitieslNormal className="hidden sm:block" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
                <NavUtilitieslBurger className="block sm:hidden" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header>
    )
}