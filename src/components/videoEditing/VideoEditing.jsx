import Image from 'next/image';
import React from 'react';

const VideoEditing = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl text-primary font-semibold text-center'>What I Do ?</h1>
            <div className='flex items-center justify-between mt-8'>
                <div className='w-1/2'>
                    <Image src='' alt='video' />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-4xl font-medium mb-5'>Video Editing</h1>
                    <p className='text-lg'>I specialize in transforming raw footage into polished, engaging videos using Adobe Premiere
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