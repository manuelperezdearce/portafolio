import { MdOutlineArrowBackIosNew } from "react-icons/md";


export default function ToogleButton({ toggle, handleToggle }) {

    return (
        <MdOutlineArrowBackIosNew role="button" className={`absolute  hover:bg-customFucsia2
    w-8 h-8 sm:w-14 sm:h-14 p-1 aspect-square bottom-0 right-0 ${!toggle ? "bg-[rgba(0,0,0,0.2)] -rotate-90" : "bg-customFucsia2 rotate-90"} text-white rounded-full duration-200 `} onClick={handleToggle} />
    )
} 