

export default function About({ styles }) {

    const container = "w-full h-full lg:w-1/2 p-5 lg:pe-20 ms-auto flex flex-col justify-center items-center my-auto"
    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "


    return (
        <div
            className={`${styles} flex flex-col [&>div]:flex text-customWhite relative`}
        >

            <div className="flex-wrap [&>*]:w-full [&>*]:lg:w-1/2 " >

                <img className={`${imgAnimation} object-cover z-20`} src="/profile2.png" alt="" />


                <div className={container}>
                    <h1 className="font-title text-8xl mb-4 uppercase z-20  animate-fade-left animate-once animate-duration-1000 leading-tight text-left whitespace-nowrap break-all">MANUEL <br /> PÉREZ DE ARCE </h1>
                    <h2 className="text-customRed font-bold text-6xl lg:text-6xl xl:text-6xl mb-4 uppercase z-10 animate-fade-left animate-once animate-duration-1000 right-0 whitespace-nowrap">desarrollador Front End</h2>
                    <p className="text-4xl text-center animate-fade-left animate-once animate-duration-250 animate-delay-500 mt-20">
                        Hola, bienvenido a mi website!<br />
                        Aquí podrás conocer un poco más de los trabajos que he realizado, además de las tecnologías que utilizo para crear sitios web asombrosos!
                    </p>
                </div >
            </div >
        </div >
    )
}