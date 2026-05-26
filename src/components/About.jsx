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
    desc: 'Backend Java 17-21. Nuevas features en microservicios de integración, cloud migration, reducción de deuda técnica. Monitoring con Grafana y Datadog.',
    chips: ['Java Spring Boot', 'NoSQL', 'GitHub', 'Kotlin', 'Kubernetes', 'Grafana', 'Datadog', 'Docker'],
  },
  {
    period: 'SEPTIEMBRE 2022 — MAYO 2025',
    role: 'Fullstack Developer & PPO',
    company: 'Capgemini',
    desc: 'Backend Java 8–17 + Frontend Angular. Migraciones SQL con Flyway. Women in Tech bootcamp interno.',
    chips: ['Java Spring Boot', 'Angular', 'PostgreSQL', 'Oracle', 'Flyway', 'GitLab', 'Scrum'],
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
          02 · About
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
          Empecé con <strong className="text-white font-medium">letras y lenguajes humanos</strong>, acabé migrando a <strong className="text-yellow font-medium">código y lenguajes de programación</strong>. El camino no fue fácil, tras estudiar filología inglesa en la universidad, trabajé 6 años en logística. Rompí con mi "anterior vida" en 2022 en busca de una reconversión profesional, sumergiéndome en un duro bootcamp de Java a los 30. Me encantó y me quedé con ganas de más a pesar de estar currando, así que me he graduado en el grado superior de Desarrollo de Aplicaciones Multiplataforma — y esto es exactamente lo que me hace diferente.
        </p>
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#b0b0c6' }}>
          Sé lo que cuesta empezar de cero, no saber nada, estar perdida y abrumada. La empatía y la resiliencia que he ido forjando en mi camino me permiten ponerme en los zapatos de otras personas y de trabajar en equipo fomentando un ambiente de apoyo y crecimiento.
        </p>
        <p className="text-lg leading-relaxed mb-6" style={{ color: '#9090b0' }}>
          Actualmente trabajo como <span style={{ color: 'var(--neon-cyan)' }}>Software Engineer</span>, desarrollando microservicios backend con Java Spring Boot para clientes enterprise e implementando herramientas con GitHub Copilot. Empecé como fullstack Java/Angular y me he ido especializando en backend.
        </p>
        <p className="text-lg leading-relaxed mb-10" style={{ color: '#9090b0' }}>
          Aunque en paralelo exploro distintas tecnologías y construyo apps con <strong className="text-white font-medium">Flutter</strong>, <span className="text-cyan">Python</span>, <span className="text-yellow">Docker</span>, <span className="text-purple">Observability</span>, <span className="text-pink">AI tools</span>, <span style={{ color: '#8cff82' }}>Frontend Frameworks</span> y lo que me echen. En mi tiempo libre canto como soprano amateur en el Coro Diatessaron, y tengo la teoría de que los devs que se acercan a las humanidades saben escribir mejor código y son mejores managers.
        </p>
      </div>
    </section>
  )
}
