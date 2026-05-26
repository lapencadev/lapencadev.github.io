import { useState } from 'react'

const NAV_LINKS = ['about','skills','projects','talk','community','contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5"
        style={{ backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(10,10,15,0.7)' }}>
        <a href="#hero" className="font-display font-black text-sm tracking-wide"
          style={{ color: 'var(--neon-pink)', textShadow: '0 0 20px rgba(255,45,120,0.5)' }}>
          lapencadev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {NAV_LINKS.map(s => (
            <li key={s}>
              <a href={`#${s}`} className="font-mono text-xs uppercase tracking-widest transition-colors"
                style={{ color: '#6b6b8a' }}
                onMouseEnter={e => e.target.style.color = 'var(--neon-cyan)'}
                onMouseLeave={e => e.target.style.color = '#6b6b8a'}>
                {s}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)} aria-label="Abrir menú">
          <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
            style={{ background: 'var(--neon-pink)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block w-5 h-0.5 transition-all duration-300"
            style={{ background: 'var(--neon-pink)', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
            style={{ background: 'var(--neon-pink)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)', top: 69 }}>
        {NAV_LINKS.map(s => (
          <a key={s} href={`#${s}`} onClick={() => setOpen(false)}
            className="font-mono text-xl uppercase tracking-widest"
            style={{ color: '#6b6b8a' }}
            onMouseEnter={e => e.target.style.color = 'var(--neon-cyan)'}
            onMouseLeave={e => e.target.style.color = '#6b6b8a'}>
            {s}
          </a>
        ))}
      </div>
    </>
  )
}
