import { useState } from 'react';
import CartIcon from '../../assets/shopping-cart.png';
import MenuIcon from '../../assets/menu.png';

const Navbar = ({ cart, setCartOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-3'>

      <h1 className="font-bold text-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
        MeDigiTools
      </h1>

      <ul className='hidden md:flex'>
        <li className='mr-10 cursor-pointer'>Products</li>
        <li className='mr-10 cursor-pointer'>Features</li>
        <li className='mr-10 cursor-pointer'>Pricing</li>
        <li className='mr-10 cursor-pointer'>Testimonials</li>
        <li className='mr-10 cursor-pointer'>FAQ</li>
      </ul>

      <div className='flex items-center space-x-4'>
        <button onClick={() => setCartOpen(true)} className="relative">
          <img src={CartIcon} alt="cart" className='w-6' />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>

        {/* lg-btn */}
        <div className='hidden md:flex space-x-4'>
          <button>Login</button>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full text-white">
            Get Started
          </button>
        </div>

        {/* small - icon*/}
        <button className='md:hidden' onClick={() => setOpen(!open)}>
          <img src={MenuIcon} alt="menu" className='w-6' />
        </button>
      </div>

    {open && (
  <div className='absolute top-13 right-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3'>
    
    <button className="px-4 py-2 text-left">
      Login
    </button>

    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full text-white w-full">
      Get Started
    </button>

  </div>
)}
    </div>
  );
};

export default Navbar;