import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import SectionFull from "./components/Section/SectionFull";
import SideMenu from "./components/SideMenu/SideMenu";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Portafolio";

const sectionParCSS = "bg-transparent"
const sectionImparCSS = "bg-transparent"

export default function App() {
  return (

    <div className="h-[100vh] flex flex-col justify-top">
      <div className="h-[100vh] flex flex-col justify-between absolute left-0 ">
        <Navbar />
        <SideMenu />
        <Footer />
      </div>
      <main id="main" className="bg-customBlack10 w-screen overflow-hidden overflow-y-visible ">
        <SectionFull name="Sobre mí" styles={sectionParCSS}>
          <About />
        </SectionFull>
        <Section name="Portafolio" styles={sectionImparCSS}>
          <Services />
        </Section>
        <Section name="Tecnologías" styles={sectionParCSS}>
          <Home />
        </Section>


      </main>

    </div>


  )
}