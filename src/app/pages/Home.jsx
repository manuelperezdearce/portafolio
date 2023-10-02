import ServicesCard from "../components/ServicesCard"


export default function Home() {

    return (
        <div className="[&>p]:mb-2 ">

            <div>
                <h2>Soluciones y servicios</h2>
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