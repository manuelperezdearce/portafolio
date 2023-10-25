export default function CardTech({ url }) {
    return (
        <div className=" p-2 w-[80px] h-[80px] aspect-square sm:w-[100px] sm:h-[100px] m-2 sm:m-4 " >
            <img src={url} alt="Services Photo" />
        </div>
    )
}