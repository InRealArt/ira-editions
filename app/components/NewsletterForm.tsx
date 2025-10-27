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
      // Use list ID 2 for the newsletter (you may need to change this)
      const result = await addContactToBrevo({
        email,
        listId: 43,
        language: 'fr',
        source: 'IRA Editions Newsletter'
      })

      if (result.success) {
        setIsSuccess(true)
        setMessage('Merci pour votre inscription ! Vérifiez votre boîte mail pour confirmer.')
        setEmail('')
      } else {
        setIsSuccess(false)
        // Check if it's a duplicate error
        if (result.message.includes('déjà existant') || result.message.includes('Contact already exists')) {
          setMessage('Merci ! Vous êtes déjà inscrit à notre newsletter.')
          setIsSuccess(true) // Show as success since it's not really an error
        } else {
          setMessage(result.message || 'Une erreur est survenue. Veuillez réessayer.')
        }
      }
    } catch (error) {
      setIsSuccess(false)
      setMessage('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre e-mail"
          required
          disabled={isLoading}
          className="w-full px-6 py-4 rounded-xl text-white placeholder-white/80 font-medium text-lg bg-gradient-to-r from-[#8A63F8] to-[#6A3EE8] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-[#6A3EE8] rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : '→'}
        </button>
      </div>
      {message && (
        <p className={`mt-4 text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
