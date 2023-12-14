
import ProfilePhoto from "../components/ProfilePhoto"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import IconTextContainer from "../components/IconTextContainer";
import Educacion from "../components/Educacion";



export default function About() {

    return (
        <div
            className={`mx-auto min-h-screen flex items-center`}
        >
            <div className="max-w-[950px] text-xl mx-auto rounded-2xl p-8 bg-purple-500 backdrop-blur-lg bg-opacity-10 ">
                <h3 className="font-title font-black text-3xl md:text-4xl uppercase mb-10 text-center">Sobre mí</h3>
                <ProfilePhoto />
                <div className="mt-10 gap-4 font-light flex flex-wrap justify-between text-base">
                    <div className="max-w-[550px] flex flex-col gap-4">
                        <IconTextContainer  >
                            <FaLocationDot className="ico" />
                            <p>Chile</p>
                        </IconTextContainer>
                        <IconTextContainer>
                            <MdEmail className="ico" />
                            <p>manuel.perezdearce@gmail.com</p>
                        </IconTextContainer>
                        <div className="flex flex-wrap gap-4">
                            <IconTextContainer>
                                <FaLinkedin className="ico" />
                                <p>
                                    in/manuelperezdearce/
                                </p>
                            </IconTextContainer>
                            <IconTextContainer>
                                <FaGithub className="ico" />
                                <p>
                                    manuelperezdearce
                                </p>
                            </IconTextContainer>

                        </div>
                        <p>
                            Soy <b>Frontend Developer</b> y me apasionan los desafíos que la programación propone, mi naturaleza es autodidacta y siempre estoy dispuesto a colaborar.
                        </p>

                        <p>
                            Tengo experiencia desarrollando aplicaciones web de forma independiente y en equipo, con enfoque en resultados para el cliente, accesibilidad y un código escalable y mantenible.
                        </p>
                        <p>
                            Estoy constamente mejorando mis habilidades y aprendiendo nuevas tecnologías con el fin de entregar productos de mayor valor en cada proyecto.
                        </p>

                    </div>
                    <div>

                    </div>
                    <Educacion />

                </div>
            </div>

        </div >
    )
}