

export default function About({ styles }) {

    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "


    return (
        <div
            className={`${styles} min-h-[80vh] flex flex-col justify-center my-10 sm:my-20 [&>div]:flex text-customWhite relative `}
        >
            <div className="p-3 mx-auto sm:mx-0 mb-5 sm:mb-0 sm:me-auto aspect-square rounded-full sm:rounded-none w-1/2 sm:w-1/2 overflow-hidden">
                <img className={`${imgAnimation} rounded-full sm:rounded-none aspect-square object-cover object-top z-20`} src="/profile2.png" alt="" />
            </div>
            <div className="w-full md:[&>*]:w-[70%] lg:[&>*]:w-[70%] xl:[&>*]:w-[60%] text-center sm:[&>*]:ms-auto  sm:absolute h-full  z-20 flex flex-col justify-end sm:justify-center px-5">

                <h1 className="font-title text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 uppercase z-20  animate-fade-left animate-once animate-duration-1000 leading-tight sm:text-left whitespace-nowrap break-al  ">
                    MANUEL <br /> PÉREZ DE ARCE
                </h1>
                <h2 className="text-customRed font-bold text-xl sm:text-2xl lg:text-4xl 2xl:text-6xl mb-4 z-10 animate-fade-left animate-once animate-duration-1000  sm:whitespace-nowrap">Desarrollador front end
                </h2>
                <p className="sm:w-1/2 text-xl sm-text-2xl lg:text-4xl text-center animate-fade-left animate-once animate-duration-250 animate-delay-500  mt- lg:mt-20">
                    Hola, bienvenido a mi website!<br />
                    Aquí podrás conocer un poco más de los trabajos que he realizado, además de las tecnologías que utilizo para crear sitios web asombrosos!
                </p>


            </div>

        </div >
    )
}