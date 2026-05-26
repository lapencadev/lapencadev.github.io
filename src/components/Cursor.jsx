import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      mx.current = e.clientX; my.current = e.clientY
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx.current - 18}px, ${ry.current - 18}px)`
      rafRef.current = requestAnimationFrame(animRing)
    }
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '50px'
        ringRef.current.style.height = '50px'
        ringRef.current.style.borderColor = 'var(--neon-pink)'
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'var(--neon-cyan)'
      }
    }
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    rafRef.current = requestAnimationFrame(animRing)
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
