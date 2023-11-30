import Image from "next/image";

export default function CardTech({ url, name }) {
    return (
        <div className="flex flex-col items-center w-[70px]  md:h-[70px] aspect-square m-2 sm:m-4 " >
            <Image height={50} width={50} src={url} alt={`${name} icon`}
            />
            <h5 className="mt-1 md:whitespace-nowrap text-center text-sm">{name}</h5>
        </div>
    )
}