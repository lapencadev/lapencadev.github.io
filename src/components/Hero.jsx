import { useT } from '../i18n/LanguageContext'

// Hero como entrada de diccionario: lema, transcripción, categoría y acepciones numeradas.
export default function Hero() {
  const { t } = useT()
  const h = t('hero')

  return (
    <section id="hero" className="hero container-page">
      <div className="hero-head">
        <h1 className="hero-lemma">
          {h.first}<sup aria-hidden="true">1</sup>
          <span className="hero-lemma-rest">{h.rest}</span>
        </h1>
        <p className="hero-ipa ipa">{h.ipa}</p>
      </div>

      <p className="hero-gram">
        <span className="serif">{h.gram}</span> <span className="serif">{h.place}</span>
        <span className="hero-handle">@lapencadev</span>
      </p>

      <div className="hero-body">
        <ol className="senses">
          {h.senses.map((s, i) => (
            <li key={i} style={{ '--c': `var(--${s.c})` }}>
              <div>
                {s.abbr && <span className="abbr">{s.abbr}</span>}
                <span dangerouslySetInnerHTML={{ __html: s.html }} />
                {s.example && <span className="sense-example" dangerouslySetInnerHTML={{ __html: s.example }} />}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="hero-foot">
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">{h.ctaTalk}</a>
          <a href="https://www.linkedin.com/in/raquelsg91/" target="_blank" rel="noreferrer" className="btn btn-ghost">{h.ctaLinkedIn}</a>
          <a href="https://linktr.ee/lapencadev" target="_blank" rel="noreferrer" className="link hero-links">{h.ctaLinks}</a>
        </div>
      </div>
    </section>
  )
}
