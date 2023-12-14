import WorkExperienceCard from "../components/WorkExperienceCard"
import { EXPERIENCIA_DATA } from "../tools/mockData/ExperienciaDATA"

const experiencia = EXPERIENCIA_DATA

export default function Experiencia({ styles }) {

    return (
        <div
            className="text-center m:px-10 max-w-[950px] bg-purple-500 backdrop-blur-lg bg-opacity-10 p-8 rounded-2xl mx-auto relative"
        >
            <h3 className="font-title font-black text-3xl md:text-4xl uppercase mb-10">Experiencia</h3>
            <section className="ms-2 md:ms-4 lg:ms-0 border-s-2 border-secondary flex flex-col gap-5 justify-start">
                {
                    experiencia.length > 0 &&
                    experiencia.map(item => {
                        return (
                            <WorkExperienceCard
                                key={item.cargo}
                                item={item} />
                        )
                    })
                }
            </section>
        </div>
    )
}