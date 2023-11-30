import Image from "next/image"

export default function Test() {
    return (
        <div className="[&>*]:mb-10 min-h-screen flex flex-col items-center justify-center font-bold text-2xl sm:text-4xl text-center">

            <div className="relative w-[600px] h-[600px] flex items-center justify-center  group">
                <div className="opacity-0 group-hover:opacity-100 duration-300 absolute z-20 right-0 text-[20px]">
                    <p className="mb-5">
                        choose your color
                    </p>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-white     rounded-full" />
                        <div className="w-8 h-8 bg-red-700   rounded-full" />
                        <div className="w-8 h-8 bg-blue-600  rounded-full" />
                        <div className="w-8 h-8 bg-black     rounded-full" />
                        <div className="w-8 h-8 bg-green-500 rounded-full" />
                    </div>
                </div>
                <div className="w-[300px] scale-75 group-hover:scale-150 group-hover:mx-auto flex justify-center group-hover:rotate-45 duration-700  relative">
                    <Image height={500} width={50} className="w-[50px] absolute duration-300 group-hover:-translate-y-[40%]" src="/vapoprueba/top.png" alt="" />
                    <Image height={500} width={50} className="w-[50px] absolute" src="/vapoprueba/body.png" alt="" />
                    <Image height={500} width={50} className="w-[50px]" src="/vapoprueba/bodyfull.png" alt="" />
                </div>
                <p className="duration-300 opacity-0  group-hover:opacity-80 text-left -right-80 group-hover:-right-16 top-32 absolute w-[100px] text-sm">Lorem ipsum dolor sit amet.
                    <span className="w-[200px] absolute -bottom-5 right-0 ">
                        <img className="w-full scale-[-1]" src="/vapoprueba/frame.svg" alt="" />
                    </span>
                </p>
                <p className="duration-300 opacity-0 -left-80 group-hover:left-32 group-hover:opacity-80 text-left absolute w-[100px] text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <span className="w-[200px] absolute -top-5 left-0 ">
                        <img className="w-full" src="/vapoprueba/frame.svg" alt="" />
                    </span>
                </p>
            </div>


        </div>


    )
}