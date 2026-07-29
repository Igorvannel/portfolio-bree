"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  const links = [
    { href: "#apropos", label: t.nav.about },
    { href: "#accueil", label: t.nav.home },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#parcours", label: t.nav.journey },
    { href: "#contact", label: t.nav.contact },
  ]

  const LangSwitch = ({ className = "" }: { className?: string }) => (
      <button
          onClick={toggleLang}
          className={`flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold tracking-wide hover:bg-white/10 transition-colors ${className}`}
          aria-label="Toggle language"
      >
        <span className={lang === "fr" ? "text-white" : "text-white/50"}>FR</span>
        <span className="text-white/40">/</span>
        <span className={lang === "en" ? "text-white" : "text-white/50"}>EN</span>
      </button>
  )

  return (
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-3 bg-[#1e0044]/60 backdrop-blur-md">
        <nav
            className="flex items-center justify-between w-full max-w-[1880px] h-14 px-6 sm:px-10 lg:px-14 py-2.5 rounded-xl text-white relative z-20 mx-auto"
            style={{
              background: "#FFFFFF1A",
              fontFamily: "Montserrat, sans-serif",
            }}
        >
          <div className="text-lg sm:text-xl font-bold"></div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <LangSwitch />
            <button
                className="text-white focus:outline-none z-30"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
              <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex gap-7 text-sm font-normal items-center">
            {links.map((link) => (
                <li key={link.href} className="hover:text-purple-300 transition-colors cursor-pointer">
                  <a href={link.href}>{link.label}</a>
                </li>
            ))}
            <li>
              <LangSwitch />
            </li>
          </ul>

          {/* Mobile menu */}
          {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#2d1b4e]/95 backdrop-blur-md rounded-xl shadow-lg z-20">
                <ul className="flex flex-col gap-4 p-6 text-base font-normal">
                  {links.map((link) => (
                      <li
                          key={link.href}
                          className="hover:text-purple-300 transition-colors cursor-pointer"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        <a href={link.href}>{link.label}</a>
                      </li>
                  ))}
                </ul>
              </div>
          )}
        </nav>
      </div>
  )
}

export default Navbar