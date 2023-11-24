"use client"
import { useState } from "react"
import Error404 from "../components/Error404"
import ProjectCard from "../components/ProjectCard"

const PORTAFOLIO_DATA = [
    {
        title: "Green Eats",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptates quo impedit reiciendis repellat provident?Veritatis temporibus perspiciatis repellendus modi beatae!",
        tools: "React Javascript CSS",
        picture: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
        urlRepository: "",
        urlDeploy: "",

    },
    {
        title: "Code Toolki @nlpz",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptates quo impedit reiciendis repellat provident?Veritatis temporibus perspiciatis repellendus modi beatae!",
        tools: "React Javascript CSS",
        picture: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
        urlRepository: "",
        urlDeploy: "",

    },
    {
        title: "Code Toolkit @lpz",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptates quo impedit reiciendis repellat provident?Veritatis temporibus perspiciatis repellendus modi beatae!",
        tools: "React Javascript CSS",
        picture: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
        urlRepository: "",
        urlDeploy: "",

    },
    {
        title: "Code Toolkit @nlpz",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptates quo impedit reiciendis repellat provident?Veritatis temporibus perspiciatis repellendus modi beatae!",
        tools: "React Javascript CSS",
        picture: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
        urlRepository: "",
        urlDeploy: "",

    },
    {
        title: "Code Toolkit @nlp",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Voluptates quo impedit reiciendis repellat provident?Veritatis temporibus perspiciatis repellendus modi beatae!",
        tools: "React Javascript CSS",
        picture: "https://www.deployhq.com/images/deploy/opengraph-banner.png",
        urlRepository: "",
        urlDeploy: "",

    }

]


export default function Portafolio({ styles }) {

    const [portafolio, setPortafolio] = useState(PORTAFOLIO_DATA)

    return (
        <div
            className="text-center"
        >
            <h2 className="font-title text-4xl uppercase mb-10">Portafolio</h2>
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