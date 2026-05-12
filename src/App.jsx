import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Plans from './components/Plans'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  // Configurando o Intersection Observer para as animações de scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // Optional: stop observing once it's visible if you only want the animation to happen once
          // observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealElements.forEach(el => observer.observe(el))

    return () => {
      revealElements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <Plans />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
