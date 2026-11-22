import { useReveal } from './useReveal'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useT } from '../i18n/LanguageContext'
import WordHeading from './WordHeading'
import lightningSrc from '../assets/icons/lightning.png'
import rocketSrc from '../assets/icons/rocket.png'
import codeSrc from '../assets/icons/code.png'
import catSrc from '../assets/icons/cat.png'

import screenshotAndroid from '../assets/sabrosapp/screenshot-android.png'
import screenshotAndroidMenu from '../assets/sabrosapp/screenshot-android-menu.png'
import screenshotAndroidPerfil from '../assets/sabrosapp/screenshot-android-perfil.png'
import screenshotAndroidReservas from '../assets/sabrosapp/screenshot-android-reservas.png'
import screenshotAndroidRestaurante from '../assets/sabrosapp/screenshot-android-resturante.png'
import screenshotIphone from '../assets/sabrosapp/screenshot-iphone.png'
import screenshotMacos from '../assets/sabrosapp/screenshot-macos.png'
import bannerDiatessaron from '../assets/banners/banner-diatessaron.png'
import bannerSabrosapp from '../assets/banners/banner-sabrosapp.svg'
import bannerCacalogo from '../assets/banners/banner-cacalogo.png'

import cacalogoInicio    from '../assets/cacalogo/Screenshot_20260619_155251.png'
import cacalogoNuevo     from '../assets/cacalogo/Screenshot_20260619_155327.png'
import cacalogoLaCulebra from '../assets/cacalogo/Screenshot_20260619_155344.png'
import cacalogoDetalle   from '../assets/cacalogo/Screenshot_20260619_155451.png'
import cacalogoHistorial from '../assets/cacalogo/Screenshot_20260619_155501.png'
import cacalogoGrafica   from '../assets/cacalogo/Screenshot_20260619_155510.png'
import cacalogoInforme   from '../assets/cacalogo/Screenshot_20260619_155518.png'
import cacalogoAjustes   from '../assets/cacalogo/Screenshot_20260619_155545.png'

import tabletPanelEs   from '../assets/tablet/panel-es.png'
import tabletPanelEn   from '../assets/tablet/panel-en.png'
import tabletMeal      from '../assets/tablet/meal-detail.png'
import tabletLists     from '../assets/tablet/long-lists-672.png'
import tabletNight     from '../assets/tablet/night.png'
import tabletMonth     from '../assets/tablet/calendar-month.png'
import tabletWeek      from '../assets/tablet/calendar-week.png'
import tabletWork      from '../assets/tablet/work-week.png'
import tabletTelegram  from '../assets/tablet/telegram-es.png'

const DEVICE_LABEL = { android: 'Android', ios: 'iOS', macos: 'macOS', tablet: 'Tablet', telegram: 'Telegram' }

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

// Capturas del repo old-tablet-dashboard; las etiquetas salen de projects.tabletSlides
const tabletSlides = [
  { src: { es: tabletPanelEs, en: tabletPanelEn }, device: 'tablet' },
  { src: tabletMeal,     device: 'tablet' },
  { src: tabletLists,    device: 'tablet' },
  { src: tabletNight,    device: 'tablet' },
  { src: tabletMonth,    device: 'tablet' },
  { src: tabletWeek,     device: 'tablet' },
  { src: tabletWork,     device: 'tablet' },
  { src: tabletTelegram, device: 'telegram' },
]

// Cada proyecto toma su descripción de projects.items[id] en es.json / en.json
const PROJECTS_STATIC = [
  {
    id: 'tablet',
    title: 'Old Tablet Dashboard',
    banner: { es: tabletPanelEs, en: tabletPanelEn },
    bannerFit: 'top',
    tags: ['Python', 'JavaScript', 'Home Assistant', 'Telegram'],
    links: [{ label: 'GitHub', href: 'https://github.com/lapencadev/old-tablet-dashboard' }],
    slides: tabletSlides,
    slideLabels: 'projects.tabletSlides',
  },
  {
    id: 'sabrosapp',
    title: 'SabrosApp — TFG',
    grade: '10',
    banner: bannerSabrosapp,
    tags: ['Flutter', 'Java', 'Firebase', 'DAM', 'Multiplataforma'],
    links: [
      { label: 'Live', href: 'https://sabrosapp.netlify.app/' },
      { label: 'GitHub', href: 'https://github.com/JPBSdam/Proyecto-intermodular' },
    ],
    slides: sabrosappSlides,
  },
  {
    id: 'cacalogo',
    title: 'Cacálogo',
    banner: bannerCacalogo,
    tags: ['Flutter', 'Dart', 'Android', 'Personal'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.lapencadev.cacalogo', icon: 'playstore' },
    ],
    slides: cacalogoSlides,
  },
  {
    id: 'diatessaron',
    title: 'Coro Diatessaron',
    banner: bannerDiatessaron,
    tags: ['Astro', 'Tailwind', 'Web', 'Música'],
    links: [
      { label: 'Live', href: 'https://corodiatessaron.es' },
      { label: 'GitHub', href: 'https://github.com/lapencadev/Diatessaron' },
    ],
  },
  {
    id: 'nlp',
    icon: { img: codeSrc },
    title: 'Prompt Engineering',
    tags: ['Python', 'spaCy', 'FastAPI'],
    links: [{ label: 'GitHub', href: 'https://github.com/lapencadev/prompt-engineering' }],
  },
  {
    id: 'closet',
    icon: { img: lightningSrc },
    title: 'Closet App',
    tags: ['Flutter', 'Dart', 'Móvil'],
    links: [{ label: 'GitHub', href: 'https://github.com/lapencadev/closet-app' }],
  },
  {
    id: 'kata',
    icon: { img: rocketSrc },
    title: 'Kata · Mars Rover',
    tags: ['Java', 'TDD', 'Maven'],
    links: [{ label: 'GitHub', href: 'https://github.com/lapencadev/kata_rover-mars' }],
  },
  {
    id: 'bodas',
    icon: { img: catSrc },
    title: 'Webs contador del día de la boda',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { label: 'Ana & Cristian', href: 'https://ana-y-cristian.info/', github: 'https://github.com/lapencadev/ana-and-cristian' },
      { label: 'Inma & Pedro', href: 'https://inma-y-pedro.info/', github: 'https://github.com/lapencadev/inma-and-pedro' },
    ],
  },
]

const PlayStoreIcon = () => (
  <svg width="14" height="14" viewBox="0 0 512 512" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path fill="#00d2ff" d="M32.5 15.5C24 24 20 37 20 53.5v405c0 16.5 4 29.5 12.5 38l2 2L266 267v-3L34.5 13.5z"/>
    <path fill="#00f076" d="M343 344.5l-77-77v-3l77-77 1.7 1 91.3 51.9c26 14.8 26 39 0 53.8L344.7 344z"/>
    <path fill="#ff3a44" d="M344.7 344l-78.7-78.7L32.5 496.5c8.7 9.2 23 10.3 39.2 1.2L344.7 344"/>
    <path fill="#ffcf00" d="M344.7 187.9L71.7 34.3C55.5 25.2 41.2 26.3 32.5 35.5L266 269z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

function Lightbox({ slides, onClose }) {
  const { t } = useT()
  const [current, setCurrent] = useState(0)
  const prev = useCallback(() => setCurrent(i => (i - 1 + slides.length) % slides.length), [slides.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % slides.length), [slides.length])
  const onCloseRef = useRef(onClose)
  const closeBtnRef = useRef(null)
  useEffect(() => { onCloseRef.current = onClose })

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape')     onCloseRef.current()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [prev, next])

  const slide = slides[current]

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" onClick={() => onCloseRef.current()}>
      <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
        <button ref={closeBtnRef} className="lightbox-close" onClick={() => onCloseRef.current()} aria-label={t('projects.close')}>✕</button>
        <div className="lightbox-stage">
          <img src={slide.src} alt={`${DEVICE_LABEL[slide.device]} · ${slide.label}`} />
          <span className="lightbox-badge mono-meta">{DEVICE_LABEL[slide.device]} · {slide.label}</span>
          <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label={t('projects.prev')}>‹</button>
          <button className="lightbox-nav lightbox-next" onClick={next} aria-label={t('projects.next')}>›</button>
        </div>
        <div className="lightbox-dots">
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={s.label} aria-current={i === current}
              className={i === current ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

function ProjectCard({ project, delay }) {
  const ref = useReveal()
  const { t } = useT()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <article ref={ref} className="reveal card card-hover project" style={{ transitionDelay: `${delay}ms` }}>
      {project.banner && (
        <div className={`project-banner ${project.bannerFit === 'top' ? 'is-top' : ''}`}>
          <img src={project.banner} alt="" loading="lazy" />
        </div>
      )}

      <div className="project-body">
        {!project.banner && project.icon && (
          <div className="project-icon" aria-hidden="true">
            {project.icon.emoji ?? <img src={project.icon.img} alt="" />}
          </div>
        )}

        <div className="project-title-row">
          <h3 className="project-title serif">{project.title}</h3>
          {project.grade && (
            <mark className="y project-grade">🏆 {project.grade}/10 · {t('projects.gradeLabel')}</mark>
          )}
        </div>

        <p className="project-desc">{project.desc}</p>
        <p className="project-tags mono-meta">{project.tags.join(' · ')}</p>

        <div className="project-links">
          {project.slides && (
            <button className="link" onClick={() => setLightboxOpen(true)}>
              📸 {t('projects.screenshotsLabel')}
            </button>
          )}
          {project.links.map(l => (
            <span key={l.href} className="project-link">
              <a className="link" href={l.href} target="_blank" rel="noreferrer"
                title={l.icon === 'playstore' ? t('projects.play') : undefined}>
                {l.icon === 'playstore' && <PlayStoreIcon />}
                {l.label} ↗
              </a>
              {l.github && (
                <a className="project-gh" href={l.github} target="_blank" rel="noreferrer"
                  aria-label={`${t('projects.repo')} · ${l.label}`} title={t('projects.repo')}>
                  <GitHubIcon />
                </a>
              )}
            </span>
          ))}
        </div>
      </div>

      {project.slides && lightboxOpen && (
        <Lightbox slides={project.slides} onClose={() => setLightboxOpen(false)} />
      )}
    </article>
  )
}

export default function Projects() {
  const { t, lang } = useT()
  const items = t('projects.items')
  // Algunas imágenes cambian con el idioma: { es, en }
  const pick = v => (v && typeof v === 'object' ? v[lang] : v)
  const projects = PROJECTS_STATIC.map(p => ({
    ...p,
    desc: items[p.id]?.desc ?? '',
    banner: pick(p.banner),
    slides: p.slides?.map((sl, i) => ({
      ...sl,
      src: pick(sl.src),
      label: p.slideLabels ? t(p.slideLabels)[i] : sl.label,
    })),
  }))

  const withBanner    = projects.filter(p =>  p.banner)
  const withoutBanner = projects.filter(p => !p.banner)

  return (
    <section id="projects" className="section container-page">
      <WordHeading id="projects" />
      <div className="projects-grid projects-grid-banner">
        {withBanner.map((p, i) => <ProjectCard key={p.title} project={p} delay={(i % 2) * 80} />)}
      </div>
      <div className="projects-grid projects-grid-small">
        {withoutBanner.map((p, i) => <ProjectCard key={p.title} project={p} delay={(i % 4) * 80} />)}
      </div>
    </section>
  )
}
