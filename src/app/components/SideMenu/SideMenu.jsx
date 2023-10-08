import { FaWhatsapp } from "react-icons/fa"

export default function SideMenu() {
    return (
        <div className="bg-customGrey rounded-lg p-3 text-4xl text-green-700 z-50 absolute bottom-[20%] left-[95vw]  ">
            <div className="flex justify-center items-center rounded-full box-border bg-green-600 hover:scale-110 hover:shadow-md duration-150 relative">
                <div className="bg-green-600 rounded-full absolute h-[50px] w-[50px]">

                </div>
                <FaWhatsapp className="text-customWhite text-6xl absolute  " />
            </div>

        </div>
    )
}