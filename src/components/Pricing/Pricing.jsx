import React from 'react';
import Check from '../../assets/Check.png'
import WhiteCheck from '../../assets/WhiteCheck.png'


const Pricing = () => {
    return (
     <div className="max-w-7xl mx-auto px-2">
            <div className='text-center space-y-2'>
                <h1 className='text-5xl font-semibold'>Simple, Transparent Pricing</h1>
                <p className='opacity-70'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='parent grid md:grid-cols-3 grid-cols-1'>
                {/* card-1 */}
                <div className=' shadow-md p-4 m-10 rounded-lg'>
                    <h5 className='text-2xl'>Starter</h5>
                    <p className='opacity-80'>Perfect for getting started</p>
                    <h4 className='py-6'> <span className='text-4xl'>$0</span> <span className='opacity-80'>/month</span></h4>
                    <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Access to 10 free tools</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Basic templates</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Community support</h6>
                    </div>

                     <div className='flex space-x-2 mb-15'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>1 project per month</h6>
                    </div>
                    <div className='ml-6'>
                         <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-15 py-2 rounded-full text-white transition duration-150 hover:opacity-80">Get Started Free</button>
                    </div>
                </div>


                {/* card-2 */}
                 <div className=' shadow-md p-4 m-10  bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white rounded-lg'>
                    <h5 className='text-2xl'>Pro</h5>
                    <p className='opacity-80'>Best for professionals</p>
                    <h4 className='py-6'>  <span className='text-4xl'>$29</span> <span className='opacity-80'>/month</span></h4>
                    <div className='flex space-x-2'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Access to all premium tools</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Basic templates</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Priority support</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Unlimited projects</h6>
                    </div>
 
                   <div className='flex space-x-2'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Cloud sync</h6>
                    </div>  

                    <div className='flex space-x-2 mb-3'>
                        <img src={WhiteCheck} alt="Check" />
                        <h6 className='opacity-80'>Advanced analytics</h6>
                    </div>  
                     <div>
                          <button className="bg-white px-16 ml-4  py-2 rounded-full font-semibold relative overflow-hidden group transition duration-150 hover:opacity-80">
                           <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent transition-all duration-500 group-hover:from-[#9514FA] group-hover:to-[#4F39F6]">Explore Products </span>
                           </button>
                    </div>         

                </div>
                {/* card-3 */}
                 <div className=' shadow-md p-4 m-10 rounded-lg'>
                    <h5 className='text-2xl'>Enterprise</h5>
                    <p className='opacity-80'>For teams and businesses</p>
                    <h4 className='py-6'>  <span className='text-4xl'>$99</span> <span className='opacity-80'>/month</span></h4>
                    <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Everything in Pro</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Team collaboration</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Custom integrations</h6>
                    </div>

                     <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Dedicated support</h6>
                    </div>

                      <div className='flex space-x-2'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>SLA guarantee</h6>
                    </div>

                      <div className='flex space-x-2 mb-4'>
                        <img src={Check} alt="Check" />
                        <h6 className='opacity-80'>Custom branding</h6>
                    </div>
                      <div className='ml-6'>
                         <button className="px-15 py-2  bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white transition duration-150 hover:opacity-80">Get Started Free</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;