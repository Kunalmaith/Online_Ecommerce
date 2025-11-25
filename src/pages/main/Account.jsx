import React from 'react';

// Managing navigation links in an array is cleaner and more scalable
const navLinks = {
  account: [
    { name: 'My Profile', href: '#' },
    { name: 'Address Book', href: '#' },
    { name: 'My Payment Options', href: '#' },
  ],
  orders: [
    { name: 'My Returns', href: '#' },
    { name: 'My Cancellations', href: '#' },
  ]
};

function Account() {
  return (
    // Main container: stacks on mobile, row on desktop, with responsive padding and gap
    <div className='min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 py-8 md:px-8 lg:px-16'>
      
      {/* --- Left Column: Sidebar Navigation --- */}
      <div className='w-full lg:w-1/4 space-y-6'>
        <div>
          <h3 className='font-medium mb-2'>Manage My Account</h3>
          <div className='pl-4 space-y-2'>
            {navLinks.account.map((link) => (
              <a key={link.name} href={link.href} className='block text-gray-500 hover:text-red-500 transition-colors'>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className='font-medium mb-2'>My Orders</h3>
          <div className='pl-4 space-y-2'>
            {navLinks.orders.map((link) => (
              <a key={link.name} href={link.href} className='block text-gray-500 hover:text-red-500 transition-colors'>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <a href="#" className='font-medium'>My Wishlist</a>
        </div>
      </div>

      {/* --- Right Column: Edit Profile Form --- */}
      <div className='w-full lg:w-3/4 p-6 md:p-8 rounded-md shadow-lg bg-white space-y-8'>
        <h2 className='text-xl font-medium text-red-500'>Edit Your Profile</h2>
        
        {/* Responsive two-column rows for inputs */}
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='w-full sm:w-1/2'>
            <label className='block text-gray-600 mb-2'>First Name</label>
            <input type="text" className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400' defaultValue="John"/>
          </div>
          <div className='w-full sm:w-1/2'>
            <label className='block text-gray-600 mb-2'>Last Name</label>
            <input type="text" className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400' defaultValue="Doe"/>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='w-full sm:w-1/2'>
            <label className='block text-gray-600 mb-2'>Email</label>
            <input type="email" className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400' defaultValue="johndoe@example.com"/>
          </div>
          <div className='w-full sm:w-1/2'>
            <label className='block text-gray-600 mb-2'>Address</label>
            <input type="text" className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400' defaultValue="123 Queen Street"/>
          </div>
        </div>
        
        <div className='space-y-4 pt-4'>
          <h3 className='text-gray-800'>Password Changes</h3>
          <input type="password" placeholder='Current Password' className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          <input type="password" placeholder='New Password' className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
          <input type="password" placeholder='Confirm New Password' className='w-full bg-gray-100 p-3 rounded-md border-2 border-transparent focus:outline-none focus:border-red-400'/>
        </div>
        
        <div className='flex justify-end items-center gap-6 pt-4'>
          <button className='px-6 py-3 rounded-md font-medium transition hover:text-red-500'>Cancel</button>
          <button className='px-8 py-3 bg-red-500 rounded-md text-white font-medium transition hover:bg-red-600 active:scale-95'>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Account;