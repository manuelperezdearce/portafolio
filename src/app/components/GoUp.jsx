import { IoMdArrowRoundUp } from "react-icons/io";

export default function GoUp() {
    return (
        <span className="translate-y-2 relative flex justify-center items-end text-3xl font-bold ico">
            <label className="drop-shadow-[0px_0px_3px_rgba(0,0,0,0.5)] z-10">
                Go up!
            </label>
            <IoMdArrowRoundUp className="drop-shadow-[0px_0px_3px_rgba(0,0,0,0.5)]  text-5xl text-green-700 absolute z-0" />
        </span>
    )
}
