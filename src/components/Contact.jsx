import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Let’s create something memorable
        </motion.h2>
        <p className="mt-4 text-slate-700">
          I’m open to freelance, full-time roles, and collaboration. Tell me about your project and timeline.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hello@yourname.design"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Email me: hello@yourname.design
          </a>
        </div>
      </div>
    </section>
  )
}
