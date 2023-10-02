

export default function About({ styles }) {

    const container = "w-full lg:w-1/2 p-5 lg:p-20"
    const AboutSection = "h-50px flex flex-wrap"
    return (
        <div
            className={`${styles} flex flex-col [&>div]:flex [&>div]:flex-wrap [&>*]:[&>*]:w-full [&>*]:[&>*]:lg:w-1/2 text-primary `}
        >
            <div >
                <div className={container}>
                    <h3 className="font-bold text-3xl mb-4 uppercase">Nosotros</h3>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit deserunt qui quod tempore quibusdam, velit, rea ducimus ipsum eveniet sapiente maxime! Voluptate doloremque labore  dolorem modi vitae odio error cupiditate similique iure. Corrupti sunt consequuntur consectetur.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam praesentium eveniet architecto, quos cum aspernatur aliquam numquam provident sint?
                    </p>

                </div >
                <img className=" object-cover" src="https://skepp.com/assets/Uploads/Oficina-Plaza-Urquinaona2.jpg" alt="" />
            </div >
            <div>

                <img className=" object-cover" src="https://www.obsbusiness.school/sites/obsbusiness.school/files/images/metodologias-de-desarrollo-de-software.gif" alt="" />
                <div className={`${container} flex flex-col [&>div]:mb-10`}>
                    <div>
                        <h3 className="font-bold text-3xl mb-4 uppercase">Misión</h3>

                        <p>
                            Lorem ipsum Odit deserunt qui quod tempore quibusdam, velit. dolor sit, amet consectetur adipisicing elit. Odit deserunt qui quod tempore quibusdam, velit.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-3xl mb-4 uppercase">Visión</h3>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit deserunt qui quod tempore quibusdam, velit.
                        </p>
                    </div>


                </div>
            </div>
            <div>


                <div className={container}>
                    <h3 className="font-bold text-3xl mb-4 uppercase">Nuestros valores</h3>
                    <ul>
                        <li>
                            <p>
                                Lorem ipsum dolor sit
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit
                            </p>
                        </li>
                        <li>
                            <p>
                                Lorem ipsum dolor sit
                            </p>
                        </li>
                    </ul>
                    <br />

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit deserunt qui quod tempore quibusdam, velit.
                    </p>

                </div>
                <img className=" object-cover" src="https://pymstatic.com/107031/conversions/claves-psicologicas-trabajo-equipo-wide.jpg" alt="" />
            </div>

        </div >
    )
}