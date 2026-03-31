import React from 'react';
import imgOne from '../../assets/user.png'
import imgTwo from '../../assets/package.png'
import imgThree from '../../assets/rocket.png'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'


const Profile = () => {
      return (
        <div className="max-w-7xl mx-auto px-2">
            <div className='text-center mt-4 space-y-2'>
                <h2 className='font-semibold text-5xl'>Get Started in 3 Steps</h2>
                <h5 className='opacity-70'>Start using premium digital tools in minutes, not hours.</h5>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 '>
                <div className='shadow-md p-4 m-10 rounded-lg '>
                    <div className="flex items-center justify-end space-x-2">
                        <img src={Frame1} alt="" />
                    </div>  
                   <div className='flex items-center justify-center space-x-2 my-4' >
                     <img className='bg-[#f2e8fe] rounded-[100px] p-3' src={imgOne} alt="user" />
                   </div>
                    <div className='text-center space-y-2 mb-12'>
                        <h4 className='text-2xl font-semibold'>Create Account</h4>
                    <p className='opacity-80'>Sign up for free in seconds. No credit card required to get started.</p>
                    
                    </div>
                </div>

                <div className='shadow-md p-4 m-10 rounded-lg '>
                    <div className="flex items-center justify-end space-x-2">
                        <img src={Frame2} alt="" />
                    </div>  
                   <div className='flex items-center justify-center space-x-2 my-4' >
                     <img className='bg-[#f2e8fe] rounded-[100px] p-3' src={imgTwo} alt="user" />
                   </div>
                    <div className='text-center space-y-2 mb-12'>
                        <h4 className='text-2xl font-semibold'>Choose Products</h4>
                    <p className='opacity-80'>Browse our catalog and select the tools that fit your needs.</p>
                    
                    </div>
                </div>
                
                 <div className='shadow-md p-4 m-10 rounded-lg '>
                    <div className="flex items-center justify-end space-x-2">
                        <img src={Frame3} alt="" />
                    </div>  
                   <div className='flex items-center justify-center space-x-2 my-4' >
                     <img className='bg-[#f2e8fe] rounded-[100px] p-3' src={imgThree} alt="user" />
                   </div>
                    <div className='text-center space-y-2 mb-12'>
                        <h4 className='text-2xl font-semibold'>Start Creating</h4>
                    <p className='opacity-80'>Download and start using your premium tools immediately.</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;