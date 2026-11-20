import { LanguageProvider } from './i18n/LanguageContext'
import DecoIcons from './components/DecoIcons'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Talk from './components/Talk'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <LanguageProvider>
      <DecoIcons />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Skills />
        <Talk />
        <Community />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  )
}
