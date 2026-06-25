import { createContext, useContext, useState } from 'react'
import es from './es.json'
import en from './en.json'

const translations = { es, en }
const Ctx = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  const t = key => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) val = val?.[k]
    return val ?? key
  }

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useT = () => useContext(Ctx)
