import Nav from './components/Nav'
import Hero from './components/Hero'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Publications />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
