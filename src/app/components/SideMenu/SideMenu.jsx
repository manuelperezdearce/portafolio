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
        <div className="rounded-full [&>*]:text-5xl sm:text-4xl z-50 bottom-10 right-5 absolute flex flex-col gap-1 "
            onMouseEnter={handleToggleMenu}
            onMouseLeave={handleToggleMenu}
        >
            <CgMenuGridR role="button" className="bg-customWhite rounded-full  p-1 text-primary z-50 hover:animate-spin"

            />
            <FaWhatsapp className={`bg-green-600 rounded-full text-customWhite text-6xl absolute transition duration-150 ease-in-out  ${toggleMenu ? "-top-16" : ""}`} />
            <FaLinkedin className={`bg-customWhite rounded-full text-blue-600 text-6xl absolute ${toggleMenu ? "-top-32" : "top"}`} />


        </div>
    )
}