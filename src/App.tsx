import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Staffing } from './components/Staffing'
import { Engagements } from './components/Engagements'
import { WhyAvea } from './components/WhyAvea'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Marquee } from './components/Marquee'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Staffing />
        <Engagements />
        <WhyAvea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
