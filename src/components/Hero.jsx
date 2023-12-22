import React from 'react'
import SushiOverlay from '/assets/Sushi-overlay.jpg'

const Hero = () => {
  return (
    <div className='max-width-[1640px] mx:auto p-4 '>
      <div className='max-h-[500px] relative '>
        {/* Overlay */}  
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/5 flex flex-col justify-end'>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-400'>Best</span></h1>
        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-red-400'>Sushi</span> Delivered</h1>
        </div>
        <img  className="w-full max-h-[500px] object-cover"  src={SushiOverlay} alt="/" />
      </div>
      
    </div>
  )
}

export default Hero
