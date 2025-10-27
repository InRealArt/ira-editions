import Image from 'next/image'

export default function StaticPhoneMockup() {
  return (
    <div className="w-full flex justify-center lg:justify-start items-center">
      <div className="relative w-full max-w-[400px] aspect-[9/19]">
        {/* Phone Frame with Cropped Effect */}
        <div className="aspect-[9/19] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl overflow-hidden">
          {/* Phone Screen */}
          <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-gray-900 h-8 flex items-center justify-between px-4 text-white text-xs z-10 relative">
              <span>9:03</span>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-2 border border-white rounded-sm"></div>
              </div>
            </div>
            
            {/* App Content - Phone Mockup Image */}
            <div className="bg-black h-[calc(100%-2rem)] relative">
              <Image
                src="/mockups/mockup.png"
                alt="IRA Editions Mobile App"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
