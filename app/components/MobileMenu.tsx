'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <span style={{
          display: 'block',
          width: '22px',
          height: '1px',
          background: 'var(--text)',
          transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '1px',
          background: 'var(--text)',
          transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          opacity: isOpen ? 0 : 1,
        }} />
        <span style={{
          display: 'block',
          width: '22px',
          height: '1px',
          background: 'var(--text)',
          transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
        }} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 40,
            }}
          />
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '72vw',
            maxWidth: '320px',
            height: '100%',
            background: 'var(--card)',
            borderLeft: '1px solid var(--border-light)',
            zIndex: 50,
            display: 'flex',
            flexDirection: 'column',
            padding: '5rem 2.5rem 3rem',
          }}>
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '1.75rem',
                right: '1.75rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--gray-text)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              Fermer
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { label: 'À propos', href: 'https://www.inrealart.com/about' },
                { label: 'Manifeste', href: 'https://www.inrealart.com/manifest' },
                { label: 'Nous rejoindre', href: 'https://calendly.com/teaminrealart/demande-de-rdv' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  target="_blank"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 300,
                    fontSize: '1.6rem',
                    letterSpacing: '0.02em',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'color 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '1.25rem',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--gold-accent)',
            }}>
              IRA Éditions
            </div>
          </div>
        </>
      )}
    </div>
  )
}
