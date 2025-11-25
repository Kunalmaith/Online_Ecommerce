import React from 'react';
import MiniImg1 from '../../assets/images/CartItems/g27cq4-500x500 1.svg?react';
import MiniImg2 from '../../assets/images/CartItems/g92-2-500x500 1.svg?react';
// A popular library for icons, you may need to install it: npm install react-icons


// Managing data in an array is a best practice
const cartData = [
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    quantity: 2,
    image: <MiniImg1 className='w-14 h-14 object-contain' />,
  },
  {
    id: 2,
    name: 'H1 Gamepad',
    price: 550,
    quantity: 1,
    image: <MiniImg2 className='w-14 h-14 object-contain' />,
  },
];

function Cart() {
  const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    // Main container with responsive padding
    <div className='min-h-screen flex flex-col gap-16 px-4 py-8 md:px-8 lg:px-16'>
      
      {/* Cart Items Section */}
      <div className='w-full space-y-6'>
        {/* Desktop Table Header (hidden on mobile) */}
        <div className='hidden md:grid md:grid-cols-4 gap-4 text-center font-medium p-4 rounded shadow-sm bg-white'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {/* Cart Items */}
        {cartData.map((item) => (
          <div key={item.id} className='p-4 rounded shadow-sm bg-white'>
            {/* --- Desktop Row View (hidden on mobile) --- */}
            <div className='hidden md:grid md:grid-cols-4 gap-4 items-center text-center'>
              <div className='flex items-center gap-4 text-left'>
                {item.image}
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
              <div className='flex justify-center'>
                <input type="number" defaultValue={item.quantity} className='w-16 p-2 border rounded text-center' />
              </div>
              <div className='flex items-center justify-center gap-4'>
                <p>${item.price * item.quantity}</p>
                <button className='text-gray-500 hover:text-red-600 transition-colors'>
                  
                </button>
              </div>
            </div>

            {/* --- Mobile Card View (Corrected and visible on mobile) --- */}
            <div className='md:hidden flex flex-col gap-4'>
              <div className='flex items-start justify-between'>
                <div className='flex items-center gap-4'>
                  {/* This now correctly displays the image on mobile */}
                  {item.image}
                  <p className='font-medium'>{item.name}</p>
                </div>
                <button className='text-gray-500 hover:text-red-600 transition-colors'>
                  
                </button>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>Price:</span>
                <span>${item.price}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600'>Quantity:</span>
                <input type="number" defaultValue={item.quantity} className='w-16 p-2 border rounded text-center' />
              </div>
              <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-600'>Subtotal:</span>
                <span>${item.price * item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <button className='w-full sm:w-auto border border-gray-400 py-3 px-8 rounded font-medium transition hover:bg-red-500 hover:text-white hover:border-red-500'>
          Return To Shop
        </button>
        <button className='w-full sm:w-auto border border-gray-400 py-3 px-8 rounded font-medium transition hover:bg-red-500 hover:text-white hover:border-red-500'>
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total Section */}
      <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
        <div className='w-full md:w-auto flex flex-col sm:flex-row gap-4'>
          <input type="text" placeholder='Coupon Code' className='p-3 border border-gray-400 rounded w-full sm:w-auto'/>
          <button className='p-3 rounded text-white bg-red-500 font-medium transition hover:bg-red-600 active:scale-95'>
            Apply Coupon
          </button>
        </div>
        
        <div className='w-full md:w-2/5 border-2 border-black rounded p-6 space-y-4'>
          <h2 className='text-xl font-medium'>Cart Total</h2>
          <div className='flex justify-between border-b pb-2'><p>Subtotal:</p> <p>${subtotal}</p></div>
          <div className='flex justify-between border-b pb-2'><p>Shipping:</p> <p>Free</p></div>
          <div className='flex justify-between'><p>Total:</p> <p>${subtotal}</p></div>
          <div className='flex justify-center pt-2'>
            <button className='w-full sm:w-auto p-3 rounded text-white bg-red-500 font-medium sm:px-8 transition hover:bg-red-600 active:scale-95'>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;