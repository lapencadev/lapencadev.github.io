import { useEffect, useState } from 'react'
import { useT } from '../i18n/LanguageContext'
import { useTheme } from './useTheme'

const NAV_KEYS = ['experience', 'about', 'projects', 'skills', 'talk', 'community', 'contact']

function LangToggle() {
  const { lang, setLang, t } = useT()
  return (
    <button className="nav-pill" onClick={() => setLang(l => (l === 'es' ? 'en' : 'es'))}
      aria-label={t('nav.langLabel')} title={t('nav.langLabel')}>
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useT()
  const label = theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')
  return (
    <button className="nav-pill nav-pill-round" onClick={toggle} aria-label={label} title={label}>
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
        </svg>
      )}
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useT()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <nav className={`site-nav ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="container-page site-nav-inner">
          <a href="#hero" className="logo" onClick={() => setOpen(false)}>la<span>penca</span>dev</a>

          <ul className="nav-links">
            {NAV_KEYS.map(k => (
              <li key={k}><a href={`#${k}`}>{t(`nav.links.${k}`)}</a></li>
            ))}
          </ul>

          <div className="nav-actions">
            <LangToggle />
            <ThemeToggle />
            <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label={t('nav.menuLabel')} aria-expanded={open}>
              <span style={{ transform: open ? 'translateY(4px) rotate(45deg)' : 'none' }} />
              <span style={{ transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        {NAV_KEYS.map((k, i) => (
          <a key={k} href={`#${k}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <span className="mono-meta">{String(i + 1).padStart(2, '0')}</span>
            {t(`nav.links.${k}`)}
          </a>
        ))}
      </div>
    </>
  )
}
