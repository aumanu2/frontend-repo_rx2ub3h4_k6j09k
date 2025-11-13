import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(60%_60%_at_20%_80%,rgba(236,72,153,0.15),transparent)]" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Playful, modern UX that makes products feel alive
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg text-slate-700 max-w-xl"
            >
              I craft interactive experiences blending research, motion, and delightful microinteractions. Let’s design something users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#work" className="rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors">See selected work</a>
              <a href="#contact" className="rounded-full bg-white/70 backdrop-blur border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white transition">Get in touch</a>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
