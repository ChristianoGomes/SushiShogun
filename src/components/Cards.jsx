import React from 'react'
import card1 from '/assets/card1.jpg'
import card2 from '/assets/card2.jpg'
import card3 from '/assets/card3.jpg'

const Cards = () => {
  return (
    <div className="max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Savor the Sea, BOGO</p>
          <p>through 1/8</p>
          <button className="border-white bg-red-400 text-black mx-2 absolute bottom-1 hover:scale-110">
            Order Now
          </button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
        src={card1} 
        alt="/" />
      </div>
      <div className="rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Sushi Alchemy at Its Finest</p>
          <p>through 1/8</p>
          <button className="border-white bg-red-400 text-black mx-2 absolute bottom-1 hover:scale-110">
            Order Now
          </button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src={card2} 
        alt="/" />
      </div>
      <div className="rounded-xl relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"> Sip, Roll, Enjoy</p>
          <p>through 1/8</p>
          <button className="border-white bg-red-400 text-black mx-2 absolute bottom-1 hover:scale-110">
            Order Now
          </button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
        src={card3} 
        alt="/" />
      </div>
    </div>
  );
}

export default Cards
