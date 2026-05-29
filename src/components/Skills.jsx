import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const CARD_STATICS = [
  { color: '--neon-orange', icons: [
    { src: `${DEVICON}/java/java-original.svg`,     label: 'Java' },
    { src: `${DEVICON}/spring/spring-original.svg`, label: 'Spring' },
    { src: `${DEVICON}/kotlin/kotlin-original.svg`, label: 'Kotlin' },
    { src: `${DEVICON}/nodejs/nodejs-original.svg`, label: 'Node' },
    { src: `${DEVICON}/python/python-original.svg`, label: 'Python' },
  ]},
  { color: '--neon-cyan', icons: [
    { src: `${DEVICON}/flutter/flutter-original.svg`,       label: 'Flutter' },
    { src: `${DEVICON}/angularjs/angularjs-original.svg`,   label: 'Angular' },
    { src: `${DEVICON}/vuejs/vuejs-original.svg`,           label: 'Vue' },
    { src: `${DEVICON}/typescript/typescript-original.svg`, label: 'TypeScript' },
    { src: `${DEVICON}/javascript/javascript-original.svg`, label: 'JS' },
  ]},
  { color: '--neon-pink', icons: [
    { src: `${DEVICON}/postgresql/postgresql-original.svg`, label: 'PostgreSQL' },
    { src: `${DEVICON}/mysql/mysql-original.svg`,           label: 'MySQL' },
    { src: `${DEVICON}/oracle/oracle-original.svg`,         label: 'Oracle' },
    { src: `${DEVICON}/mongodb/mongodb-original.svg`,       label: 'MongoDB' },
    { src: `${DEVICON}/sqlite/sqlite-original.svg`,         label: 'SQLite' },
  ]},
  { color: '--neon-purple', icons: [
    { src: `${DEVICON}/docker/docker-original.svg`,         label: 'Docker' },
    { src: `${DEVICON}/kubernetes/kubernetes-plain.svg`,    label: 'K8s' },
    { src: `${DEVICON}/git/git-original.svg`,               label: 'Git' },
    { src: `${DEVICON}/grafana/grafana-original.svg`,       label: 'Grafana' },
    { src: `${DEVICON}/jenkins/jenkins-original.svg`,       label: 'Jenkins' },
  ]},
  { color: '--neon-yellow', icons: [
    { src: `${DEVICON}/github/github-original.svg`, label: 'Copilot' },
    { src: `${DEVICON}/google/google-original.svg`, label: 'Gemini' },
  ]},
  { color: '--neon-pink', icons: [], emoji: '🌍' },
]

function SkillCard({ card, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-lg p-7 relative overflow-hidden transition-all duration-300 group"
      style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
        style={{ background: `var(${card.color})` }} />

      {card.icons.length > 0 ? (
        <div className="skill-icon-set">
          {card.icons.map(ic => (
            <img key={ic.label} src={ic.src} alt={ic.label} title={ic.label}
              style={ic.src.includes('/github/') ? { filter: 'invert(1)' } : undefined} />
          ))}
        </div>
      ) : (
        <div className="text-3xl mb-4">{card.emoji}</div>
      )}

      <div className="font-display font-bold text-xs text-white tracking-wider mb-4">{card.title}</div>
      <ul className="space-y-1.5">
        {card.skills.map(s => (
          <li key={s} className="font-mono text-xs flex items-center gap-2" style={{ color: '#8a8aaa' }}>
            <span style={{ color: `var(${card.color})` }}>▹</span>{s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const titleRef = useReveal()
  const { t } = useT()
  const cardTranslations = t('skills.cards')
  const cards = CARD_STATICS.map((s, i) => ({ ...s, ...cardTranslations[i] }))

  return (
    <section id="skills" className="section-padded relative overflow-hidden" style={{ padding: '64px 48px', background: '#12121a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--neon-pink), var(--neon-cyan), transparent)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} className="reveal mb-16">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
            {t('skills.sectionLabel')} <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
            {t('skills.title')}<br /><span style={{ color: 'var(--neon-cyan)' }}>{t('skills.titleAccent')}</span>
          </h2>
          <p className="font-mono text-xs mt-4 leading-relaxed" style={{ color: '#8a8aaa' }}>
            <span style={{ color: 'var(--neon-yellow)' }}>{'// disclaimer:'}</span>{' '}{t('skills.disclaimer1')}<br />
            <span style={{ color: 'var(--neon-yellow)' }}>{'//             '}</span>{' '}{t('skills.disclaimer2')}
          </p>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {cards.map((card, i) => <SkillCard key={i} card={card} delay={i * 60} />)}
        </div>
      </div>
    </section>
  )
}
