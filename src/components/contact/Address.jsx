import Image from 'next/image';
import React from 'react';
import newsletter from '../../../public/assets/newsletter.png'

const Address = () => {
    return (
        <div className='md:flex items-center my-16'>
            <div className='md:w-1/2 flex items-center justify-center'>
                <Image src={newsletter} alt='newsletter' className='md:w-3/5' />
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <h1 className='text-primary md:text-4xl text-3xl font-medium mb-5 text-center md:text-start'>Address</h1>
                <p className='text-lg text-center md:text-start'>Tangail, Bangladesh</p>
                <div className='flex items-center justify-center md:justify-start'>
                    <button className='bg-primary text-white px-4 py-2 mt-5 rounded-md hover:opacity-90 ease-in-out duration-200'>Visit on Google Maps</button>
                </div>
            </div>
        </div>
    );
};

export default Address;