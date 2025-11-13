import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                <Sparkles size={18} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-slate-800 group-hover:text-slate-900">UX by You</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-slate-900 transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">Hire me</a>
            </nav>

            <button
              className="md:hidden rounded-xl p-2 bg-white/70 border border-white/20"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/20 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 hover:bg-white/70"
                  >
                    {n.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 bg-slate-900 text-white text-center">Hire me</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
