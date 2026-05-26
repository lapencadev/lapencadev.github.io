import { useReveal } from './useReveal'

const items = [
  {
    icon: '💜',
    title: 'Step4ward',
    desc: 'Comunidad de mujeres en tech. Mentoring, organización de eventos y visibilización de talento femenino en la industria.',
    badge: 'Mentora & Organizadora',
    link: { label: '↗ Mi perfil Step4ward', href: 'https://step4ward.notion.site/4897f8a94986431aaef76bbaa616166e?v=d058f7ede6444d1b93a699984b9c94f6&p=9ff9656e45be4afca8e53fbec238bc81&pm=c' },
  },
  {
    icon: '🎵',
    title: 'Soprano',
    desc: 'El código es mi lenguaje del día, pero la música es el del alma. Canto como soprano en el Coro Diatessaron.',
    badge: 'Coro Diatessaron',
    link: { label: '↗ corodiatessaron.netlify.app', href: 'https://corodiatessaron.netlify.app' },
  },
  {
    icon: '✍️',
    title: 'Escribo en Medium',
    desc: 'Reflexiones sobre desarrollo, humanidades y la vida de una dev reconvertida.',
    badge: 'Blog',
    link: { label: '↗ medium.com/@lapencadev', href: 'https://medium.com/@lapencadev' },
  },
  {
    icon: '📰',
    title: 'Prensa',
    desc: 'Entrevista en Mulleres en Tech sobre mi trayectoria de las letras a la programación.',
    badge: 'Mulleres en Tech',
    link: { label: '↗ Leer entrevista', href: 'https://mancomun.gal/ficha/mulleres-en-tech-raquel-sanchez/' },
  },
]

function CommCard({ item, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-lg p-8 text-center transition-all duration-300"
      style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,255,229,0.2)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}>
      <div className="text-4xl mb-4">{item.icon}</div>
      <div className="font-display font-bold text-white text-sm mb-3">{item.title}</div>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b6b8a' }}>{item.desc}</p>
      <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-sm border mb-3"
        style={{ color: 'var(--neon-purple)', borderColor: 'rgba(180,79,255,0.3)', background: 'rgba(180,79,255,0.07)' }}>
        {item.badge}
      </span>
      <br />
      <a href={item.link.href} target="_blank" rel="noreferrer"
        className="font-mono text-xs transition-colors"
        style={{ color: 'var(--neon-cyan)' }}
        onMouseEnter={e => e.target.style.color = 'var(--neon-pink)'}
        onMouseLeave={e => e.target.style.color = 'var(--neon-cyan)'}>
        {item.link.label}
      </a>
    </div>
  )
}

export default function Community() {
  const titleRef = useReveal()
  return (
    <section id="community" className="section-padded relative py-[80px] px-[48px] md:py-[120px]">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} className="reveal mb-16">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
            05 · Community <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
            Más allá<br /><span style={{ color: 'var(--neon-purple)' }}>del código</span>
          </h2>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))' }}>
          {items.map((item, i) => <CommCard key={item.title} item={item} delay={i * 80} />)}
        </div>
      </div>
    </section>
  )
}
