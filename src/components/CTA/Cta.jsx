import React from 'react';

const Cta = () => {
    return (
        <div className='py-30 px-50 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-center'>
           <div className='space-y-4'>
               <h2  className='text-4xl'>Ready to Transform Your Workflow</h2>
                <p className='opacity-70'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='space-x-3 my-4'>
               <button className="bg-white px-6 py-3 rounded-full font-semibold relative overflow-hidden group">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#9514FA] group-hover:to-[#4F39F6]">Explore Products </span>
            </button>
               
               <button className="px-6 py-3 rounded-full font-semibold text-white border border-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-500">View Pricing
               </button>

            </div>
            <p className='opacity-70'>14-day free trial • No credit card required • Cancel anytime</p>     
        </div>
    );
};

export default Cta;