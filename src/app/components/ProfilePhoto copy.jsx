export default function ProfilePhoto() {
    const imgAnimation = "animate-fade animate-once animate-duration-250 animate-delay-250 "
    return (
        <div className="w-[200px] sm:w-[300px] xl:w-[500px] aspect-square rounded-full overflow-hidde">
            {/* <img className="opacity-60 origin-bottom animate-twice animate-spin animate-duration-500 absolute top-0 z-" src="/frame-profile/1.png" alt="" />

            <img className="opacity-60 origin-top animate-twice animate-spin animate-duration-500  absolute bottom-0 z-10" src="/frame-profile/2.png" alt="" /> */}

            {/* <img className="opacity-50 absolute bottom-0 
            animate-spin animate-once scale-110 animate-duration-[1000ms] " src="/frame-profile/circle2.png" alt="" />
 */}
            <div className=" w-[400px] h-[400px] relative flex justify-center items-center rounded-full ">

                <div className="z-20 absolute -top-12 w-[400px] h-[400px] overflow-hidden rounded-b-full ">
                    <img className="" src="/profile2.png" alt="" />
                </div>

                <img className=" aspect-square scale-125 z-10 opacity-90 animate-twice animate-spin animate-duration-500 absolute  z-10" src="/frame-profile/1.png" alt="" />

                <img className=" aspect-square z-10 opacity-60  animate-twice animate-spin animate-duration-500  absolute z-10" src="/frame-profile/2.png" alt="" />

                {/* <div className="z-20 absolute left-[-5px] bottom-[30px] w-[400px] h-[50px] overflow-hidden rounded-b-full ">
                    <img className="translate-y-[-450px]" src="/profile2.png" alt="" />
                </div> */}

            </div>
            {/* NO TOCAR */}
            {/* <img className={`${imgAnimation} hidden absolute z-10 object-contain right-[2%] bottom-[10%] aspect-square rounded-full mx-auto`} src="/profile2.png" alt="" /> */}

            {/* <img className="z-20 w-[52%] left-[30%] rotate-[-6deg] absolute bottom-0 " src="/frame-profile/circlePatch.png" alt="" /> */}
        </div >
    )
} 