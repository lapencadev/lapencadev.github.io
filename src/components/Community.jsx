import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'

// El orden debe coincidir con community.items en es.json / en.json
const ITEMS = [
  { icon: '💜', c: 'purple', href: 'https://step4ward.notion.site/4897f8a94986431aaef76bbaa616166e?v=d058f7ede6444d1b93a699984b9c94f6&p=9ff9656e45be4afca8e53fbec238bc81&pm=c' },
  { icon: '🎵', c: 'cyan',   href: 'https://corodiatessaron.es' },
  { icon: '📰', c: 'pink',   href: 'https://mancomun.gal/ficha/mulleres-en-tech-raquel-sanchez/' },
]

function CommunityItem({ item, meta, delay }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="reveal card community-item" style={{ transitionDelay: `${delay}ms`, '--c': `var(--${meta.c})` }}>
      <div className="community-icon" aria-hidden="true">{meta.icon}</div>
      <h3 className="community-title serif">{item.title}</h3>
      <p className="community-badge mono-meta">{item.badge}</p>
      <p className="community-desc">{item.desc}</p>
      <a className="link" href={meta.href} target="_blank" rel="noreferrer">{item.linkLabel}</a>
    </article>
  )
}

export default function Community() {
  const { t } = useT()
  const items = t('community.items')

  return (
    <section id="community" className="section container-page">
      <WordHeading id="community" />
      <div className="community">
        {items.map((item, i) => <CommunityItem key={item.title} item={item} meta={ITEMS[i]} delay={i * 80} />)}
      </div>
    </section>
  )
}
