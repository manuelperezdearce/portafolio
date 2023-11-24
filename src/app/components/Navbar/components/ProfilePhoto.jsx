export default function ProfilePhoto() {
    const imgAnimation = "animate-fade animate-once animate-duration-250 animate-delay-250 "
    return (
        <div className="relative w-[200px] sm:w-[300px] xl:w-[500px] aspect-square rounded-full overflow-hidde">
            <img className=" origin-bottom animate-twice animate-spin animate-duration-500 absolute top-0 z-" src="/frame-profile/circle1T.png" alt="" />

            <img className=" origin-top animate-twice animate-spin animate-duration-500  absolute bottom-0 z-10" src="/frame-profile/circle1B.png" alt="" />

            <img className="opacity-50 absolute bottom-0 
            animate-spin animate-once scale-110 animate-duration-[1000ms] " src="/frame-profile/circle2.png" alt="" />



            <img className={`${imgAnimation} absolute z-10 object-contain right-[2%] bottom-[10%] aspect-square rounded-full mx-auto`} src="/profile2.png" alt="" />

            <img className="z-20 w-[52%] left-[30%] rotate-[-6deg] absolute bottom-0 " src="/frame-profile/circlePatch.png" alt="" />
        </div>
    )
} 