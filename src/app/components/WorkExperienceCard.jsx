import { useState } from "react"
import ToogleButton from "./ToogleButton"
export default function WorkExperienceCard({ item }) {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div className="relative ps-10">
            < span className="w-6 h-6 bg-customFucsia2 rounded-full absolute left-0 -translate-x-[54%] translate-y-[8px]" />
            < div className="text-left mx-auto  relative" >
                <div className="relative">
                    <h3 className="font-title font-bold  text-2xl md:text-3xl uppercaseflex">
                        {item.cargo}
                    </h3>
                    <h4 className="font-semibold text-lg md:text-xl uppercaseflex">
                        {item.empresa}
                    </h4>
                    <h5 className="text-sm mt-2">
                        {item.fecha}
                    </h5>
                    <ToogleButton toggle={toggle} handleToggle={handleToggle} />
                </div>
                <div className={`max-h-0 duration-200 ${toggle && "max-h-[500px]"} overflow-hidden mt-4`}>
                    <p className="mb-2 text-sm">{item.descripcion}</p>
                    <ul className="text-sm md: ps-3 sm:ps-10 relative">
                        {
                            item.logros.map(logro => {
                                return (
                                    <div className="relative" key={logro}>
                                        <div className="absolute -left-4 sm:-left-10 top-0 translate-y-[10px] rounded-full w-2 sm:w-6 h-[2px] bg-customFucsia"></div>
                                        <li className="mb-1">
                                            <p className="leading-5">
                                                {logro}
                                            </p>

                                        </li>
                                    </div>

                                )
                            })
                        }
                    </ul>
                </div>
            </ div >
        </ div>

    )
}