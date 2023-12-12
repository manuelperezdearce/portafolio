export default function LinkButton({ text, link }) {

    return (
        <a className={`bg-secondary duration-100 hover:bg-customFucsia2 rounded-full py-2 px-4 w-auto`} target="_blank" href={link}>{text}</a>
    )
}