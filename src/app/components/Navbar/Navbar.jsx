'use client'
import { useState } from "react"
import { Link } from "react-scroll"
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

    return (
        <header className="bg-primary text-customWhite h-28 py-4 flex items-center justify-center shadow-lg fixed w-full">

            <nav className="w-[80%] flex justify-between items-center">
                <div className="w-[100px]">
                    <Link to="Home" smooth={true}>
                        <img src="./NG_LOGOW.png" alt="logo" />
                    </Link>

                </div>
                <ul className="flex gap-4  justify-end">
                    {
                        navItems.map(item => {
                            return (
                                <li className="flex flex-col" role="button" key={item.id}>
                                    <Link

                                        name={item.id}
                                        onSetActive={handleActiveIndex}
                                        onClick={handleActiveIndex}
                                        to={item.name}
                                        smooth={true}
                                        spy={true}

                                    >
                                        {item.name}
                                    </Link>
                                    <span className={`${activeIndex === item.name && "bg-customWhite"} h-1 rounded-lg transition ease-in`} />
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}