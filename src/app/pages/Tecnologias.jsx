import CardTech from "../components/CardTech"
import { TECHSDATA } from "../tools/mockData/TechsDATA"

const data = TECHSDATA
export default function Tecnologias() {

    const tools = data.filter(item => item.type == "tool")
    const techs = data.filter(item => item.type == "tech")

    return (

        <div className="min-h-screen">
            <section className="flex flex-col justify-top [&>*]:mb-30  max-w-[950px] bg-purple-500 backdrop-blur-lg bg-opacity-10 rounded-2xl p-8 mx-auto">
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
        </div>


    )
}