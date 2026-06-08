import Image from 'next/image'

export default function StaticPhoneMockup() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '280px' }}>

        {/* Subtle gold glow behind the phone */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          background: 'radial-gradient(ellipse at center, rgba(184,156,114,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Phone frame */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          aspectRatio: '9 / 19',
          background: 'linear-gradient(160deg, #1e1e1e 0%, #111111 100%)',
          border: '1px solid rgba(184,156,114,0.25)',
          borderRadius: '2.5rem',
          padding: '0.75rem',
          boxShadow: '0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}>
          {/* Screen */}
          <div style={{
            width: '100%',
            height: '100%',
            background: '#000',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Status bar */}
            <div style={{
              height: '1.75rem',
              background: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 1rem',
              position: 'relative',
              zIndex: 2,
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.6)',
              }}>9:03</span>
              <div style={{
                width: '1rem',
                height: '0.5rem',
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '2px',
              }} />
            </div>

            {/* App image */}
            <div style={{ position: 'relative', height: 'calc(100% - 1.75rem)' }}>
              <Image
                src="/mockups/mockup.png"
                alt="IRA Editions"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 280px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Gold thin line accent — left side */}
        <div style={{
          position: 'absolute',
          left: '-1.5rem',
          top: '15%',
          height: '30%',
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--gold-accent), transparent)',
          opacity: 0.4,
        }} />
      </div>
    </div>
  )
}
