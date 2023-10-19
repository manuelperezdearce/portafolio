"use client"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { CgMenuGridR } from "react-icons/cg"
import { useState } from "react"
export default function SideMenu() {

    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
    return (
        <div className="rounded-full  text-4xl z-50 top-[calc(100vh-400px)] left-[calc(100vw-110px)] fixed flex flex-col gap-1"
            onMouseEnter={handleToggleMenu}
            onMouseLeave={handleToggleMenu}
        >
            <CgMenuGridR role="button" className="bg-customWhite rounded-full text-6xl p-1 text-primary z-50 hover:animate-spin"

            />
            <FaWhatsapp className={`bg-green-600 rounded-full text-customWhite text-6xl absolute transition duration-150 ease-in-out  ${toggleMenu ? "-top-16" : ""}`} />
            <FaLinkedin className={`bg-customWhite rounded-full text-blue-600 text-6xl absolute ${toggleMenu ? "-top-32" : "top"}`} />


        </div>
    )
}