"use client"


import { useState } from "react"
import WorkExperienceCard from "../components/WorkExperienceCard"

const EXPERIENCIA_DATA = [

    {
        cargo: "Desarrollador Web Freelance",
        empresa: "Profesional independiente",
        fecha: "Mar 2023 - Actualmente",
        tipo: "ti",
        descripcion: "",
        logros: [
            " Utilizo mi stack tecnológico y experiencia para diseñar y desarrollar sitios web personalizados para personas y negocios",
            "Landing pages, E-commerce, Invitaciones de bodas, Blog, etc.",
            "Realizo propuestas de valor que potencian la marca de los clientes y les permiten mejorar sus ventas.",
            "Me asesoro con otros profesionales para crear un producto de calidad y a la medida."
        ]
    },
    {
        cargo: "Desarrollador de front-end",
        empresa: "No Country",
        fecha: "Abr 2023 - Nov 2023",
        tipo: "ti",
        descripcion: "Soy parte de equipos ágile y de forma autónoma creamos aplicaciones web para generar experiencia desarrollando",
        logros: [
            " Construcción de sitios y aplicaciones web responsivos mediante lenguaje HTML, CSS y JavaScript.",
            "Uso de librerías, frameworks, compiladores y dependencias.",
            "Consumo de API mediante Fetch, Axios y Redux.",
            "Manejo de estados globales, React hooks, Router, Context API, etc.",
            "Diseño de frames con Figma y creación de elementos gráficos con herramientas digitales como Canva, Adobe Suit, etc.",
            "Administrador de deploy lado usuario con Netlify, Vercel, etc.",
            "Manejo de cambios y control de versiones mediante Git, además de almacenamiento de código y trabajo colaborativo en GitHub.",
            "Desarrollo colaborativo de proyectos mediante metodologías ágiles y SCRUM, además de gestión de tareas por Trello, Jira y GitHub Dashboard."
        ]
    },
    {
        cargo: "Key Account Manager B2B",
        empresa: "Haken Chile Informática Limitada",
        fecha: "Ago 2020 - Jun 2022",
        tipo: "ti",
        descripcion: "",
        logros: [
            " Responsable de la atención comercial de la cartera asignada, logré construir relaciones sólidas con los clientes, comprendiendo sus necesidades y ofreciendo soluciones flexibles de acuerdo con cada industria",
            "Gestioné y lideré todos los servicios vendidos con tasa de aceptación del 100% y revisión por garantías inferior al 3%.",
            "Impulsé la marca de la compañía con nuestros clientes y proveedores promoviendo los valores que definen a la empresa.",
            "Diseñé y redacté los documentos de ventas, propuestas comerciales y contratos asociados a los diversos servicios ofrecidos por la compañía.",
            "Implementé métodos ágiles de trabajo para la oficina, mejoré la comunicación interna y la gestión de tareas mediante Kanban.",
            "Lideré negociaciones con clientes y proveedores, abrí nuevos canales de compra y venta los que permitieron aumentar el abanico de soluciones y tecnologías.",
            "Estuve cargo de la administración de Mercado Público y otras plataformas de licitaciones y ventas."
        ]
    },
    {
        cargo: "Ingeniero de Proyectos",
        empresa: "Tecnología Denoxx Limitada",
        fecha: "Abr 2015 - Abr 2020",
        tipo: "ti",
        descripcion: "",
        logros: [
            "Estuve a cargo de la ejecución e implementación en más de 50 proyectos de telecomunicaciones de distinta complejidad en ambientes industriales, instituciones públicas y educacionales, laboratorios, etc.",
            "Mejoré los tiempos de respuesta ante eventos de acuerdo con los SLA convenidos con los clientes, estudiando los contratos, generando reuniones preventivas y manteniendo comunicación efectiva con clientes.",
            "Estuve a cargo de la negociación con contratistas de diversas áreas de la industria, además de la estimación de costos y elaboración de presupuestos para cada proyecto.",
            "Impulsé el trabajo colaborativo, mejoré la comunicación interna entre los equipos de trabajo, proponiendo permeabilidad y adaptabilidad al cambio.",
            "Mantuve registro detallado de las actividades de cada proyecto, preparando informes y estado de avance para los distintos stakeholders.",
            "Junto a mi equipo de trabajo logramos cerrar la totalidad de los proyectos abordados, garantizando el cumplimiento de los estándares de calidad de la compañía y los requisitos del cliente.",
            "Impulsé la retroalimentación positiva de cada servicio o proyecto, permitiéndonos como equipo tener una retrospectiva del trabajo realizado."
        ]
    },
    {
        cargo: "Backoffice",
        empresa: "Haken Chile Informática Limitada",
        fecha: "Ene 2013 - Mar 2015",
        tipo: "ti",
        descripcion: "",
        logros: [
            "Gestioné los datos relevantes para la toma de decisiones operacionales y financieras de la empresa.",
            "Desarrollé aplicaciones para organizar y gestionar documentación interna de la compañía, además de ventas, comisiones, entre otros.",
            "Implementé reportes, informes y análisis para clientes internos y externos.",
            "Estuve a cargo de las transacciones relacionadas con contabilidad, pago a proveedores, compras, sueldos, etc.",
            "Colaboré con el área contable externa a la compañía para los cierres tributarios anuales y períodos de renta. También realicé las declaraciones de impuestos mensuales IVA F29.",
            "Brindé soporte administrativo a la compañía además de cooperar y agilizar las distintas actividades relacionadas a sus operaciones, tales como; reuniones, coordinación de viajes, correos electrónicos, visitas a clientes, etc."
        ]
    }
]


export default function Experiencia({ styles }) {

    const experiencia = EXPERIENCIA_DATA
    const [more, setMore] = useState(false)

    const handleMore = () => {
        more ? setMore(false) : setMore(true)
    }

    return (
        <div
            className="text-center m:px-10 max-w-[900px] mx-auto relative"
        >
            <h3 className="font-title font-black text-3xl md:text-4xl uppercase mb-10">Experiencia</h3>
            <section className="ms-2 md:ms-4 lg:ms-0 border-s-2 border-secondary flex flex-col gap-5 justify-start">
                {
                    experiencia.length > 0 &&
                    experiencia.map(item => {

                        return (
                            <WorkExperienceCard
                                key={item.cargo}
                                item={item} />
                        )
                    })
                }

            </section>



        </div>
    )
}