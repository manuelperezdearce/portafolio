import CardTech from "../components/CardTech"
import ServicesCard from "../components/ServicesCard"
import { MdOutlineNavigateNext } from "react-icons/md"


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
    {
        id: '9',
        url: '/tecnologias/tools/9.png',
    },
    {
        id: '10',
        url: '/tecnologias/tools/10.png',
    },
    {
        id: '11',
        url: '/tecnologias/tools/11.png',
    },
    {
        id: '12',
        url: '/tecnologias/tools/12.png',
    },
]




export default function Tecnologias() {

    return (


        <section className="[&>*]:mb-30 py-10 rounded-xl">

            <h2 className="font-title text-3xl sm:text-4xl text-center uppercase mb-10">Herramientas y Tecnologias</h2>
            <article className="flex flex-col justify-evenly [&>div]:w-full  [&>div]:justify-evenly [&>div]:sm:justify-center">
                <div className="relative">
                    <MdOutlineNavigateNext className="absolute z-10 text-8xl lg:hidden  bottom-[40%] -right-5 sm:right-5" />
                    <MdOutlineNavigateNext className="absolute z-10 text-8xl lg:hidden bottom-[40%] rotate-180 -left-5 sm:left-5" />
                    <div className="relative flex lg:flex-wrap overflow-auto mb-10 py-20 justify-evenly">

                        {
                            TECHS.map(item => {
                                return (
                                    <CardTech key={item.id} url={item.url} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="relative">
                    <MdOutlineNavigateNext className="absolute z-10 text-8xl lg:hidden  bottom-[40%] -right-5 sm:right-5" />
                    <MdOutlineNavigateNext className="absolute z-10 text-8xl lg:hidden bottom-[40%] rotate-180 -left-5 sm:left-5" />
                    <div className="relative flex lg:flex-wrap overflow-auto mb-10 py-20 justify-evenly">

                        {
                            TOOLS.map(item => {
                                return (
                                    <CardTech key={item.id} url={item.url} />
                                )
                            })
                        }
                    </div>
                </div>
            </article>

        </section>

    )
}