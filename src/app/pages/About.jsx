import { Link } from "react-scroll"
import ProfilePhoto from "../components/ProfilePhoto"
import Button from "../components/Button"




export default function About({ styles }) {
    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "

    return (
        <div
            className={`${styles} min-h-screen flex flex-col md:flex-row   justify-center items-center [&>div]:flex text-customWhite relative  sm:pt-0 sm:pb-0 px-5 sm:px-10`}
        >
            <div className="w-full min-h-[658px] md:min-h-[950px] md:max-w-[680px] translate-y-[10%]   text-center z-40 flex flex-col items-center justify-center relative  md:px-0">
                <div className="absolute top-0">
                    <ProfilePhoto />
                </div>
                <div className="w-full h-full z-40 flex flex-col items-center justify-center relative" >
                    <h2 className="font-title font-black text-left        bg-gradient-to-l from-customCalipso via-customCalips to-customFucsia drop-shadow-md
                    text-5xl sm:text-8xl lg:text-8xl z-30 uppercase animate-fade-left animate-once animate-duration-1000 leading-tight sm:text-left whitespace-nowrap break-al  ">
                        MANU.dev
                    </h2>
                    <div className="flex">
                        <h1 className="relative drop-shadow-md text-[rgba(23,45,66,1)] 
                    bg-gradient-to-r from-customCalipso via-customCalips to-customFucsia font-black sm:text-left text-[22px] sm:text-5xl md:text-5xl z-30 animate-fade-left animate-once animate-duration-1000 uppercase sm:whitespace-nowrap">
                            Desarrollador Web

                        </h1>
                        <div className=" z-40 w-3 bg-customCalipso animate-pulseText" />
                    </div>
                </div>
                <p className="sm:w-[560px] md:w-[680px] text-lg  font-medium sm:text-3xl animate-fade-left animate-once animate-duration-250 animate-delay-500 mt-5 sm:mt-6">
                    ¡Bienvenido a mi sitio web! Aquí podrás conocer algunos de los proyectos en los que he trabajado, así como las tecnologías que utilizo para crear sitios web sorprendentes.
                </p>
                <div className="mx-auto mt-8  bg-secondary rounded-full px-4 py-2 flex justify-center items-center flex-wrap [&>a]:w-[40px] md:[&>a]:w-[70px] gap-2 [&>a]:hover:duration-200">
                    <h3 className="md:text-3xl">Contáctame</h3>
                    <a className="hover:scale-105 hover:shadow-lg rounded-full " target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/manuelperezdearce/"><img src="/redes/2.png" alt="" /></a>
                    <a className="hover:scale-105" target="_blank" rel="noopener noreferrer" href="https://www.github.com/manuelperezdearce/"><img src="/redes/3.png" alt="" /></a>
                </div>
            </div>
        </div >
    )
}