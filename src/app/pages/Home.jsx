import { FaLinkedin, FaGoogleDrive } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";


const icoStyle = "relative p-3 text-3xl sm:text-5xl text-customCalipso bg-opacity-50 bg-customFucsia50 rounded-full hover:scale-110 hover:brightness-110 hover:duration-200 group"

export default function Home() {

    return (
        <div className="mx-auto px-4 py-10  min-h-screen w-full max-w-[950px] flex items-center relative justify-center">
            <div className="z-20 w-full animate-fade-right animate-once animate-duration-1000">
                <h2 className="font-title font-black text-left        bg-gradient-to-l from-customCalipso via-customCalips to-customFucsia drop-shadow-md
                    text-[11vw] sm:text-7xl  z-30 uppercase  leading-tight sm:text-left whitespace-nowrap break-al  ">
                    Manuel <br /> Pérez de Arce
                </h2>
                <h1 className="relative drop-shadow-md text-[rgba(23,45,66,1)] 
                    bg-gradient-to-r from-customCalipso via-customCalips to-customFucsia font-black sm:text-left text-[7.5vw] sm:text-5xl  z-30 uppercase sm:whitespace-nowrap">
                    Desarrollador Web
                </h1>
                <div className="mx-auto mt-8 flex justify-start items-center flex-wrap gap-6">

                    <a className={icoStyle} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/manuelperezdearce/">
                        <FaLinkedin />
                    </a>
                    <a className={icoStyle} target="_blank" rel="noopener noreferrer" href="https://www.github.com/manuelperezdearce/">
                        <FaGithub />
                    </a>
                    <a className={icoStyle} target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1cVvdw1UodzOAC8Eaxvpl2YrSHMBS3sHu/view?usp=drive_link">
                        <GrDocumentText className="[&>*]:stroke-customCalipso" />
                    </a>

                </div>
            </div>
            <p className="opacity-20 lg:opacity-80 duration-200 z-0 absolute -right-20 sm:right-0  text-customFucsia30 lg:text-customCalipso90 text-[350px] animate-fade-left animate-once animate-duration-1000">{`/>`}</p>
        </div >
    )
}