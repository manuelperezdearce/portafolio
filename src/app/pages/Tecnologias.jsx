import CardTech from "../components/CardTech"
import ServicesCard from "../components/ServicesCard"


const TECHS = [
    {
        id: '1',
        url: '/tecnologias/techs/1.png',
    },
    {
        id: '2',
        url: '/tecnologias/techs/2.png',
    },
    {
        id: '3',
        url: '/tecnologias/techs/3.png',
    },
    {
        id: '4',
        url: '/tecnologias/techs/4.png',
    },
    {
        id: '5',
        url: '/tecnologias/techs/5.png',
    },
    {
        id: '6',
        url: '/tecnologias/techs/6.png',
    },
    {
        id: '7',
        url: '/tecnologias/techs/7.png',
    },
    {
        id: '8',
        url: '/tecnologias/techs/8.png',
    },
    {
        id: '9',
        url: '/tecnologias/techs/9.png',
    },
    {
        id: '10',
        url: '/tecnologias/techs/10.png',
    },
    {
        id: '11',
        url: '/tecnologias/techs/11.png',
    },
    {
        id: '12',
        url: '/tecnologias/techs/12.png',
    },
    {
        id: '13',
        url: '/tecnologias/techs/13.png',
    },
    {
        id: '14',
        url: '/tecnologias/techs/14.png',
    },

]

const TOOLS = [
    {
        id: '1',
        url: '/tecnologias/tools/1.png',
    },
    {
        id: '2',
        url: '/tecnologias/tools/2.png',
    },
    {
        id: '3',
        url: '/tecnologias/tools/3.png',
    },
    {
        id: '4',
        url: '/tecnologias/tools/4.png',
    },
    {
        id: '5',
        url: '/tecnologias/tools/5.png',
    },
    {
        id: '6',
        url: '/tecnologias/tools/6.png',
    },
    {
        id: '7',
        url: '/tecnologias/tools/7.png',
    },
    {
        id: '8',
        url: '/tecnologias/tools/8.png',
    },
]




export default function Tecnologias() {

    return (


        <section className="[&>*]:mb-30 py-10 backdrop-blur-md rounded-xl  ">
            <h2 className="font-title text-3xl sm:text-4xl text-center uppercase mb-10">Herramientas y Tecnologias</h2>
            <article className="flex flex-wrap justify-evenly [&>div]:w-full [&>div]:lg:w-1/3 [&>div]:justify-evenly [&>div]:sm:justify-center ">
                <div className="flex flex-wrap">
                    {
                        TECHS.map(item => {
                            return (
                                <CardTech key={item.id} url={item.url} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-wrap ">
                    {
                        TOOLS.map(item => {
                            return (
                                <CardTech key={item.id} url={item.url} />
                            )
                        })
                    }
                </div>
            </article>

        </section>

    )
}