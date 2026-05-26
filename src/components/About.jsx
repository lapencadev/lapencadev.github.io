import { useReveal } from './useReveal'

const experience = [
  {
    period: 'ABRIL 2026 — PRESENTE',
    role: 'Custom Software Engineering Analyst',
    company: 'Accenture',
    desc: 'Backend microservicios para cliente retail. Clean architecture, TDD, AI-assisted dev con GitHub Copilot.',
    chips: ['Java Spring Boot', 'Podman', 'SQL', 'OpenAPI', 'GitHub Copilot'],
  },
  {
    period: 'JUNIO 2025 — ENERO 2026',
    role: 'Software Developer',
    company: 'New Work SE | Xing',
    desc: 'Nuevas features en microservicios, cloud migration, reducción de deuda técnica. Monitoring con Grafana y Datadog.',
    chips: ['Java', 'Kotlin', 'Kubernetes', 'Grafana', 'Datadog'],
  },
  {
    period: 'SEPTIEMBRE 2022 — MAYO 2025',
    role: 'Fullstack Developer & PPO',
    company: 'Capgemini',
    desc: 'Backend Java 8–17 + frontend Angular. Schema migrations con Flyway. Women in Tech bootcamp interno.',
    chips: ['Java 8-17', 'Angular', 'PostgreSQL', 'Oracle', 'Flyway', 'Jenkins'],
  },
]

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" className="about-grid section-padded relative py-[80px] px-[48px] md:py-[120px]">
      <div ref={leftRef} className="reveal about-sticky" style={{ position: 'sticky', top: 120 }}>
        <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3"
          style={{ color: 'var(--neon-pink)' }}>
          01 · About
          <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
        </div>
        <h2 className="font-display font-bold leading-tight mb-8" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
          Letras<br />que <span style={{ color: 'var(--neon-pink)' }}>compilan</span>
        </h2>
        {[
          { cls: 'pink', text: 'Filóloga Inglesa · UMU', c: 'var(--neon-pink)' },
          { cls: 'cyan', text: 'DAM · IES Los Albares', c: 'var(--neon-cyan)' },
          { cls: 'yellow', text: 'Backend Dev · Java & Spring Boot', c: 'var(--neon-yellow)' },
          { cls: 'purple', text: 'Step4ward · Mentora & Comunidad', c: 'var(--neon-purple)' },
        ].map(t => (
          <div key={t.text} className="font-mono text-xs px-4 py-2.5 rounded mb-3"
            style={{ borderLeft: `3px solid ${t.c}`, color: t.c, background: '#12121a' }}>
            {t.text}
          </div>
        ))}
      </div>

      <div ref={rightRef} className="reveal">
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9090b0' }}>
          Empecé con <strong className="text-white font-medium">letras y lenguajes humanos</strong>, acabé migrando a <strong className="text-yellow font-medium">código y lenguajes de programación</strong>. El camino no fue fácil, tras estudiar filología inglesa en la universidad, trabajé 6 años en logística. Rompí con mi "anterior vida" en 2022 en busca de una reconversión profesional, sumergiendom en un duro bootcamp de Java pasados los 30. Me encantó y necesitaba más, así que me he graduado en el grado superior de Desarrollo de Aplicaciones Multiplataforma — y eso es exactamente lo que me hace diferente.
        </p>
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9090b0' }}>
          Actualmente trabajo como <span style={{ color: 'var(--neon-cyan)' }}>Software Engineer</span>, desarrollando microservicios backend con Java Spring Boot para clientes enterprise e implementando herramientas con GitHub Copilot. Empecé como fullstack Java/Angular y me he ido especializando en backend.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#9090b0' }}>
          Aunque en paralelo exploro distintas tecnologías y construyo apps con <strong className="text-white font-medium">Flutter</strong>, <span className="text-cyan">Python</span>, <span className="text-yellow">Docker</span>, <span className="text-purple">Observability</span>, <span className="text-pink">AI tools</span>, <span style={{ color: '#8cff82' }}>Frontend Frameworks</span> y lo que me echen. En mi tiempo libre canto como soprano amateur en el Coro Diatessaron, y tengo la teoría de que los devs que se acercan a las humanidades saben escribir mejor código y son mejores managers.
        </p>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: 32 }}>
          <div className="absolute left-0 top-0 bottom-0" style={{ width: 1, background: 'linear-gradient(to bottom, var(--neon-pink), transparent)' }} />
          {experience.map((e, i) => (
            <div key={i} className="relative pb-10 last:pb-0">
              <div className="absolute rounded-full" style={{ left: -36, top: 6, width: 9, height: 9, background: 'var(--neon-pink)', boxShadow: '0 0 10px rgba(255,45,120,0.6)' }} />
              <div className="font-mono text-xs mb-1" style={{ color: '#6b6b8a', letterSpacing: '0.1em' }}>{e.period}</div>
              <div className="font-display font-bold text-sm text-white mb-0.5">{e.role}</div>
              <div className="font-mono text-xs mb-2.5" style={{ color: 'var(--neon-cyan)' }}>{e.company}</div>
              <div className="text-sm leading-relaxed mb-2.5" style={{ color: '#6b6b8a' }}>{e.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {e.chips.map(c => (
                  <span key={c} className="font-mono text-xs px-2 py-0.5 rounded-sm border"
                    style={{ background: '#1a1a26', color: '#6b6b8a', borderColor: 'rgba(255,255,255,0.07)' }}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
