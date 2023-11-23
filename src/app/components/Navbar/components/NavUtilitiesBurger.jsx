'use client'
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-scroll"

export default function NavUtilitieslBurger({ handleActiveIndex, activeIndex, navItems }) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggleMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }

    return (
        <div className="relative block sm:hidden">
            <IoMdMenu className="text-4xl" role='button' onClick={handleToggleMenu} />

            <span className={` ${toggleMenu ? "opacity-100" : "opacity-0 "}  bg-primary duration-150 p-4 absolute right-1 rounded-md shadow-md z-50`} >
                <ul className="flex flex-col gap-2 justify-end">
                    {
                        toggleMenu &&
                        navItems?.map(item => {
                            return (
                                <li className="flex flex-col" role="button" key={item.id}>
                                    <Link
                                        name={item.id}
                                        onSetActive={handleActiveIndex}
                                        onClick={handleActiveIndex}
                                        to={item.name}
                                        smooth={true}
                                        spy={true}
                                        containerId="main"
                                        duration={500}
                                    >
                                        {item.name}
                                    </Link>
                                    <span className={`${activeIndex === item.name && "bg-secondary "}
                                    h-[1px] rounded-lg transition ease-in`} />
                                </li>
                            )
                        })
                    }
                </ul>
            </span>


        </div>
    )
}