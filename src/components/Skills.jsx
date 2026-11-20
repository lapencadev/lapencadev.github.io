import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'

// Cada bloque de skills es una acepción numerada de «saber», con su color de la paleta.
const SENSE_COLORS = ['pink', 'cyan', 'yellow', 'purple', 'pink', 'cyan']

export default function Skills() {
  const ref = useReveal()
  const { t } = useT()
  const cards = t('skills.cards')

  return (
    <section id="skills" className="section container-page">
      <WordHeading id="skills" />

      <p className="skills-disclaimer mono-meta">
        <span>{t('skills.disclaimerLabel')}</span> {t('skills.disclaimer1')}<br />
        <span aria-hidden="true">{'//'}</span> {t('skills.disclaimer2')}
      </p>

      <ol ref={ref} className="reveal skills">
        {cards.map((card, i) => (
          <li key={card.title} style={{ '--c': `var(--${SENSE_COLORS[i % SENSE_COLORS.length]})` }}>
            <h3 className="skills-title serif">{card.title}</h3>
            <ul>
              {card.skills.map(s => <li key={s}>{s}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
