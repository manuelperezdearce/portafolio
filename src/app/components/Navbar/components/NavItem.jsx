import { Link } from "react-scroll";

export default function NavItem({ item }) {


    return (
        <li className={`flex flex-col mb-4 font-bold text-2xl text-customCalipso group`} role="button" key={item.id}>
            <Link
                className="flex items-center gap-2"
                name={item.id}
                activeClass="active"
                to={item.name}
                smooth={true}
                spy={true}
                containerId="main"
                duration={500}
            >
                <span className="group-hover:animate-wiggle-more group-hover:animate-infinite">{item.ico}</span>
                {item.name}
            </Link>

        </li>
    )
}