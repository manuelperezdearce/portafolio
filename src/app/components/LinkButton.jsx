export default function LinkButton({ fz, text, link, py, px }) {

    return (
        <a role="button" className={`mxauto bg-secondary duration-100 hover:bg-customFucsia2 rounded-full text-${fz} text-center px-${px} py-${py} w-auto`} target="_blank" href={link}>{text}</a>
    )
}