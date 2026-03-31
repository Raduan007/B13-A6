 import React from 'react';

const User = () => {
    return (
        <div className='flex justify-between bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 max-w-7xl mx-auto px-2'>
            <div>
                <h1 className='text-5xl font-bold'>50K+</h1>
                <h4 className='text-xl opacity-80'>Active Users</h4>
            </div>

            <div>
               <h1 className='text-5xl font-bold'>200+</h1>
                <h4 className='text-xl opacity-80'>Premium Tools</h4>
            </div>

            <div>
                <h1 className='text-5xl font-bold'>4.9</h1>
                <h4 className='text-xl opacity-80'>Rating</h4>
            </div>
        </div>
    );
};

export default User; 