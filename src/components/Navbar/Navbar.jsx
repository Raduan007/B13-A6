
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between mx-10 max-w-7xl mx-auto px-2'>
            <h1 className="px-6 py-2 font-bold text-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> MeDigiTools</h1>

            <ul className='flex mt-3'>
                <li className='mr-10'><a href="">Products</a></li>
                <li className='mr-10'><a href="">Features</a></li>
                <li className='mr-10'><a href="">Pricing</a></li>
                <li className='mr-10'><a href="">Testimonials</a></li>
                <li className='mr-10'><a href="">FAQ</a></li>
            </ul>

            <div className='space-x-4 mt-2'>
                <button> Login</button>
                <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2  rounded-full text-white">Get Started</button>
            </div>
        </div> 
    );
};

export default Navbar;