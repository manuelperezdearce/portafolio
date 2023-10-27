import ServicesCard from "../components/ServicesCard"


export default function Contacto() {

    return (
        <div className="pb-24">

            <div className="[&>*]:mb-10 font-bold text-2xl sm:text-4xl text-center">
                <h2 className="">Si quieres saber más de mi <br /> puedes contactarme a través de mis redes sociales: </h2>
                <div className="flex justify-center flex-wrap [&>*]:w-[80px] md:[&>*]:w-[150px] [&>*]:m-5">

                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/manuelperezdearce/"><img src="/redes/2.png" alt="" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/manuelperezdearce/"><img src="/redes/3.png" alt="" /></a>
                </div>
                <h2 className="">
                    o enviarme un correo a: <br /><a className="text-customRed" href="mailto:manuel.perezdearce@gmail.com" type="mailto" target="_blank" rel="noopener noreferrer">manuel.perezdearce@gmail.com</a>
                </h2>

            </div>
        </div >
    )
}