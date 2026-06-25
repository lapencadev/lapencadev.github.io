import { useReveal } from './useReveal'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useT } from '../i18n/LanguageContext'
import lightningSrc from '../assets/icons/lightning.png'
import rocketSrc from '../assets/icons/rocket.png'
import sabrosappSrc from '../assets/icons/sabrosapp.png'
import diatessaronSrc from '../assets/icons/diatessaron.svg'

import screenshotAndroid from '../assets/sabrosapp/screenshot-android.png'
import screenshotAndroidMenu from '../assets/sabrosapp/screenshot-android-menu.png'
import screenshotAndroidPerfil from '../assets/sabrosapp/screenshot-android-perfil.png'
import screenshotAndroidReservas from '../assets/sabrosapp/screenshot-android-reservas.png'
import screenshotAndroidRestaurante from '../assets/sabrosapp/screenshot-android-resturante.png'
import screenshotIphone from '../assets/sabrosapp/screenshot-iphone.png'
import screenshotMacos from '../assets/sabrosapp/screenshot-macos.png'
import bannerDiatessaron from '../assets/banners/banner-diatessaron.png'
import bannerSabrosapp from '../assets/banners/banner-sabrosapp.svg'
import bannerBodas from '../assets/banners/banner-bodas.svg'
import bannerCacalogo from '../assets/banners/banner-cacalogo.png'

import cacalogoInicio    from '../assets/cacalogo/Screenshot_20260619_155251.png'
import cacalogoNuevo     from '../assets/cacalogo/Screenshot_20260619_155327.png'
import cacalogoLaCulebra from '../assets/cacalogo/Screenshot_20260619_155344.png'
import cacalogoDetalle   from '../assets/cacalogo/Screenshot_20260619_155451.png'
import cacalogoHistorial from '../assets/cacalogo/Screenshot_20260619_155501.png'
import cacalogoGrafica   from '../assets/cacalogo/Screenshot_20260619_155510.png'
import cacalogoInforme   from '../assets/cacalogo/Screenshot_20260619_155518.png'
import cacalogoAjustes   from '../assets/cacalogo/Screenshot_20260619_155545.png'

const DEVICE_BADGE = {
  android: { label: 'Android', color: '#3ddc84' },
  ios:     { label: 'iOS',     color: '#a0a0b0' },
  macos:   { label: 'macOS',   color: '#7c7cff' },
}

const sabrosappSlides = [
  { src: screenshotAndroid,            device: 'android', label: 'Inicio'       },
  { src: screenshotAndroidMenu,        device: 'android', label: 'Menú'         },
  { src: screenshotAndroidPerfil,      device: 'android', label: 'Perfil'       },
  { src: screenshotAndroidReservas,    device: 'android', label: 'Reservas'     },
  { src: screenshotAndroidRestaurante, device: 'android', label: 'Restaurante'  },
  { src: screenshotIphone,             device: 'ios',     label: 'iOS'          },
  { src: screenshotMacos,              device: 'macos',   label: 'macOS'        },
]

const cacalogoSlides = [
  { src: cacalogoInicio,    device: 'android', label: 'Inicio'        },
  { src: cacalogoNuevo,     device: 'android', label: 'Nuevo registro' },
  { src: cacalogoLaCulebra, device: 'android', label: '¡La perfecta!' },
  { src: cacalogoDetalle,   device: 'android', label: 'Detalle'       },
  { src: cacalogoHistorial, device: 'android', label: 'Historial'     },
  { src: cacalogoGrafica,   device: 'android', label: 'Estadísticas'  },
  { src: cacalogoInforme,   device: 'android', label: 'Informe'       },
  { src: cacalogoAjustes,   device: 'android', label: 'Ajustes'       },
]

function Lightbox({ slides, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex)
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), [slides.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), [slides.length])
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape')     onCloseRef.current()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [prev, next])

  const slide = slides[current]
  const badge = DEVICE_BADGE[slide.device]

  return createPortal(
    <div onClick={() => onCloseRef.current()}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(5,5,14,0.93)', backdropFilter: 'blur(14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div onClick={e => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <button onClick={() => onCloseRef.current()}
          style={{ position: 'absolute', top: -44, right: 0, background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: 22, cursor: 'pointer', lineHeight: 1, padding: 4 }}>✕</button>

        <div style={{ position: 'relative', width: '100%' }}>
          <img src={slide.src} alt={`${badge.label} · ${slide.label}`}
            style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 14, display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }} />
          <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(5,5,14,0.82)', backdropFilter: 'blur(8px)', border: `1px solid ${badge.color}44`, borderRadius: 20, padding: '4px 10px', color: badge.color, fontSize: 11, fontFamily: 'monospace', fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: badge.color, flexShrink: 0 }} />
            {badge.label} · {slide.label}
          </div>
          <button onClick={prev} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(5,5,14,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: 20, lineHeight: 1, flexShrink: 0 }}>‹</button>
          <button onClick={next} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(5,5,14,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: 20, lineHeight: 1, flexShrink: 0 }}>›</button>
        </div>

        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              style={{ width: i === current ? 18 : 6, height: 6, borderRadius: 3, border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: i === current ? DEVICE_BADGE[s.device].color : 'rgba(255,255,255,0.18)', padding: 0, flexShrink: 0 }} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

const RingsIcon = () => (
  <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#11101a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: '0 0 0 1px rgba(255,45,120,0.12), 0 0 20px rgba(255,45,120,0.18)' }}>
    <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="28" r="11" stroke="#ff2d78" strokeWidth="2.5" fill="none"/>
      <circle cx="33" cy="28" r="11" stroke="#ff2d78" strokeWidth="2.5" fill="none"/>
      <path d="M26 22 Q28 18 30 16" stroke="#f5ff00" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="30" cy="15" r="2.5" fill="#f5ff00"/>
    </svg>
  </div>
)

const TAG_COLORS = {
  'Flutter':         { color: '#00ffe5', bg: 'rgba(0,255,229,0.07)',   border: 'rgba(0,255,229,0.25)'   },
  'Dart':            { color: '#4db8ff', bg: 'rgba(77,184,255,0.07)',  border: 'rgba(77,184,255,0.25)'  },
  'Java':            { color: '#ff6b2b', bg: 'rgba(255,107,43,0.07)', border: 'rgba(255,107,43,0.25)'  },
  'Firebase':        { color: '#f5a623', bg: 'rgba(245,166,35,0.07)', border: 'rgba(245,166,35,0.25)'  },
  'DAM':             { color: '#b44fff', bg: 'rgba(180,79,255,0.07)', border: 'rgba(180,79,255,0.25)'  },
  'Multiplataforma': { color: '#ff2d78', bg: 'rgba(255,45,120,0.07)', border: 'rgba(255,45,120,0.25)'  },
  'Web':             { color: '#8cff82', bg: 'rgba(140,255,130,0.07)',border: 'rgba(140,255,130,0.25)' },
  'Música':          { color: '#f5ff00', bg: 'rgba(245,255,0,0.07)',  border: 'rgba(245,255,0,0.25)'   },
  'Móvil':           { color: '#b44fff', bg: 'rgba(180,79,255,0.07)', border: 'rgba(180,79,255,0.25)'  },
  'Creativo':        { color: '#ff2d78', bg: 'rgba(255,45,120,0.07)', border: 'rgba(255,45,120,0.25)'  },
  'Personal':        { color: '#f5ff00', bg: 'rgba(245,255,0,0.07)',  border: 'rgba(245,255,0,0.25)'   },
  'TDD':             { color: '#7b9eff', bg: 'rgba(123,158,255,0.07)',border: 'rgba(123,158,255,0.25)' },
  'Maven':           { color: '#b44fff', bg: 'rgba(180,79,255,0.07)', border: 'rgba(180,79,255,0.25)'  },
}

const PROJECTS_STATIC = [
  {
    icon: <img src={sabrosappSrc} style={{ width: 52, height: 52, boxSizing: 'border-box', padding: 6, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', background: '#fff', boxShadow: 'inset 0 4px 10px rgba(255,255,255,0.6), 0 0 15px rgba(255,255,255,0.4)' }} alt="SabrosApp" />,
    title: 'SabrosApp — TFG',
    grade: '10',
    banner: bannerSabrosapp,
    bannerPosition: 'center',
    tags: ['Flutter', 'Java', 'Firebase', 'DAM', 'Multiplataforma'],
    links: [
      { label: '↗ Live', href: 'https://sabrosapp.netlify.app/' },
      { label: '↗ GitHub', href: 'https://github.com/JPBSdam/Proyecto-intermodular' },
    ],
    carousel: true,
    slides: sabrosappSlides,
  },
  {
    title: 'Cacálogo',
    banner: bannerCacalogo,
    bannerPosition: 'center',
    tags: ['Flutter', 'Dart', 'Móvil', 'Personal'],
    links: [
      { label: '↗ Google Play Store soon! (status: only for testers)', },
    ],
    carousel: true,
    slides: cacalogoSlides,
  },
  {
    icon: <img src={diatessaronSrc} style={{ width: 52, height: 52, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', boxShadow: 'inset 0 4px 10px rgba(255,255,255,0.6), 0 0 15px rgba(255,255,255,0.4)' }} alt="Diatessaron" />,
    title: 'Coro Diatessaron',
    banner: bannerDiatessaron,
    bannerPosition: 'center',
    tags: ['Web', 'Música'],
    links: [
      { label: '↗ Live', href: 'https://corodiatessaron.netlify.app' },
      { label: '↗ GitHub', href: 'https://github.com/lapencadev/Diatessaron' },
    ],
  },
  {
    icon: <img src={lightningSrc} style={{ width: 52, height: 52, boxSizing: 'border-box', padding: 8, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', background: '#11101a', filter: 'drop-shadow(0 0 12px rgba(255,233,27,0.45))' }} alt="Closet App" />,
    title: 'Closet App',
    tags: ['Flutter', 'Dart', 'Móvil'],
    links: [
      { label: '↗ GitHub', href: 'https://github.com/lapencadev/closet-app' },
    ],
  },
  {
    icon: <img src={rocketSrc} style={{ width: 52, height: 52, boxSizing: 'border-box', padding: 8, objectFit: 'contain', marginBottom: 16, borderRadius: '50%', background: '#11101a', filter: 'drop-shadow(0 0 12px rgba(255,107,43,0.5))' }} alt="Kata Mars Rover" />,
    title: 'Kata · Mars Rover',
    tags: ['Java', 'TDD', 'Maven'],
    links: [
      { label: '↗ GitHub', href: 'https://github.com/lapencadev/kata_rover-mars' },
    ],
  },
  {
    icon: <RingsIcon />,
    title: 'Webs contador del día de la boda',
    banner: bannerBodas,
    bannerPosition: 'center',
    tags: ['Web', 'Creativo', 'Personal'],
    links: [
      { label: '↗ Ana & Cristian', href: 'https://ana-y-cristian.info/', github: 'https://github.com/lapencadev/ana-and-cristian' },
      { label: '↗ Inma & Pedro', href: 'https://inma-y-pedro.info/', github: 'https://github.com/lapencadev/inma-and-pedro' },
    ],
  },
]


function ProjectCard({ project, delay }) {
  const ref = useReveal()
  const { t } = useT()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div ref={ref} className="reveal rounded-lg relative overflow-hidden transition-all duration-300"
      style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.07)', transitionDelay: `${delay}ms`, display: 'flex', flexDirection: 'column' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,45,120,0.22)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow = 'none' }}>

      {project.banner && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1200/630', overflow: 'hidden', flexShrink: 0 }}>
          <img src={project.banner} alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: project.bannerPosition ?? 'center', display: 'block', filter: 'brightness(0.9)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 70%, rgba(18,18,26,0.5) 88%, #12121a 100%)' }} />
        </div>
      )}

      <div className="p-6" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.03) 0%, transparent 55%)' }} />

        {!project.banner && project.icon}

        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <div className="font-display font-bold text-white leading-tight" style={{ fontSize: 15 }}>{project.title}</div>
          {project.grade && (
            <span className="font-mono font-bold" style={{ fontSize: 11, color: '#f5ff00', background: 'rgba(245,255,0,0.10)', border: '1px solid rgba(245,255,0,0.45)', borderRadius: 4, padding: '3px 9px', letterSpacing: '0.08em', whiteSpace: 'nowrap', boxShadow: '0 0 12px rgba(245,255,0,0.22), inset 0 0 8px rgba(245,255,0,0.06)', textShadow: '0 0 10px rgba(245,255,0,0.6)' }}>
              🏆 {project.grade}/10 · {t('projects.gradeLabel')}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: '#8a8aaa' }}>{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => {
            const c = TAG_COLORS[tag]
            return c
              ? <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-sm border" style={{ background: c.bg, color: c.color, borderColor: c.border }}>{tag}</span>
              : <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-sm border" style={{ background: '#1a1a26', color: '#8a8aaa', borderColor: 'rgba(255,255,255,0.07)' }}>{tag}</span>
          })}
        </div>

        {/* Spacer empuja links al fondo */}
        <div style={{ flex: 1 }} />

        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
          {project.carousel && (
            <button onClick={() => setLightboxOpen(true)}
              className="font-mono text-xs transition-colors"
              style={{ color: '#b44fff', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 4 }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-pink)'}
              onMouseLeave={e => e.currentTarget.style.color = '#b44fff'}>
              📸 {t('projects.screenshotsLabel')}
            </button>
          )}
          {project.links.map(l => (
            <span key={l.href} className="flex items-center gap-2">
              <a href={l.href} target="_blank" rel="noreferrer"
                className="font-mono text-xs transition-colors"
                style={{ color: 'var(--neon-cyan)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-pink)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--neon-cyan)'}>
                {l.label}
              </a>
              {l.github && (
                <a href={l.github} target="_blank" rel="noreferrer" title="Ver repositorio"
                  style={{ color: '#8a8aaa', lineHeight: 0, transition: 'color 0.2s', flexShrink: 0, marginLeft: 2 }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--neon-pink)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#8a8aaa'}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
            </span>
          ))}
        </div>
      </div>

      {project.carousel && project.slides && lightboxOpen && (
        <Lightbox slides={project.slides} initialIndex={0} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}

export default function Projects() {
  const titleRef = useReveal()
  const { t } = useT()
  const items = t('projects.items')
  const projects = PROJECTS_STATIC.map((p, i) => ({ ...p, desc: items[i]?.desc ?? '' }))

  const withBanner    = projects.filter(p =>  p.banner)
  const withoutBanner = projects.filter(p => !p.banner)

  return (
    <section id="projects" className="section-padded" style={{ padding: '64px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div ref={titleRef} className="reveal mb-16">
        <div className="font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3" style={{ color: 'var(--neon-pink)' }}>
          {t('projects.sectionLabel')} <div style={{ flex: 1, height: 1, background: 'rgba(255,45,120,0.3)' }} />
        </div>
        <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'clamp(28px,3vw,42px)' }}>
          {t('projects.title')}<br /><span style={{ color: 'var(--neon-orange)' }}>{t('projects.titleAccent')}</span>
        </h2>
      </div>

      {/* Fila con banners — stretch por defecto, spacer interno empuja links al fondo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {withBanner.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 80} />)}
      </div>

      {/* Fila sin banners */}
      {withoutBanner.length > 0 && (
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
          {withoutBanner.map((p, i) => <ProjectCard key={p.title} project={p} delay={(withBanner.length + i) * 80} />)}
        </div>
      )}
    </section>
  )
}
