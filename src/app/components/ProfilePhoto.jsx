export default function ProfilePhoto() {
    const imgAnimation = "animate-fade animate-once animate-duration-250 animate-delay-250 "
    return (


        <div className=" w-[200px] h-[200px] md:w-[350px] md:h-[350px] relative flex justify-center items-center rounded-full ">
            <div className="z-30 absolute w-full h-full overflow-hidden rounded-b-full ">
                <img className="h-[50%] w-full object-cover object-top" src="/profile2.png" alt="" />
            </div>

            <img className=" aspect-square z-10 opacity-90 animate-twice animate-spin animate-duration-500 absolute  z-10" src="/frame-profile/1.png" alt="" />

            <img className=" aspect-square scale-110 z-10 opacity-60  animate-twice animate-spin animate-duration-500  absolute z-10" src="/frame-profile/2.png" alt="" />

            <div className="z-0 absolute w-full h-full overflow-hidden rounded-b-full ">
                <img className="h-[72%] absolute translate-y-[30%] bottom-0 w-full object-cover object-bottom" src="/profile2.png" alt="" />
            </div>
        </div>


    )
} 