import { Button } from "flowbite-react";

export default function ProjectCard({ item }) {
    return (
        <article className="group flex flex-wrap justify-center gap-5 md:gap-10 font-light text-xl ">
            <div className="rounded-3xl w-[320px] md:w-2/4   bg-slate-800 overflow-hidden shadow-[0px_0px_50px_3px_rgba(255,255,255,0.1)]">
                <img className="brightness-90 rounded-3xl object-cover h-full translate-x-9 translate-y-9 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:brightness-110 transition duration-500 shadow-[0px_0px_8px_3px_rgba(0,0,0,0.2)]" src={item.picture}
                    alt="" />
            </div>

            <div className="w-[320px] text-left [&>*]:mb-4">
                <h2 className="font-medium text-2xl">{item.title}</h2>
                <p>{item.description}</p>
                <p>
                    Tecnologías:
                    <br />
                    {item.tools}

                </p>
                <div className="flex justify-between">
                    <Button className="rounded-full bg-secondary">Ir al sitio</Button>
                    <Button className="rounded-full bg-secondary">Ir al repositorio</Button>
                </div>
            </div>

        </article>
    )
}