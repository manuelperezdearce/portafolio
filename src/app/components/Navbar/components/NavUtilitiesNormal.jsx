import { Link } from "react-scroll"

export default function NavUtilitieslNormal({ navItems, handleActiveIndex, activeIndex }) {
    return (
        <ul className="hidden sm:flex gap-4  justify-end ">
            {
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
                            >
                                {item.name}
                            </Link>
                            <span className={`${activeIndex === item.name && "bg-customWhite"} h-[1px] rounded-lg transition ease-in`} />
                        </li>
                    )
                })
            }
        </ul>
    )
}