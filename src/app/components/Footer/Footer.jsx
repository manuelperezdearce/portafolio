'use client'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from "react"




export default function Footer() {



    const [open, setOpen] = useState(false)
    const [fixed, setFixed] = useState(true)
    function handleOpenState() {
        fixed && (open ? setOpen(false) : setOpen(true))
    }
    function handleFixedState() {
        fixed ? setFixed(false) : setFixed(true)
        setOpen(true)
    }

    const footerStyle = `font-light text-[1rem] w-[100vw] bg-primary10 backdrop-blur-md text-customWhite ${open ? "h-100 md:h-40 py-4" : "h-5"}  flex flex-col items-center justify-end shadow-[0px_0px_15px_rgba(0,0,0,0.3)] px-8 fixed bottom-0 duration-150 z-50 rounded-t-lg`

    const arrowStyle = ` duration-150 ${open ? "-rotate-90" : "rotate-90"}`
    const sectionStyle = `duration-150 ${open ? "flex" : "hidden"} w-full justify-between [&>*]:w-1/3`
    const articleStyle = `flex flex-col w-1/2 max-w-[300px] text-center`
    const articleCreatedBy = `flex flex-col sm:flex-row sm:gap-2 text-center mt-4 ${open ? "flex" : "hidden"}`
    const MediaDiv = `flex justify-evenly`

    return (
        <footer
            className={footerStyle}
            onMouseEnter={handleOpenState}
            onMouseLeave={handleOpenState}
            onClick={handleFixedState}
        >
            <span className='p-1 bg-secondary rounded-full absolute -top-2 shadow-smgit'>
                <MdOutlineArrowBackIosNew className={arrowStyle} />
            </span>

            <section className={sectionStyle}>

                <article className={articleStyle}>
                    <p>Contáctanos</p>
                    <div className={MediaDiv}>
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                    </div>

                </article>
                <article className={articleStyle}>
                    <p>FAQ</p>
                    <p>Reportar un bug</p>
                </article>
            </section>
            <article className={articleCreatedBy}>
                <p>
                    Sitio web  diseñado y creado por
                </p>
                <img
                    className='m-auto w-[30px]'
                    src="./LOGO-W.png" alt="LOGO" />
                <p>
                    Tecnología y Soluciones digitales
                </p>
            </article>
        </footer >
    )
}