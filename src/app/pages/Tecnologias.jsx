import CardTech from "../components/CardTech"
import ServicesCard from "../components/ServicesCard"
import { MdOutlineNavigateNext } from "react-icons/md"
import { TECHSDATA } from "../tools/mockData/TechsDATA"




export default function Tecnologias() {

    const data = TECHSDATA
    const tools = data.filter(item => item.type == "tool")
    const techs = data.filter(item => item.type == "tech")

    return (


        <section className="min-h-screen flex flex-col justify-top [&>*]:mb-30  rounded-xl max-w-[900px] mx-auto">

            <h3 className="font-title font-black text-[24px] sm:text-4xl text-center uppercase mb-10">Herramientas
                y
                Tecnologías</h3>
            <article className="w-full flex flex-wrap justify-evenly md:justify-center">


                {
                    techs.map(({ name, url }) => {
                        return (
                            <CardTech key={name} url={url} name={name} />
                        )
                    })
                }

                {
                    tools.map(({ name, url }) => {
                        return (
                            <CardTech key={name} url={url} name={name} />
                        )
                    })
                }



            </article>

        </section >

    )
}