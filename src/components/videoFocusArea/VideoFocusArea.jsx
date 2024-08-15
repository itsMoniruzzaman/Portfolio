import Image from 'next/image';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import icons from '../../../public/assets/icons.png'

const VideoFocusArea = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl mb-5 text-center'>Editing Focus Areas</h1>
            <div className='flex items-start justify-center'>
                <div className='w-1/2'>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>Shorts ( YouTube, Facebook & Tiktok)</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>Promotional videos</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>Travel films & Documentary</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>Motion graphics & Infographic content</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>YouTube & others social media content</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>Storytelling & Storyhead</p>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <FaCircleCheck className='text-2xl text-green-600' />
                        <p className='text-2xl'>And more</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <Image src={icons} alt='icons' placeholder='blur' quality={100} />
                </div>
            </div>
        </div>
    );
};

export default VideoFocusArea;