import { useState } from "react"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import ToogleButton from "./ToogleButton"
export default function WorkExperienceCard({ item }) {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (
        <div className="relative ps-10">
            < span className="w-6 h-6 bg-customRed rounded-full absolute left-0 -translate-x-[54%] translate-y-[50%]" />
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
                <div className={`${toggle ? "block" : "hidden"} mt-4`}>
                    <p className="mb-2 text-sm">{item.descripcion}</p>
                    <ul className="text-sm md: ps-3 sm:ps-10 relative">
                        {
                            item.logros.map(logro => {
                                return (
                                    <div key={logro}>
                                        <div className="absolute left-0 translate-y-[650%] rounded-full  w-2 sm:w-6 h-[2px] bg-customWhite"></div>
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