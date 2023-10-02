import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
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
          <Section name="Home" styles={sectionParCSS}>
            <Home />
          </Section>
        </section>

        <Section name="Services" styles={sectionImparCSS}>
          <Services />
        </Section>
        <Section name="About" styles={sectionParCSS}>
          <About />
        </Section>
      </div>
    </div>
  )
}