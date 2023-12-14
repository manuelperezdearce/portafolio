import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { Link } from "react-scroll"
import Footer from "../../Footer/Footer"

export default function NavUtilities({ navItems, handleActiveIndex, activeIndex }) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggleMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
    return (
        <>
            <IoMdMenu className={`${toggleMenu && "active"} ms-auto text-4xl text-customCalipso hover:text-customFucsia  hover:scale-110 duration-150 hover:drop-shadow-[0px_0px_9px_rgba(255,255,255,0.5)]`} role='button' onClick={handleToggleMenu} />
            <div className={`flex flex-col justify-between duration-200 bg-customBlack90 absolute top-[36px] md:top-[64px] w-2/3 -right-0 shadow-lg  md:w-1/3  ${!toggleMenu && "-right-full"} h-[calc(100vh-32px)] md:h-[calc(100vh-64px)] px-6 py-10 text-secondary`}
                onMouseLeave={handleToggleMenu}>
                <ul
                >
                    {
                        navItems?.map(item => {
                            return (
                                <li className="flex flex-col mb-4 font-bold text-2xl text-customCalipso hover:text-customFucsia" role="button" key={item.id}>
                                    <Link
                                        name={item.id}
                                        onSetActive={handleActiveIndex}
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
                <Footer />
            </div>

        </>

    )
}