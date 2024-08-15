import Image from 'next/image';
import React from 'react';
import certificate from '../../../public/assets/udemy.png'
import Link from 'next/link';

const Certification = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-primary text-4xl mb-10'>Certifications</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <Link href='https://www.udemy.com/certificate/UC-f4b0c531-d110-457b-9195-cc63e0d6eb62/' target='_blank' className='shadow-lg ring-1 rounded-md ring-slate-50'>
                    <Image src={certificate} alt='udemy' placeholder='blur' quality={100} className='rounded-md' />
                    <h1 className='text-center my-2 text-xl font-semibold text-gray-500 hover:text-primary'>Master HTML and CSS</h1>
                </Link>
                <Link href='https://www.udemy.com/certificate/UC-2fe468a3-c59c-49eb-aa96-4afea8b8896c/' target='_blank' className='shadow-lg ring-1 rounded-md ring-slate-50'>
                    <Image src={certificate} alt='udemy' placeholder='blur' quality={100} className='rounded-md' />
                    <h1 className='text-center my-2 text-xl font-semibold text-gray-500 hover:text-primary'>Master Git and Github</h1>
                </Link>
            </div>
        </div>
    );
};

export default Certification;