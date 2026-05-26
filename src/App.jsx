import Cursor from './components/Cursor'
import DecoIcons from './components/DecoIcons'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Talk from './components/Talk'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <DecoIcons />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Talk />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
