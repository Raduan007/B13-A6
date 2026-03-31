import React from 'react';
import imgOne from '../../assets/user.png'
import imgTwo from '../../assets/package.png'
import imgThree from '../../assets/rocket.png'

const Profile = () => {
      return (
        <div className="max-w-7xl mx-auto px-2">
            <div className='text-center mt-4 space-y-2'>
                <h2 className='font-semibold text-5xl'>Get Started in 3 Steps</h2>
                <h5 className='opacity-80'>Start using premium digital tools in minutes, not hours.</h5>
            </div>

            <div className='grid grid-cols-3'>
                <div className=''>
                    <img src={imgOne} alt="user" />
                    <h4>Create Account</h4>
                    <p className='opacity-80'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div>
                    <img src={imgTwo} alt="" />
                    <h4>Choose Products</h4>
                    <p className='opacity-80'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                
                <div>
                    <img src={imgThree} alt="" />
                    <h4>Start Creating</h4>
                    <p className='opacity-80'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;