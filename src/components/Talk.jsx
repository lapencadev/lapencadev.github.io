import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

const MEDIUM_PROFILE = 'https://medium.com/@lapencadev'
const ARTICLE_ACCENTS = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-purple)']

function SubLabel({ children, color }) {
  return (
    <div className="font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color }}>
      <div className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
      {children}
    </div>
  )
}

function ArticleCard({ article, accent, delay, readLabel }) {
  const ref = useReveal()
  return (
    <a ref={ref} href={article.url} target="_blank" rel="noreferrer"
      className="reveal rounded-lg p-7 relative overflow-hidden transition-all duration-300 flex flex-col"
      style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms`, textDecoration: 'none' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,45,120,0.25)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}>
      <div className="absolute top-0 left-0 right-0" style={{ height: 2, background: accent, opacity: 0.7 }} />

      <div className="font-mono text-xs mb-4 flex items-center gap-2 flex-wrap" style={{ color: '#8a8aaa', letterSpacing: '0.08em' }}>
        <span>{article.date}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>{article.minutes} min</span>
        {article.lang && (
          <span className="px-1.5 rounded-sm border" style={{ color: 'var(--neon-yellow)', borderColor: 'rgba(245,255,0,0.3)' }}>{article.lang}</span>
        )}
      </div>

      <h3 className="font-display font-bold text-white leading-snug mb-4" style={{ fontSize: 17 }}>{article.title}</h3>
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#8a8aaa' }}>{article.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {article.tags.map(tag => (
          <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded-sm border"
            style={{ background: '#1a1a26', color: '#8a8aaa', borderColor: 'rgba(255,255,255,0.07)' }}>{tag}</span>
        ))}
      </div>

      <div style={{ flex: 1 }} />
      <span className="font-mono text-xs" style={{ color: accent }}>{readLabel}</span>
    </a>
  )
}

export default function Talk() {
  const titleRef = useReveal()
  const talkRef = useReveal()
  const { t } = useT()
  const articles = t('talk.articles')

  return (
    <section id="talk" className="talk-section relative overflow-hidden" style={{ padding: '64px 48px', background: '#12121a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--neon-yellow), var(--neon-pink), transparent)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} className="reveal mb-14">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
            {t('talk.sectionLabel')} <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
            {t('talk.titleLine1')}<br /><span style={{ color: 'var(--neon-yellow)' }}>{t('talk.titleAccent')}</span>
          </h2>
        </div>

        {/* Artículos */}
        <SubLabel color="var(--neon-cyan)">{t('talk.articlesLabel')}</SubLabel>
        <div className="grid gap-6 mb-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {articles.map((a, i) => (
            <ArticleCard key={a.url} article={a} accent={ARTICLE_ACCENTS[i % ARTICLE_ACCENTS.length]} delay={i * 80} readLabel={t('talk.readLabel')} />
          ))}
        </div>
        <div className="mb-16 text-right">
          <a href={MEDIUM_PROFILE} target="_blank" rel="noreferrer"
            className="font-mono text-xs transition-colors"
            style={{ color: 'var(--neon-cyan)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-pink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--neon-cyan)'}>
            {t('talk.allArticles')}
          </a>
        </div>

        {/* Charla */}
        <SubLabel color="var(--neon-yellow)">{t('talk.talkLabel')}</SubLabel>
        <div ref={talkRef} className="reveal talk-grid grid gap-10 items-center rounded-lg p-6"
          style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="rounded-md overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#0a0a0f' }}>
            <iframe
              src="https://www.youtube.com/embed/svDcFqw7h0c"
              title="Políglota del siglo XXI - T3chFest 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: '#8a8aaa' }}>T3chFest Madrid 2024</div>
            <h3 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(20px,2vw,26px)' }}>
              Políglota del siglo XXI
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9090b0' }}>
              {t('talk.talkDesc')}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.youtube.com/watch?v=svDcFqw7h0c" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-all"
                style={{ background: 'var(--neon-pink)', color: '#fff', boxShadow: '0 0 20px rgba(255,45,120,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(255,45,120,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,45,120,0.3)'; e.currentTarget.style.transform = 'none' }}>
                {t('talk.ctaFull')}
              </a>
              <a href="https://youtu.be/n5DYBP7rtJc" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-all"
                style={{ color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,229,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,229,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}>
                {t('talk.ctaShort')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
