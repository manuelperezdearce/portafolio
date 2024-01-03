
import ProfilePhoto from "../components/ProfilePhoto"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import IconTextContainer from "../components/IconTextContainer";
import Educacion from "../components/Educacion";



export default function About() {

    return (
        <div
            className={`mx-auto`}
        >
            <div className="max-w-[950px] text-xl mx-auto rounded-2xl  py-8 px-2 md:px-8 bg-purple-500 backdrop-blur-lg bg-opacity-10 ">
                <h3 className="font-title font-black text-3xl md:text-4xl uppercase mb-10 text-center">Sobre mí</h3>

                <div className="mt-10 gap-4 font-light flex flex-wrap justify-between text-base">
                    <div className="max-w-[550px] flex flex-col gap-4">
                        <ProfilePhoto />
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
                            Como <b className="text-customFucsia font-black">Frontend Developer</b>, me apasiona enfrentar los desafíos que la programación ofrece. Soy autodidacta por naturaleza y siempre estoy dispuesto a colaborar.
                        </p>

                        <p>
                            Tengo experiencia en el desarrollo de aplicaciones web, tanto de forma independiente como en equipos agiles, con especial atención en los resultados para el cliente, la accesibilidad y el mantenimiento y escalabilidad del código.
                        </p>
                        <p>
                            Me esfuerzo constantemente por mejorar mis habilidades y obtener conocimientos en nuevas tecnologías para ofrecer productos de mayor calidad y valor.
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