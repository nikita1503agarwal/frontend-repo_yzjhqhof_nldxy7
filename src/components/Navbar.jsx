import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'safaris', label: 'Safaris' },
  { id: 'kilimanjaro', label: 'Kilimanjaro' },
  { id: 'zanzibar', label: 'Zanzibar' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[rgba(0,0,0,0.35)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(198,170,107,0.25)] border border-[#c6aa6b]/40 flex items-center justify-center text-[#c6aa6b] font-serif text-xl">VA</div>
          <div className="leading-tight">
            <p className="text-[13px] uppercase tracking-[0.25em] text-[#c6aa6b]">Via Africa</p>
            <p className="text-white/90 font-serif text-lg">Expeditions</p>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => handleNav(s.id)}
                className="px-3 py-2 rounded-full text-white/90 hover:text-white transition-colors bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.45)] border border-white/10"
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-[rgba(0,0,0,0.4)] backdrop-blur-md p-3 mx-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className="w-full text-left px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/5"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
