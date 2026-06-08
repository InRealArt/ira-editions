'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('ira-theme') as 'dark' | 'light' | null
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute('data-theme', stored === 'light' ? 'light' : '')
    }
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('ira-theme', next)
    document.documentElement.setAttribute('data-theme', next === 'light' ? 'light' : '')
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      style={{
        background: 'none',
        border: '1px solid var(--border-light)',
        cursor: 'pointer',
        padding: '0.45rem 0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'border-color 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        borderRadius: 0,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold-accent)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}
    >
      {/* Sun / Moon icon */}
      {isDark ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      <span style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '0.5rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--gray-text)',
      }}>
        {isDark ? 'Clair' : 'Sombre'}
      </span>
    </button>
  )
}
