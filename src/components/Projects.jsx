import { useReveal } from './useReveal'
import lightningSrc from '../assets/icons/lightning.png'
import sabrosappSrc from '../assets/icons/sabrosapp.png'
import diatessaronSrc from '../assets/icons/diatessaron.svg'

const RingsIcon = ({ style }) => (
  <div style={{
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: '#11101a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    boxShadow: '0 0 0 1px rgba(255, 45, 120, 0.12), 0 0 20px rgba(255, 45, 120, 0.16)',
    ...style,
  }}>
    <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="28" r="11" stroke="#ff2d78" strokeWidth="2.5" fill="none"/>
      <circle cx="33" cy="28" r="11" stroke="#ff2d78" strokeWidth="2.5" fill="none"/>
      <path d="M26 22 Q28 18 30 16" stroke="#f5ff00" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="30" cy="15" r="2.5" fill="#f5ff00"/>
    </svg>
  </div>
)

const projects = [
  {
    icon: <img src={diatessaronSrc} style={{ width: 52, height: 52, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)' }} alt="Diatessaron" />,
    title: 'Coro Diatessaron',
    desc: 'Web del coro donde canto como soprano amateur. Diseño y desarrollo completo de la página.',
    tags: ['Web', 'Música', 'Side project'],
    links: [
      { label: '↗ Live', href: 'https://corodiatessaron.netlify.app' },
      { label: '↗ GitHub', href: 'https://github.com/lapencadev/Diatessaron' },
    ],
  },
  {
    icon: <img src={lightningSrc} style={{ width: 52, height: 52, boxSizing: 'border-box', padding: 8, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', background: '#11101a', filter: 'drop-shadow(0 0 12px rgba(255, 233, 27, 0.45))', boxShadow: 'none' }} alt="Closet App" />,
    title: 'Closet App',
    desc: 'Aplicación para organizar tu armario digital. Proyecto personal en Flutter.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    links: [
      { label: '↗ GitHub', href: 'https://github.com/lapencadev/closet-app' },
    ],
  },
  {
    icon: <img src={sabrosappSrc} style={{ width: 52, height: 52, boxSizing: 'border-box', padding: 6, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', background: '#fff', boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)' }} alt="SabrosApp" />,
    title: 'SabrosApp — TFG',
    desc: 'Trabajo de fin de grado del DAM. Proyecto integrador multiplataforma.',
    tags: ['Java', 'Flutter', 'Firebase', 'DAM'],
    links: [
      { label: '↗ GitHub', href: 'https://github.com/JPBSdam/Proyecto-intermodular' },
    ],
  },
  {
    // este icono debe ir dentro de un círculo con fondo oscuro y un glow rosa, para que no se pierda en el diseño de la card
    icon: <RingsIcon style={{ width: 52, height: 52, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', boxShadow: 'inset 0 4px 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)' }} />,
    title: 'Webs de boda personalizadas',
    desc: 'Detalles hechos con código y cariño para las bodas de mis amigas.',
    tags: ['Web', 'Creative', 'Personal'],
    links: [
      { label: '↗ Ana & Cristian', href: 'https://github.com/lapencadev/ana-and-cristian' },
      { label: '↗ Inma & Pedro', href: 'https://github.com/lapencadev/inma-and-pedro' },
    ],
  },
]

function ProjectCard({ project, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal rounded-lg p-8 relative overflow-hidden transition-all duration-300"
      style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms` }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,45,120,0.2)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.03) 0%, transparent 60%)' }} />
      {project.icon}
      <div className="font-display font-bold text-white leading-tight mb-3" style={{ fontSize: 16 }}>{project.title}</div>
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#6b6b8a' }}>{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(t => (
          <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-sm border"
            style={{ background: '#1a1a26', color: '#6b6b8a', borderColor: 'rgba(255,255,255,0.07)' }}>{t}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.links.map(l => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
            className="font-mono text-xs transition-colors"
            style={{ color: 'var(--neon-cyan)' }}
            onMouseEnter={e => e.target.style.color = 'var(--neon-pink)'}
            onMouseLeave={e => e.target.style.color = 'var(--neon-cyan)'}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useReveal()
  return (
    <section id="projects" className="section-padded" style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div ref={titleRef} className="reveal mb-16">
        <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
          03 · Projects <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
        </div>
        <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
          Lo que<br /><span style={{ color: 'var(--neon-orange)' }}>construyo</span>
        </h2>
      </div>
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 80} />)}
      </div>
    </section>
  )
}
