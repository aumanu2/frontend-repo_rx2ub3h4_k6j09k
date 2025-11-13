import Navbar from './Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-fuchsia-300 blur-3xl mix-blend-multiply" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-indigo-300 blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-0 right-40 h-72 w-72 rounded-full bg-amber-200 blur-3xl mix-blend-multiply" />
      </div>

      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />

        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Your Name — Portfolio
        </footer>
      </main>
    </div>
  )
}

export default App
