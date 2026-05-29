import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

const ITEM_LINKS = [
  'https://step4ward.notion.site/4897f8a94986431aaef76bbaa616166e?v=d058f7ede6444d1b93a699984b9c94f6&p=9ff9656e45be4afca8e53fbec238bc81&pm=c',
  'https://corodiatessaron.netlify.app',
  'https://medium.com/@lapencadev',
  'https://mancomun.gal/ficha/mulleres-en-tech-raquel-sanchez/',
]
const ITEM_ICONS = ['💜', '🎵', '✍️', '📰']

function CommCard({ item, icon, href, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-lg p-8 text-center transition-all duration-300"
      style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,255,229,0.2)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}>
      <div className="text-4xl mb-4">{icon}</div>
      <div className="font-display font-bold text-white text-sm mb-3">{item.title}</div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#8a8aaa' }}>{item.desc}</p>
      <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-sm border mb-3"
        style={{ color: 'var(--neon-purple)', borderColor: 'rgba(180,79,255,0.3)', background: 'rgba(180,79,255,0.07)' }}>
        {item.badge}
      </span>
      <br />
      <a href={href} target="_blank" rel="noreferrer"
        className="font-mono text-xs transition-colors"
        style={{ color: 'var(--neon-cyan)' }}
        onMouseEnter={e => e.target.style.color = 'var(--neon-pink)'}
        onMouseLeave={e => e.target.style.color = 'var(--neon-cyan)'}>
        {item.linkLabel}
      </a>
    </div>
  )
}

export default function Community() {
  const titleRef = useReveal()
  const { t } = useT()
  const items = t('community.items')

  return (
    <section id="community" className="section-padded relative py-[52px] px-[48px] md:py-[64px]">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} className="reveal mb-16">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
            {t('community.sectionLabel')} <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
            {t('community.title')}<br /><span style={{ color: 'var(--neon-purple)' }}>{t('community.titleAccent')}</span>
          </h2>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))' }}>
          {items.map((item, i) => (
            <CommCard key={i} item={item} icon={ITEM_ICONS[i]} href={ITEM_LINKS[i]} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
