import { useEffect, useRef, useState } from 'react'
import { useT } from '../i18n/LanguageContext'

// Primera frase del Himno de la alegría (Beethoven, dominio público), en sol mayor
// para que todas las notas caigan dentro del pentagrama, sin líneas adicionales.
// step: posición en el pentagrama contando desde la línea inferior (0 = mi4, 2 = sol4, 4 = si4…)
// beats: duración en negras.
const MELODY = [
  { step: 4, beats: 1 }, { step: 4, beats: 1 }, { step: 5, beats: 1 }, { step: 6, beats: 1 },
  { step: 6, beats: 1 }, { step: 5, beats: 1 }, { step: 4, beats: 1 }, { step: 3, beats: 1 },
  { step: 2, beats: 1 }, { step: 2, beats: 1 }, { step: 3, beats: 1 }, { step: 4, beats: 1 },
  { step: 4, beats: 1.5 }, { step: 3, beats: 0.5 }, { step: 3, beats: 2 },
]
const FREQ = { 2: 392.0, 3: 440.0, 4: 493.88, 5: 523.25, 6: 587.33 } // sol4 la4 si4 do5 re5
const TOTAL_BEATS = 16
const BEAT_SECONDS = 60 / 112

// Espaciado como en una partitura grabada: las notas largas ocupan algo más, pero no en proporción exacta
const SPACE = { 0.5: 0.8, 1: 1, 1.5: 1.25, 2: 1.45 }
const TOTAL_SPACE = MELODY.reduce((sum, n) => sum + SPACE[n.beats], 0)
let beatAcc = 0
let spaceAcc = 0
const NOTES = MELODY.map(n => {
  const note = { ...n, start: beatAcc, x: ((spaceAcc + 0.45) / TOTAL_SPACE) * 100 }
  beatAcc += n.beats
  spaceAcc += SPACE[n.beats]
  return note
})
// Barras de compás detrás de la 4.ª, 8.ª y 12.ª nota
const BARS = [4, 8, 12].map(i => (MELODY.slice(0, i).reduce((sum, n) => sum + SPACE[n.beats], 0) / TOTAL_SPACE) * 100)

// Nota dibujada en unidades de «espacio entre líneas»: la cabeza está en (0, 0)
function Note({ step, beats }) {
  const down = step >= 4                // a partir de la línea central, plica hacia abajo
  const hollow = beats >= 2             // blanca
  const dotted = beats === 1.5
  const flag = beats === 0.5            // corchea
  return (
    <svg className="note-svg" viewBox="-1.5 -4 3 8" aria-hidden="true">
      <ellipse cx="0" cy="0" rx={hollow ? 0.56 : 0.6} ry={hollow ? 0.38 : 0.42} transform="rotate(-22)"
        fill={hollow ? 'none' : 'currentColor'} stroke="currentColor" strokeWidth={hollow ? 0.17 : 0} />
      {down
        ? <line x1="-0.57" y1="0.12" x2="-0.57" y2="3.3" stroke="currentColor" strokeWidth="0.12" />
        : <line x1="0.57" y1="-0.12" x2="0.57" y2="-3.3" stroke="currentColor" strokeWidth="0.12" />}
      {flag && !down && <path d="M0.57 -3.3 C0.7 -2.4 1.45 -2.1 1.25 -0.9 C1.2 -1.7 0.9 -2.1 0.57 -2.3 Z" fill="currentColor" />}
      {dotted && <circle cx="1.05" cy={step % 2 === 0 ? -0.5 : 0} r="0.15" fill="currentColor" />}
    </svg>
  )
}

export default function Staff() {
  const { t } = useT()
  const [active, setActive] = useState(-1)
  const ctxRef = useRef(null)
  const timersRef = useRef([])
  const playing = active !== -1

  const stop = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    ctxRef.current?.close()
    ctxRef.current = null
    setActive(-1)
  }
  useEffect(() => stop, [])

  const play = () => {
    if (playing) return stop()
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    ctxRef.current = ctx
    const t0 = ctx.currentTime + 0.08
    const master = ctx.createGain()
    master.gain.value = 0.22
    master.connect(ctx.destination)

    NOTES.forEach((n, i) => {
      const start = t0 + n.start * BEAT_SECONDS
      const dur = n.beats * BEAT_SECONDS
      // Timbre suave tipo caja de música: triangular + sinusoidal una octava arriba
      ;[['triangle', 1, 1], ['sine', 2, 0.25]].forEach(([type, mult, vol]) => {
        const osc = ctx.createOscillator()
        const g = ctx.createGain()
        osc.type = type
        osc.frequency.value = FREQ[n.step] * mult
        g.gain.setValueAtTime(0.0001, start)
        g.gain.exponentialRampToValueAtTime(vol, start + 0.02)
        g.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(dur * 0.95, 0.25))
        osc.connect(g).connect(master)
        osc.start(start)
        osc.stop(start + dur + 0.05)
      })
      timersRef.current.push(setTimeout(() => setActive(i), (start - ctx.currentTime) * 1000))
    })
    const end = (t0 - ctx.currentTime + TOTAL_BEATS * BEAT_SECONDS) * 1000 + 150
    timersRef.current.push(setTimeout(stop, end))
  }

  const label = playing ? t('footer.stop') : t('footer.play')

  return (
    <button type="button" className={`staff ${playing ? 'is-playing' : ''}`} onClick={play}
      aria-label={label} title={label}>
      <span className="staff-clef" aria-hidden="true">{'\u{1D11E}'}</span>
      <span className="staff-notes" aria-hidden="true">
        {BARS.map(x => <span key={x} className="staff-bar" style={{ left: `${x}%` }} />)}
        {NOTES.map((n, i) => (
          <span key={i} className={`staff-note ${i === active ? 'is-active' : ''}`}
            style={{ left: `${n.x}%`, '--s': n.step }}>
            <Note step={n.step} beats={n.beats} />
          </span>
        ))}
      </span>
    </button>
  )
}
