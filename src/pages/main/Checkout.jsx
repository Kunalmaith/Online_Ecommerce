import React from 'react'
import ControllerImg from '../../assets/images/CartItems/g92-2-500x500 1.svg?react'
import MonitorImg from '../../assets/images/CartItems/g27cq4-500x500 1.svg?react'
import OnlineTransImg1 from '../../assets/images/Checklisticons/image 30.svg?react'
import OnlineTransImg2 from '../../assets/images/Checklisticons/image 31.svg?react'
import OnlineTransImg3 from '../../assets/images/Checklisticons/image 32.svg?react'
import OnlineTransImg4 from '../../assets/images/Checklisticons/image 33.svg?react'

// It's better to manage cart data in an array
const cartItems = [
    { id: 1, name: 'H1 Gamepad', price: 650, image: <ControllerImg className='w-12 h-12' /> },
    { id: 2, name: 'LCD Monitor', price: 1100, image: <MonitorImg className='w-12 h-12' /> }
];

function Checkout() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    // Main container with responsive padding
    <div className='min-h-screen flex flex-col gap-12 px-4 py-8 md:px-8 lg:px-16'>
      <h1 className='text-3xl font-medium'>Billing Details</h1>
      
      {/* Two-column layout: stacks on mobile, side-by-side on desktop */}
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>

        {/* Left Column: Billing Form */}
        <div className='w-full lg:w-3/5 space-y-6'>
          {/* Using labels for better accessibility */}
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>First Name<span className='text-red-500'>*</span></label>
            <input type="text" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Company Name</label>
            <input type="text" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Street Address<span className='text-red-500'>*</span></label>
            <input type="text" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Apartment, floor, etc. (optional)</label>
            <input type="text" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Town/City<span className='text-red-500'>*</span></label>
            <input type="text" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Phone Number<span className='text-red-500'>*</span></label>
            <input type="number" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-gray-500'>Email Address<span className='text-red-500'>*</span></label>
            <input type="email" className='bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          </div>
          <div className='flex items-center gap-4 pt-4'>
            <input type="checkbox" id="save-info" className='w-6 h-6 accent-red-500'/>
            <label htmlFor="save-info" className='font-poppins'>Save this information for faster check-out next time</label>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className='w-full lg:w-2/5 space-y-8'>
          <div className='space-y-6'>
            {cartItems.map(item => (
              <div key={item.id} className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  {item.image}
                  <p>{item.name}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
          
          <div className='space-y-4 text-lg border-t pt-6'>
            <div className='flex justify-between'><p>Subtotal:</p> <p>${subtotal}</p></div>
            <div className='flex justify-between border-t pt-4'><p>Shipping:</p> <p>Free</p></div>
            <div className='flex justify-between border-t pt-4'><p>Total:</p> <p>${subtotal}</p></div>
          </div>
          
          <div className='space-y-4'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-4'>
                <input type="radio" id="bank" name="payment" className='w-5 h-5 accent-black'/>
                <label htmlFor="bank">Bank</label>
              </div>
              <div className='flex items-center gap-2'>
                <OnlineTransImg1/> <OnlineTransImg2/> <OnlineTransImg3/> <OnlineTransImg4/>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <input type="radio" id="cod" name="payment" className='w-5 h-5 accent-black'/>
              <label htmlFor="cod">Cash on delivery</label>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <input type="text" placeholder='Coupon Code' className='flex-grow p-3 border border-gray-400 rounded-md'/>
            <button className='bg-red-500 text-white rounded-md p-3 font-medium transition hover:bg-red-600 active:scale-95'>
              Apply Coupon
            </button>
          </div>
          
          <button className='bg-red-500 text-white rounded-md p-3 font-medium w-full sm:w-auto sm:px-10 transition hover:bg-red-600 active:scale-95'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout