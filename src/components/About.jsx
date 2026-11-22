import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'

export default function About() {
  const ref = useReveal()
  const { t } = useT()
  const margin = t('about.margin')

  return (
    <section id="about" className="section container-page">
      <WordHeading id="about" />
      <div ref={ref} className="reveal about">
        <div className="about-text">
          {t('about.paragraphs').map((html, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>
        <aside className="margin-note about-margin">
          {margin.map(([k, v]) => <div key={k}><b>{k}</b> {v}</div>)}
        </aside>
      </div>
    </section>
  )
}
