import { useState } from 'react'
import { useT } from '../i18n/LanguageContext'

const NAV_KEYS = ['experience', 'about', 'projects', 'skills', 'talk', 'community', 'contact']

function LangToggle({ mobile }) {
  const { lang, setLang } = useT()
  const next = lang === 'es' ? 'EN' : 'ES'
  return (
    <button
      onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
      className="font-mono font-bold uppercase tracking-widest transition-colors"
      style={{ fontSize: 11, color: 'var(--neon-yellow)', background: 'none', border: '1px solid rgba(245,255,0,0.3)', borderRadius: 4, padding: mobile ? '6px 14px' : '4px 10px', cursor: 'pointer' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,255,0,0.07)'; e.currentTarget.style.borderColor = 'rgba(245,255,0,0.6)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(245,255,0,0.3)' }}>
      {next}
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { t } = useT()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-5"
        style={{ backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(10,10,15,0.7)' }}>
        <a href="#hero" className="font-display font-black text-sm tracking-wide"
          style={{ color: 'var(--neon-pink)', textShadow: '0 0 20px rgba(255,45,120,0.5)' }}>
          lapencadev
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 list-none items-center">
          {NAV_KEYS.map(s => (
            <li key={s}>
              <a href={`#${s}`} className="font-mono text-xs uppercase tracking-widest transition-colors"
                style={{ color: '#8a8aaa' }}
                onMouseEnter={e => e.target.style.color = 'var(--neon-cyan)'}
                onMouseLeave={e => e.target.style.color = '#8a8aaa'}>
                {t(`nav.links.${s}`)}
              </a>
            </li>
          ))}
          <li><LangToggle /></li>
        </ul>

        {/* Mobile/tablet: toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <LangToggle />
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setOpen(o => !o)} aria-label={t('nav.menuLabel')}>
            <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: 'var(--neon-pink)', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: 'var(--neon-pink)', opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: 'var(--neon-pink)', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`lg:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)', top: 69 }}>
        {NAV_KEYS.map(s => (
          <a key={s} href={`#${s}`} onClick={() => setOpen(false)}
            className="font-mono text-xl uppercase tracking-widest"
            style={{ color: '#8a8aaa' }}
            onMouseEnter={e => e.target.style.color = 'var(--neon-cyan)'}
            onMouseLeave={e => e.target.style.color = '#8a8aaa'}>
            {t(`nav.links.${s}`)}
          </a>
        ))}
      </div>
    </>
  )
}
