import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'

const MEDIUM_PROFILE = 'https://medium.com/@lapencadev'
const ACCENTS = ['cyan', 'pink', 'purple']

function ArticleCard({ article, accent, delay, readLabel }) {
  const ref = useReveal()
  return (
    <a ref={ref} href={article.url} target="_blank" rel="noreferrer"
      className="reveal card card-hover article" style={{ transitionDelay: `${delay}ms`, '--c': `var(--${accent})` }}>
      <div className="article-meta mono-meta">
        <span>{article.date}</span>
        <span aria-hidden="true">·</span>
        <span>{article.minutes} min</span>
        {article.lang && <span className="article-lang">{article.lang}</span>}
      </div>
      <h4 className="article-title serif">{article.title}</h4>
      <p className="article-desc">{article.desc}</p>
      <p className="mono-meta article-tags">{article.tags.join(' · ')}</p>
      <span className="article-read">{readLabel}</span>
    </a>
  )
}

export default function Talk() {
  const talkRef = useReveal()
  const { t } = useT()
  const articles = t('talk.articles')

  return (
    <section id="talk" className="section container-page">
      <WordHeading id="talk" />

      <h3 className="sub-label mono-meta">{t('talk.articlesLabel')}</h3>
      <div className="articles">
        {articles.map((a, i) => (
          <ArticleCard key={a.url} article={a} accent={ACCENTS[i % ACCENTS.length]} delay={i * 80} readLabel={t('talk.readLabel')} />
        ))}
      </div>
      <p className="articles-all">
        <a className="link" href={MEDIUM_PROFILE} target="_blank" rel="noreferrer">{t('talk.allArticles')}</a>
      </p>

      <h3 className="sub-label mono-meta">{t('talk.talkLabel')}</h3>
      <div ref={talkRef} className="reveal card talk">
        <div className="talk-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/svDcFqw7h0c"
            title="Políglota del siglo XXI · T3chFest 2024"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="talk-text">
          <div className="mono-meta">T3chFest Madrid 2024</div>
          <h4 className="talk-title serif">Políglota del siglo XXI</h4>
          <p>{t('talk.talkDesc')}</p>
          <div className="talk-cta">
            <a className="btn btn-primary" href="https://www.youtube.com/watch?v=svDcFqw7h0c" target="_blank" rel="noreferrer">▶ {t('talk.ctaFull')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
