"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type Lang } from "./translations"

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  setLang: (lang: Lang) => void
  t: typeof translations["fr"]
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr")

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("site-lang") as Lang | null
      if (saved === "fr" || saved === "en") setLangState(saved)
    } catch (e) {
      /* ignore */
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    try {
      window.localStorage.setItem("site-lang", newLang)
    } catch (e) {
      /* ignore */
    }
  }

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr")

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
