import { Button } from "flowbite-react";

export default function ProjectCard({ item }) {
    return (
        <article className="w-[300px] md:w-[740px] mx-auto text-sm sm:text-lg group flex flex-wrap justify-center gap-5 md:gap-10 font-light  ">
            <div className="rounded-3xl w-[320px] md:w-2/4   bg-secondary overflow-hidden shadow-[0px_0px_50px_3px_rgba(255,255,255,0.1)]">
                <img className="brightness-90 rounded-3xl object-cover h-full sm:translate-x-9 sm:translate-y-9 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:brightness-110 transition duration-500 shadow-[0px_0px_8px_3px_rgba(0,0,0,0.2)]" src={item.img}
                    alt="" />
            </div>

            <div className="w-[300px] mx-auto text-left [&>*]:mb-4">
                <h3 className="font-medium text-2xl title-section">{item.title}</h3>
                <p>{item.descr}</p>
                <div className="">
                    <p>Tecnologías:</p>
                    <div className="flex flex-wrap gap-3">
                        {item.tools.map(tool => {
                            return (
                                <p key={tool}>{tool}</p>
                            )
                        })}

                    </div>


                </div>
                <div className="flex justify-between">
                    <Button className="rounded-full bg-secondary">Ir al sitio</Button>
                    <Button className="rounded-full bg-secondary">Ir al repositorio</Button>
                </div>
            </div>

        </article>
    )
}