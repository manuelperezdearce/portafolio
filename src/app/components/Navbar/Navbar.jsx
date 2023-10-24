'use client'

import { useState } from "react"

import { Link } from "react-scroll"
import NavUtilitieslNormal from "./components/NavUtilitiesNormal"
import NavUtilitieslBurger from "./components/NavUtilitiesBurger"
const navItems = [
    {
        id: '0',
        name: 'Sobre mí'
    },
    {
        id: '1',
        name: 'Portafolio'
    },
    {
        id: '2',
        name: 'Tecnologías'
    },

]

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState("Inicio")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }



    return (
        <header className="w-[100vw] bg-primary10 backdrop-blur-xl text-customWhite h-14 flex items-center justify-center shadow-md box text-sm font-light fixed  px-8 duration-150 z-50 rounded-b-lg"

        >
            <nav className="w-[90%] md:w-[100%] flex justify-between items-center uppercase">
                <div className="h-10 duration-150 flex items-center [&>*]:me-5">
                    <Link role="button" to="Inicio" smooth={true}>
                        <img className="w-10" src="./LOGO-W.png" alt="logo" />
                    </Link>
                    <h1 className="hidden md:block text-lg">Manuel Pérez de Arce Portafolio</h1>
                </div>
                <NavUtilitieslNormal className="hidden sm:block" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
                <NavUtilitieslBurger className="block sm:hidden" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header >
    )
}