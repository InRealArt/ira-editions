'use client'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function NavLink({ href, children, style }: NavLinkProps) {
  return (
    <a
      target="_blank"
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--gray-text)',
        textDecoration: 'none',
        transition: 'color 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        ...style,
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-accent)')}
      onMouseLeave={e => (e.currentTarget.style.color = (style?.color as string) || 'var(--gray-text)')}
    >
      {children}
    </a>
  )
}
