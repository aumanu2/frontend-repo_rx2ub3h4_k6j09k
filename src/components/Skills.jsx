import { motion } from 'framer-motion'
import { Sparkles, Figma, Code2, Accessibility, Rocket } from 'lucide-react'

const skills = [
  { icon: <Sparkles size={18} />, label: 'Microinteractions' },
  { icon: <Figma size={18} />, label: 'Figma & Prototyping' },
  { icon: <Accessibility size={18} />, label: 'Accessibility (WCAG 2.2)' },
  { icon: <Code2 size={18} />, label: 'Design Systems' },
  { icon: <Rocket size={18} />, label: 'Motion & Transitions' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Core Skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/20 bg-white/70 backdrop-blur px-4 py-6 text-center"
            >
              <div className="mx-auto mb-2 h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                {s.icon}
              </div>
              <p className="text-sm font-medium text-slate-700">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
