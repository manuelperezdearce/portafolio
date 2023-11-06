import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFixed, toggleOpen } from '../../features/slices/FooterSlice'

export default function Footer() {
    const { isOpen, isFixed } = useSelector(state => state?.footerSlice)
    const { isATE } = useSelector(state => state?.mainScroll)
    const dispatch = useDispatch()

    function handleOpenState() {
        isFixed && (isOpen ? dispatch(toggleOpen(false)) : dispatch(toggleOpen(true)))
    }
    function handleFixedState() {
        isFixed ? dispatch(toggleFixed(false)) : dispatch(toggleFixed(true))
        dispatch(toggleOpen(true))
    }

    const footerStyle = `font-light text-[1rem] w-[100vw] bg-primary10 backdrop-blur-md text-customWhite py-4 bottom-0  ${!(isOpen || isATE) && "translate-y-[calc(100%-17px)]"}  flex flex-col items-center justify-end shadow-[0px_0px_15px_rgba(0,0,0,1)] px-8 fixed duration-300 z-50 rounded-t-lg
    `

    const arrowStyle = `duration-150 ease-linear ${isOpen || isATE ? "-rotate-90" : "rotate-90"} `
    const sectionStyle = "flex w-full max-w-[1600px] justify-between [&>*]:w-1/3 mt-10"
    const articleStyle = "flex flex-col w-1/2 max-w-[300px] text-center"
    const articleCreatedBy = "flex flex-col sm:flex-row sm:gap-2 text-center mt-4 flex"
    const MediaDiv = "flex justify-evenly"

    return (
        <footer
            className={footerStyle}
            onMouseEnter={handleOpenState}
            onMouseLeave={handleOpenState}
            onClick={handleFixedState}
        >

            <img className="hidden md:block absolute top-0 left-0" src="/frame-footer/footerframeleft.png" alt="" />
            <img className="hidden md:block absolute top-0 right-0" src="/frame-footer/footerframeright.png" alt="" />

            <span className='p-1 z-40 bg-secondary rounded-full absolute -top-2 shadow-sm'>
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
                    SiriFazendoBarra /
                    versión 1.0
                </p>
            </article>
        </footer >
    )
}