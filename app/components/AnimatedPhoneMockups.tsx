'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

interface PhoneMockup {
  title: string
  description: string
  color: string
}

const mockups: PhoneMockup[] = [
  {
    title: "Portrait d'artiste : Création et réflexion",
    description: "Découvrez les artistes qui façonnent le monde de l'art contemporain...",
    color: "from-purple-500 to-blue-600"
  },
  {
    title: "Techniques et savoir-faire",
    description: "Explorez les secrets des techniques artistiques modernes...",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Marché de l'art contemporain",
    description: "Analyse et tendances du marché de l'art d'aujourd'hui...",
    color: "from-orange-500 to-amber-600"
  }
]

export default function AnimatedPhoneMockups() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(Math.floor(latest * mockups.length), mockups.length - 1)
    setCurrentIndex(newIndex)
  })

  return (
    <div ref={containerRef} className="w-full h-[400vh] flex justify-center">
      <div className="sticky top-24 w-full max-w-[400px] flex justify-center h-screen">
        <div className="relative w-full h-full">
          {mockups.map((mockup, index) => (
            <PhoneMockupCard
              key={index}
              mockup={mockup}
              index={index}
              scrollProgress={scrollYProgress}
              currentIndex={currentIndex}
              totalMockups={mockups.length}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PhoneMockupCard({ 
  mockup, 
  index, 
  scrollProgress,
  currentIndex,
  totalMockups
}: { 
  mockup: PhoneMockup
  index: number
  scrollProgress: any
  currentIndex: number
  totalMockups: number
}) {
  // Calculate when this mockup should be visible
  // Use more of the scroll space to make animation more visible
  const sectionStart = (index * 0.33)
  const sectionEnd = index === totalMockups - 1 
    ? 1.0  // Last mockup animation completes at full scroll
    : (index + 1) * 0.33
  
  // Y position: starts from below, slides up to center
  const y = useTransform(scrollProgress, (latest: number) => {
    if (latest < sectionStart) return 250  // Start further below screen
    if (latest > sectionEnd) return 0      // Stay at final position once shown
    
    const progress = (latest - sectionStart) / (sectionEnd - sectionStart)
    // Ease out function for smoother animation
    const eased = 1 - Math.pow(1 - progress, 3)
    return 250 * (1 - eased)  // Slide from 250 to 0
  })

  // Opacity: fade in very quickly, starting before the element is visible
  const opacity = useTransform(scrollProgress, (latest: number) => {
    // Start fading in slightly before the element starts sliding
    const fadeStart = sectionStart - 0.05
    if (latest < fadeStart) return 0
    if (latest > sectionEnd) return index <= currentIndex ? 1 : 0  // Stay visible if shown
    
    const progress = (latest - fadeStart) / (sectionEnd - fadeStart)
    const eased = 1 - Math.pow(1 - progress, 4)  // Much faster fade in
    return eased
  })

  // Scale: slight zoom effect
  const scale = useTransform(scrollProgress, (latest: number) => {
    if (latest < sectionStart) return 0.9
    if (latest > sectionEnd) return 1
    
    const progress = (latest - sectionStart) / (sectionEnd - sectionStart)
    const eased = 1 - Math.pow(1 - progress, 3)
    return 0.9 + (0.1 * eased)
  })

  // Z-index: higher for more recent mockups
  const zIndex = index === currentIndex ? totalMockups : index

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        zIndex,
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <div className="aspect-[10/19] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-gray-900 h-8 flex items-center justify-between px-4 text-white text-xs">
            <span>9:03</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 border border-white rounded-sm"></div>
            </div>
          </div>
          
          {/* App Content */}
          <div className="bg-black h-[calc(100%-2rem)] p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-bold">IRA</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Mock Article Image */}
            <div className={`w-full aspect-video bg-gradient-to-br ${mockup.color} rounded-lg mb-3 flex items-center justify-center`}>
              <div className="text-white text-4xl">🎨</div>
            </div>
            
            {/* Mock Article Text */}
            <div className="space-y-2">
              <h2 className="text-white font-bold text-base leading-tight">
                {mockup.title}
              </h2>
              <p className="text-gray-300 text-xs leading-relaxed">
                {mockup.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
