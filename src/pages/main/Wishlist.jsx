import React from 'react'
import ItemComp from '../../components/shared/ItemComp'

    
const Items = [
    {Name:'Gucci Duffle Bag',Price:'$990'},
    {Name:'The north coat', Price:'$260'},
    {Name:'RGB liquid CPU Cooler', Price:'$1960'},
    {Name:'Small BookSelf', Price:'$360'},
    {Name:'Gucci Duffle Bag',Price:'$990'},
]

// Sample data for the second list to show a full grid
const JustForYouItems = [
    {Name:'ASUS FHD Gaming Laptop', Price:'$700'},
    {Name:'IPS LCD Gaming Monitor', Price:'$1160'},
    {Name:'HAVIT HV-G92 Gamepad', Price:'$560'},
    {Name:'AK-900 Wired Keyboard', Price:'$200'},
]

function Wishlist() {
  return (
    // Main container with responsive padding and vertical gap
    <div className='flex flex-col gap-16 px-4 py-8 md:px-8 lg:px-16'>
      
      {/* Wishlist Section */}
      <div className='space-y-8'>
        <div className='flex justify-between items-center gap-4 flex-wrap'>
          <p className='text-xl font-medium'>Wishlist ({Items.length})</p>
          <button className='border border-gray-400 text-sm rounded-md py-3 px-8 font-medium transition hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95'>
            Move All To Bag
          </button>
        </div>
        
        {/* Responsive Product Grid: 2 cols on mobile, 3 on tablet, 5 on desktop */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
          {Items.map((item, idx) => (
            <ItemComp key={idx} Items={item}/>
          ))}
        </div>
      </div>
      
      {/* "Just for you" Section */}
      <div className='space-y-8'>
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            {/* Replaced vw units with fixed size for consistency */}
            <div className='h-10 w-5 rounded bg-[#DB4444]'></div>
            <p className='text-xl font-medium'>Just For You</p>
          </div>
          <button className='border border-gray-400 text-sm rounded-md py-3 px-8 font-medium transition hover:bg-red-500 hover:text-white hover:border-red-500 active:scale-95'>
            See All
          </button>
        </div>

        {/* Responsive Product Grid (reusing the same classes for consistency) */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
          {JustForYouItems.map((item, idx) => (
            <ItemComp key={idx} Items={item}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Wishlist