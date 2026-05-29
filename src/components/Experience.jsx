import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

const STATIC = [
  {
    role: 'Custom Software Engineering Analyst',
    company: 'Accenture',
    chips: ['Java Spring Boot', 'Podman', 'SQL', 'OpenAPI', 'GitHub Copilot'],
  },
  {
    role: 'Software Developer',
    company: 'New Work SE | Xing',
    chips: ['Java', 'Kotlin', 'Kubernetes', 'Grafana', 'Datadog'],
  },
  {
    role: 'Fullstack Developer & PPO',
    company: 'Capgemini',
    chips: ['Java 8-17', 'Angular', 'PostgreSQL', 'Oracle', 'Flyway', 'Jenkins'],
  },
]

export default function Experience() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const { t } = useT()
  const jobs = t('experience.jobs')

  const experience = STATIC.map((s, i) => ({ ...s, ...jobs[i] }))

  return (
    <section id="experience" className="about-grid section-padded relative py-[52px] px-[48px] md:py-[64px]">
      <div ref={leftRef} className="reveal about-sticky" style={{ position: 'sticky', top: 120 }}>
        <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3"
          style={{ color: 'var(--neon-pink)' }}>
          {t('experience.sectionLabel')}
          <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
        </div>
        <h2 className="font-display font-bold leading-tight mb-8" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
          {t('experience.title')}<br /><span style={{ color: 'var(--neon-pink)' }}>{t('experience.titleAccent')}</span>
        </h2>
      </div>

      <div ref={rightRef} className="reveal">
        <div className="relative" style={{ paddingLeft: 32 }}>
          <div className="absolute left-0 top-0 bottom-0" style={{ width: 1, background: 'linear-gradient(to bottom, var(--neon-pink), transparent)' }} />
          {experience.map((e, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <div className="absolute rounded-full" style={{ left: -36, top: 6, width: 9, height: 9, background: 'var(--neon-pink)', boxShadow: '0 0 10px rgba(255,45,120,0.6)' }} />
              <div className="font-mono text-xs mb-1" style={{ color: '#8a8aaa', letterSpacing: '0.1em' }}>{e.period}</div>
              <div className="font-display font-bold text-sm text-white mb-0.5">{e.role}</div>
              <div className="font-mono text-xs mb-2.5" style={{ color: 'var(--neon-cyan)' }}>{e.company}</div>
              <div className="text-sm leading-relaxed mb-2.5" style={{ color: '#8a8aaa' }}>{e.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {e.chips.map(c => (
                  <span key={c} className="font-mono text-xs px-2 py-0.5 rounded-sm border"
                    style={{ background: '#1a1a26', color: '#8a8aaa', borderColor: 'rgba(255,255,255,0.07)' }}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
