import EducationItem from "./EducationItem"
import LinkButton from "./LinkButton"

const EducationArray = [
    {
        institution: "Talento Digital",
        imgUrl: "https://images.credly.com/images/41aa15af-3e0d-4c82-a608-9946a9b7629f/blob.png",
        date: "2023 - Actual",
        carreer: "Desarrollador Android Trainee"

    },
    {
        institution: "Platzi",
        imgUrl: "https://yt3.googleusercontent.com/rwU607PYF9jK9QL2I85SdfCLVZJGGsxWukuF_LxD0PepnqEIrFVg3W85FOVPDmWdMN1SxyJ7Xi8=s900-c-k-c0x00ffffff-no-rj",
        date: "2022 - Actual",
        carreer: "Desarrollador Web"

    },
    {
        institution: "Desafío Latam",
        imgUrl: "https://broota.s3.amazonaws.com/solicitudes/590/logo/logo_RzsgV2q7VkgSrN9Kw1b5u538XzUHum_200_200.png",
        date: "2022 - 2023",
        carreer: "Desarrollador Frontend React"

    },
    {
        institution: "Universidad Tecnológica de Chile",
        imgUrl: "https://www.learnchile.cl/wp-content/uploads/2019/05/logo-inacap.jpg",
        date: "2009 - 2015",
        carreer: "Ingeniero Civil es Sonido y Acústica"

    }
]

export default function Educacion() {
    return (
        <div className="flex flex-col justify-between gap-4 w-full md:w-[300px]">
            <p className="text-2xl font-bold">Educación</p>
            <div className="flex flex-col gap-4">
                {
                    EducationArray.length > 0 &&
                    EducationArray.map(({ institution, date, imgUrl, carreer }) => {
                        return (
                            <EducationItem key={institution} institution={institution} date={date} imgUrl={imgUrl} carreer={carreer} />
                        )
                    })
                }

            </div>
            <LinkButton fz={"2xl"} py={3} px={4} link={"https://drive.google.com/drive/folders/1-Dai771YIQ4bmwuzkwnO1ZoJW_1alyk7?usp=drive_link"} text={"Ver certificaciones"} />
        </div>
    )
}