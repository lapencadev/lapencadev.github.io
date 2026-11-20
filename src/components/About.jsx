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
          {['p1', 'p2', 'p3', 'p4'].map(p => (
            <p key={p} dangerouslySetInnerHTML={{ __html: t(`about.${p}`) }} />
          ))}
        </div>
        <aside className="margin-note about-margin">
          {margin.map(([k, v]) => <div key={k}><b>{k}</b> {v}</div>)}
        </aside>
      </div>
    </section>
  )
}
