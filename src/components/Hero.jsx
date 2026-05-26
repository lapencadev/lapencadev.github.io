export default function Hero() {
  const stack = [
    { label: 'Java',        color: '#ff6b2b', bg: 'rgba(255,107,43,0.07)' },
    { label: 'Spring Boot', color: '#27c93f', bg: 'rgba(39,201,63,0.07)'  },
    { label: 'Flutter',     color: '#00ffe5', bg: 'rgba(0,255,229,0.07)'  },
    { label: '& más',       color: '#6b6b8a', bg: 'rgba(107,107,138,0.07)' },
  ]

  const extras = [
    { label: 'speaker',  color: '#f5ff00', bg: 'rgba(245,255,0,0.07)'  },
    { label: 'mentora',  color: '#b44fff', bg: 'rgba(180,79,255,0.07)' },
    { label: 'soprano 🎵', color: '#00ffe5', bg: 'rgba(0,255,229,0.07)' },
  ]

  return (
    <section id="hero" className="hero-grid grid min-h-screen items-center relative overflow-hidden"
      style={{ padding: '120px 48px 40px' }}>

      {/* Grid bg */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,45,120,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animation: 'gridDrift 20s linear infinite',
      }} />
      <div className="absolute rounded-full" style={{
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)',
        top: -100, right: -100, animation: 'pulse 4s ease-in-out infinite',
      }} />
      <div className="absolute rounded-full" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,255,229,0.08) 0%, transparent 70%)',
        bottom: 0, left: 200, animation: 'pulse 6s ease-in-out infinite reverse',
      }} />

      {/* Left */}
      <div className="relative z-10">
        <span className="inline-block font-mono text-xs uppercase tracking-widest mb-10 px-3 py-1.5 rounded-sm"
          style={{ color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,229,0.3)', animation: 'fadeInUp 0.6s ease both' }}>
          // Software Engineer · Speaker · Filóloga
        </span>
        <h1 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(48px,6vw,88px)', animation: 'fadeInUp 0.6s 0.1s ease both' }}>
          <span className="block text-white">Raquel</span>
          <span className="block" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
            Sánchez{' '}
            <span style={{ color: 'var(--neon-pink)', WebkitTextStroke: 0, textShadow: '0 0 40px rgba(255,45,120,0.6), 0 0 80px rgba(255,45,120,0.3)' }}>G.</span>
          </span>
        </h1>
        <p className="font-mono text-2xl mb-8" style={{ color: 'var(--neon-yellow)', textShadow: '0 0 20px rgba(245,255,0,0.4)', animation: 'fadeInUp 0.6s 0.2s ease both' }}>
          @lapencadev
        </p>
         <p className="text-lg leading-relaxed max-w-lg mb-12" style={{ color: '#9090b0', animation: 'fadeInUp 0.6s 0.3s ease both' }}>
          De <strong className="text-white font-medium">letras a código, sin perder el acento murciano</strong> 🍋<br />
          <span style={{ color: 'var(--neon-cyan)' }}>Backend engineer</span> con Java & Spring Boot en Accenture.
          Speaker en T3chFest Madrid. Mentora en <strong className="text-white font-medium">Step4ward</strong>.
          Soprano amateur que también compila.
        </p>
        <div className="flex gap-4 flex-wrap" style={{ animation: 'fadeInUp 0.6s 0.4s ease both' }}>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all"
            style={{ background: 'var(--neon-pink)', color: '#fff', boxShadow: '0 0 20px rgba(255,45,120,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(255,45,120,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,45,120,0.3)'; e.currentTarget.style.transform = 'none' }}>
            💬 Hablemos
          </a>
          <a href="https://linktr.ee/lapencadev" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all"
            style={{ color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,229,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,229,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'none' }}>
            → All my links
          </a>
        </div>
      </div>

      {/* Right: Terminal */}
      <div className="hero-terminal relative z-10 flex justify-end" style={{ animation: 'fadeInUp 0.6s 0.5s ease both', marginTop: 40 }}>
        <div className="rounded-lg overflow-hidden" style={{
          width: '100%', maxWidth: 460, background: '#12121a',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 0 0 1px rgba(255,45,120,0.1), 0 40px 80px rgba(0,0,0,0.5)',
        }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#1a1a26', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="font-mono text-xs ml-2" style={{ color: '#6b6b8a' }}>raquel@lapencadev ~</span>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="flex gap-2 mb-1"><span style={{ color: 'var(--neon-pink)' }}>❯</span><span style={{ color: 'var(--neon-cyan)' }}>cat ./whoami.json</span></div>
            <div className="pl-4" style={{ color: '#6b6b8a' }}>{'{'}</div>

            {[
              ['"name"',       '"Raquel Sánchez Guirado"'],
              ['"role"',       '"Software Engineer"'],
              ['"background"', '"Filóloga → Dev"'],
            ].map(([k, v]) => (
              <div key={k} className="pl-4">
                <span style={{ color: 'var(--neon-yellow)' }}>{k}</span>
                <span style={{ color: '#6b6b8a' }}>: </span>
                <span style={{ color: '#a8a8c0' }}>{v}</span>
                <span style={{ color: '#6b6b8a' }}>,</span>
              </div>
            ))}

            {/* Extras */}
            <div className="pl-4 mt-1">
              <span style={{ color: 'var(--neon-yellow)' }}>"extras"</span>
              <span style={{ color: '#6b6b8a' }}>: [</span>
            </div>
            <div className="pl-4 flex flex-wrap gap-2 my-1.5">
              {extras.map(s => (
                <span key={s.label} className="font-mono text-xs px-2.5 py-0.5 rounded-sm border"
                  style={{ color: s.color, background: s.bg, borderColor: s.color + '55' }}>
                  {s.label}
                </span>
              ))}
            </div>
            <div className="pl-4" style={{ color: '#6b6b8a' }}>],</div>

            {/* Stack */}
            <div className="pl-4 mt-1">
              <span style={{ color: 'var(--neon-yellow)' }}>"stack"</span>
              <span style={{ color: '#6b6b8a' }}>: [</span>
            </div>
            <div className="pl-4 flex flex-wrap gap-2 my-1.5">
              {stack.map(s => (
                <span key={s.label} className="font-mono text-xs px-2.5 py-0.5 rounded-sm border"
                  style={{ color: s.color, background: s.bg, borderColor: s.color + '66' }}>
                  {s.label}
                </span>
              ))}
            </div>
            <div className="pl-4" style={{ color: '#6b6b8a' }}>],</div>

            {/* Motto */}
            <div className="pl-4 mt-2">
              <span style={{ color: 'var(--neon-yellow)' }}>"motto"</span>
              <span style={{ color: '#6b6b8a' }}>: </span>
              <span style={{ color: '#a8a8c0' }}>"código con acento"</span>
            </div>

            <div className="pl-4 mt-1" style={{ color: '#6b6b8a' }}>{'}'}</div>
            <div className="flex gap-2 mt-3">
              <span style={{ color: 'var(--neon-pink)' }}>❯</span>
              <span className="inline-block w-2 h-3.5 align-middle" style={{ background: 'var(--neon-pink)', animation: 'blink 1s step-end infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
