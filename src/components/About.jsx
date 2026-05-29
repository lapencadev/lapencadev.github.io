import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

const SIDEBAR_COLORS = [
  'var(--neon-pink)',
  'var(--neon-cyan)',
  'var(--neon-yellow)',
  'var(--neon-purple)',
]

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const { t } = useT()
  const sidebar = t('about.sidebar')

  return (
    <section id="about" className="about-grid section-padded relative py-[52px] px-[48px] md:py-[64px]">
      <div ref={leftRef} className="reveal about-sticky" style={{ position: 'sticky', top: 120 }}>
        <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3"
          style={{ color: 'var(--neon-pink)' }}>
          {t('about.sectionLabel')}
          <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
        </div>
        <h2 className="font-display font-bold leading-tight mb-8" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
          {t('about.title')}<br />
          {t('about.titleAccentPrefix')}<span style={{ color: 'var(--neon-pink)' }}>{t('about.titleAccent')}</span>
        </h2>
        {sidebar.map((text, i) => (
          <div key={text} className="font-mono text-xs px-4 py-2.5 rounded mb-3"
            style={{ borderLeft: `3px solid ${SIDEBAR_COLORS[i]}`, color: SIDEBAR_COLORS[i], background: '#12121a' }}>
            {text}
          </div>
        ))}
      </div>

      <div ref={rightRef} className="reveal">
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9090b0' }}
          dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#b0b0c6' }}
          dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9090b0' }}
          dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#9090b0' }}
          dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
      </div>
    </section>
  )
}
