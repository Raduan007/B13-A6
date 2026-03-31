import React, { use } from 'react';

const Models = ({modelPromise}) => {
    const Models = use(modelPromise)
    console.log(Models);
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-4xl'>Premium Digital Tools</h2>
                <p className='opacity-70'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
        </div>
    );
};

export default Models;