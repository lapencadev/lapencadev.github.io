import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const media = () => window.matchMedia('(prefers-color-scheme: dark)')

// Tema efectivo: lo elegido a mano (data-theme, puesto en index.html antes de pintar)
// o, si no, la preferencia del sistema.
function current() {
  const forced = document.documentElement.dataset.theme
  if (forced === 'light' || forced === 'dark') return forced
  return media().matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(current)

  useEffect(() => {
    const mq = media()
    const onChange = () => setTheme(current())
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem(STORAGE_KEY, next) } catch { /* modo privado: solo para esta visita */ }
    setTheme(next)
  }, [])

  return { theme, toggle }
}
