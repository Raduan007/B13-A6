// src/components/Banner/Banner.jsx
import React from 'react'; 
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10 max-w-7xl mx-auto px-2'>
            {/* left */}
            <div className="space-y-4"> 
                <div className="inline-flex items-center bg-[#E1E7FF] px-3 py-1 rounded-full gap-2">
                    <img src="/Group5.png" alt="icon" className="w-4 h-4 object-contain" />
                    <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                </div>
                <h1 className='text-6xl text-[#101727] font-semibold'>Supercharge Your Digital Workflow</h1>
                <p className='opacity-70'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products</p> 
                <div className='flex gap-5'>
                    <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-[50px] text-white">Explore Products</button>
                    <div className="p-[2px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-[50px]">
                        <button className='bg-white w-40 h-12 flex items-center justify-center rounded-[50px]'>
                            <img className='w-5 h-5' src="/Play.png" alt="" /> 
                            <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Watch Demo</span>
                        </button> 
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <img className='w-full max-w-md' src={bannerImg} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;
    