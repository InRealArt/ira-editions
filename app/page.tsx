import NewsletterForm from './components/NewsletterForm'
import AnimatedPhoneMockups from './components/AnimatedPhoneMockups'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col">
      {/* Header */}
      <header className="w-full px-8 py-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-black font-bold text-3xl leading-none">IRA</span>
          <span className="text-black font-bold text-3xl leading-none mt-0.5">Editions</span>
        </div>
        <nav className="flex gap-6 text-black font-medium text-base">
          <a target='_blank' href="https://www.inrealart.com/about" className="hover:opacity-70 transition-opacity">À propos</a>
          <a target='_blank' href="https://www.inrealart.com/manifest" className="hidden md:block hover:opacity-70 transition-opacity">Manifeste</a>
          <a target='_blank' href="https://calendly.com/teaminrealart/demande-de-rdv" className="hidden md:block hover:opacity-70 transition-opacity">Nous rejoindre</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full relative">
        {/* Right Section - Content (shows first on mobile) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:sticky lg:top-24 lg:self-start order-1 lg:order-2">
          <h1 className="text-black font-bold text-3xl lg:text-4xl leading-tight">
            Des mots qui éveillent.
          </h1>
          <h2 className="text-black font-bold text-3xl lg:text-4xl leading-tight">
            Des œuvres qui résonnent.
          </h2>
          <h3 className="text-black font-bold text-3xl lg:text-4xl leading-tight">
            Des esprits qui s'élèvent.
          </h3>
          
          <p className="text-black text-lg leading-relaxed mt-4">
            Rejoignez la communauté des lecteurs qui font vivre la culture autrement.
          </p>
          <p className="text-black text-lg leading-relaxed">
            Des centaines de lecteurs déjà conquis par nos lettres.
          </p>
          
          <div className="mt-6">
            <NewsletterForm />
          </div>
          
          <p className="text-sm text-black/70 leading-relaxed mt-2">
            Publication indépendante et sans publicité, IRA Éditions respecte votre liberté autant que votre lecture. 
            Vos données ne seront jamais partagées, et votre désinscription reste possible à tout instant.
          </p>
        </div>

        {/* Left Section - Animated Phone Mockups (shows second on mobile) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
          <AnimatedPhoneMockups />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 py-6 border-t border-black/10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black/60">
            © 2025 IRA Editions. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-black/60">
            <a target='_blank' href="https://www.inrealart.com/legal" className="hover:text-black transition-colors">Mentions légales</a>
            <a target='_blank' href="https://www.inrealart.com/terms" className="hover:text-black transition-colors">Politique de confidentialité</a>
            <a target='_blank' href="https://www.inrealart.com" className="hover:text-black transition-colors">InRealArt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
