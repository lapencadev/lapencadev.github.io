import { useReveal } from './useReveal'

const IconMail = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
const IconLinkedIn = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const IconGitHub = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
const IconX = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
const IconLink = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>

const links = [
  { icon: <IconMail />,     label: 'raquelsanchezguirado@outlook.com', href: 'mailto:raquelsanchezguirado@outlook.com' },
  { icon: <IconLinkedIn />, label: 'LinkedIn',    href: 'https://www.linkedin.com/in/raquelsg91/' },
  { icon: <IconGitHub />,   label: 'GitHub',      href: 'https://github.com/lapencadev' },
  { icon: <IconX />,        label: '@lapencadev', href: 'https://x.com/lapencadev' },
  { icon: <IconLink />,     label: 'Linktree',    href: 'https://linktr.ee/lapencadev' },
  { icon: <IconGitHub />,   label: 'GitHub Student', href: 'https://github.com/3592917' },
]

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="section-padded relative overflow-hidden text-center" style={{ padding: '120px 48px' }}>
      <div className="absolute rounded-full pointer-events-none" style={{
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(255,45,120,0.07) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      }} />
      <div ref={ref} className="reveal relative z-10" style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="font-display font-black leading-none mb-8" style={{
          fontSize: 'clamp(48px,8vw,96px)',
          color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.15)',
        }}>
          HA<span style={{ color: 'var(--neon-pink)', WebkitTextStroke: 0, textShadow: '0 0 60px rgba(255,45,120,0.5)' }}>BLA</span>MOS
        </div>
        <p className="text-lg leading-relaxed mb-12" style={{ color: '#6b6b8a' }}>
          ¿Quieres que dé una charla en tu evento?<br />
          ¿Colaborar en algo chulo? ¿O simplemente saludar?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {links.map(l => (
            <a key={l.href} href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-mono text-xs px-5 py-3.5 rounded transition-all"
              style={{ color: '#6b6b8a', border: '1px solid rgba(255,255,255,0.07)', background: '#12121a' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon-cyan)'; e.currentTarget.style.borderColor = 'rgba(0,255,229,0.3)'; e.currentTarget.style.background = 'rgba(0,255,229,0.04)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6b6b8a'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = '#12121a'; e.currentTarget.style.transform = 'none' }}>
              {l.icon}{l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
