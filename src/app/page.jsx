import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

const sectionParCSS = 'bg-customGrey '
const sectionImparCSS = 'bg-primary text-customWhite'

export default function App() {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="">
        <section className="" name="Home">
          <Hero />
          <Section name="Inicio" styles={sectionParCSS}>
            <Home />
          </Section>
        </section>
        <Section name="Servicios" styles={sectionImparCSS}>
          <Services />
        </Section>
        <SectionFull name="Nosotros" styles={sectionParCSS}>
          <About />
        </SectionFull>
      </div>
    </div>
  )
}