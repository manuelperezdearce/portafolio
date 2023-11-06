import { Link } from "react-scroll"
import ProfilePhoto from "../components/Navbar/components/ProfilePhoto"


export default function About({ styles }) {
    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "

    return (
        <div
            className={`${styles} min-h-screen flex flex-col md:flex-row   justify-center items-center [&>div]:flex text-customWhite relative  sm:pt-0 sm:pb-0 px-5 sm:px-10`}
        >
            <span className="hidden xl:block">
                <ProfilePhoto />
            </span>
            <div className="w-full max-w-[400px] sm:max-w-[680px]  py-20 text-center h-full z-40 flex flex-col items-center justify-center  md:px-0">
                <div className="[&>*]:bg-customBlack10 xl:[&>*]:bg-transparent  w-full text-center h-full z-40 flex flex-col items-center justify-center relative" >
                    <h1 className="font-title text-2xl sm:text-5xl md:text-6xl mb-4 uppercase z-30  animate-fade-left animate-once animate-duration-1000 leading-tight sm:text-left whitespace-nowrap break-al  ">
                        <span className="text-4xl sm:text-6xl ">MANUEL</span> <br /> PÉREZ DE ARCE
                    </h1>
                    <h2 className="text-customRed font-bold sm:text-left text-2xl sm:text-4xl md:text-5xl z-30 animate-fade-left animate-once animate-duration-1000 uppercase sm:whitespace-nowrap">
                        Desarrollador front end
                    </h2>
                    <span className=" md:right-0 bottom-10 sm:bottom-0 absolute  block xl:hidden ">
                        <ProfilePhoto />
                    </span>
                </div>
                <p className="md:w-[680px] text-xl sm:text-3xl text-justify sm:text-center animate-fade-left animate-once animate-duration-250 animate-delay-500 mt-5 sm:mt-14">
                    Hola, bienvenido a mi website!
                    <br />
                    Aquí podrás conocer un poco más de los trabajos que he realizado, además de las tecnologías que utilizo para crear sitios web asombrosos!
                    <br />
                    ...o bien, si quieres contactarme <Link
                        role="button"
                        containerId="main"
                        to="Contacto"
                        smooth={true}
                        className="text-customRed whitespace-nowrap"
                    >pincha aquí.</Link>
                </p>


            </div>
        </div >
    )
}