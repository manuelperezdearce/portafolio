export default function Button({ text, link }) {

    return (
        <button className={`bg-secondary duration-100 hover:bg-customFucsia2 rounded-full py-2 px-4 w-auto`} >{text}</button>
    )
}