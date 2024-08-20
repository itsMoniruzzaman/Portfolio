import Image from 'next/image';
import React from 'react';
import logo1 from '../../../public/assets/Python logo.png'
import logo2 from '../../../public/assets/PyTorch logo.png'
import logo3 from '../../../public/assets/Seaborn logo.png'
import logo4 from '../../../public/assets/Sklearn logo.png'
import logo5 from '../../../public/assets/Tensorflow logo.png'
import image from '../../../public/assets/03.png'
import AnimationComponent from '../animation/AnimationComponent';

const DataScience = () => {
    return (
        <div className='md:flex flex-row-reverse items-center justify-between my-10'>
            <div className='md:w-1/2 mt-10 md:mt-0' data-aos="fade-up-right">
                <h1 className='md:text-4xl text-3xl font-medium mb-5 text-primary'>Data Science, ML & AI</h1>
                <div className='flex flex-wrap gap-5 my-5'>
                    <Image className='md:h-16 md:w-16 h-10 w-10' src={logo1} alt='python' />
                    <Image className='md:h-16 md:w-48 h-10 w-32' src={logo2} alt='pytorch' />
                    <Image className='md:h-16 md:w-16 h-10 w-10' src={logo3} alt='seaborn' />
                    <Image className='md:h-16 md:w-16 h-10 w-10' src={logo4} alt='sklearn' />
                    <Image className='md:h-16 md:w-16 h-10 w-10' src={logo5} alt='tensorflow' />
                </div>
                <p className='text-lg'>Currently exploring data science and machine learning as a learner. Passionate about gaining practical skills and understanding in these fields.</p>
            </div>
            <div className='md:w-1/2' data-aos="fade-up-left">
                <Image className='md:h-96 md:w-4/5' src={image} alt='video' />
            </div>
            <AnimationComponent/>
        </div>
    );
};

export default DataScience;