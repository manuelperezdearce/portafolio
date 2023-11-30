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
        name: 'Experiencia'
    },
    {
        id: '2',
        name: 'Portafolio'
    },
    {
        id: '3',
        name: 'Tecnologías'
    },
    // {
    //     id: '4',
    //     name: 'Contacto'
    // },

]

export default function Navbar({ scrollTop }) {

    const [activeIndex, setActiveIndex] = useState("Inicio")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }
    return (
        <header className={`w-[100vw] bg-primary10 backdrop-blur-xl opacity-[${scrollTop}% ] text-customWhite md:h-16 flex items-center justify-center shadow-lg shadow-customBlack10 text-sm font-light fixed  px-8 duration-150 z-50 rounded-b-lg`}
        >
            <p>{scrollTop}</p>
            <nav className="w-[90%] max-w-[1600px] md:w-[100%] flex justify-between items-center uppercase z-50">
                <div className="h-10 duration-150 flex items-center [&>*]:me-5">
                    <Link role="button" to="Inicio" smooth={true}>
                        <img className="w-10 p-1" src="./LOGO-W.png" alt="logo" />
                    </Link>
                    <h1 className="hidden md:block text-lg">Manuel Pérez de Arce Portafolio</h1>
                </div>
                <NavUtilitieslNormal className="hidden sm:block" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
                <NavUtilitieslBurger className="block sm:hidden" navItems={navItems} handleActiveIndex={handleActiveIndex} activeIndex={activeIndex} />
            </nav>
        </header >
    )
}