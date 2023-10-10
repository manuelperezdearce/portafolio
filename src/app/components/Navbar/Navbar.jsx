'use client'

import { useState } from "react"

import { Link } from "react-scroll"
import NavUtilitieslNormal from "./components/NavUtilitiesNormal"
import NavUtilitieslBurger from "./components/NavUtilitiesBurger"
const navItems = [
    {
        id: '0',
        name: 'Inicio'
    },
    {
        id: '1',
        name: 'Servicios'
    },
    {
        id: '2',
        name: 'Nosotros'
    }
]

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState("Inicio")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }



    return (
        <header className="w-[100vw] bg-primary10 backdrop-blur-xl text-customWhite h-14 py-4 flex items-center justify-center shadow-md box text-sm font-light fixed  px-8 duration-150 z-50 rounded-b-lg"

        >
            <nav className="w-[90%] md:w-[100%] flex justify-between items-center uppercase">
                <div className="h-10 duration-150">
                    <Link role="button" to="Inicio" smooth={true}>
                        <img className="h-full" src="./NG_LOGOW.png" alt="logo" />
                    </Link>
                </div>
                <NavUtilitieslNormal className="hidden sm:block" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
                <NavUtilitieslBurger className="block sm:hidden" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header >
    )
}