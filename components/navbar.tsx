"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav
      className="flex items-center justify-between w-full max-w-[1880px] h-16 px-8 sm:px-12 lg:px-16 py-3 rounded-xl text-white relative z-20 mx-auto"
      style={{
        background: "#FFFFFF1A",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="text-xl sm:text-2xl font-bold"></div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden text-white focus:outline-none z-30"
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

      {/* Desktop menu */}
      <ul className="hidden lg:flex gap-8 text-base font-normal items-center">
        <li className="hover:text-purple-300 transition-colors cursor-pointer">
          <a href="#apropos">A Propos</a>
        </li>
        <li className="hover:text-purple-300 transition-colors cursor-pointer">
          <a href="#accueil">Accueil</a>
        </li>
        <li className="hover:text-purple-300 transition-colors cursor-pointer">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-purple-300 transition-colors cursor-pointer">
          <a href="#parcours">Parcours</a>
        </li>
        <li className="hover:text-purple-300 transition-colors cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[#FFFFFF1A] backdrop-blur-md rounded-xl shadow-lg z-20">
          <ul className="flex flex-col gap-4 p-6 text-base font-normal">
            <li className="hover:text-purple-300 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <a href="#apropos">A Propos</a>
            </li>
            <li className="hover:text-purple-300 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <a href="#accueil">Accueil</a>
            </li>
            <li className="hover:text-purple-300 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-purple-300 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <a href="#parcours">Parcours</a>
            </li>
            <li className="hover:text-purple-300 transition-colors cursor-pointer" onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
