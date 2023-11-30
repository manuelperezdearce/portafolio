import { toggleOpen } from "@/app/features/slices/FooterSlice"
import { MdOutlineArrowBackIosNew } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"


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

    const footerStyle = `group font-light text-[1rem] w-[100vw] bg-primary10 backdrop-blur-md text-customWhite py-4 bottom-0  ${!(isOpen || isATE) && "translate-y-[100%]"}  flex flex-col items-center justify-end shadow-[0px_0px_15px_rgba(0,0,0,1)] px-8 fixed duration-300 z-50 rounded-t-lg
    `

    const arrowStyle = `delay-300 duration-150 ease-linear ${isOpen || isATE ? "-rotate-90" : "rotate-90 w-10 h-10  "} `
    const articleCreatedBy = "flex flex-col sm:flex-row sm:gap-2 text-center mt-4 flex"


    return (
        <footer
            className={footerStyle}
            onMouseEnter={handleOpenState}
            onMouseLeave={handleOpenState}

        >


            <span className={`delay-300 duration-150 p-1 z-40 bg-secondary rounded-full absolute ${!(isOpen || isATE) ? "-top-[28px]" : "-top-[12px]"} shadow-sm`}>
                <MdOutlineArrowBackIosNew className={arrowStyle} />
            </span>

            <article className={articleCreatedBy}>
                <p className='w-[250px] text-end'>
                    Sitio web  diseñado y creado por
                </p>
                <img
                    className='m-auto w-[30px]'
                    src="./LOGO-W.png" alt="LOGO" />
                <p className='w-[250px] text-start'>
                    SiriFazendoBarra /
                    versión 1.0
                </p>
            </article>
        </footer >
    )
}