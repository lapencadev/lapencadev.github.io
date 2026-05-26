import { useReveal } from './useReveal'

export default function Talk() {
  const titleRef = useReveal()
  const contentRef = useReveal()

  return (
    <section id="talk" className="talk-section relative overflow-hidden" style={{ padding: '120px 48px', background: '#12121a' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--neon-yellow), var(--neon-pink), transparent)' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={titleRef} className="reveal mb-16">
          <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
            04 · Speaker <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
          </div>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
            On the<br /><span style={{ color: 'var(--neon-yellow)' }}>Stage</span>
          </h2>
        </div>

        <div ref={contentRef} className="reveal talk-grid grid gap-12 items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: 'var(--neon-yellow)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: 'var(--neon-yellow)', boxShadow: '0 0 10px rgba(245,255,0,0.5)' }} />
              T3chFest Madrid 2024
            </div>
            <h3 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(22px,2.5vw,34px)' }}>
              Políglota del siglo XXI
            </h3>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#9090b0' }}>
              Filología y programación son más parecidos de lo que crees. Un viaje entre lenguajes humanos y lenguajes de máquina, explorando cómo aprender idiomas y aprender a programar comparten las mismas bases cognitivas.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.youtube.com/watch?v=svDcFqw7h0c" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all"
                style={{ background: 'var(--neon-pink)', color: '#fff', boxShadow: '0 0 20px rgba(255,45,120,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(255,45,120,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,45,120,0.3)'; e.currentTarget.style.transform = 'none' }}>
                ▶ Ver charla
              </a>
              <a href="https://youtu.be/n5DYBP7rtJc" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all"
                style={{ color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,229,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,229,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}>
                ▶ Versión corta
              </a>
            </div>
          </div>

          {/* YouTube embed — proper aspect ratio */}
          <div className="rounded-lg overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.07)' }}>
            <iframe
              src="https://www.youtube.com/embed/svDcFqw7h0c"
              title="Políglota del siglo XXI - T3chFest 2024"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
