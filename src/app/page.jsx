'use client'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import About from "./pages/About";
import Tecnologias from "./pages/Tecnologias";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import { useDispatch } from 'react-redux'
import { toggleATE } from "./features/slices/MainScrollSlice";

import Experiencia from "./pages/Experiencia";
import Test from "./pages/Test";


const sectionParCSS = "bg-transparent"
const sectionImparCSS = "bg-transparent"

export default function App() {



  const dispatch = useDispatch()

  const handleScroll = (e) => {
    // console.log(scrollTop, e.target.scrollHeight)
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

    <div name='CONTAINER' className="h-screen flex flex-col justify-top bg-customBlack10 relative">
      <Navbar />
      <main id="main" name="" className="w-screen overflow-x-hidden relative"
      >
        <SectionFull name="Sobre mí" styles={sectionParCSS}>
          <About />
        </SectionFull>
        <Section name="Experiencia" styles={sectionImparCSS}>
          <Experiencia />
        </Section>
        <Section name="Portafolio" styles={sectionImparCSS}>
          <Portafolio />
        </Section>
        <Section name="Tecnologías" styles={sectionParCSS}>
          <Tecnologias />
        </Section>
        {/* <SectionFull name="Contacto" styles={sectionParCSS} >
          <Contacto />
        </SectionFull> */}
        {/* <Section name="Test" styles={sectionParCSS} >
          <Test />
        </Section> */}
      </main>
      <Footer />


    </div >
  )
}