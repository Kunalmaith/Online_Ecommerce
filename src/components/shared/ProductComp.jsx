import React from 'react';
import CartImg from '../../assets/images/Cart1.svg?react';

function ProductComp({
  prodImage,
  prodName,
  prodRating,
  prodPrice,
  originalPrice,
  discountPercent,
  prodReviews
}) {
  return (
    // ## The Key Change for Sizing is Here! ##
    // We set a specific max-width to keep the component compact on large screens,
    // while `w-full` ensures it shrinks gracefully on smaller mobile screens.
    <div className='w-full max-w-[270px] mx-auto flex flex-col gap-4'>
      
      <div className='group relative w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden'>
        
        <div className="p-4 h-full w-full flex items-center justify-center">
            {prodImage}
        </div>

        {discountPercent && (
            <div 
              className='bg-red-500 absolute text-white rounded-md p-1 top-3 left-3 text-xs px-3 font-semibold'
              aria-label={`Discount of ${discountPercent}`}
            >
                {discountPercent}
            </div>
        )}

        <button 
          className='absolute bottom-0 left-0 w-full h-12 flex justify-center items-center gap-2 bg-black text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'
          aria-label={`Add ${prodName} to cart`}
        >
          <CartImg className='stroke-white' />
          <span className='font-medium'>Add To Cart</span>
        </button>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className='font-medium text-base truncate' title={prodName}>{prodName}</h3>
        <div className='flex items-center gap-3 flex-wrap'>
            <p className='text-red-500 font-medium'>{prodPrice}</p>
            {originalPrice && (
                <p className='text-gray-500 line-through'>{originalPrice}</p>
            )}
        </div>
        <div className='flex gap-2 items-center'>
          {prodRating}
          <p className='text-gray-500 font-semibold text-sm'>({prodReviews})</p>
        </div>
      </div>
    </div>
  );
}

export default ProductComp;