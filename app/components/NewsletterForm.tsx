'use client'

import { useState } from 'react'
import { addContactToBrevo } from '../utils/brevoService'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const result = await addContactToBrevo({
        email,
        listId: 43,
        language: 'fr',
        source: 'IRA Editions Newsletter'
      })

      if (result.success) {
        setIsSuccess(true)
        setMessage('Merci pour votre inscription. Vérifiez votre boîte mail pour confirmer.')
        setEmail('')
      } else {
        if (result.message.includes('déjà existant') || result.message.includes('Contact already exists')) {
          setMessage('Vous êtes déjà inscrit à notre lettre.')
          setIsSuccess(true)
        } else {
          setIsSuccess(false)
          setMessage(result.message || 'Une erreur est survenue. Veuillez réessayer.')
        }
      }
    } catch {
      setIsSuccess(false)
      setMessage('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'stretch' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse e-mail"
          required
          disabled={isLoading}
          style={{
            flex: 1,
            padding: '1rem 1.4rem',
            background: 'var(--soft-gray)',
            border: '1px solid var(--border-light)',
            borderRight: 'none',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            outline: 'none',
            borderRadius: 0,
            transition: 'border-color 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold-accent)')}
          onBlur={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          style={{
            padding: '1rem 1.8rem',
            background: 'transparent',
            border: '1px solid var(--gold-accent)',
            color: 'var(--gold-accent)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            cursor: isLoading || !email ? 'not-allowed' : 'pointer',
            opacity: isLoading || !email ? 0.4 : 1,
            transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
            whiteSpace: 'nowrap',
            borderRadius: 0,
          }}
          onMouseEnter={e => {
            if (!isLoading && email) {
              e.currentTarget.style.background = 'var(--gold-accent)'
              e.currentTarget.style.color = 'var(--background)'
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--gold-accent)'
          }}
        >
          {isLoading ? '…' : "S'inscrire"}
        </button>
      </div>

      {message && (
        <p
          style={{
            marginTop: '1rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            color: isSuccess ? 'var(--gold-accent)' : '#e57373',
          }}
        >
          {message}
        </p>
      )}
    </form>
  )
}
