'use client'

import { MdDarkMode, MdLightMode } from "react-icons/md";


export default function DarkModeSwitch({ HandleDarkMode, darkMode }) {

    return (
        <button onClick={HandleDarkMode} className="text-black dark:text-white absolute top-5">
            {darkMode ? <MdDarkMode /> : < MdLightMode />}
        </button>
    )
}