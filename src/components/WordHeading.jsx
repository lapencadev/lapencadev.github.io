import { useReveal } from './useReveal'
import { useT } from '../i18n/LanguageContext'

// Encabezado de sección con forma de entrada de diccionario:
// 03  construir  (Del lat. construĕre) v. tr.
//     Lo que construyo.
export default function WordHeading({ id }) {
  const ref = useReveal()
  const { t } = useT()
  const w = t(`words.${id}`)

  return (
    <header ref={ref} className="reveal word">
      <span className="word-n" aria-hidden="true">{w.n}</span>
      <h2 className="word-h">{w.word}</h2>
      <span className="word-etym">
        <span dangerouslySetInnerHTML={{ __html: w.etym }} /> {w.gram}
      </span>
      <p className="word-gloss">{w.gloss}</p>
    </header>
  )
}
