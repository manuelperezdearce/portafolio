import { Button } from "flowbite-react"
import { useState } from "react"

export default function TimelineExperience({ experiencia }) {
    const [logros, setLogros] = useState(true)
    const handleLogros = () => {
        logros ? setLogros(false) : setLogros(true)
    }


    return (
        experiencia.length > 0 &&
        experiencia.map(item => {
            return (
                <article key={item.cargo} className="text-xl font-light relative text-left ps-5 sm:ps-8 mb-10">
                    <div className="w-6 h-6 bg-customRed rounded-full absolute left-0 -translate-x-[54%] translate-y-[50%]"></div>
                    <h3 className="uppercase text-2xl font-semibold">{item.cargo}</h3>
                    <h4 className="mb-4 text-base">{item.fecha}</h4>
                    <p className="mb-2 text-sm">{item.descripcion}</p>
                    <ul className={`text-sm md: ps-3 sm:ps-10 relative ${logros ? "block" : "hidden"}`}>
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
                    {/* <Button onClick={handleLogros}>Ver más</Button> */}
                </article>
            )
        })
    )
}