import React from 'react'
import AboutImg from '../../assets/images/AboutImg.svg?react'
import AboutImg2 from '../../assets/images/Allicons/Group-1.svg?react'
import AboutImg3 from '../../assets/images/Allicons/Icon-Sale.svg?react'
import AboutImg4 from '../../assets/images/Allicons/Vector-7.svg?react'
import AboutImg5 from '../../assets/images/Allicons/Icon-Moneybag.svg?react'
import AboutImg6 from '../../assets/images/AboutImg6.svg?react'
import AboutImg7 from '../../assets/images/AboutImg7.svg?react'
import AboutImg8 from '../../assets/images/AboutImg8.svg?react'
import TwitterImg from '../../assets/images/Footer-icoms/Vector-1.svg?react'
import InstaImg from '../../assets/images/Group.svg?react'
import InImg from '../../assets/images/Allicons/Vector-17.svg?react'
import CustomerSupp from '../../assets/images/Services-icon/Icon-Customer service.svg?react'
import TruckImg from "../../assets/images/Allicons/icon-delivery.svg?react";
import ShieldImg from '../../assets/images/Services-icon/shield-tick.svg?react'


function About() {
  return (
    <div className='min-h-screen flex flex-col font-poppins'>
      {/* Section 1: Our Story */}
      <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 md:px-8 py-12 md:py-20'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-6'>
          <p className='text-4xl md:text-5xl font-semibold'>Our Story</p>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to home goods and fashion.
          </p>
        </div>
        <div className='w-full lg:w-1/2 mt-8 lg:mt-0'>
          <AboutImg className='w-full h-auto rounded-lg' />
        </div>
      </div>

      {/* Section 2: Statistics */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 px-4 md:px-8 py-12 md:py-20'>
        <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md p-8 transition-transform hover:scale-105 hover:shadow-lg'>
          <div className=' rounded-full p-2'>
            <div className='bg-black rounded-full size-12 flex items-center justify-center'>
              <AboutImg2 className='text-white size-7' />
            </div>
          </div>
          <p className='text-3xl font-bold mt-5'>10.5k</p>
          <p className='text-center mt-2'>Sellers active on our site</p>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md p-8 bg-[#DB4444] text-white transition-transform hover:scale-105 hover:shadow-lg'>
          <div className=' rounded-full p-2'>
            <div className='bg-white rounded-full size-12 flex items-center justify-center'>
              <AboutImg3 className='text-black size-7' />
            </div>
          </div>
          <p className='text-3xl font-bold mt-5'>33k</p>
          <p className='text-center mt-2'>Monthly Product Sale</p>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md p-8 transition-transform hover:scale-105 hover:shadow-lg'>
          <div className=' rounded-full p-2'>
            <div className='bg-black rounded-full size-12 flex items-center justify-center'>
              <AboutImg4 className='text-white size-7' />
            </div>
          </div>
          <p className='text-3xl font-bold mt-5'>45.5k</p>
          <p className='text-center mt-2'>Customer active in our site</p>
        </div>
        <div className='flex flex-col items-center justify-center border border-gray-300 rounded-md p-8 transition-transform hover:scale-105 hover:shadow-lg'>
          <div className=' rounded-full p-2'>
            <div className='bg-black rounded-full size-12 flex items-center justify-center'>
              <AboutImg5 className='text-white size-7' />
            </div>
          </div>
          <p className='text-3xl font-bold mt-5'>25k</p>
          <p className='text-center mt-2'>Annual gross sale in our site</p>
        </div>
      </div>

      {/* Section 3 & 4: Team and Services */}
      <div className='flex flex-col px-4 md:px-8 py-12 md:py-20 space-y-20 md:space-y-32'>
        {/* Team Members */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            {/* CHANGE HERE: Added aspect-square to the image container */}
            <div className='bg-gray-200 rounded-md overflow-hidden w-full aspect-square'>
              {/* CHANGE HERE: Changed image class to fill the container */}
              <AboutImg6 className='w-full h-full object-cover' />
            </div>
            <p className='text-3xl font-medium mt-6'>Tom Cruise</p>
            <p className='mt-2'>Founder & Chairman</p>
            <div className='text-black flex gap-4 mt-4'>
              <InImg />
              <InstaImg />
              <TwitterImg />
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            {/* CHANGE HERE: Added aspect-square to the image container */}
            <div className='bg-gray-200 rounded-md overflow-hidden w-full aspect-square'>
               {/* CHANGE HERE: Changed image class to fill the container */}
              <AboutImg8 className='w-full h-full object-cover' />
            </div>
            <p className='text-3xl font-medium mt-6'>Emma Watson</p>
            <p className='mt-2'>Managing Director</p>
            <div className='text-black flex gap-4 mt-4'>
              <InImg />
              <InstaImg />
              <TwitterImg />
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            {/* CHANGE HERE: Added aspect-square to the image container */}
            <div className='bg-gray-200 rounded-md overflow-hidden w-full aspect-square'>
               {/* CHANGE HERE: Changed image class to fill the container */}
              <AboutImg7 className='w-full h-full object-cover' />
            </div>
            <p className='text-3xl font-medium mt-6'>Will Smith</p>
            <p className='mt-2'>Product Designer</p>
            <div className='text-black flex gap-4 mt-4'>
              <InImg />
              <InstaImg />
              <TwitterImg />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16'>
          <div className='flex flex-col items-center justify-center text-center max-w-xs'>
            <div className='border-8 border-gray-300 rounded-full bg-black'>
              <TruckImg className='bg-black rounded-full text-white p-2 size-16' />
            </div>
            <p className='mt-5 font-bold text-lg'>FREE AND FAST DELIVERY</p>
            <p className='text-sm mt-1'>Free delivery for all orders over $140</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center max-w-xs'>
            <div className='border-8 border-gray-300 rounded-full bg-black'>
              <CustomerSupp className='bg-black rounded-full text-white p-2 size-16' />
            </div>
            <p className='mt-5 font-bold text-lg'>24/7 CUSTOMER SERVICE</p>
            <p className='text-sm mt-1'>Friendly 24/7 customer support</p>
          </div>
          <div className='flex flex-col items-center justify-center text-center max-w-xs'>
            <div className='border-8 border-gray-300 rounded-full bg-black'>
              <ShieldImg className='bg-black rounded-full text-white p-2 size-16' />
            </div>
            <p className='mt-5 font-bold text-lg'>MONEY BACK GUARANTEE</p>
            <p className='text-sm mt-1'>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About