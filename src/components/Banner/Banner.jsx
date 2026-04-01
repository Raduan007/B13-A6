    import React from 'react'; 
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10 max-w-7xl px-2 text-center lg:text-left'>
            <div className="space-y-4 sm:pl-20"> 
                <div className="inline-flex items-center bg-[#E1E7FF] px-3 py-2 rounded-full gap-2 mx-auto lg:mx-0">
                    <img src="/Group5.png" alt="icon" className="w-4 h-4 object-contain" />
                    <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</span>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl text-[#101727] font-semibold py-2'>Supercharge Your Digital Workflow</h1>
                <p className='opacity-70 pb-4'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products</p>   




                <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
  
                 <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-[50px] text-white
                 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:opacity-90 active:scale-95">
                   Explore Products</button>
        
                 <div className="p-[2px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-[50px]
                 transition duration-300 hover:scale-105 hover:shadow-lg">
                   
                   <button className='bg-white w-40 h-10 flex items-center justify-center rounded-[50px] gap-2  transition duration-300 active:scale-95'>
                     
                     <img className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' src="/Play.png" alt="" /> 
                     
                     <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                       Watch Demo</span>
                     </button> 
                 </div>
                
                  </div>
            </div>

            <div className='flex justify-center mb-8'>
                <img className='w-full max-w-md' src={bannerImg} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;