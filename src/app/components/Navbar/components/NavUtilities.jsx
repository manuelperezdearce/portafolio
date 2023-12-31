import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import Footer from "../../Footer/Footer"
import NavItem from "./NavItem"

export default function NavUtilities({ navItems }) {

    const [toggleMenu, setToggleMenu] = useState(false)
    const handleToggleMenu = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
    return (
        <>
            <IoMdMenu className={`${toggleMenu && "active"} ms-auto text-5xl text-customCalipso hover:text-customFucsia  hover:scale-110 duration-150 hover:drop-shadow-[0px_0px_9px_rgba(255,255,255,0.5)]`} role='button' onClick={handleToggleMenu} />
            <div className={`flex flex-col justify-between duration-200 bg-customBlack90 absolute top-[48px] md:top-[64px] w-2/3 -right-0 shadow-lg  md:w-1/3  ${!toggleMenu && "-right-full"} h-[calc(100vh-48px)] md:h-[calc(100vh-64px)] px-6 py-10 text-secondary`}
                onMouseLeave={handleToggleMenu}>
                <ul>
                    {
                        navItems?.map(item =>
                            <NavItem item={item} key={item.id} />
                        )
                    }
                </ul>
                <Footer />
            </div>

        </>

    )
}