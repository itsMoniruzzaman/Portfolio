import Image from 'next/image';
import React from 'react';
import logo1 from '../../../public/assets/fiverr.png'
import logo2 from '../../../public/assets/upwork.png'
import logo3 from '../../../public/assets/freelancer.png'
import logo4 from '../../../public/assets/whatsapp.png'
import logo5 from '../../../public/assets/telegram.png'
import logo6 from '../../../public/assets/gmail.png'

const BlogAndService = () => {
    return (
        <div className='md:flex gap-x-10 my-10'>
            <div className='md:w-1/2'>
                <h1 className='text-4xl font-medium text-primary mb-5' data-aos="fade-right">Blogs</h1>
                <p data-aos="fade-right">I document my professional experiences and share insights on a wide range of topics, including AI, technology, psychoanalysis, and investment. I write in Bengali.</p>
                <button className='bg-primary text-white px-4 py-2 mt-5 rounded-md hover:opacity-90 ease-in-out duration-200' data-aos="fade-right">Visit My Blog</button>
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <h1 className='text-4xl font-medium text-primary mb-5' data-aos="fade-left">Buy my service</h1>
                <p data-aos="fade-left">You can purchase my services via direct message or through the marketplace</p>
                <div className='flex flex-wrap justify-center md:justify-start gap-x-5 my-5' data-aos="fade-left">
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo1} alt='fiverr' />
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo2} alt='upwork' />
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo3} alt='freelancer' />
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo4} alt='whatsapp' />
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo5} alt='telegram' />
                    <Image className='md:h-16 md:w-16 h-12 w-12' src={logo6} alt='gmail' />
                </div>
            </div>
        </div>
    );
};

export default BlogAndService;