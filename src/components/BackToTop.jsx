import { useEffect, useState } from 'react'
import { useT } from '../i18n/LanguageContext'

export default function BackToTop() {
  const { t } = useT()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('nav.backToTop')}
      className="fixed z-40 flex items-center justify-center rounded-full transition-all"
      style={{
        right: 24, bottom: 24, width: 44, height: 44,
        background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,45,120,0.4)', color: 'var(--neon-pink)',
        boxShadow: '0 0 20px rgba(255,45,120,0.15)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,45,120,0.1)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,45,120,0.35)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,15,0.8)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,45,120,0.15)' }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
