"use client"
import { useState } from "react"
import Error404 from "../components/Error404"

const PORTAFOLIO_DATA = []

export default function Portafolio({ styles }) {

    const [portafolio, setPortafolio] = useState(PORTAFOLIO_DATA)

    return (
        <div
        >
            {
                portafolio.length > 0 ? "" : <Error404 />
            }
        </div>
    )
}