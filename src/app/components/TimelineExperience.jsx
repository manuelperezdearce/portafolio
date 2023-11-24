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
                <article key={item.cargo} className="text-xl font-light relative text-left ps-8 mb-10">
                    <div className="w-6 h-6 bg-customRed rounded-full absolute left-0 -translate-x-[54%] translate-y-[50%]"></div>
                    <h3 className="uppercase text-2xl font-semibold">{item.cargo}</h3>
                    <h4 className="mb-4">{item.fecha}</h4>
                    <p className="mb-2">{item.descripcion}</p>
                    <ul className={`text-[16px] ps-10 relative ${logros ? "block" : "hidden"}`}>
                        {
                            item.logros.map(logro => {
                                return (
                                    <div key={logro}>
                                        <div className="absolute left-0 translate-y-[300%] rounded-full  w-6 h-1 bg-customWhite"></div>
                                        <li className="mb-1">
                                            {logro}
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