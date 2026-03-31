import React from 'react';

const Cta = () => {
    return (
  <div className='py-16 px-4 sm:py-20 sm:px-8 md:py-30 md:px-50 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-center'>
    <div className='space-y-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>Ready to Transform Your Workflow</h2>
        <p className='opacity-70 text-sm sm:text-base md:text-lg'>
            Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
        </p>
    </div>

    <div className='flex flex-col sm:flex-row justify-center gap-3 my-4'>
        <button className="bg-white px-6 py-3 rounded-full font-semibold relative overflow-hidden group w-full sm:w-auto">
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#9514FA] group-hover:to-[#4F39F6]">
                Explore Products
            </span>
        </button>

        <button className="px-6 py-3 rounded-full font-semibold text-white border border-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-500 w-full sm:w-auto">
            View Pricing
        </button>
    </div>

    <p className='opacity-70 text-xs sm:text-sm md:text-base'>
        14-day free trial • No credit card required • Cancel anytime
    </p>     
</div>
    );
};

export default Cta;