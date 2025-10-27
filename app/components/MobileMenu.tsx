'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={toggleMenu}
          />
          <div 
            className={`fixed top-0 right-0 w-2/3 h-full bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <nav className="flex flex-col gap-6 p-8 pt-24">
              <a
                target="_blank"
                href="https://www.inrealart.com/about"
                onClick={toggleMenu}
                className="hover:opacity-70 transition-opacity text-black font-medium text-lg"
              >
                À propos
              </a>
              <a
                target="_blank"
                href="https://www.inrealart.com/manifest"
                onClick={toggleMenu}
                className="hover:opacity-70 transition-opacity text-black font-medium text-lg"
              >
                Manifeste
              </a>
              <a
                target="_blank"
                href="https://calendly.com/teaminrealart/demande-de-rdv"
                onClick={toggleMenu}
                className="hover:opacity-70 transition-opacity text-black font-medium text-lg"
              >
                Nous rejoindre
              </a>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
