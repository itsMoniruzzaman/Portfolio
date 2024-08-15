import Image from 'next/image';
import React from 'react';
import image from '../../../public/assets/02.png'

const VideoEditing = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-primary font-semibold text-center'>What I Do ?</h1>
            <div className='md:flex items-center justify-between mt-8'>
                <div className='md:w-1/2'>
                    <Image src={image} alt='video' placeholder='blur' quality={100} className='md:w-4/5' />
                </div>
                <div className='md:w-1/2 mt-10 md:mt-0'>
                    <h1 className='md:text-4xl text-3xl font-medium mb-5'>Video Editing</h1>
                    <p className='md:text-lg'>I specialize in transforming raw footage into polished, engaging videos using Adobe Premiere
                        Pro, After Effects, DaVinci Resolve, CapCut, Adobe Illustrator, and Adobe Photoshop. My
                        expertise includes trendy editing techniques and audience-hooking psychology, ensuring
                        eye-catching results that captivate viewers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoEditing;