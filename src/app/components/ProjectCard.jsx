import Image from "next/image";
import LinkButton from "./LinkButton";

export default function ProjectCard({ item }) {
    return (
        <article className="w-[300px] md:w-[740px] mx-auto text-sm sm:text-lg group flex flex-wrap justify-center gap-5 md:gap-10 font-light  ">
            <div className="rounded-3xl w-[320px] h-[188px] md:w-2/4 md:h-[250px]   bg-customFucsia2 overflow-hidden shadow-[0px_0px_50px_3px_rgba(255,255,255,0.1)]">
                <img className="bg-slate-500 brightness-90 w-full h-full rounded-3xl  sm:translate-x-9 sm:translate-y-9 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:brightness-110 group-hover:blur-0 transition duration-500 shadow-[0px_0px_8px_3px_rgba(0,0,0,0.2)]" src={item.img}
                    alt="imagen de proyecto" />
                {/* <Image width={400} height={300} className="bg-slate-500 brightness-90 w-full h-full rounded-3xl  sm:translate-x-9 sm:translate-y-9 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:brightness-110 group-hover:blur-0 transition duration-500 shadow-[0px_0px_8px_3px_rgba(0,0,0,0.2)]" src={item.img}
                    alt="imagen de proyecto" /> */}
            </div>
            <div className="w-[300px] flex flex-col gap-2 md:gap-0 mx-auto text-left justify-between">
                <h3 className=" font-bold text-customFucsia2 text-2xl title-section group-hover:brightness-110 duration-150">{item.title}</h3>
                <p>{item.descr}</p>
                <div className="">
                    <p className="font-bold">Tecnologías:</p>
                    <div className="flex flex-wrap gap-3">
                        {item.tools.map(tool => {
                            return (
                                <p className="bg-purple-800 rounded-full px-2 text-sm" key={tool}>{tool}</p>
                            )
                        })}

                    </div>
                </div>
                <div className="flex mt-4 justify-between">
                    <LinkButton text="Ir al sitio" py={2} px={4} link={item.deploy} />
                    <LinkButton text="Ir al Repositorio" py={2} px={4} link={item.repo} />
                </div>
            </div>

        </article>
    )
}