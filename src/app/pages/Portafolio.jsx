"use client"
import PORTFOLIO_DATA from "../tools/mockData/PortfolioDATA.json"
import { useState } from "react"
import Error404 from "../components/Error404"
import ProjectCard from "../components/ProjectCard"

export default function Portafolio({ styles }) {

    const [portafolio, setPortafolio] = useState(Object.values(PORTFOLIO_DATA.data.portafolio))
    console.log(Object.values(PORTFOLIO_DATA.data.portafolio))
    return (
        <div
            className="text-center"
        >
            <h3 className="font-title font-black  text-4xl uppercase mb-10">Portafolio</h3>
            <div className="flex [&>*]:my-20 flex-col">
                {
                    portafolio.length > 0 &&
                    portafolio.map(item => {
                        return (
                            <ProjectCard item={item} key={item.title} />
                        )
                    })
                }
            </div>

            {/* {
                portafolio.length > 0 ? "" : <Error404 />
            } */}
        </div>
    )
}