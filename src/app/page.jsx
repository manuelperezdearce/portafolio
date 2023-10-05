import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

const sectionParCSS = "bg-transparent"
const sectionImparCSS = "bg-transparent"

export default function App() {
  return (

    <div className="h-[100vh] flex flex-col justify-top ">
      <Navbar />
      <main id="main" className="overflow-hidden overflow-y-auto ">
        <section className="relative" name="Home">
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
      </main>
      <Footer />
    </div>


  )
}