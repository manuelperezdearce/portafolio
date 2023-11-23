'use client'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import SideMenu from "./components/SideMenu/SideMenu";
import About from "./pages/About";
import Tecnologias from "./pages/Tecnologias";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
const sectionParCSS = "bg-transparent"
const sectionImparCSS = "bg-transparent"

export default function App() {



  return (

    <div name='CONTAINER' className="h-[110vh] flex flex-col justify-top bg-customBlack10 relative">


      <Navbar />
      <main id="main" name="" className="w-screen overflow-x-hidden relative"
      >
        <SectionFull name="Sobre mí" styles={sectionParCSS}>
          <About />
        </SectionFull>

        <Section name="Portafolio" styles={sectionImparCSS}>
          <Portafolio />
        </Section>
        <Section name="Tecnologías" styles={sectionParCSS}>
          <Tecnologias />
        </Section>
        <Section name="Contacto" styles={sectionParCSS} >
          <Contacto />
        </Section>

      </main>
      <SideMenu />
      <Footer />


    </div >
  )
}