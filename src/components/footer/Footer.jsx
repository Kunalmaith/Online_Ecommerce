import React from 'react';
import FooterImg1 from '../../assets/images/Footer-icoms/Vector-3.svg?react';
import FooterImg2 from '../../assets/images/Footer-icoms/Qrcode 1.svg?react';
import FooterImg3 from '../../assets/images/Footer-icoms/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg?react';
import FooterImg4 from '../../assets/images/Footer-icoms/download-appstore.svg?react';
import FooterImg5 from '../../assets/images/Footer-icoms/Vector.svg?react';
import FooterImg6 from '../../assets/images/Footer-icoms/icon-instagram.svg?react';
import FooterImg7 from '../../assets/images/Footer-icoms/Vector-1.svg?react';
import FooterImg8 from '../../assets/images/Footer-icoms/Vector-2.svg?react';

function Footer() {
  return (
    <footer className='bg-black text-white px-4 py-10 md:px-8 lg:px-16 lg:py-20'>
      <div className='container mx-auto'>
        {/*
          - ADDED `text-center` for mobile alignment
          - ADDED `sm:text-left` to reset alignment for larger screens
        */}
        <div className='grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          
          {/* Column 1: Subscribe */}
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <h3 className='font-bold text-xl'>Exclusive</h3>
            <p className='text-lg'>Subscribe</p>
            <p className='font-light text-base'>Get 10% off your first order</p>
            <div className='flex items-center border border-white rounded-md max-w-xs w-full'>
              <input 
                type="email" 
                placeholder='Enter your email' 
                className='p-2 bg-transparent text-white outline-none w-full placeholder:text-gray-400' 
              />
              <button aria-label="Subscribe">
                <FooterImg1 className='hover:cursor-pointer mr-2 size-6' />
              </button>
            </div>
          </div>
          
          {/* Column 2: Support */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-xl'>Support</h3>
            <address className='font-light text-base not-italic'>
              111 X3C Harukawa,Osaka <br />
              321HQC,Japan 
            </address>
            <a href="mailto:exclusive@gmail.com" className='font-light text-base hover:underline'>exclusive@gmail.com</a>
            <a href="tel:+88015-88888-9999" className='font-light text-base hover:underline'>+88015-88888-9999</a>
          </div>
          
          {/* Column 3: Account */}
          <div className='flex flex-col gap-4 text-base font-light'>
            <h3 className='font-bold text-xl'>Account</h3>
            <a href="#" className='hover:underline'>My Account</a>
            <a href="#" className='hover:underline'>Login / Register</a>
            <a href="#" className='hover:underline'>Cart</a>
            <a href="#" className='hover:underline'>Wishlist</a>
            <a href="#" className='hover:underline'>Shop</a>
          </div>
          
          {/* Column 4: Quick Link */}
          <div className='flex flex-col gap-4 text-base font-light'>
            <h3 className='font-bold text-xl'>Quick Link</h3>
            <a href="#" className='hover:underline'>Privacy Policy</a>
            <a href="#" className='hover:underline'>Terms Of Use</a>
            <a href="#" className='hover:underline'>FAQ</a>
            <a href="#" className='hover:underline'>Contact</a>
          </div>
          
          {/* Column 5: Download App */}
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <h3 className='font-bold text-xl'>Download App</h3>
            <p className='text-sm text-gray-300'>Save $3 with App New User Only</p>
            <div className='flex items-center gap-2'>
              <FooterImg2 className='size-20' />
              <div className='flex flex-col gap-2'>
                <a href="#" aria-label="Download on Google Play">
                  <FooterImg3 className='w-28 h-auto' />
                </a>
                <a href="#" aria-label="Download on the App Store">
                  <FooterImg4 className='w-28 h-auto' />
                </a>
              </div>
            </div>
            <div className='flex gap-6 items-center mt-2'>
              <a href="#" aria-label="Facebook"><FooterImg5 className='size-6' /></a>
              <a href="#" aria-label="Twitter"><FooterImg7 className='size-6' /></a>
              <a href="#" aria-label="Instagram"><FooterImg6 className='size-6' /></a>
              <a href="#" aria-label="LinkedIn"><FooterImg8 className='size-6' /></a>
            </div>
          </div>

        </div>

        {/* Copyright Section (This part was already correct) */}
        <div className='text-center text-gray-500 mt-16 pt-4 border-t border-gray-700'>
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;