import React, { useState } from 'react';

// Default icons that are part of the component's structure
import HeartImg from '../../assets/images/Allicons/Vector-11.svg?react';
import TruckImg from '../../assets/images/Services-icon/icon-delivery.svg?react';
import ReturnImg from '../../assets/images/Allicons/Icon-return.svg?react';

function ProductDetail({ product }) {
  // If no product data is passed, don't render anything to avoid errors
  if (!product) {
    return <div>Loading product...</div>;
  }

  // State to manage which image is currently displayed as the main one
  const [activeImage, setActiveImage] = useState(product.images[0]);
  // State to manage the selected size
  const [selectedSize, setSelectedSize] = useState('M');
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-8'>

      {/* 1. Thumbnail Column */}
      {/* On mobile, it's a row below the main image. On desktop, a column on the left. */}
      <div className='w-full lg:w-1/6 order-2 lg:order-1 flex flex-row lg:flex-col gap-4'>
        {product.images.map((img, index) => (
          <div
            key={index}
            className={`bg-[#F5F5F5] rounded p-2 flex-1 lg:flex-none flex items-center justify-center cursor-pointer border-2 ${
              activeImage === img ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => setActiveImage(img)}
          >
            {img}
          </div>
        ))}
      </div>

      {/* 2. Main Image Column */}
      {/* Takes full width on mobile, and a larger portion on desktop */}
      <div className='w-full lg:w-3/6 order-1 lg:order-2 bg-[#F5F5F5] rounded flex items-center justify-center p-4 aspect-square'>
        {activeImage}
      </div>

      {/* 3. Product Details Column */}
      <div className='w-full lg:w-2/6 order-3 flex flex-col gap-3'>
        <h1 className='text-2xl md:text-3xl font-semibold'>{product.name}</h1>
        <div className='flex items-center gap-3 text-sm'>
          {product.rating}
          <p className='text-gray-500'>({product.reviews} Reviews)</p>
          <p className='text-gray-500'>|</p>
          <p className='text-[#00FF66]'>{product.stockStatus}</p>
        </div>
        <p className='text-2xl'>${product.price}</p>
        <p className='text-sm leading-relaxed'>{product.description}</p>
        
        <hr className='my-3' />

        {/* Size Selector */}
        <div className='flex items-center gap-3 text-sm'>
          <p>Size:</p>
          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border border-gray-400 rounded w-8 h-8 flex items-center justify-center transition-colors ${
                selectedSize === size
                  ? 'bg-[#DB4444] text-white border-[#DB4444]'
                  : 'hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity and Actions */}
        <div className='flex flex-wrap items-center gap-4 my-3'>
          <div className='flex items-center rounded border border-gray-400'>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className='p-2 px-4 hover:bg-gray-200 transition-colors'>-</button>
            <div className='p-2 px-6 border-l border-r'>{quantity}</div>
            <button onClick={() => setQuantity(q => q + 1)} className='p-2 px-4 bg-[#DB4444] text-white hover:bg-red-600 transition-colors'>+</button>
          </div>
          <button className='flex-grow bg-[#DB4444] text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-red-600 transition-colors'>
            Buy Now
          </button>
          <button className='border rounded border-gray-400 p-2.5 hover:bg-gray-200'>
            <HeartImg />
          </button>
        </div>
        
        {/* Delivery Info */}
        <div className='border rounded border-gray-400 text-sm'>
            <div className='p-4 flex items-center gap-4'>
                <TruckImg/>
                <div>
                    <p className='font-medium'>Free Delivery</p>
                    <p className='text-xs underline cursor-pointer'>Enter your postal code for Delivery Availability</p>
                </div>
            </div>
            <div className='border-t border-gray-400 p-4 flex items-center gap-4'>
                <ReturnImg/>
                <div>
                    <p className='font-medium'>Return Delivery</p>
                    <p className='text-xs'>Free 30 Days Delivery Returns. <span className='underline cursor-pointer'>Details</span></p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;