import Image from 'next/image';
import React from 'react';
import newsletter from '../../../public/assets/newsletter.png'

const Address = () => {
    return (
        <div className='flex items-center my-16'>
            <div className='w-1/2 flex items-center justify-center'>
                <Image src={newsletter} alt='newsletter' className='w-3/5' />
            </div>
            <div className='w-1/2'>
                <h1 className='text-primary text-4xl font-medium mb-5'>Address</h1>
                <p className='text-lg'>Tangail, Bangladesh</p>
                <button className='bg-primary text-white px-4 py-2 mt-5 rounded-md hover:opacity-90 ease-in-out duration-200'>Visit on Google Maps</button>
            </div>
        </div>
    );
};

export default Address;