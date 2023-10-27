import { Link } from "react-scroll"


export default function About({ styles }) {
    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "

    return (
        <div
            className={`${styles} min-h-screen md:h-screen flex flex-col justify-center md:justify-center [&>div]:flex text-customWhite relative px-4 md:px-10`}
        >
            <div className="mx-auto overflow-hidden translate-y-[50px] md:-translate-y-[100px] md:absolute before:relative w-[150px] sm:w-[300px] md:w-[600px]">
                <img className={`${imgAnimation} z-20`} src="/profile2.png" alt="" />
            </div>
            <div className="w-full md:w-[680px] md:ms-auto text-center h-full  z-20 flex flex-col items-center sm:justify-center ">

                <h1 className="font-title text-2xl sm:text-4xl md:text-6xl mb-4 uppercase z-20  animate-fade-left animate-once animate-duration-1000 leading-tight sm:text-left whitespace-nowrap break-al  ">
                    MANUEL <br /> PÉREZ DE ARCE
                </h1>
                <h2 className="text-customRed font-bold sm:text-left text-2xl md:text-5xl mb-4 z-10 animate-fade-left animate-once animate-duration-1000 uppercase sm:whitespace-nowrap">Desarrollador front end
                </h2>
                <p className="md:w-[680px] text-xl sm:text-4xl text-center animate-fade-left animate-once animate-duration-250 animate-delay-500 md:mt-20">
                    Hola, bienvenido a mi website!<br />
                    Aquí podrás conocer un poco más de los trabajos que he realizado, además de las tecnologías que utilizo para crear sitios web asombrosos!
                    <br />
                    ...o bien, si quieres contactarme <Link
                        role="button"
                        containerId="main"
                        to="Contacto"
                        smooth={true}
                        className="text-customRed"
                    >pincha aquí</Link>
                </p>



            </div>

        </div >
    )
}