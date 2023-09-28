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
        <Section name="Home" styles={sectionImparCSS}>
          <Home />
        </Section>
        <Section name="Services" styles={sectionParCSS}>
          <Services />
        </Section>
        <Section name="About" styles={sectionImparCSS}>
          <About />
        </Section>
      </div>
    </div>
  )
}