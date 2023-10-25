import ServicesCard from "../components/ServicesCard"


export default function Contacto() {

    return (
        <div className="[&>p]:mb-2">

            <div className="[&>*]:mb-10">
                <h2 className="font-title text-3xl sm:text-4xl text-center uppercase">Contacto</h2>
                <div className="flex justify-evenly flex-wrap">
                    {
                        Array(3).fill(0).map(item => {
                            return (
                                <ServicesCard key={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}