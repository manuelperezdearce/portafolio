'use client'
import PORTFOLIO_DATA from "../tools/mockData/PortfolioDATA-ALL.json"
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { Carousel } from 'flowbite-react';

export default function Portafolio() {
    const data = Object.values(PORTFOLIO_DATA.data.portafolio)
    const [portafolio, setPortafolio] = useState([])
    const [latest, setLatest] = useState([])
    const [older, setOlder] = useState([])

    const sortData = () => {
        const array = data
        array.sort((a, b) => new Date(b.date) - new Date(a.date))
        return setPortafolio(array)
    }

    const getLatestNOlder = () => {
        const first3 = data.slice(0, 3)
        const others = data.slice(3)
        return (setLatest(first3), setOlder(others))
    }

    useEffect(() => {
        sortData()
        getLatestNOlder()
    }, [])

    return (
        <div
            className="text-center max-w-[950px] bg-purple-500 backdrop-blur-lg bg-opacity-10 rounded-2xl py-8 mx-auto [&>div]:mb-10"
        >
            <h3 className="font-title font-black  text-4xl uppercase mb-10">Portafolio</h3>
            <div className="flex [&>article]:my-10 flex-col">
                <h4 className="ms-4 text-left">Últimos proyectos:</h4>
                {
                    latest.length > 0 &&
                    latest.map(item => {
                        return (
                            <ProjectCard item={item} key={item.title} />
                        )
                    })
                }
            </div>

            <div >
                <h4 className="ms-4 text-left">Anteriores:</h4>
                {
                    older.length > 0 &&
                    <Carousel className="my-10 mx-auto pb-16" >
                        {

                            older.map(item => {
                                return (
                                    <ProjectCard item={item} key={item.title} />
                                )
                            })
                        }
                    </Carousel>
                }

            </div>

        </div>
    )
}