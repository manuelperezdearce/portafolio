
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

                        <div className="flex flex-wrap gap-4">
                            <IconTextContainer  >
                                <FaLocationDot className="ico" />
                                <p>Chile</p>
                            </IconTextContainer>
                            <IconTextContainer>
                                <MdEmail className="ico" />
                                <p>manuel.perezdearce@gmail.com</p>
                            </IconTextContainer>
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
                            Como <b className="text-customFucsia font-black">Frontend Developer</b>,
                            encuentro motivación en superar los desafíos que la programación presenta. Mi enfoque autodidacta me impulsa a aprender continuamente y a colaborar de manera efectiva
                        </p>

                        <p>
                            Cuento con experiencia en el desarrollo de aplicaciones web, tanto de forma independiente como en equipos ágiles. Mi atención se centra en resultados satisfactorios para el cliente, accesibilidad, así como en el mantenimiento y escalabilidad del código.
                        </p>
                        <p>
                            Siempre me esfuerzo por perfeccionar mis habilidades y mantenerme al tanto de las últimas tecnologías, con el objetivo de proporcionar productos de alta calidad y valor.
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