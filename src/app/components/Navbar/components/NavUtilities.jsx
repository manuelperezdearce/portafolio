import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-scroll"

export default function NavUtilities({ navItems, handleActiveIndex, activeIndex }) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggleMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
    console.log(toggleMenu)
    return (
        <>
            <IoMdMenu className="text-4xl" role='button' onClick={handleToggleMenu} />
            <ul className={`duration-200 bg-secondary bg-opacity-80 absolute top-[40px] sm:top-[64px] w-[250px] -right-0  sm:w-[500px]  ${!toggleMenu && "-right-full"} h-screen px-6 py-10 text-customFucsia2`}>
                {
                    navItems?.map(item => {
                        return (
                            <li className="flex flex-col mb-4 font-semibold text-2xl" role="button" key={item.id}>
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
                                <span className={`${activeIndex === item.name && "bg-customCalipso"} max-w-[200px] h-[2px] rounded-lg transition ease-in`} />
                            </li>
                        )
                    })
                }
            </ul>
        </>

    )
}