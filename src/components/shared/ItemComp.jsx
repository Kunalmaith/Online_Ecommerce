import React from 'react'; // useState is not needed if using group-hover
import Item1 from '../../assets/images/CartItems/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg?react';
import CartImg from '../../assets/images/Cart1.svg?react';
import Rating from '../../assets/images/Allicons/Three Star.svg?react'

function ItemComp({Items}) {
  return (
    <div className='flex flex-col'>
    <div className='group h-[14vw] w-[16vw] bg-[#F5F5F5] flex items-center justify-center relative overflow-hidden'> {/* Added 'group' and 'overflow-hidden' */}
      <Item1 />
      {/* The following div will be hidden by default and shown on group-hover */}
      <div className='absolute bottom-0 left-0 w-full h-[2.5vw] flex justify-center items-center bg-black text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'>
        <CartImg className='stroke-white' />
        <p>Add to cart</p>
      </div>
    </div>
    <p>{Items.Name}</p>
    <p className='text-[#DB4444]'>{Items.Price}</p>
    <div className='flex gap-3'>
      <Rating/>
      <p>(98)</p>
    </div>
    </div>
  );
}

export default ItemComp;