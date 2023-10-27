'use client'
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import SideMenu from "./components/SideMenu/SideMenu";
import About from "./pages/About";
import Tecnologias from "./pages/Tecnologias";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import { useDispatch } from 'react-redux'
import { toggleATE } from "./features/slices/MainScrollSlice";


const sectionParCSS = "bg-transparent"
const sectionImparCSS = "bg-transparent"

export default function App() {

  const dispatch = useDispatch()

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop
    const scrollHeight = e.target.scrollHeight
    const offsetHeight = e.target.offsetHeight
    if ((offsetHeight + scrollTop) >= scrollHeight) {
      dispatch(toggleATE(true))
    }
    else
      dispatch(toggleATE(false))
  }

  return (

    <div name='CONTAINER' className="h-[100vh] flex flex-col justify-top bg-customBlack10">

      <Navbar />
      <main id="main" className="w-screen overflow-hidden overflow-y-auto relative"
        onScroll={(e) => handleScroll(e)}>
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