import React from 'react';
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import x from '../../assets/x.png'

const footer = () => {
    return (
<div className='bg-[#101727] text-white'>
  <div className="max-w-7xl mx-auto px-25">

    {/* grid section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-25 pb-16 text-center md:text-left">

      <div className=''>
        <h1 className="text-4xl font-semibold">DigiTools</h1>
        <p className="mt-2 text-sm opacity-70">
          Premium digital tools for creators,  professionals, and businesses. Work smarter with our suite of powerful tools. </p>
      </div>

     <div className='sm:ml-15'>
        <h4 className="font-semibold mb-2">Product</h4>
        <h6 className="opacity-70">Features</h6>
        <h6 className="opacity-70">Pricing</h6>
        <h6 className="opacity-70">Templates</h6>
        <h6 className="opacity-70">Integrations</h6>
      </div>

   <div className='sm:ml-15'>
        <h4 className="font-semibold mb-2">Company</h4>
        <h6 className="opacity-70">About</h6>
        <h6 className="opacity-70">Blog</h6>
        <h6 className="opacity-70">Careers</h6>
        <h6 className="opacity-70">Press</h6>
      </div>

   <div className='sm:ml-15'>
        <h4 className="font-semibold mb-2">Resources</h4>
        <h6 className="opacity-70">Documentation</h6>
        <h6 className="opacity-70">Help Center</h6>
        <h6 className="opacity-70">Community</h6>
        <h6 className="opacity-70">Contact</h6>
      </div>

     <div className='sm:ml-15'>
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <div className='flex justify-center md:justify-start gap-3 mt-2'>
          <a href="https://www.instagram.com/"><img src={instagram} alt="instagram" className="w-6 h-6" /></a>
           <a href="https://www.facebook.com/"> <img src={facebook} alt="facebook" className="w-6 h-6" /></a>
          <a href="https://x.com/"><img src={x} alt="x" className="w-6 h-6" /></a>
        </div>
      </div>

    </div>

    {/* bottom section */}
    <div className="border-t border-gray-700 pt-12 pb-8 mt-0 flex flex-col md:flex-row justify-between items-center text-sm pb-4 text-center md:text-left">
      
      <h4 className="opacity-80">
        © 2026 DigiTools. All rights reserved.
      </h4>

      <div className='flex gap-4 mt-3 md:mt-0'>
        <h5 className="opacity-70 hover:text-white cursor-pointer">Privacy Policy</h5>
        <h5 className="opacity-70 hover:text-white cursor-pointer">Terms of Service</h5>
        <h5 className="opacity-70 hover:text-white cursor-pointer">Cookies</h5>
      </div>

    </div>

  </div>
</div>
    );
};

export default footer;