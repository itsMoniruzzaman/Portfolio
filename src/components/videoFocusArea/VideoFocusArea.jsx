import Image from 'next/image';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import icons from '../../../public/assets/icons.png'
import AnimationComponent from '../animation/AnimationComponent';

const VideoFocusArea = () => {
    return (
        <div className='my-10'>
            <div className='md:flex items-start justify-center'>
                <div className='md:w-1/2' data-aos="fade-down-right">
                    <h1 className='md:text-4xl text-3xl mb-5 text-start'>Editing Focus Areas</h1>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>YouTube & others social media content</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>Travel films & Documentary</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>Storytelling & Storyhead</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>Motion graphics & Infographic content</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>Shorts (any platform)</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>Promtional Content</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='md:text-2xl text-lg w-11/12'>And more</p>
                    </div>
                </div>
                <div className='md:w-1/2 mt-10 md:mt-0' data-aos="fade-down-left">
                    <h1 className='md:text-4xl text-3xl mb-5 text-center md:text-start'>Software I Use</h1>
                    <Image src={icons} alt='icons' placeholder='blur' quality={100} className='md:w-3/5' />
                </div>
                <AnimationComponent />
            </div>
        </div>
    );
};

export default VideoFocusArea;