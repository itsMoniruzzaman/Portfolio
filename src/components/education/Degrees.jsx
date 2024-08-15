import Image from 'next/image';
import React from 'react';
import spiLogo from '../../../public/assets/spiLogo.png'
import { IoIosFlash } from "react-icons/io";

const Degrees = () => {
    return (
        <div className='my-20'>
            <h1 className='text-primary text-4xl text-center'>Degrees Received</h1>
            <div className='ring-1 rounded-md'>
                <div className='bg-slate-200 flex justify-between rounded-t my-10 p-5'>
                    <Image src={spiLogo} alt='spilogo' className='w-36 h-36' />
                    <div>
                        <h1 className='text-3xl font-medium text-primary'>Sylhet Polytechnic Institute</h1>
                        <p className='text-xl font-medium mt-2'>Diploma in Mechanical Engineering</p>
                    </div>
                    <p>June 2017 - June 2021</p>
                </div>
                <div className='flex items-start gap-2 mb-5'>
                    <IoIosFlash className='text-2xl text-yellow-600' />
                    <p className='text-2xl w-11/12'>I completed an internship at National Tube Limited in Bangladesh, where I gained experience in the manufacturing of API, GI, and MS pipes.</p>
                </div>
                <div className='flex items-start gap-2 mb-5'>
                    <IoIosFlash className='text-2xl text-yellow-600' />
                    <p className='text-2xl w-11/12'>Utilized various machines, including CNC, lathe, and milling, during my academic session</p>
                </div>
                <div className='flex items-start gap-2 mb-5'>
                    <IoIosFlash className='text-2xl text-yellow-600' />
                    <p className='text-2xl w-11/12'>Developed and improved technical skills through hands-on workshops and practical lab sessions</p>
                </div>

                <div className='flex justify-end pb-5 mr-5'>
                    <button className='bg-primary text-white px-4 py-2 mt-5 rounded-md hover:opacity-90 ease-in-out duration-200'>Visit Website</button>
                </div>
            </div>
        </div>
    );
};

export default Degrees;