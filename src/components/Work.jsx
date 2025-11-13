import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Fintech Onboarding Flow',
    desc: 'Reduced drop-off by 32% through progressive disclosure and biometric hints.',
    tags: ['UX Research', 'Motion', 'A/B Test'],
    color: 'from-indigo-500/10 to-purple-500/10',
  },
  {
    title: 'Healthcare Portal',
    desc: 'Increased task success from 61% to 89% with IA overhaul and accessibility.',
    tags: ['IA', 'WCAG', 'Prototyping'],
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Added playful microinteractions and realtime feedback that boost retention.',
    tags: ['Design System', 'Microinteractions', 'Handoff'],
    color: 'from-amber-500/10 to-pink-500/10',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Case studies that blend strategy, craft, and measurable impact.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800">
            Request full portfolio <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br ${p.color} p-5 shadow-lg shadow-black/5`}
            >
              <div className="flex min-h-[180px] flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:underline decoration-slate-300">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/70 backdrop-blur border border-white/40 px-2.5 py-1 text-xs text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
