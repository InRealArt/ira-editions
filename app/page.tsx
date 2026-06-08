import NewsletterForm from './components/NewsletterForm'
import StaticPhoneMockup from './components/StaticPhoneMockup'
import MobileMenu from './components/MobileMenu'
import NavLink from './components/NavLink'
import ThemeToggle from './components/ThemeToggle'

const navLinks = [
  { label: 'À propos', href: 'https://www.inrealart.com/about' },
  { label: 'Manifeste', href: 'https://www.inrealart.com/manifest' },
  { label: 'Nous rejoindre', href: 'https://calendly.com/teaminrealart/demande-de-rdv' },
]

const footerLinks = [
  { label: 'Mentions légales', href: 'https://www.inrealart.com/legal' },
  { label: 'Confidentialité', href: 'https://www.inrealart.com/terms' },
  { label: 'InRealArt', href: 'https://www.inrealart.com' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--text)' }}>

      {/* Header */}
      <header
        className="w-full px-8 lg:px-16 py-7 flex justify-between items-center"
        style={{ borderBottom: '1px solid var(--border-light)' }}
      >
        <div className="flex flex-col leading-none">
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: '1.75rem',
            letterSpacing: '0.12em',
            color: 'var(--text)',
            lineHeight: 1,
          }}>
            IRA
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: 'var(--gold-accent)',
            marginTop: '0.3rem',
            lineHeight: 1,
          }}>
            Éditions
          </span>
        </div>

        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map(({ label, href }) => (
            <NavLink key={label} href={href}>{label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full px-8 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start max-w-7xl mx-auto w-full">

        {/* Left — Phone Mockup */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-up">
          <StaticPhoneMockup />
        </div>

        {/* Right — Content */}
        <div className="w-full lg:w-7/12 flex flex-col gap-0 lg:self-center order-1 lg:order-2">

          <span className="display animate-fade-up" style={{ color: 'var(--gold-accent)', marginBottom: '2rem' }}>
            Lettre d&apos;art indépendante
          </span>

          <div className="animate-fade-up" style={{ marginBottom: '2.5rem' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.15,
              color: 'var(--text)',
              margin: 0,
            }}>
              Des mots qui éveillent.
            </h1>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.15,
              color: 'var(--gold-accent)',
              margin: '0.2em 0',
            }}>
              Des œuvres qui résonnent.
            </h2>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 300,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.15,
              color: 'var(--text)',
              margin: 0,
            }}>
              Des esprits qui s&apos;élèvent.
            </h3>
          </div>

          <div className="animate-fade-up-d" style={{
            width: '3rem',
            height: '1px',
            background: 'var(--gold-accent)',
            marginBottom: '2rem',
          }} />

          <div className="animate-fade-up-d" style={{ marginBottom: '2.5rem' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: 'var(--gray-text)',
              margin: '0 0 0.75rem',
            }}>
              Rejoignez la communauté des lecteurs qui font vivre la culture autrement.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: 'var(--gray-text)',
              margin: 0,
            }}>
              Des centaines de lecteurs déjà conquis par nos lettres.
            </p>
          </div>

          <div className="animate-fade-right" style={{ marginBottom: '1.5rem' }}>
            <NewsletterForm />
          </div>

          <p className="animate-fade-right" style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.65rem',
            letterSpacing: '0.05em',
            lineHeight: 1.8,
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}>
            Publication indépendante et sans publicité. Vos données ne seront jamais partagées,
            et votre désinscription reste possible à tout instant.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="w-full px-8 lg:px-16 py-8"
        style={{ borderTop: '1px solid var(--border-light)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gray-text)',
            margin: 0,
          }}>
            © 2025 IRA Éditions — Tous droits réservés
          </p>
          <div className="flex gap-8">
            {footerLinks.map(({ label, href }) => (
              <NavLink
                key={label}
                href={href}
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
