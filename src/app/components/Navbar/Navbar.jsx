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
    {
        id: '3',
        name: 'Contacto'
    },

]

export default function Navbar() {

    const [activeIndex, setActiveIndex] = useState("Inicio")

    const handleActiveIndex = (e) => {
        setActiveIndex(e)
    }



    return (
        <header className="w-[100vw] bg-primary10 backdrop-blur-xl text-customWhite md:h-[100px] flex items-center justify-center shadow-lg shadow-customBlack10 text-sm font-light fixed  px-8 duration-150 z-50 rounded-b-lg"

        >
            <img className="hidden md:block absolute -bottom-1 -right-10" src="/frame-nav/frame-nav1.png" alt="" />
            <img className="hidden md:block absolute -bottom-1 -left-10 rotate" src="/frame-nav/frame-nav2.png" alt="" />
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