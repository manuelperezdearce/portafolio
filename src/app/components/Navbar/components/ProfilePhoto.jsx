export default function ProfilePhoto() {
    const imgAnimation = "animate-fade-right animate-once animate-duration-250 animate-delay-250 "
    return (
        <div className="relative w-[200px] sm:w-[300px] xl:w-[500px] aspect-square rounded-full overflow-hidde">
            <img className="origin-bottom animate-twice animate-spin animate-duration-500 absolute top-0 " src="/frame-profile/circle1T.png" alt="" />
            <img className="origin-top animate-twice animate-spin animate-duration-500  absolute bottom-0 z-10" src="/frame-profile/circle1B.png" alt="" />
            <img className="absolute bottom-0 
            animate-spin animate-once scale-110 animate-duration-[1000ms] " src="/frame-profile/circle2.png" alt="" />
            <img className={`${imgAnimation} z-20 object-contain aspect-square rounded-full mx-auto`} src="/profile2.png" alt="" />

        </div>
    )
} 