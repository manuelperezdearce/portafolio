
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import About from "./pages/About";
import Tecnologias from "./pages/Tecnologias";
import Portafolio from "./pages/Portafolio";
import Experiencia from "./pages/Experiencia";
import Home from "./pages/Home";
import SectionFull from "./components/Section/SectionFull";

export default function App() {
  return (
    <div name='CONTAINER' className="h-screen flex flex-col justify-top bg-customBlack10 relative">
      <Navbar />
      <main id="main" name="" className="w-screen overflow-x-hidden relative"
      >
        <SectionFull name="Home" >
          <Home />
        </SectionFull>
        <Section name="Sobre mí" >
          <About />
        </Section>
        <Section name="Experiencia" >
          <Experiencia />
        </Section>
        <Section name="Portafolio" >
          <Portafolio />
        </Section>
        <Section name="Tecnologías" >
          <Tecnologias />
        </Section>
      </main>
    </div >
  )
}